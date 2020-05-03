import React from 'react';
import ReactDOM from 'react-dom';


import Login from './screens/login';
import Main from './screens/main';
import Vendedores from './screens/vendedores';
import Carrinho from './screens/carrinho';
import ListaDesejos from './screens/listaDesejos';
import Produtos from './screens/produtos';

import * as serviceWorker from './serviceWorker';
import { BrowserRouter, Switch, Route } from 'react-router-dom' 

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
        <Switch>
            <Route path="/" exact={true} component={Login} />
            <Route path="/main" exact={true} component={Main} />
            <Route path="/vendedores" exact={true} component={Vendedores} />
            <Route path="/carrinho" exact={true} component={Carrinho} />
            <Route path="/listaDesejos" exact={true} component={ListaDesejos} />
            <Route path="/produtos" exact={true} component={Produtos} />
        </Switch>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorker.unregister();
