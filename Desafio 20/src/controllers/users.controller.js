import { usersService } from "../services/index.js";
import UserDTO from '../DTOs/userDTO.js'


const getUsers = async (req, res) => {
  let result = await usersService.getUsers();
  const users = result.map(user=> new UserDTO(user))
  console.log(users)
  res.send({status:"success", payload:users});

}


const getUsersById = async (req, res) => {
  const {uid} = req.params;
  let user  = await usersService.getUserById();
  if(!user) return  res.status(400).send({status:"error",error:'Usuario no encontrado'});
}





export default{
  getUsers,
  getUsersById,

}