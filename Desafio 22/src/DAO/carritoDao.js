import { carritoDto, carritoMap } from "../DTO/carritoDto.js";

import productoDao from "./productoDao.js";

import crypto from 'crypto'


class carritoDao{

    static async getCarritos(){
        return carritoMap
    }

    static async getCarrito({id}){
        const carrito = await carritoMap.filter((car) => car.id === id)
        if(carrito){
            return carrito[0]
        }
        return 1
    }


    static async createCarrito(){
        const id =  crypto.randomBytes(10).toString('hex');
        const timestamp = Date.now()
        try{
            var newCarrito = new carritoDto({
                id, 
                timestamp,
                productos: []
            })
        }catch(e){
            console.log(e)
            return 1
        }

        carritoMap.push(newCarrito)

        return newCarrito
    }

    static async deleteCarrito({id}){
        const index = await carritoMap.findIndex((carrito) => {
            return carrito.id === id
        })
        if(index == -1){
            throw new Error(`Carrito with id ${id} not found`)
        }
        const carritoDeleted = carritoMap.splice(index, 1)

        return carritoDeleted[0]
    }

    static async getProductos({id}){
        const carrito = await carritoMap.filter((carrito) => {
            return carrito.id === id
        })[0]
        if(carrito){
            return carrito.productos
        }
        throw new Error(`Carrito with id ${id} not found`)
    }

    static async addProductoToCar({id, producto}){
        const carrito = await carritoMap.filter((carrito) => {
            return carrito.id === id
        })[0]
        if(carrito){
            try{
                var prod = await productoDao.getProducto(producto)
            }catch(e){
                throw new Error(`Producto with id ${producto} not found`)
            }
            carrito.productos.push(prod)
            return carrito
        }
        throw new Error(`Carrito with id ${id} not found`)
    }
    static async deleteProductoFromCar({id, producto}){
        const carrito = await carritoMap.filter((carrito) => {
            return carrito.id === id
        })[0]
        if(carrito){
            const index = await carrito.productos.findIndex((prod) => {
                return prod.id === producto.id
            })
            if(index != -1){
                const productoDeleted = carrito.productos.splice(index, 1)
                return productoDeleted[0]
            }

            
        }
        throw new Error(`Carrito with id ${id} not found`)
    }

}


export default carritoDao