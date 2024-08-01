
function ingresar() {
    const username=document.getElementById("username").value;
    const password=document.getElementById("password").value;
    console.log(username,password);

    if (username == "carlos" && password == "1234") {
        window.location.href= "tarea.html"
        
    }else{

        alert("Parece que te equivocaste, por favor intentalo de nuevo!!!")
    }



}