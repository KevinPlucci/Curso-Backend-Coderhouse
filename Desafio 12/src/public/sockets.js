const socket = io()

// socket.on('productos', async productos=>{
//     const html= await obtenerPlantilla(productos)
//     document.getElementById('productos').innerHTML=html
// })
let chat = document.getElementById('chat')
export const LoadMessage = () => {
    socket.on('chatMessage', async dato => {
        let html
        chat.innerHTML=''
        dato.forEach(x => {
            html = `<p>
            <strong>${x.author.nick}</strong>[${x.Fecha}]: ${x.Mensajes}
            </p>`
            chat.innerHTML += html

        })

    })






}
export const saveMessage = (Message) => {
    socket.emit('newMessage', Message)
}
export const newMessage = (message) => {
    socket.on('NewMessage', (data) => { console.log(mensajer); })
}