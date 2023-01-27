
class carritoDto{
    constructor(carritoData){
        this.id = carritoData.id
        this.timestamp = carritoData.timestamp
        this.productos = [] 

        carritoData.productos.forEach(prod => {
            this.productos.push(
                {
                    'nombre': prod['nombre'],
                    'id': prod['id'],
                    'precio': prod['precio'],
                    'descripcion': prod['descripcion'],
                    'codigo': prod['codigo'],
                    'url': prod['url'],
                    'stock': prod['stock']
                }
            )
        })
       

    }
}


const carritoMap = [
    {
        id: "carrito_1",
        timestamp: "123124",
        productos: [{
            id: '1',
            nombre: "Perro",
            timestamp: "123123",
            descripcion: "nada",
            precio: 12.2,
            stock: 50,
            codigo: "ASDQWE"
        }]
    }
]

export {carritoDto, carritoMap}