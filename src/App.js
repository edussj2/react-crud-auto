//Clase para enrutar enlaces
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

//Boostrap
import 'bootstrap/dist/css/bootstrap.min.css';

//Barra de navegacion
import NavBar from './app/common/navBar/navBar';

//Inicio
import Home from './app/common/home/home';

//Error 404
import Erros from './app/common/error/error';

// == Componentes
//Marca
import AgregarMarca from './app/pages/marca/agregarMarca';
import EditarMarca from './app/pages/marca/editarMarca';
import ListarMarca from './app/pages/marca/listarMarca';
//Trabajador
import AgregarTrabajador from './app/pages/trabajador/agregarTrabajador';
import EditarTrabajador from './app/pages/trabajador/editarTrabajador';
import ListarTrabajador from './app/pages/trabajador/listarTrabajador';
//Auto
import AgregarAuto from './app/pages/auto/agregarAuto';
import EditarAuto from './app/pages/auto/editarAuto';
import ListarAuto from './app/pages/auto/listarAuto';
//Usuario
import AgregarUsuario from './app/pages/usuario/agregarUsuario';
import EditarUsuario from './app/pages/usuario/editarUsuario';
import ListarUsuario from './app/pages/usuario/listarUsuario';



const App= () =>{
  return(
      <BrowserRouter>
          <NavBar />
          <div className="container mt-4">
              <Switch>
                  <Route path="/" exact><Home/></Route>
                  
                  <Route path="/marcas" exact><ListarMarca/></Route>
                  <Route path="/agregarMarca" exact><AgregarMarca/></Route>
                  <Route path="/editarMarca/:id" exact><EditarMarca/></Route>

                  <Route path="/trabajadores" exact><ListarTrabajador/></Route>
                  <Route path="/agregarTrabajador" exact><AgregarTrabajador/></Route>
                  <Route path="/editarTrabajador/:id" exact><EditarTrabajador/></Route>

                  <Route path="/autos" exact><ListarAuto/></Route>
                  <Route path="/agregarAuto" exact><AgregarAuto/></Route>
                  <Route path="/editarAuto/:id" exact><EditarAuto/></Route>

                  <Route path="/usuarios" exact><ListarUsuario/></Route>
                  <Route path="/agregarUsuario" exact><AgregarUsuario/></Route>
                  <Route path="/editarUsuario/:id" exact><EditarUsuario/></Route>

                  <Route path="*"><Erros/></Route>

                  <Redirect to="/"></Redirect>
              </Switch>
          </div>
      </BrowserRouter>
  );
}

export default App;
