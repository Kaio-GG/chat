import './index.scss';
import MonkChat from '../../components/monkChat';
import {useParams }from 'react-router-dom';
import { alterarConta } from '../../api/usuario.js';
import { useState } from 'react';
import storage from 'local-storage';
import {useNavigate} from 'react-router-dom'


export default function AlterarConta (){
    const usuario = storage('usuario');

    const [nome, setnome] = useState(usuario.nm_usuario);
    const [email, setemail] = useState(usuario.ds_email);
    const [senha, setsenha] = useState(usuario.ds_senha)

    const {id} = useParams()
    const Navigate = useNavigate()

    async function alterar (){
        
        const resp = await alterarConta(nome, email, senha, id);
        storage('usuario', {
            id_usuario: id, 
            nm_usuario: nome, 
            ds_email: email, 
            ds_senha: senha
        }
        )
        Navigate('/mensagem')
    }


    
    return(
        <main className='pg-alterar'>
            <MonkChat/>
            <div className='dir'>
                <div>
                    <h1>Alterar Conta</h1>
                    <div className='caixa'>
                        <h4>E-mail:</h4>&nbsp;&nbsp;<input type='text' value={email} onChange={e => setemail(e.target.value)}/>
                    </div>
                    
                    <div className='caixa'>
                        <h4>Senha:</h4>&nbsp;&nbsp;<input type='password' value={senha} onChange={e => setsenha(e.target.value)}/>
                    </div>
                    
                    <div className='caixa'>
                        <h4>Nick:</h4>&nbsp;&nbsp;<input type='text' value={nome} onChange={e => setnome(e.target.value)}/>
                    </div>
                    <div className='btn'>
                        <button onClick={() => alterar()} >Salvar</button>
                    </div>
                </div>
            </div>
        </main>
    )
}