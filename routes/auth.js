const{Router}=require('express')
const {  registerUsuario } = require('../controllers/auth.controller')

const authRouter=Router()

authRouter.post('/register',registerUsuario)

// authRouter.get('/login',loginUsuario)

module.exports= authRouter