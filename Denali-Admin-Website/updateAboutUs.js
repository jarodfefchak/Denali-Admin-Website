function submitFormHeading() {
    const newHeading = document.getElementById('newHeading').value;
    backendConnection(newHeading,'http://localhost:3001/updateAboutUsHeading' )
}
function submitFormSubHeading() {
    const newSubHeading = document.getElementById('newSubHeading').value;
    backendConnection(newSubHeading,'http://localhost:3001/updateAboutUsSubHeading' )
}

function submitSection1() {
    const newSection1 = document.getElementById('newSection1').value;
    backendConnection(newSection1,'http://localhost:3001/updateAboutUsSection1' )
}

function submitSection2() {
    const newSection2 = document.getElementById('newSection2').value;
    backendConnection(newSection2,'http://localhost:3001/updateAboutUsSection2' )
}

function submitSection3() {
    const newSection3 = document.getElementById('newSection3').value;
    backendConnection(newSection3,'http://localhost:3001/updateAboutUsSection3' )
}
function submitSection4() {
    const newSection4 = document.getElementById('newSection4').value;
    backendConnection(newSection4,'http://localhost:3001/updateAboutUsSection4' )
}


function backendConnection(value, endpoint){
    fetch(endpoint, { 
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ AboutUs: value }) 
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