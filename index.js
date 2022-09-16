const express=require('express')
const conexionDB = require('./db/config')
const app=express()
require("dotenv").config()

const authRouter=require('./routes/auth')
app.use(express.json())


conexionDB()


// conexionDB.then(()=>{
//     console.log('conectado')
// })

app.use('/', express.static(__dirname+'/public'))
app.use('/auth', authRouter )


app.listen(process.env.PORT,()=>{
    console.log(`app en puerto ${process.env.PORT}`)
})