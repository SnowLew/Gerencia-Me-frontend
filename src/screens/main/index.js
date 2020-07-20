/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-key */
import React, { useState } from "react"

import Header from "../../components/Header"
import MenuNavigator from "../../components/MenuNavigator"
import { Container } from "@material-ui/core"
import DinamicCard from "../../components/DinamicCardProduct"
import NotFound from "../../components/NotFound"

import Card from "@material-ui/core/Card"
// import { useHistory } from "react-router-dom"

import { makeStyles } from "@material-ui/core/styles"
import colors from "../../colors"
import api from "../../api"
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
  // let history = useHistory()
  const [obj, setObj] = useState()
  const [products, setProducts] = useState()

  /*
  let redirectToTarget = (to, param) => {
    history.push(`/${to}/${param}`)
  }
  */
  
  let showProducts = async () => {
    setProducts(await api().products.getAllProducts())
    let obj = []
    if (products) {
      for (let i = 0; i < products.length; i++) {
        obj = [
          ...obj,
          {
            name: products[i].name,
            description: products[i].desc,
            image: products[i].imageUrl || `https://picsum.photos/20${i}`,
            price: Number(products[i].price),
            autor: "Administrador",
          },
        ]
      }
      setObj(obj)
    }
  }

  React.useEffect(() => {
    showProducts()
  }, [])

  return (
    <>
      <Header />
      <MenuNavigator routeListen={"produtos"} />
      <Container className={classes.paper}>
        { 
          products 
          ? 
          <div className={classes.wallpaper}>
            <div className={classes.cardHeader}>
              <h1 className={classes.text}>Mais Vendidos</h1>
            </div>   
            <div className={classes.mostSaler}>
              <div>{obj && <DinamicCard withMarket data={obj} />}</div>
            </div>
            <Card className={classes.paperBody}></Card>
          </div>
        : null
        }
      </Container>
      {!products && <NotFound/>}
    </>
  )
}

export default Main
