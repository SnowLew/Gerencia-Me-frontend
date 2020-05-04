/* eslint-disable react/prop-types */
/* eslint-disable no-sparse-arrays */
/* eslint-disable no-fallthrough */
import React from "react"
import Button from "@material-ui/core/Button"
import ButtonGroup from "@material-ui/core/ButtonGroup"
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer"
import { useHistory } from "react-router-dom"
import { makeStyles } from "@material-ui/core/styles"
import colors from "../../colors"
import {
  List,
  Avatar,
  Divider,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@material-ui/core"
import clsx from "clsx"

import PersonIcon from "@material-ui/icons/Person"
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart"
import MonetizationOnIcon from "@material-ui/icons/MonetizationOn"
import SettingsIcon from "@material-ui/icons/Settings"
import ExitToAppIcon from "@material-ui/icons/ExitToApp"

let { primary } = colors

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-end",
    "& > *": {
      margin: "0px 0px 0px 0px",
    },
  },
  buttonGroup: {},
  button: {
    backgroundColor: primary.backgroundColorLowOpacity,
    color: primary.darkText,
    opacity: 0.98,
    padding: "15px",
    "&:hover": {
      opacity: 1,
      color: primary.darkTextPlus,
      backgroundColor: primary.backgroundColor,
    },
  },
  buttonMenu: {},
  list: {
    width: "300px",
  },
  avatar: {
    width: "125px",
    height: "125px",
    marginLeft: "30%",
    marginTop: "12px",
  },
  userText: {
    color: primary.darkText,
    textAlign: "center",
  },
  drawerButton: {
    color: primary.lightText,
    backgroundColor: primary.backgroundColor,
    padding: "7px",
    fontSize: "10px",
    margin: "10px 20px 15px 25px",
    borderRadius: "10px",
    "&.active, &:hover, &.active:hover": {
      "& path": {
        fill: primary.backgroundColor,
        opacity: 0.7,
      },
      "& span": {
        color: primary.darkText,
        opacity: 0.7,
      },
    },
  },
  buttonActivate: {
    opacity: 1,
    color: primary.lightText,
    backgroundColor: primary.backgroundColor,
    "&:hover": {
      color: primary.darkTextPlus,
    },
  },
  listItemIcon: {
    margin: 30,
  },
  drawerList: {
    overflowY: "auto",
    overflowX: "hidden",
  },
}))

export default function MenuNavigator(props) {
  const classes = useStyles()
  let history = useHistory()

  const [state, setState] = React.useState({
    left: false,
  })

  let userInfo = {
    name: "Aroldo Goulart Barros",
    urlImage:
      "https://avatars3.githubusercontent.com/u/38509926?s=400&u=97e73e9caf6fe68bebc3019fb7c2c81cf5bda20c&v=4https://avatars3.githubusercontent.com/u/38509926?s=400&u=97e73e9caf6fe68bebc3019fb7c2c81cf5bda20c&v=4",
  }
  let listItems = [
    {
      text: "Meu Perfil",
    },
    {
      text: "Cadastrar Produtos",
    },
    {
      text: "Configurações",
    },
    ,
    {
      text: "Sair",
    },
  ]

  let redirectToTarget = (to) => {
    history.push(`/${to}`)
  }

  let redirectToTargetDrawer = (index) => {
    let route = ""
    console.log(index)
    switch (index) {
      case 0: {
        route = "meuPerfil"
        break
      }
      case 1: {
        route = "cadastrarProduto"
        break
      }
      case 2: {
        route = "configuracoes"
        break
      }
    }
    history.push(`/${route}`)
  }

  let RenderMenu = () => {
    const toggleDrawer = (anchor, open) => (event) => {
      if (
        event &&
        event.type === "keydown" &&
        (event.key === "Tab" || event.key === "Shift")
      ) {
        return
      }
      setState({ ...state, [anchor]: open })
    }
    let chooseIcon = (index) => {
      switch (index) {
        case 0: {
          return <PersonIcon />
        }
        case 1: {
          return <AddShoppingCartIcon />
        }
        case 2: {
          return <SettingsIcon />
        }
        default: {
          return (
            <ExitToAppIcon
              onClick={async () => {
                await localStorage.removeItem("token")
                await localStorage.removeItem("expires")
                window.location.reload(false)
              }}
            />
          )
        }
      }
    }

    const list = (anchor) => (
      <div
        className={clsx(classes.list)}
        role="presentation"
        onClick={toggleDrawer(anchor, false)}
        onKeyDown={toggleDrawer(anchor, false)}
      >
        <List className={classes.drawerList}>
          <Avatar
            variant={"circle"}
            className={classes.avatar}
            alt="Usuario"
            src={`${userInfo.urlImage}`}
          />
          <h1 className={classes.userText}>{userInfo.name}</h1>
          <Divider />
          {listItems.map(({ text }, index) => (
            <ListItem
              onClick={() => redirectToTargetDrawer(index)}
              className={classes.drawerButton}
              button
              key={text}
            >
              <ListItemIcon nameClass={classes.listItemIcon}>
                {chooseIcon(index)}
              </ListItemIcon>
              <ListItemText nameClass={classes.text} primary={text} />
            </ListItem>
          ))}
        </List>
      </div>
    )

    return (
      <>
        {["left"].map((anchor) => (
          <React.Fragment key={anchor}>
            <Button
              className={classes.buttonMenu}
              onClick={toggleDrawer(anchor, true)}
            >
              Menu
            </Button>
            <SwipeableDrawer
              anchor={anchor}
              open={state[anchor]}
              onClose={toggleDrawer(anchor, false)}
              onOpen={toggleDrawer(anchor, true)}
            >
              {list(anchor)}
            </SwipeableDrawer>
          </React.Fragment>
        ))}
      </>
    )
  }

  return (
    <div className={classes.root}>
      <ButtonGroup
        variant="default"
        size="large"
        fullWidth
        aria-label="large outlined primary button group"
        className={classes.buttonGroup}
      >
        <RenderMenu />
        <Button
          onClick={() => redirectToTarget("produtos")}
          className={
            props.routeListen == "produtos"
              ? classes.buttonActivate
              : classes.button
          }
        >
          Produtos
        </Button>
        <Button
          onClick={() => redirectToTarget("mainCategorias")}
          className={
            props.routeListen == "mainCategorias"
              ? classes.buttonActivate
              : classes.button
          }
        >
          Categorias
        </Button>
        <Button
          onClick={() => redirectToTarget("vendedores")}
          className={
            props.routeListen == "vendedores"
              ? classes.buttonActivate
              : classes.button
          }
        >
          Vendedores
        </Button>
        <Button
          onClick={() => redirectToTarget("listaDesejos")}
          className={
            props.routeListen == "listaDesejos"
              ? classes.buttonActivate
              : classes.button
          }
        >
          Lista de Desejos
        </Button>
        <Button
          onClick={() => redirectToTarget("carrinho")}
          className={
            props.routeListen == "carrinho"
              ? classes.buttonActivate
              : classes.button
          }
        >
          Carrinho
        </Button>
      </ButtonGroup>
    </div>
  )
}
