<?php
session_start();
include 'connect.php'; // Include the database connection

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $user_id = $_SESSION['user_id'];  // Assuming user_id is stored in the session
    $user_answer = $_POST['user_answer'];
    $challenge_id = $_POST['challenge_id'];

    // Update the user's answer and mark the challenge as completed
    $stmt = $conn->prepare("INSERT INTO user_challenges (user_id, challenge_id, user_answer, is_completed) 
                            VALUES (?, ?, ?, 1)
                            ON DUPLICATE KEY UPDATE user_answer = ?, is_completed = 1");
    $stmt->bind_param("iiss", $user_id, $challenge_id, $user_answer, $user_answer);
    
    if ($stmt->execute()) {
        // Send a success response back to the front end
        echo json_encode(['success' => true]);
    } else {
        // Send an error response if something went wrong
        echo json_encode(['success' => false, 'error' => 'Error saving answer']);
    }

    $stmt->close();
}
?>