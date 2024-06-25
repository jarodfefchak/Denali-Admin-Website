function submitHeading() {
    const newHeading = document.getElementById('newHeading').value;
    fetch('http://localhost:3001/updateResultsHeading', { // Fixed endpoint typo
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ results: newHeading }) // Fixed key from "solutions" to "inside"
    })
    .then(response => response.text())
    .then(data => {
        alert(data);
    })
    .catch(error => {
        console.error('Error:', error);
    });
}

function submitNumber() {
    const selectedResultIndex = document.getElementById('result').value;
    const newNumber = document.getElementById('newNumber').value;

    fetch('http://localhost:3001/updateResultsNumber', {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ index: selectedResultIndex, newNumber: newNumber })
    })
    .then(response => response.text())
    .then(data => {
        alert(data);
    })
    .catch(error => {
        console.error('Error:', error);
    });
}
function submitCategory() {
    const selectedResultIndex = document.getElementById('result').value;
    const newCategory = document.getElementById('newCategory').value;

    fetch('http://localhost:3001/updateResultsCategory', {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ index: selectedResultIndex, newCategory: newCategory })
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
    // Redirect to index.html page
    window.location.href = "index.html";
}