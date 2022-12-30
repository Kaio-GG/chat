import { cadastro , login } from "../repository/usuarioRepository.js";
import { Router } from "express";

const server = Router();


server.post('/cadastro' , async (req , resp) => {
    try {
        const info = req.body;

        const usuario = cadastro(info);
        resp.send(usuario);
        
    } catch (err) {
        resp.status(401).send({
            erro : err.message
        })
    }
})


server.post('/login' , async (req, resp) =>{
    try {
        const info = req.body
        const logou = await login(info)
        if(!logou) {
            throw new Error ('Credenciais Invalidas')
        }

        if(!info.email.trim())
            throw new Error ('Email é obrigatório')

    
        if(!info.senha.trim())
            throw new Error ('A senha é obrigatória')

        resp.send(logou)
    } catch (err) {
        resp.status(401).send({
            erro: err.message
        })
    }
})



export default server;