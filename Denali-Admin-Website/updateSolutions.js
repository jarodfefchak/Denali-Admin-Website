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