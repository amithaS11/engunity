<?php
session_start();
include 'connect.php';

$today = date('Y-m-d');
$stmt = $conn->prepare("SELECT * FROM challenges WHERE challenge_date = ?");
$stmt->bind_param("s", $today);
$stmt->execute();
$result = $stmt->get_result();

if ($result->num_rows > 0) {
    while ($row = $result->fetch_assoc()) {
        $challenge_id = $row['id'] . "<br>";
        $challenge_text = $row['challenge_text'];
        $user_answer1 = $row['answer'];
    }
    $stmt_check = $conn->prepare("SELECT is_completed, user_answer FROM user_challenges WHERE user_id = ? AND challenge_id = ?");
    $stmt_check->bind_param("ii", $user_id, $challenge_id);
    $stmt_check->execute();
    $check_result = $stmt_check->get_result();
    
    if ($check_result->num_rows > 0) {
        $user_data = $check_result->fetch_assoc();
        $is_completed = $user_data['is_completed'];
       $user_answer = $user_data['user_answer'];
    } else {
        $is_completed = false;
        $user_answer = '';
    }
} else {
    echo "No challenge available for today.";
    exit();
}

$stmt->close();
$stmt_check->close();
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Daily Challenge Tracker</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            background: #f4f4f9;
            padding: 20px;
        }
        .challenge-container {
            background: white;
            border-radius: 8px;
            padding: 20px;
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
            max-width: 600px;
            margin: 0 auto;
        }
        .challenge-text {
            font-size: 1.2em;
        }
        .challenge-answer {
            margin-top: 20px;
        }
        .progress-bar {
            height: 20px;
            background: #76c893;
            width: <?= $is_completed ? '100%' : '0%' ?>;
            transition: width 0.3s;
        }
        .submit-btn {
            padding: 10px 20px;
            background: #76c893;
            color: white;
            border: none;
            cursor: pointer;
        }
        .submit-btn:disabled {
            background: #ccc;
        }
        .show-answer-btn {
            margin-top: 10px;
            background: #3498db;
            color: white;
            border: none;
            padding: 10px 20px;
            cursor: pointer;
        }
        .answer-container {
            display: none;
            background: #f4f4f9;
            padding: 10px;
            margin-top: 10px;
        }
    </style>
</head>
<body>
    <div class="challenge-container">
        <h2>Today's Challenge</h2>
        <p class="challenge-text"><?= htmlspecialchars($challenge_text) ?></p>
        
        <form id="challenge-form" method="POST">
            <textarea id="user-answer" name="user_answer" rows="5" cols="30" placeholder="Enter your answer here..." <?= $is_completed ? 'readonly' : '' ?>><?= htmlspecialchars($user_answer) ?></textarea>
            <div class="progress-bar"></div>
            
        </form>
        
        <button class="show-answer-btn" id="show-answer-btn" onclick="toggleAnswer()">Show Answer</button>
        <div class="answer-container" id="answer-container">
            <p><strong>Answer:</strong></p>
            <pre id="answer-text"><?= htmlspecialchars($user_answer1) ?></pre>
        </div>
    </div>

    <script>
        // Show/Hide answer functionality
        function toggleAnswer() {
            const answerContainer = document.getElementById('answer-container');
            const button = document.getElementById('show-answer-btn');

            if (answerContainer.style.display === "none" || answerContainer.style.display === "") {
                answerContainer.style.display = "block";
                button.textContent = "Hide Answer";
            } else {
                answerContainer.style.display = "none";
                button.textContent = "Show Answer";
            }
        }

        // Handle form submission without reloading the page
        const form = document.getElementById('challenge-form');
        form.addEventListener('submit', function (e) {
            e.preventDefault(); // Prevent page reload on form submission

            const userAnswer = document.getElementById('user-answer').value;
            const submitBtn = document.getElementById('submit-btn');

            // Disable the submit button while processing
            submitBtn.disabled = true;
            submitBtn.textContent = 'Submitting...';

            // Create a new FormData object and submit via AJAX
            const formData = new FormData();
            formData.append('user_answer', userAnswer);
            formData.append('challenge_id', '<?= $challenge_id ?>'); // Include challenge ID

            fetch('submit_answer.php', {
                method: 'POST',
                body: formData
            })
            .then(response => response.json())
            .then(data => {
                if (data.success) {
                    // Update progress bar and disable input after successful submission
                    document.querySelector('.progress-bar').style.width = '100%';
                    document.getElementById('user-answer').setAttribute('readonly', true);
                    submitBtn.disabled = true;
                    submitBtn.textContent = 'Challenge Completed';
                } else {
                    alert('Error: ' + data.error);
                    submitBtn.disabled = false;
                    submitBtn.textContent = 'Submit Answer';
                }
            })
            .catch(error => {
                console.error('Error:', error);
                submitBtn.disabled = false;
                submitBtn.textContent = 'Submit Answer';
            });
        });
    </script>
</body>
</html>
