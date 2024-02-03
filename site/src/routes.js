import { BrowserRouter , Route , Routes} from 'react-router-dom'


import Login from './pages/login';
import Cadastro from './pages/cadastro';
import AlterarConta from './pages/alterarconta';
import Mensagen from './pages/mensagen';




export default function AppRoutes (){
    return(
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Login/>}/>
                <Route path='/cadastro' element={<Cadastro/>}/>
                <Route path='/alterar/:id' element={<AlterarConta/>}/>
                <Route path='/mensagem' element={<Mensagen/>}/>
            </Routes>
        </BrowserRouter>
    )
}