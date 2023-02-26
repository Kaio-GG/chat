import './index.scss'
import MonkChat from '../../components/monkChat'
import { useNavigate } from 'react-router-dom'
import { Cadastro , Login } from '../../api/usuario.js';
import { useState } from 'react';
import storage from 'local-storage'

export default function Pgcadastro (){
    const navigate = useNavigate()
    const [nome , setnome ] = useState('');
    const [email , setemail] = useState('');
    const [senha , setsenha] = useState('');

    function irLogin (){
        navigate('/')
    }

    async function cadastrar (){
        try {
            const resp = await Cadastro(nome , email , senha)
            logar()
        }    
        catch (err) {
            if (err.response.status === 401) {
                    console.log(err)
                }
        }
    }

    async function logar (){
        try {
            const resp = await Login(email, senha)
            storage('usuario' , resp)
            navigate('/mensagem')

        } catch (err) {
            if (err.response.status === 401) {
                console.log(err)
            }
        }
    }





    return(
        <main className='pg-cadastro'>
            <MonkChat/>

            <div className='dir'>
                <div className='pt-cima'>

                    <h1>Crie sua conta</h1>
                    <br/>
                    <br/>
                    <br/>

                    <div className='caixas'>

                                <div className='caixa'>
                                        <h4>Nome:</h4>&nbsp;&nbsp;
                                        <input type='text' value={nome} onChange={e => setnome(e.target.value)} />
                                </div>

                                <div className='caixa'>
                                        <h4>E-mail:</h4>&nbsp;&nbsp; 
                                        <input type='text' value={email} onChange={e => setemail(e.target.value)} />
                                </div>

                                <div className='caixa'>
                                        <h4>Senha:</h4>&nbsp;&nbsp; 
                                        <input type='password' value={senha} onChange={e => setsenha(e.target.value)}/>
                                </div>
                                <div className='btn'>
                                         <button onClick={cadastrar} >Criar</button>       
                                </div>
                    </div>

                </div>
                        <div className='text'>
                                <p>Não possui conta ? <br/> Crie uma apertando <b onClick={irLogin} >aqui</b></p>
                        </div>
            </div>
        </main>
    )
}