import React from "react"
import ReactDOM from "react-dom"

import Login from "./screens/login"
import Main from "./screens/main"
import Vendedores from "./screens/vendedores"
import Carrinho from "./screens/carrinho"
import ListaDesejos from "./screens/listaDesejos"
import Categorias from "./screens/categorias"
import MainCategorias from "./screens/mainCategorias"

import MeuPerfil from "./screens/meuPerfil"
import CadastrarProduto from "./screens/cadastrarProduto"
import PlataformasVenda from "./screens/plataformasVenda"
import Configuracoes from "./screens/configuracoes"

import * as serviceWorker from "./serviceWorker"
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom"
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles"

import "./index.css"

const fontTheme = createMuiTheme({
  typography: {
    fontFamily: '"Roboto Condensed", sans-serif',
  },
})

ReactDOM.render(
  <React.StrictMode>
    <MuiThemeProvider theme={fontTheme}>
      <BrowserRouter>
        <Switch>
          <Route path="/" exact={true} component={Login} />
          <Route path="/produtos" exact={true} component={Main} />
          <Route
            path="/mainCategorias"
            exact={true}
            component={MainCategorias}
          />
          <Route path="/produtos/:idShop" exact={true} component={Main} />
          <Route path="/vendedores" exact={true} component={Vendedores} />
          <Route path="/carrinho" exact={true} component={Carrinho} />
          <Route path="/listaDesejos" exact={true} component={ListaDesejos} />
          <Route path="/meuPerfil" exact={true} component={MeuPerfil} />
          <Route
            path="/categorias/:category"
            exact={true}
            component={Categorias}
          />
          <Route
            path="/cadastrarProduto"
            exact={true}
            component={CadastrarProduto}
          />
          <Route
            path="/plataformasVenda"
            exact={true}
            component={PlataformasVenda}
          />
          <Route path="/configuracoes" exact={true} component={Configuracoes} />
          {localStorage.getItem("expires") <= Date.now() &&
            localStorage.getItem("token") && (
              <Redirect to={{ pathname: "produtos" }}></Redirect>
            )}
        </Switch>
      </BrowserRouter>
    </MuiThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
)

serviceWorker.unregister()
