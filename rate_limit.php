<?php
class RateLimiter {
    private $redis;
    private $limit;
    private $window;
    
    public function __construct($host = '127.0.0.1', $port = 6379, $limit = 100, $window = 60) {
        $this->redis = new Redis();
        $this->redis->connect($host, $port);
        $this->limit = $limit;
        $this->window = $window;
    }
    
    public function checkRateLimit($ip) {
        $key = "rate_limit:$ip";
        
        $current = $this->redis->get($key);
        if ($current === false) {
            $this->redis->setex($key, $this->window, 1);
            return true;
        }
        
        if ($current >= $this->limit) {
            return false;
        }
        
        $this->redis->incr($key);
        return true;
    }
}

// Usage example:
// $rateLimiter = new RateLimiter();
// if (!$rateLimiter->checkRateLimit($_SERVER['REMOTE_ADDR'])) {
//     header('HTTP/1.1 429 Too Many Requests');
//     die('Rate limit exceeded. Please try again later.');
// }
?>