function submitHeading() {
    const newHeading = document.getElementById('newHeading').value;
    fetch('http://localhost:3001/updateInsideDenaliHeading', { // Fixed endpoint typo
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ inside: newHeading }) // Fixed key from "solutions" to "inside"
    })
    .then(response => response.text())
    .then(data => {
        alert(data);
    })
    .catch(error => {
        console.error('Error:', error);
    });
}

function submitText() {
    const newHeading = document.getElementById('description').value;
    fetch('http://localhost:3001/updateInsideDenaliText', {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ insideText: newHeading }) // Changed key to "insideText"
    })
    .then(response => response.text())
    .then(data => {
        alert(data);
    })
    .catch(error => {
        console.error('Error:', error);
    });
}

function returnToIndex() {
    window.location.href = "index.html";
}
