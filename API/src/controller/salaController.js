import { criarSala , acharSala ,enviarMsg, entrarSala, carregarMsg } from "../repository/salaRepository.js";
import { Router } from "express";

const server = Router();



server.post ('/criar' , async   (req , resp) => {
    try {
        const info = req.body;
        const respost = await criarSala(info);
        
        resp.status(200);
    } catch (err) {
        if (err === "Duplicate entry 'oii' for key 'tb_sala.nm_sala'") {
            resp.status(410)   
        }else{
            resp.status(401).send({
                erro: err.message
            })
        }
    }
})


server.get ('/achar/:nome' , async (req , resp) =>{
    try {
        const info = req.params;
        const r = await acharSala(info)
        resp.send(r)

    } catch (err) {
        resp.status(404).send({
            erro: err.messsage
        })
    }
})


server.post ('/entrar/:idusuario/:idsala' , async (req , resp) =>{
    try {
        const info = req.params;
        const r = await entrarSala(info)
        resp.send(r)

    } catch (err) {
        resp.status(404).send({
            erro: err.messsage
        })
    }
})


server.get ('/menssagem/:idsala' , async (req , resp) =>{
    try {
        const info = req.params
        const msg = await carregarMsg(info)
        resp.send(msg)
    } catch (err) {
        resp.status(400).send({
            erro:err.message
        })
    }
})


server.post ('/menssagem/enviar/:sala/:msg/:data' , async (req , resp) =>{
    try {
        const info = req.params
        const msg = await enviarMsg(info)
        resp.send(msg)
    } catch (err) {
        resp.status(400).send({
            erro:err.message
        })
    }
})



export default server;