

const tarea=document.getElementById("tarea")
const agregar=document.getElementById("agregar")
const palabra=document.getElementById("palabra")
const contenedor=document.getElementById("contenedor")
let listarea=[]
const contenedorT=document.getElementById("")



agregar.addEventListener("click",function() {
    
    let task=tarea.value
    let ptarea=document.createElement("p")
    ptarea.innerHTML=task
    ptarea.id="parrafoT"

    
    listarea.push(task)
    console.log(listarea);
    contenedor.appendChild(ptarea)
    localStorage.setItem("task",JSON.stringify(listarea))
  
})
let taskob= JSON.parse(localStorage.getItem("task"))
palabra.innerHTML=taskob


