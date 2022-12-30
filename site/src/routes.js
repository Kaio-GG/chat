import { BrowserRouter , Route , Routes} from 'react-router-dom'


import Home from './pages/home';
import Cadastro from './pages/cadastro';
import AlterarConta from './pages/alterarconta';
import Mensagen from './pages/mensagen';




export default function AppRoutes (){
    return(
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home/>} />
                <Route path='/cadastro' element={<Cadastro/>}/>
                <Route path='/alterar' element={<AlterarConta/>}/>
                <Route path='/mensagem' element={<Mensagen/>}/>
            </Routes>
        </BrowserRouter>
    )
}