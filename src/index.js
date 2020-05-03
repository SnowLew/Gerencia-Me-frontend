import React from "react"
import ReactDOM from "react-dom"

import Login from "./screens/login"
import Main from "./screens/main"
import Vendedores from "./screens/vendedores"
import Carrinho from "./screens/carrinho"
import ListaDesejos from "./screens/listaDesejos"
import Produtos from "./screens/produtos"

import * as serviceWorker from "./serviceWorker"
import { BrowserRouter, Switch, Route } from "react-router-dom"
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles"

const fontTheme = createMuiTheme({
  typography: {
    fontFamily: '"PT Sans", sans-serif',
  },
})

ReactDOM.render(
  <React.StrictMode>
    <MuiThemeProvider theme={fontTheme}>
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
    </MuiThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
)

serviceWorker.unregister()
