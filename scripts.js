document.getElementById('doneButton').addEventListener('click', addSkill);

function addSkill() {
    const subjectName = document.getElementById('subjectName').value;
    const startTime = document.getElementById('StartTime').value;
    const day = document.getElementById('days').value;

    if (!subjectName || !startTime || !day) {
        showBrowserNotification('Please fill all fields!');
        return;
    }

    const tableBody = document.getElementById('taskTableBody');
    const newRow = tableBody.insertRow();
    newRow.innerHTML = `
        <td>${subjectName}</td>
        <td>${startTime}</td>
        <td>${day}</td>
        <td><button onclick="deleteRow(this)">Delete</button></td>
    `;

    document.getElementById('subjectName').value = '';
    document.getElementById('StartTime').value = '';
    showNotification('Timetable entry added successfully!');
    sendReminderToBackend(subjectName, startTime, day);
}

function showNotification(message) {
    const notificationElement = document.getElementById('notification');
    notificationElement.innerHTML = message;
    notificationElement.style.display = 'block';
    setTimeout(() => {
        notificationElement.style.display = 'none';
    }, 3000);
}

function sendReminderToBackend(subjectName, startTime, day) {
    fetch('http://localhost:55000/addReminder', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ subjectName, startTime, day }),
    })
        .then((response) => {
            if (response.ok) {
                console.log('Reminder scheduled successfully on the backend.');
            } else {
                console.error('Failed to schedule reminder:', response.statusText);
                showBrowserNotification('Failed to schedule reminder. Check backend.');
            }
        })
        .catch((error) => {
            console.error('Error connecting to backend:', error);
            showBrowserNotification('Error connecting to backend.');
        });
}

function showBrowserNotification(message) {
    if (!("Notification" in window)) {
        alert("This browser does not support notifications.");
    } else if (Notification.permission === "granted") {
        new Notification(message);
    } else if (Notification.permission !== "denied") {
        Notification.requestPermission().then((permission) => {
            if (permission === "granted") {
                new Notification(message);
            }
        });
    }
}

function deleteRow(button) {
    const row = button.parentElement.parentElement; 
    row.remove();
}