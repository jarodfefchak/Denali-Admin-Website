function submitForm() {
    // Get the job title from user input
    let title = document.getElementById('jobTitle').value;

    // Make a DELETE request to the server
    fetch('http://localhost:3001/deleteJob', {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ title: title }),
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok ' + response.statusText);
        }
        return response.text();
    })
    .then(data => {
        console.log(data);
        alert(data); // Show a popup message to the user
    })
    .catch((error) => {
        console.error('Error:', error);
        alert('Error: The Job associated with the title you just entered does not exist, Please try again.              '+"(" + error+")"); // Show a popup message to the user
    });
}

function returnToIndex() {
    // Redirect to the home page
    window.location.href = 'index.html';
}
