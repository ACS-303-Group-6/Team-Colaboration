<?php
// Error reporting and display errors for debugging
error_reporting(E_ALL);
ini_set('display_errors', 1);

// Check if form is submitted
if(isset($_POST['txtemail'], $_POST['txtpassword'], $_POST['txtcompany'])) {
    // Establish database connection
    $con = mysqli_connect('localhost', 'root', '', 'db_login');

    // Check connection
    if (mysqli_connect_errno()) {
        echo "Failed to connect to MySQL: " . mysqli_connect_error();
        exit();
    }

    // Get form data
    $txtemail = $_POST['txtemail'];
    $txtpassword = $_POST['txtpassword'];
    $txtcompany = $_POST['txtcompany'];

    // Prepare SQL statement to insert data (using prepared statement)
    $sql = "INSERT INTO `tbl_login` (`email`, `password`, `company`) VALUES (?, ?, ?)";

    // Create a prepared statement
    if ($stmt = mysqli_prepare($con, $sql)) {
        // Bind parameters to the prepared statement
        mysqli_stmt_bind_param($stmt, "sss", $txtemail, $txtpassword, $txtcompany);

        // Execute the prepared statement
        if(mysqli_stmt_execute($stmt)) {
            // Redirect user to home page using JavaScript
            echo "<script>window.location.href = 'home.html';</script>";
            exit;
        } else {
            echo "Error: " . mysqli_stmt_error($stmt);
        }

        // Close statement
        mysqli_stmt_close($stmt);
    } else {
        echo "Error: " . mysqli_error($con);
    }

    // Close connection
    mysqli_close($con);
} else {
    echo "Form not submitted properly";
}
?>
