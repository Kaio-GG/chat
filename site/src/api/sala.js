import axios from "axios";

const api = axios.create({
    baseURL:'http://localhost:5000'
})


export  async function salaCriar (nome , id){
    const resp = await api.post ('/criar' , {
        nome:nome,
        id:id
    });

    return resp.data
}

export async function salaAchar (nome){
    const resp = await api.get (`/achar/${nome}`)
    return resp.data
}

export async function salaEntrar(usu , sala){
    const resp = await api.post (`/entrar/${usu}/${sala}`)
    return resp.data
}

export async function carregarMsg(id){
    const resp = await api.get (`/menssagem/${id}`)
    return resp.data
}

export async function msgEnviar (id , msg , data){
    const resp = await api.post (`/menssagem/enviar/${id}/${msg}/${data}`)
    return resp.data
}