const mongoose=require('mongoose')

// const conexionDB= mongoose.connect('mongodb+srv://Florencia:Florencia1@angular.0qdauqt.mongodb.net/test')

const conexionDB=async()=>{
    try {
        await mongoose.connect('mongodb+srv://Florencia:Florencia1@angular.0qdauqt.mongodb.net/test')

        console.log('conectado a DB')
        
    } catch (error) {
        console.log('error al conectar')
    }
}

module.exports=conexionDB