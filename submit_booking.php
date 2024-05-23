<?php
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "movie_booking";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Get form data
$movie = $_POST['movie'];
$name = $_POST['name'];
$phone = $_POST['phone'];
$date = $_POST['date'];
$time = $_POST['time'];
$seats = $_POST['seats'];
$total_price = $_POST['total_price'];

// Prepare and bind
$stmt = $conn->prepare("INSERT INTO bookings (movie, name, phone, date, time, seats, total_price) VALUES (?, ?, ?, ?, ?, ?, ?)");
$stmt->bind_param("ssssssd", $movie, $name, $phone, $date, $time, $seats, $total_price);

$stmt->execute();

$stmt->close();
$conn->close();
?>