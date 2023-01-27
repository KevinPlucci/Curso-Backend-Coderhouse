import { productoDto, productosMap } from '../DTO/productoDto.js'
import crypto from 'crypto'

class productoDao{

    static async getProductos(){
        return productosMap
    }

    static async getProducto({id}){
        const producto = await productosMap.filter((prod) => prod.id === id)[0]
        if(producto){
            return producto
        }
        throw new Error(`Producto with id ${id} not found`)
    }


    static async createProducto({ data }){
        const id =  crypto.randomBytes(10).toString('hex');
        const timestamp = Date.now()
        try{
            var newProducto = new productoDto({
                id, 
                timestamp,
                ...data
            })
        }catch(e){
            console.log(e)
            throw new Error(`Unable to create new product with data ${data}`)
        }

        productosMap.push(newProducto)

        return newProducto
    }

    static async deleteProducto({id}){
        const index = await productosMap.findIndex((prod) => {
            return prod.id === id
        })
        if(index == -1){
            throw new Error(`Producto with id ${id} not found`)
        }
        const productoDeleted = productosMap.splice(index, 1)

        return productoDeleted[0]
    }

    static async updateProducto({id, data}){
        let producto = await productosMap.filter((prod) => {
            return prod.id === id
        })[0]
        if(producto){
            producto = {...producto, ...data} 
            return producto
        }
        throw new Error(`Producto with id ${id} not found`)
    }

}

export default productoDao