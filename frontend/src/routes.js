import React, {Fragment} from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

import Login from './Pages/Login'
import SideBar from './SideBar';
import Header from './Header';
import ListaDeProdutos from './Pages/ListaDeProdutos';
import Produto from './Pages/Produto';
import ListaDeUsuarios from './Pages/ListaDeUsuarios';
import Usuario from './Pages/Usuario';
import NovoUsuario from './Pages/NovoUsuario';
import ListaDeCompras from './Pages/ListaDeCompras'
import Ajuda from './Pages/Ajuda';
import EsqueciSenha from "./Pages/EsqueciSenha/esqueciSenha";
import NovoProduto from './Pages/NovoProduto';
import { isAuthenticated } from './Services/auth';

const PrivateRoute = ({component: Component, ...rest}) => (
    <Route
        {...rest}
        render = {props => 
            isAuthenticated() ? (
                <Component {...props}/>
            ):(
                <Redirect to={{pathname: "/", state: {from: props.location}}}/>
            )
        }
    />
);

export default function Routes(){
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Login} />
                <Route path="/esqueciMinhaSenha" exact component={EsqueciSenha} />
                <Fragment>
                    <Header/>
                    <div style={{display: "flex", minHeight: '85%'}}>
                        <SideBar/>
                        <div style={{minWidth: '85%', backgroundColor: '#EBEAE9'}}>
                            <PrivateRoute path="/perfil" component={Usuario} />
                            <PrivateRoute path="/listaDeprodutos" component={ListaDeProdutos} />
                            <PrivateRoute path="/produto" component={Produto} />
                            <PrivateRoute path="/ListaDeUsuarios" component={ListaDeUsuarios} />
                            <PrivateRoute path="/usuario" component={Usuario} />
                            <PrivateRoute path="/novoUsuario" component={NovoUsuario} />
                            <PrivateRoute path="/listaDeCompras" component={ListaDeCompras} />
                            <PrivateRoute path="/ajuda" component={Ajuda} />
                            <PrivateRoute path="/NovoProduto" component={NovoProduto}/>
                        </div>
                    </div>
                </Fragment>
            </Switch>
        </BrowserRouter>
    )
}