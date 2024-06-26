function submitForm() {
    // Get the job title from user input
    let project = document.getElementById('project').value;
    let solution = document.getElementById('solution').value;

    // Make a DELETE request to the server
    fetch('http://localhost:3001/deleteSolution', {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({solution: solution, project: project }),
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
    // Redirect to index.html page
    window.location.href = "index.html";
}