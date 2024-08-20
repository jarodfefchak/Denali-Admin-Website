function addField(fieldName) {
    var container = document.getElementById(fieldName);
    var fieldContainer = document.createElement("div");
    fieldContainer.className = "field-container";

    var input = document.createElement("textarea");
    input.name = fieldName;
    input.maxLength = fieldName === 'description' ? 1000 : 300;
    fieldContainer.appendChild(input);

    var removeButton = document.createElement("button");
    removeButton.innerHTML = "Remove";
    removeButton.onclick = function(e) {
        e.preventDefault();
        container.removeChild(fieldContainer);
    };
    fieldContainer.appendChild(removeButton);

    container.appendChild(fieldContainer);
}

function submitForm() {
    const jobTitle = document.getElementById('jobTitle').value;
    const location = document.getElementById('location').value;
    const description = document.getElementById('description').value;
    const requirements = Array.from(document.querySelectorAll('#requirements textarea')).map(ta => ta.value);
    const assets = Array.from(document.querySelectorAll('#assets textarea')).map(ta => ta.value);
    const why = Array.from(document.querySelectorAll('#Why textarea')).map(ta => ta.value);
    const benefits = Array.from(document.querySelectorAll('#benefits textarea')).map(ta => ta.value);

    const newJob = {
        title: jobTitle,
        location: location,
        description: description,
        minimum_requirements: requirements,
        responsibilities: assets,
        preferred: why,
        benefits: benefits
    };

    fetch('http://localhost:3001/addJob', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(newJob)
    })
    .then(response => {
        if (!response.ok) {
            return response.text().then(text => { throw new Error(text); });
        }
        return response.text();
    })
    .then(data => {
        alert(data);
    })
    .catch(error => {
        console.error('Error:', error);
        alert(`Error: ${error.message}`);
    });
}


function returnToIndex() {
    window.location.href = "index.html";
}
