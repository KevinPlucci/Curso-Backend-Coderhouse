class productoDto{
    constructor(productoData){
        this.nombre = productoData.nombre
        this.timestamp = productoData.timestamp
        this.id = productoData.id
        this.precio = productoData.precio
        this.descripcion = productoData.descripcion
        this.codigo = productoData.codigo
        this.stock = productoData.stock
    }
}

const productosMap = [
    new productoDto({
        id: '1',
        nombre: "Perro",
        timestamp: "123123",
        descripcion: "nada",
        precio: 12.2,
        stock: 50,
        codigo: "ASDQWE"
    })
]

export {productoDto, productosMap} 