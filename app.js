let button = document.getElementById('btn')
let personalData = {};

button.addEventListener("click", ()=>{

    personalData = {
        email: document.getElementById('input-email').value,
        password: document.getElementById('input-password').value,
    }
    
    alert(`Bienvenido, te has logueado con este mail: ${personalData.email}`)
})