// src/pages/LoginPage.jsx
import React, { useState, useEffect } from 'react';
import { useAuth } from '../context/AuthContext'; // 1. Import the useAuth hook
import { Link, useNavigate, useLocation } from 'react-router-dom';

const LoginPage = () => {
  const { setUser } = useAuth(); // 2. Get setUser from the AuthContext
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const [errors, setErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (location.state?.message) {
      setSuccessMessage(location.state.message);
      // Clear the location state to prevent the message from re-appearing on navigation
      window.history.replaceState({}, document.title)
    }
  }, [location.state]);

  const validate = () => {
    const newErrors = {};
    
    if (!email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      newErrors.email = 'Invalid email address';
    }
    
    if (!password) {
      newErrors.password = 'Password is required';
    }
    
    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newErrors = validate();

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setLoading(true);
    setErrors({});

    const apiUrl = process.env.REACT_APP_API_URL || '';

    try {
      const response = await fetch(`${apiUrl}/api/auth/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        credentials: 'include',
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json().catch(() => {
        throw new Error(`Server returned a non-JSON response (Status: ${response.status})`);
      });

      if (response.ok && data.success) {
        setUser(data.user); // 3. This will now work correctly
        navigate('/'); // Redirect to homepage on successful login
      } else {
        setErrors({ api: data.message || 'Login failed. Please try again.' });
      }
    } catch (error) {
      setErrors({ api: error.message || 'An unexpected error occurred. Please try again.' });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="auth-page">
      <div className="auth-container">
        <div className="auth-header">
          <div className="logo">
            <div className="logo-icon"></div>
            <span>AeroSwift</span>
          </div>
          <h2>Welcome back!</h2>
          <p>Sign in to access your bookings and manage your account</p>
        </div>

        <form onSubmit={handleSubmit} className="auth-form">
          {errors.api && <div className="alert alert-danger">{errors.api}</div>}
          {successMessage && !errors.api && <div className="alert alert-success">{successMessage}</div>}
          <div className="form-group">
            <label htmlFor="email">Email Address</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className={errors.email ? 'error' : ''}
            />
            {errors.email && <div className="error-message">{errors.email}</div>}
          </div>

          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              className={errors.password ? 'error' : ''}
            />
            {errors.password && <div className="error-message">{errors.password}</div>}
          </div>

          <div className="form-options">
            <div className="remember-me">
              <input
                type="checkbox"
                id="rememberMe"
                checked={rememberMe}
                onChange={() => setRememberMe(!rememberMe)}
              />
              <label htmlFor="rememberMe">Remember me</label>
            </div>
            <Link to="/forgot-password" className="forgot-password">
              Forgot password?
            </Link>
          </div>

          <button 
            type="submit" 
            className="btn btn-primary btn-block"
            disabled={loading}
          >
            {loading ? (
              <div className="spinner"></div>
            ) : 'Sign In'}
          </button>

          <div className="divider">
            <span>or continue with</span>
          </div>

          <div className="social-login">
            <button type="button" className="btn-social google">
              <div className="social-icon">G</div>
              Google
            </button>
            <button type="button" className="btn-social facebook">
              <div className="social-icon">f</div>
              Facebook
            </button>
          </div>

          <div className="auth-footer">
            <p>
              Don't have an account? <Link to="/signup">Sign up</Link>
            </p>
          </div>
        </form>
      </div>
      
      <div className="auth-image">
        <div className="image-overlay">
          <h3>Experience Seamless Travel</h3>
          <p>Join millions of travelers who book with confidence</p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;