import { criarSala } from "../repository/salaRepository.js";
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

export default server;