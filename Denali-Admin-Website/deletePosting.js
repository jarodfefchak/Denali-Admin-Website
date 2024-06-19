// deletePosting.js

function submitForm() {
    // Get the job title from user input
    let title = document.getElementById('jobTitle').value;

    // Make a DELETE request to the server
    fetch('http://localhost:3000/deleteJob', {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ title: title }),
    })
    .then(response => response.text())
    .then(data => {
        console.log(data);
        alert(data); // Show a popup message to the user
    })
    .catch((error) => {
        console.error('Error:', error);
        alert('Error: ' + error); // Show a popup message to the user
    });
}

function returnToIndex() {
    // Redirect to the home page
    window.location.href = 'index.html';
}
