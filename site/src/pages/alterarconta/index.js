import './index.scss';
import MonkChat from '../../components/monkChat';


export default function AlterarConta (){


    return(
        <main className='pg-alterar'>
            <MonkChat/>
            <div className='dir'>
                <div>
                    <h1>Alterar Conta</h1>
                    <div className='caixa'>
                        <h4>E-mail:</h4>&nbsp;&nbsp;<input type='text'/>
                    </div>
                    
                    <div className='caixa'>
                        <h4>Senha:</h4>&nbsp;&nbsp;<input type='text'/>
                    </div>
                    
                    <div className='caixa'>
                        <h4>Nick:</h4>&nbsp;&nbsp;<input type='text'/>
                    </div>
                    <div className='btn'>
                        <button>Salvar</button>
                    </div>
                </div>
            </div>
        </main>
    )
}