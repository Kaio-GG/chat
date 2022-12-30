import './index.scss';
import { salaCriar } from '../../api/sala.js';
import { useState } from 'react';
import storage from 'local-storage'






export default function Mensagen (){

    const [nome , setnome] = useState('');


    const usuario = storage('usuario');
    const id = (usuario.id_usuario);


    async function criar (){
        try {
          await salaCriar(nome , id);

        } catch (err) {
            console.log(err.mensagen)
        }
    }

    return(
        <main className='pg-mensagem'>
            <div className='pt-cima'>
                <div className='logo'>
                    <img src='/assets/image/logo1 1.svg' alt='' />
                    <img src='/assets/image/Line 1.svg' alt=''/>
                    &nbsp;&nbsp;
                    <img src='/assets/image/MonkChat.svg' alt='' />
                </div>
                


                <p>alterar conta</p>
            </div>

            <div className='meio'>

                        <div className='esq'>
                                <div className='pt-cima2'>      

                                    <div className='org'>
                                            <h4>Sala:</h4>&nbsp;&nbsp;
                                            <input type='text' value={nome} onChange={e =>  setnome(e.target.value)}/>
                                    </div>
                        
                                    <div className='org'>
                                            <h4>Nick:</h4>&nbsp;&nbsp;
                                            <input type='text' />
                                    </div>

                                    <div className='org'>
                                        <h4>Para:</h4>&nbsp;&nbsp;
                                        <select> 
                                        </select>
                                    </div>
                                    <div className='org-botao'>
                                        <button onClick={criar}>Criar</button>&nbsp;&nbsp;
                                        <button>Entar</button>

                                    </div>

                            </div>

                                    <div className='pt-baixo'>
                                            <h2>mensagem:</h2>
                                            <textarea></textarea>
                                            <div className='org-botao'>
                                                    <button>Enviar</button>
                                            </div>
                                    </div>
                
                                    
                            </div>   
                            <div className='dir'>
                            &nbsp;&nbsp;
                                <div className='msg'>
                                    <p>&nbsp;&nbsp;(14:00)</p> &nbsp;&nbsp; <h4>Kaio:</h4> &nbsp;&nbsp; <p>oiiiiiiiiiiiiiiiiiii</p>            

                                </div>
                            </div>     

            </div>
        </main>
    )
}