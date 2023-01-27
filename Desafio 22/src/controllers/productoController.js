import productoDao from "../DAO/productoDao.js";

var productoController = {
    getProductos: async () => {
        return await productoDao.getProductos()
    },
    getProducto: async ({id}) => {
        return await productoDao.getProducto({id})
    },
    deleteProducto: async ({id}) => {
        return await productoDao.deleteProducto({id})
    },
    updateProducto: async ({id, data}) => {
        return await productoDao.updateProducto({id, data})
    },
    createProducto: async ({data}) => {
        return await productoDao.createProducto({data})
    },
}

export default productoController