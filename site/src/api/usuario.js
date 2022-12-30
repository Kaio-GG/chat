import axios from 'axios';


const api = axios.create({
    baseURL: 'http://localhost:5000'
})




export async function Cadastro (nome , email , senha){
    const resp = await api.post ('/cadastro' ,{
        nome:nome,
        email:email,
        senha:senha
    });
    return resp.data
}

export async function Login (email , senha){
    const resp = await api.post('/login',{
        email:email,
        senha:senha
    });
    return resp.data
}




