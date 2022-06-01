const express = require('express')
const {resolve} = require('path')

const app = express();
const porta = process.env.PORT||3000


app.use('/',express.static(resolve(__dirname,'./build')))
app.listen( porta,(err)=>{
 if (err)
 return console.log(err)

 return console.log('aplicação rodando an porta:', porta)
} )

