//ejecucion de todo en su conjunto
import { LoadMessage } from "./sockets.js";
import { NombreLog, onHandlerSubmit } from "./UI.js";
let btn = document.getElementById('envio')

LoadMessage();
NombreLog();



function obtenerPlantilla(productos) {
    return fetch('plantillas/tabla-productos.hbs')
        .then(response => response.text())
        .then(plantilla => {
            const plantillaHBS = Handlebars.compile(plantilla)
            const htmlCompleto = plantillaHBS({ productos })
            return htmlCompleto
        })
}

btn.addEventListener('click',onHandlerSubmit)

//Productos con faker
fetch('http://localhost:8089/api/productos-test')

    .then(response => response.json())
    .then(async json => {
        console.log(json);
        const html = await obtenerPlantilla(json)
        document.getElementById('productos').innerHTML = html
    })
    .catch(err => console.log('Solicitud fallida', err));



