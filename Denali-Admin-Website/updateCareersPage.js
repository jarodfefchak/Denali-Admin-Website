function submitHeader() {
    const newHeading = document.getElementById('newHeading').value;

    fetch('http://localhost:3001/updateCareersPageHeading', {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ Careers: newHeading })
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
    const newText = document.getElementById('newText').value;

    fetch('http://localhost:3001/updateCareersPageText', {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ currentPostingstext: newText })
    })
    .then(response => response.text())
    .then(data => {
        alert(data);
    })
    .catch(error => {
        console.error('Error:', error);
    });
  
}
function submitNoCareers() {
    const newNoCareers = document.getElementById('newNoCareers').value;

    fetch('http://localhost:3001/updateNoPostingsText', {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({noPostingsText: newNoCareers })
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