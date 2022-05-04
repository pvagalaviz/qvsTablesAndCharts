<?php
$servername = "localhost";
$username = "root";
$password = "root";
$dbname = "PuntoVenta";

// Create connection
$cnn = new mysqli($servername, $username, $password, $dbname);
// Check connection
if ($cnn->connect_error) {
  die("Connection failed: " . $conn->connect_error);
}
