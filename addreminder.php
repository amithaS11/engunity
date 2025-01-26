<?php
// Set headers to allow CORS (Cross-Origin Resource Sharing) if needed
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json");

// Read JSON input from the POST request
$inputData = json_decode(file_get_contents('php://input'), true);

// Check if the data is valid
if (isset($inputData['subjectName'], $inputData['startTime'], $inputData['day'])) {
    $subjectName = $inputData['subjectName'];
    $startTime = $inputData['startTime'];
    $day = $inputData['day'];

    // Here, you would add code to save the reminder in the database or file system.
    // For now, we're just going to echo the data back.
    
    // Example: save to a database (you'd replace this with your actual database code)
    /*
    $conn = new mysqli('localhost', 'username', 'password', 'database');
    if ($conn->connect_error) {
        die("Connection failed: " . $conn->connect_error);
    }
    $stmt = $conn->prepare("INSERT INTO reminders (subject_name, start_time, day) VALUES (?, ?, ?)");
    $stmt->bind_param("sss", $subjectName, $startTime, $day);
    $stmt->execute();
    $stmt->close();
    $conn->close();
    */

    // Send a success response
    echo json_encode(['success' => true, 'message' => 'Reminder scheduled successfully']);
} else {
    // If data is missing, send an error response
    echo json_encode(['success' => false, 'error' => 'Missing required fields']);
}
?>
