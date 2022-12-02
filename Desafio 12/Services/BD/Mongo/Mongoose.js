
import mongoose, { Schema as _Schema, connect, model } from 'mongoose';
import * as dotenv from 'dotenv'
dotenv.config()
const Schema = _Schema;
try {
    // Connect to the MongoDB cluster
    connect(
        process.env.MongoAccessChat,
        { useNewUrlParser: true, useUnifiedTopology: true },
        () => console.log(" Mongoose is connected")
    );

} catch (e) {
    console.log("could not connect");
}

const schem = new Schema({
    Fecha:{
        type:String,
        default: new Date().toLocaleTimeString()
        
    },
    Mensajes: {
        type: String,
        required: true
    },
    author: {
        id: {
            type: String,
            required: true
        } ,
        Name: {
            type: String,
            required: true
        },
        LastName: {
            type: String,
            required: true
        },
        age: {
            type: Number,
            required: true
        },
        nick: {
            type: String,
            required: true
        },
        avatar: {
            type: String,
            required: true
        }
    },
    
},{
    timestamps: false,
    versionKey: false
})





export default mongoose.model('Mensajes', schem);