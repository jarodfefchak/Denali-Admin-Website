function submitText() {
    const newText = document.getElementById('newText').value;

    fetch('http://localhost:3001/updateApplyText', {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ applyText: newText })
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