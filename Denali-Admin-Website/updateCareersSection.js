// Function to submit the heading
function submitHeading() {
    const newHeading = document.getElementById('newHeading').value;
    fetch('http://localhost:3001/updateHomeCareerHeading', { // Fixed endpoint typo
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ homeCareer: newHeading }) // Fixed key from "solutions" to "homeCareer"
    })
    .then(response => response.text())
    .then(data => {
        alert(data);
    })
    .catch(error => {
        console.error('Error:', error);
    });
}

// Function to submit the text
function submitText1() {
    const text = document.getElementById('description1').value;
    fetch('http://localhost:3001/updateHomeCareersText1', {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ futureTextLine1: text })
    })
    .then(response => response.text())
    .then(data => {
        alert(data);
    })
    .catch(error => {
        console.error('Error:', error);
    });
}

function submitText2() {
    const text = document.getElementById('description2').value;
    fetch('http://localhost:3001/updateHomeCareersText2', {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ futureTextLine2: text })
    })
    .then(response => response.text())
    .then(data => {
        alert(data);
    })
    .catch(error => {
        console.error('Error:', error);
    });
}

// Function to return to the index page
function returnToIndex() {
    window.location.href = "index.html";
}

