function addAccreditation() {
    const accreditation = document.getElementById('accreditation').value;

    fetch('http://localhost:3001/addAccreditation', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ accreditation: accreditation })
    })
    .then(response => response.text())
    .then(data => {
        alert(data); // Show success message to the user
    })
    .catch(error => {
        console.error('Error:', error);
    });
}


function returnToIndex() {
    window.location.href = "index.html";
}