import React, {Fragment} from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Login from './Pages/Login'
import SideBar from './SideBar';
import Header from './Header';
import Perfil from './Pages/Perfil';
import ListaDeProdutos from './Pages/ListaDeProdutos';
import Produto from './Pages/Produto';
import ListaDeUsuarios from './Pages/ListaDeUsuarios';
import Usuario from './Pages/Usuario';
import NovoUsuario from './Pages/NovoUsuario';
import Expiring from './Pages/Expiring'
import Ajuda from './Pages/Ajuda';

export default function Routes(){
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Login} />
                <Fragment>
                    <Header/>
                    <div style={{display: "flex", minHeight: '85%'}}>
                        <SideBar/>
                        <div style={{minWidth: '100%', backgroundColor: '#EBEAE9'}}>
                            <Route path="/perfil" component={Perfil} />
                            <Route path="/listaDeprodutos" component={ListaDeProdutos} />
                            <Route path="/produto" component={Produto} />
                            <Route path="/ListaDeUsuarios" component={ListaDeUsuarios} />
                            <Route path="/usuario" component={Usuario} />
                            <Route path="/novoUsuario" component={NovoUsuario} />
                            <Route path="/vencendo" component={Expiring} />
                            <Route path="/ajuda" component={Ajuda} />
                        </div>
                    </div>
                </Fragment>
            </Switch>
        </BrowserRouter>
    )
}