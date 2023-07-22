let arrUser = JSON.parse(localStorage.getItem('arrUser'))

function register() {
    let username = document.getElementById('username').value
    let password = document.getElementById('password').value
    let email = document.getElementById('email').value
    arrUser.push(new User(username, email, password))
    localStorage.setItem('arrUser',JSON.stringify(arrUser))
}

function login() {
    let username = document.getElementById('username_login').value
    let password = document.getElementById('password_login').value
    for (let i = 0; i < arrUser.length; i++) {
        if (arrUser[i].username === username && arrUser[i].password === password) {
              localStorage.setItem('username', username)
        }
    }
}

function check() {
    console.log(localStorage.getItem('username'));
    if (localStorage.getItem('username') !== null) {
        document.getElementById('request').style.display = 'block'
    }
}

function logout() {
    localStorage.clear()
}