function submitForm() {
    const solution = document.getElementById('solution').value;
    const section = document.getElementById('section').value;
    const name = document.getElementById('name').value;
    const client = document.getElementById('client').value;
    const location = document.getElementById('location').value;
    const description = document.getElementById('description').value;
    
    const newPost = {
        section: section,
        project: name,
        client: client,
        location: location,
        description: description
    };

    fetch('http://localhost:3001/addSolution', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ solution: solution, newPost: newPost })
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