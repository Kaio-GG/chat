import 'dotenv/config';
import cors from 'cors';
import express from 'express';

import usuarioController from './controller/usuarioController.js';
import salaController from './controller/salaController.js'



const server = express();
server.use(cors());
server.use(express.json());






server.use(usuarioController)
server.use(salaController)




server.listen(process.env.PORT , ()=> console.log('API ONLINE NA PORTA '+ process.env.PORT))