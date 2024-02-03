import './index.scss';
import { salaCriar , carregarMsg , salaAchar , salaEntrar , msgEnviar } from '../../api/sala.js';
import { useEffect, useState } from 'react';
import storage from 'local-storage';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom'

export default function Mensagen (){

    const [nome , setnome] = useState('');
    const [idsala , setidsala] = useState(0);
    const [msg , setmsg] = useState([]);
    const [novamsg , setnovamsg] = useState('');
    const [data , setdata] = useState('');
    const [sala , setsala] = useState('');

    const usuario = storage('usuario');
    const id = (usuario.id_usuario);
    const Navigate = useNavigate()

    function novaData (){
        let dt = new Date().toISOString().substr(0,10)
        setdata(dt)
    }

    
    
    
    async function criar (){
        try {
            if(!nome){
                toast.error('Coloque um nome valido')
                return
            }
            
            toast.dark('🚀 sala criada');
            await salaCriar(nome , id);                
            await entrar();
        } catch (err) {
            toast.error(err.mensage)
        }
    }


    async function entrar (){
        try {
            if(!nome){
                toast.error('Coloque um nome valido')
                return
            }
            let sala = await salaAchar(nome);
            if(!sala){
                toast.error('sala inesistente')
                return
            }
            
            await salaEntrar(id ,sala.id_sala)
            let m = await carregarMsg(sala.id_sala)
            setmsg(m)
            setidsala(sala.id_sala)
            setsala(sala.nm_sala)
            toast.dark(`🚀 voce entrou na sala: ${nome}`)
        } catch (err) {
            console.log(err.Mensagen)        
        }
    }


    async function listarMsg (){
        try {
            let m = await carregarMsg(idsala)
            console.log(m)
            setmsg(m)
        } catch (err) {
            console.log(err.mensage)
        }
    }

    async function enviarMsg(){
        try {
            await msgEnviar(idsala, id , novamsg , data );
            listarMsg();
            setnovamsg('');
        } catch (err) {
            console.log(err.mensagen)
        }
    }

    function formatarData(dt){
        const data = new Date(dt);
        return data.toLocaleDateString('pt-BR')
    }

    useEffect(() => {
        novaData()
    },[])


    return(
        <main className='pg-mensagem'>
            <div className='pt-cima'>
                <div className='logo'>
                    <img src='/assets/image/logo1 1.svg' alt='' />
                    <img src='/assets/image/Line 1.svg' alt=''/>
                    &nbsp;&nbsp;
                    <img src='/assets/image/MonkChat.svg' alt='' />
                    </div>
                    <p className='alterar' onClick={() => Navigate(`/alterar/${id}`)}>Alterar conta</p>
            </div>

            <div className='meio'>

                        <div className='esq'>
                                <div className='pt-cima2'>      

                                    <div className='org'>
                                            <h4>Sala:</h4>&nbsp;&nbsp;
                                            <input type='text' value={nome} onChange={e =>  setnome(e.target.value)}/>
                                    </div>
                        
                                    <div className='org-botao'>
                                        <button onClick={criar}>Criar</button>&nbsp;&nbsp;
                                        <button onClick={entrar} >Entar</button>

                                    </div>

                            </div>

                                    <div className='pt-baixo'>
                                            <h2>mensagem:</h2>
                                            {!sala ?
                                            <textarea disabled></textarea>
                                            :
                                            <textarea onKeyDown={(e)=>{if(e.key === "Enter"){enviarMsg();setnovamsg('')}}}  onChange={e => setnovamsg(e.target.value)} onkeydown={enviarMsg}></textarea>
                                            }
                                            <div className='org-botao'>
                                                    <button  onClick={enviarMsg} >Enviar</button>
                                            </div>
                                    </div>
                
                                    
                            </div>   
                            <div className='dir'>
                                <div className='nome-sala'>
                                {!sala ? 
                                <h3>
                                    Entre em uma sala
                                </h3>:
                                <h3>
                                    {sala}
                                </h3>
                                }
                                </div>
                                <div className='msg'>
                                    {msg.map ((item , pos) => 
                                    <div className='caixa-msg'>
                                        <p className='menssagem'>&nbsp;&nbsp;({formatarData(item.dt_menssagem)}) &nbsp;&nbsp; <h4>{item.nm_usuario}</h4> &nbsp;:&nbsp; {item.ds_menssagem}</p>            
                                    </div>    
                                    )}
                                </div>
                            </div>     

            </div>
        </main>
    )
}