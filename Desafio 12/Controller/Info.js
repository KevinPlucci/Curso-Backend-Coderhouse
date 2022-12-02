const Info = (req, res) => {
    const data = {
        'Argumentos de entrada':`${process.argv[2]}: ${process.argv[3]}`, 
        'S.O': process.platform, 
        'Version Node': process.version , 
        'Memoria reservada': process.memoryUsage(), 
        'Path de ejecucion': process.argv[1],
        'Id Proceso': process.pid ,
        'Carpeta de Proyecto': process.cwd(),
    }
    res.send(data);
}
export default Info