

import SQL from './clienteSQL'
import MakeTab from '../Scripts/MakeTabs'


//el creador de tablas
const maker= new MakeTab(process.env.confSQL1, process.env.confSQL3)

//Las acciones con las base de datos
const BD = new SQL(process.env.confSQL1, process.env.confSQL3)

//exporto solo este ya que es lo unico que necesita el cliente ademas de separar la capa BD
export default BD;


//Creacion de esquemas

maker.createTabMSG();
maker.createTabProd();
