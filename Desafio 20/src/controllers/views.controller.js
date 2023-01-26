import {ROUTES} from '../constants/routes.js'



const home = (req,res) =>{
  const routes = ROUTES[req.user.role]
  res.render('home',{
    user: req.user,
    routes: routes
  });
}

const register = (req,res) =>{
  res.render('register');
}

const login = (req,res) =>{
  res.render('login');
}

const loginfail = (req,res) =>{
  res.render('loginFail');
}

const registerfail = (req,res) =>{
  res.render('registerFail');
}

const productsAdd = (req,res) =>{
  res.render('productsAdd');
}


export default {
  home,
  login,
  loginfail,
  productsAdd,
  register,
  registerfail
}