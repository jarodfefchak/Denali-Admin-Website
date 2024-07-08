function submitForm() {
    const accreditation = document.getElementById('accreditation').value;

    fetch('http://localhost:3001/deleteAccreditation', {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ accreditation: accreditation })
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