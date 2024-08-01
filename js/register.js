  
  const register=document.querySelector("#register")

  register.addEventListener("submit",(e)=>{
e.preventDefault()

const usuario= document.querySelector("#usuario").value
const password= document.querySelector("#password").value
const users = JSON.parse(localStorage.getItem("users")) || []
const isusersRegister= users.find(users => users.usuario === usuario)
if (isusersRegister) {
    return alert("El usuario esta registrado!!!")
}
users.push({usuario: usuario,password: password})
localStorage.setItem("users",JSON.stringify(users))
window.location.href="login.html"
  })




  