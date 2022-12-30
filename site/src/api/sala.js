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