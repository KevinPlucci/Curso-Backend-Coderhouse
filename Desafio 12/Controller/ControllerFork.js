
import { fork } from 'child_process'
import path from 'path'
import { fileURLToPath } from 'url'



export const ramdomController = (req, res) => {
    const cant = req.query.cant || 100000000
    const objRandom = fork(path.join(__dirname+'../Services/Random/objRandom.js'))
    objRandom.send(cant)
    objRandom.on('message', obj => {
        res.send(obj)
    })
}