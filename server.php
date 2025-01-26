<?php
// Enable CORS
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json");
header("Access-Control-Allow-Methods: POST, GET, DELETE");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

// Database Connection
$host = "localhost";
$user = "root"; // Default username for XAMPP
$password = ""; // Default password for XAMPP
$dbname = "http://localhost/phpmyadmin/index.php?route=/sql&pos=0&db=login&table=timetable_tracker";

$conn = new mysqli($host, $user, $password, $dbname);

if ($conn->connect_error) {
    die(json_encode(["error" => "Database connection failed: " . $conn->connect_error]));
}

// Handle Requests
$method = $_SERVER['REQUEST_METHOD'];

if ($method === "POST") {
    // Add a Task
    $subjectName = $data['subjectName'] ?? '';
    $startTime = $data['startTime'] ?? '';
    $day = $data['day'] ?? '';

    if (!empty($subjectName) && !empty($startTime) && !empty($day)) {
        $stmt = $conn->prepare("INSERT INTO tasks (subject_name, start_time, day) VALUES (?, ?, ?)");
        $stmt->bind_param("sss", $subjectName, $startTime, $day);
        if ($stmt->execute()) {
            echo json_encode(["message" => "Task added successfully"]);
        } else {
            echo json_encode(["error" => "Failed to add task"]);
        }
        $stmt->close();
    } else {
        echo json_encode(["error" => "All fields are required"]);
    }
} elseif ($method === "GET") {
    
    $result = $conn->query("SELECT * FROM tasks ORDER BY day, start_time");
    $tasks = $result->fetch_all(MYSQLI_ASSOC);
    echo json_encode($tasks);
} elseif ($method === "DELETE") {
    // Delete a Task
    $data = json_decode(file_get_contents("php://input"), true);
    $id = $data['id'] ?? 0;

    if ($id > 0) {
        $stmt = $conn->prepare("DELETE FROM tasks WHERE id = ?");
        $stmt->bind_param("i", $id);
        if ($stmt->execute()) {
            echo json_encode(["message" => "Task deleted successfully"]);
        } else {
            echo json_encode(["error" => "Failed to delete task"]);
        }
        $stmt->close();
    } else {
        echo json_encode(["error" => "Invalid task ID"]);
    }
} else {
    echo json_encode(["error" => "Unsupported request method"]);
}

$conn->close();
?>