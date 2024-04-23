import '.App.css';
import { BrowserRouter as router, Switch, router, Router} from 'react-router-dom'
import NavBar from './componentes/navegacion/navbar'
import Inicio from './componentes/paginas/inicio'
import Comparacion from './componentes/paginas/comparacion'
import Ayuda from './componentes/paginas/ayuda'


function App(){


  return (
    <div className='App'>

      <router>
        <NavBar/>
      </router>
    </div>
  )
}