//Agrupado las funciones de la ui

import { LoadMessage, saveMessage , newMessage} from "./sockets.js";

let Namee = document.getElementById('name')
let Last = document.getElementById('Last')
let Age = document.getElementById('age')
let nickname = document.getElementById('nick')
let Avatar = document.getElementById('avatar')
let email = document.getElementById('Gmail')
let mensaje = document.getElementById('mensaje')

let Login = document.getElementById('Login')

//Nombre de bienvenida
export function NombreLog(){
    fetch('http://localhost:8089/DataUser')
  .then((response) => response.json())
  .then((data) => Login.innerHTML= ` <h1> Bienvenido ${data.Nombre} </h1>`);
}


let Name = document.getElementById('Name')
let price = document.getElementById('price')
let img = document.getElementById('img')

//Tabla de productos
let btnIng = document.getElementById('submit')
btnIng.addEventListener('click', () => {
    socket.emit('newProduct', {
        name: Name.value,
        price: price.value,
        img: img.value

    })
})

//chat en vivo
export const onHandlerSubmit = (e) => {
    e.preventDefault()
    const message = {
        Mensajes: mensaje.value,
        author: {
            id: email.value,
            Name: Namee.value,
            LastName: Last.value,
            age: Age.value,
            nick: nickname.value,
            avatar: Avatar.value
        }}
   saveMessage(message)
   newMessage();
}