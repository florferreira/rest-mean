const usuarioModel=require('../models/usuario')

const registerUsuario=async (req,res)=>{
    const {email,password,username}=req.body

    try {
        let usuario=await usuarioModel.findOne({email}) 

        if(usuario){
            return res.status(501).json({
                ok:false,
                msg:'Correo ya registrado'
            })
        }

        const nuevoUsuario= new usuarioModel({email,password,username})
        await nuevoUsuario.save()

        res.json({
            ok:true,
            email,username,password,
            msg:'Usuario creado'

        })
    } catch (error) {
        console.log(error)
        res.json({
            ok:false,
            msg:'error al registar'
        })
        
    }
   
   
    
}

const loginUsuario=(req,res)=>{
    // res.send('login')
}




module.exports={
    loginUsuario,
    registerUsuario
}



