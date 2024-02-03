import './index.scss'
import { useNavigate } from 'react-router-dom'
import MonkChat from '../../components/monkChat/index.js';
import { Login } from '../../api/usuario.js';
import { useState } from 'react';
import storage from 'local-storage';
import {toast} from 'react-toastify'


export default function Home (){
    const navigate = useNavigate();
    const [ email , setemail] = useState('');
    const [ senha , setsenha] = useState('')


    function irCadastro (){
        navigate('/cadastro')
    }

    async function logar (){
        try {
            const resp = await Login(email, senha)
            storage('usuario' , resp)
            navigate('/mensagem')
            toast.dark('logado')
        } catch (err) {
            if (err.response.status === 401) {
                console.log(err)
            }
        }
    }

    return(
        <main className='home'>
                <MonkChat/>

                <div className='dir' >
                        <h1>Faça seu Login</h1>
                    
                    <div className='inputs'>
                        <div className='alinhamento-input'>
                           <h4> E-mail:</h4> <input type='text' value={email} onChange={e => setemail(e.target.value)} />
                        </div>
                        <div className='alinhamento-input'>
                            <h4>Senha:</h4> <input type='password' value={senha} onChange={e => setsenha(e.target.value)} />
                        </div>
                        <div>
                            <button onClick={logar}>Login</button>
                        </div>
                        <div className='text'>
                                <p>Não possui conta ? <br/> Crie uma apertando <b onClick={irCadastro} >aqui</b></p>
                        </div>  
                        
                    </div>
                   
                </div>
        </main>
    )
}