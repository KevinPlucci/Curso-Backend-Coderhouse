import  path from 'path';
import { datosFalsos } from '../src/utils';
const dataUser=(req,res)=>{
    if (req.session?.Nombre) {
        const Nombre= {
            Nombre: req.session.Nombre
        }
        //Enviar todos los datos necesarios en un futuro para administrar sesion 
        res.json(Nombre)
       
         
     } else res.status(404)
   
}
const home = (req,res)=>{
    res.sendFile((path.join(__dirname,'/../src/public/index.html')))
}
const logout= ()=>{
    req.session.destroy()
    res.redirect('/home')
}
const login= (req,res)=>{
    
    if (req.session?.Nombre) {
       
       res.redirect('/home')
        
    } else
    res.sendFile((path.join(__dirname, '/../src/public/signIn.html')))
}

const signin =(req,res)=>{
    
    let {nombre}=req.body
      req.session.Nombre=nombre
      res.redirect('/home')
  }
  const Productostest = (req, res) => {
    let datos = datosFalsos();
    res.send(datos)}
export {
    home,
    signin,
    Productostest,
    login,
    logout,
    dataUser
}