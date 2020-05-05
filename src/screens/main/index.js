/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-key */
import React, { useState } from "react"

import Header from "../../components/Header"
import MenuNavigator from "../../components/MenuNavigator"
import { Container, Divider, IconButton, Button } from "@material-ui/core"
import DinamicCard from "../../components/DinamicCardProduct"
import Card from "@material-ui/core/Card"
import { useHistory } from "react-router-dom"

import { makeStyles, withStyles } from "@material-ui/core/styles"
import colors from "../../colors"
import api from "../../api"
import RenderCard from "../../components/DinamicCardProduct"

let { primary } = colors

const styles = makeStyles({
  paper: {
    // height: "150%",
    backgroundColor: primary.backgroundColor,
    width: "100%",
  },
  wallpaper: {
    padding: "10px",
    marginTop: "0px",
  },
  cardHeader: {
    backgroundColor: primary.lighBackgroundColor,
    marginTop: "40px",
    width: "220px",
    padding: "4px",
    opacity: 0.8,
    borderRadius: "8px",
    marginBottom: "10px",
  },
  text: {
    textAlign: "center",
    fontSize: "20px",
  },
  paperBody: {
    backgroundColor: primary.lighBackgroundColor,
    display: "flex",
    flexDirection: "row",
  },
  body: {
    fontSize: 14,
    color: "gray",
  },
  textAutor: {
    fontSize: "12px",
  },
  row: {
    display: "flex",
    flexDirection: "row",
  },
  mostSaler: {
    backgroundColor: primary.lighBackgroundColor,
    display: "flex",
  },
  divDinamic: {
    marginTop: "-10px",
  },
})

function Main() {
  const classes = styles()
  let history = useHistory()
  const [obj, setObj] = useState()

  let redirectToTarget = (to, param) => {
    history.push(`/${to}/${param}`)
  }

  let b = async () => {
    console.log("a")
    let products = await api().products.getAllProducts()
    let obj = []
    for (let i = 0; i < products.length; i++) {
      obj = [
        ...obj,
        {
          name: products[i].name,
          description: products[i].desc,
          image:
            products[i].imageUrl ||
            "data:image/jpeg;base64,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",
          price: Number(products[i].price),
          autor: "Administrador",
        },
      ]
    }
    setObj(obj)
  }
  React.useEffect(() => {
    b()
  }, [])

  return (
    <>
      <Header />
      <MenuNavigator routeListen={"produtos"} />
      <Container className={classes.paper}>
        <div className={classes.wallpaper}>
          <div className={classes.cardHeader}>
            <h1 className={classes.text}>Mais Vendidos</h1>
          </div>
          <div className={classes.mostSaler}>
            <div>{obj && <DinamicCard withMarket data={obj} />}</div>
          </div>
          <Card className={classes.paperBody}></Card>
        </div>
      </Container>
    </>
  )
}

export default Main
