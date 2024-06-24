function submitFormHeading() {
    const newHeading = document.getElementById('newHeading').value;

    fetch('http://localhost:3001/updateProjectHeading', {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ projects: newHeading })
    })
    .then(response => response.text())
    .then(data => {
        alert(data);
    })
    .catch(error => {
        console.error('Error:', error);
    });
}

function submitFormSubHeadings() {
    const newSubHeading = document.getElementById('newSubHeading').value;

    fetch('http://localhost:3001/updateProjectSubHeading', {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ projects_sub: newSubHeading }) // Corrected key to projects_sub
    })
    .then(response => response.text())
    .then(data => {
        alert(data);
    })
    .catch(error => {
        console.error('Error:', error);
    });
}

// function submitForm() {
//     const projectId = document.getElementById('project').value;
//     const jobTitle = document.getElementById('jobTitle').value;
//     const description = document.getElementById('description').value;

//     fetch('http://localhost:3001/updateProject', {
//         method: 'PUT',
//         headers: {
//             'Content-Type': 'application/json'
//         },
//         body: JSON.stringify({ id: projectId, title: jobTitle, description: description })
//     })
//     .then(response => response.text())
//     .then(data => {
//         alert(data);
//     })
//     .catch(error => {
//         console.error('Error:', error);
//     });
// }

function returnToIndex() {
    window.location.href = "index.html";
}
