// for login js
let loginAdmin = document.getElementById('loginAdmin')
let loginBasic = document.getElementById('loginBasic')
let display = document.getElementById('display')
let buttonLogout = document.getElementById('Logout')

buttonLogout.style.display = "none"
loginAdmin.style.display = "none";
loginBasic.style.display = "none";

// function check
function onCheck(){
    let storeUsername = localStorage.getItem('inputUsername')
    let storePassword = localStorage.getItem('inputPassword')
    let username = document.getElementById('typeUsername')
    let password = document.getElementById('typePassword')
    
    if(username.value == storeUsername && password.value == storePassword){
        // alert('Anda Login')
        display.style.display = "none"
        loginAdmin.style.display = "block"
        loginBasic.style.display = "none"
        buttonLogout.style.display = "block"
    }else{
        alert('Silahkan cek Username Password Anda')
    }
}
function onLogout() {
    localStorage.clear()
    location.reload()
}
// for register
function addAcount() {
    let inputUsername = document.getElementById('inputUsername')
    let inputPassword = document.getElementById('inputPassword')
    localStorage.setItem('inputUsername', inputUsername.value)
    localStorage.setItem('inputPassword', inputPassword.value)
    if (inputUsername.value == '') {
        alert('Username Tidak Boleh Kosong')
        localStorage.clear()
    } else if (inputPassword.value == '') {
        alert('Password Tidak Boleh Kosong')
    } else {
        alert('Data Berhasil Input Silahkan klik Back')
    }
}