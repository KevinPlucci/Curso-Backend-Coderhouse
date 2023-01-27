import express from "express";
import { graphqlHTTP } from "express-graphql";
import { buildSchema } from "graphql";


import carritoControllers from "./controllers/carritoController.js";
import productoController from "./controllers/productoController.js";

// Construct a schema, using GraphQL schema language
var schema = buildSchema(`
    type Carrito {
        id: ID!
        timestamp: String
        productos: [Producto]
    }

    type Producto {
        id: ID!
        timestamp: String
        nombre : String!
        precio : Float!
        codigo : String!
        stock : Int!
        descripcion : String
    }

    input inputProducto {
        nombre : String!
        precio : Float!
        codigo : String!
        stock : Int!
        descripcion : String
    }

    input inputUpdateProducto{
        nombre : String
        precio : Float
        codigo : String
        stock : Int
        descripcion : String
    }
    input inputProductoId{
        id: ID!
    }

    type Query {
        getCarritos: [Carrito]
        getCarrito(id: ID!): Carrito
        getProductosInCar(id: ID!): [Producto]
        
        getProductos: [Producto]
        getProducto(id: ID!): Producto!
    }

    type Mutation {
        createCarrito: Carrito
        deleteCarrito(id: ID!): Carrito!
        addProductoInCar(id: ID!, producto: inputProductoId!): Carrito
        deleteProductoInCar(id: ID!, producto: inputProductoId!): Producto
        
        createProducto(data: inputProducto!): Producto
        deleteProducto(id: ID!): Producto!
        updateProducto(id: ID!, data: inputUpdateProducto!): Producto!
    }

`);

// The root provides a resolver function for each API endpoint
var root = {
    ...carritoControllers,
    ...productoController
}

var app = express();
app.use('/graphql', graphqlHTTP({
  schema: schema,
  rootValue: root,
  graphiql: true,
}));
app.listen(4000);
console.log('Running a GraphQL API server at http://localhost:4000/graphql');