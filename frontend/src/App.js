import React from 'react';
import ListaDeProdutos from "./Pages/ListaDeProdutos";
import Login from './Pages/Login';
import NovoUsuario from './Pages/NovoUsuario';
import Produto from './Pages/Produto'
import Ajuda from './Pages/Ajuda';


function App() {

  return (
    <div>
        <Login/>
        <ListaDeProdutos/>
        <NovoUsuario/>
        <Produto/>
        <Ajuda/>
    </div>
  );
}

export default App;
