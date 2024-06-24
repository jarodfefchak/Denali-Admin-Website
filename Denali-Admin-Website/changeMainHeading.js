function submitForm() {
    const newHeading = document.getElementById('newHeading').value;

    fetch('http://localhost:3001/updateHeading', {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ Main: newHeading })
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
