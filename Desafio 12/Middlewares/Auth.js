import  path from 'path';
const Auth = (req, res, next) => {
   
    if (req.session?.Nombre) {
        next();
    } else { res.redirect('/login') }
}
export default Auth