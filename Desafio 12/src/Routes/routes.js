import { Router } from 'express';

import express from 'express'
import  path from 'path';
import Auth from '../../Middlewares/Auth';
import { dataUser, home, login, logout, Productostest, signin } from '../../Controller/Controller.js';
import Info from '../../Controller/Info';
const router = Router();

router.use(express.static(path.join(__dirname, '../public')));


router.get('/login',login)
router.get('/home',Auth , home)
router.post('/sign',signin)
router.get('/api/productos-test',Productostest);
router.get('/info', Info)
router.get('/DataUser',dataUser)
router.get('/LogOut', logout)
// router.get('/api/randoms', (req, res) => {
// 	const forked = fork('./controllers/randoms.js');

// 	let { cantidad } = req.query;
// 	let obj = {};
// 	cantidad
// 		? forked.send({ cantidad, obj })
// 		: forked.send({ cantidad: 500000000, obj });
// 	forked.on('message', msg => res.json(msg));
// });


export default router