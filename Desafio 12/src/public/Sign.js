let nombre = document.getElementById('nom');
let envio = document.getElementById('btn')

const url = 'http://localhost:8089/sign';


//informacion para la bienvenida

const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(nombre.value);
try {
     const respon= await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify( {nombre: nombre.value})
         
        
        
      })
      if (respon.ok) {
        location.reload();
      }
} catch (error) {
 
  console.log(error);
  
}
    
}
envio.addEventListener('click', handleSubmit)