import carritoDao from "../DAO/carritoDao.js";



var carritoControllers = {
    getCarritos: async () => {
        return await carritoDao.getCarritos()
    },
    getCarrito: async ({id}) => {
        return await carritoDao.getCarrito({id})
    },
    createCarrito: async () => {
        return await carritoDao.createCarrito()
    },
    deleteCarrito: async ({id}) => {
        return await carritoDao.deleteCarrito({id})
    },

    getProductosInCar: async ({id}) => {
        return await carritoDao.getProductos({id})
    },

    addProductoInCar: async ({id, producto}) => {
        return await carritoDao.addProductoToCar({id, producto})
    },
    
    deleteProductoInCar: async ({id, producto}) => {
        return await carritoDao.deleteProductoFromCar({id, producto})
    }
};


export default carritoControllers