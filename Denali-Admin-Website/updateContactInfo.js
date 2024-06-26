function submitHeading1() {
    const newHeading = document.getElementById('newHeading').value;
    backendConnection(newHeading,'http://localhost:3001/updateContactUsHeading1' )
}
function submitHeading2() {
    const newSubHeading = document.getElementById('newSubHeading').value;
    backendConnection(newSubHeading,'http://localhost:3001/updateContactUsHeading2' )
}

function submitEmail() {
    const newSection1 = document.getElementById('newSection1').value;
    backendConnection(newSection1,'http://localhost:3001/updateContactUsEmail' )
}

function submitPhone() {
    const newSection2 = document.getElementById('newSection2').value;
    backendConnection(newSection2,'http://localhost:3001/updateContactUsPhone' )
}

function submitAddress() {
    const newSection3 = document.getElementById('newSection3').value;
    backendConnection(newSection3,'http://localhost:3001/updateContactUsAddress' )
}
function submitCity() {
    const newSection4 = document.getElementById('newSection4').value;
    backendConnection(newSection4,'http://localhost:3001/updateContactUsCity')
}


function backendConnection(value, endpoint){
    fetch(endpoint, { 
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ ContactUs: value }) 
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