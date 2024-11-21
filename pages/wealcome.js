
const wealcome = document.getElementById('wealcome');
let username = localStorage.getItem('username');

wealcome.innerHTML = `Wealcome ${username == null ? window.location.href = 'http://127.0.0.1:5500/login.html' : username}`;
