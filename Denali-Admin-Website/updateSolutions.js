function submitHeader() {
    const newHeading = document.getElementById('newHeading').value;

    fetch('http://localhost:3001/updateSolutionsHeading', {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ solutions: newHeading })
    })
    .then(response => response.text())
    .then(data => {
        alert(data);
    })
    .catch(error => {
        console.error('Error:', error);
    });
  
}
function submitDescription() {
    const newDescription = document.getElementById('newDescription').value;

    fetch('http://localhost:3001/updateSolutionsDescription', {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ description: newDescription })
    })
    .then(response => response.text())
    .then(data => {
        alert(data);
    })
    .catch(error => {
        console.error('Error:', error);
    });
  
}
function submitForm() {
    const solution = document.getElementById('solution').value;
    const section = document.getElementById('newName').value;
    const text = document.getElementById('newText').value;

    fetch('http://localhost:3001/updateSolution', {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ solution: solution, section: section, text: text })
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