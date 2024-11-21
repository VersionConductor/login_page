//Selecting all the fields
let loginButton = document.querySelector('.loginButton');
const username = document.getElementById('name');
const password = document.getElementById('password');
const errorMessage = document.getElementById('error-message');
const successMessage = document.getElementById('success-message');
const loding = document.getElementById('loding');

loginButton.onclick = function(e) {
    e.preventDefault(); //stop the form submitting
    //get the input value
    const value1 = username.value;
    const value2 = password.value;

    //checking if the value is empty or not
    if (value1 !== '' && value2 !== '') {
        handleMessage(loding, 'Lodding...');
        localStorage.setItem('username', value1);
        setTimeout(() => {
            handleMessage(successMessage, 'Login succesfully.');
            document.getElementById('loginForm').reset();
            for (let index = 0; index < 1000; index++) {
                window.location.href = 'http://127.0.0.1:5500/pages/wealcome.html';
            }
        }, 3000);
    } else {
        handleMessage(loding, 'Lodding...');
        setTimeout(() => {
            handleMessage(errorMessage, 'All fields are required ?');
        }, 3000);
    }
}

//handle the validate message
function handleMessage (messageBox, text) {
    messageBox.style.display = 'block';
    messageBox.innerHTML = text;
    loginButton.disabled = true;
    setTimeout(()=> {
        messageBox.style.display = 'none';
        loginButton.disabled = false;
    }, 3000);
}
