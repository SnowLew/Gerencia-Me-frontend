/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-key */
import React from "react"

import Header from "../../components/Header"
import MenuNavigator from "../../components/MenuNavigator"
import { Container, Divider, IconButton, Button } from "@material-ui/core"
import Paper from "@material-ui/core/Paper"
import FavoriteIcon from "@material-ui/icons/Favorite"
import DinamicCard from "../../components/DinamicCardProduct"
import Card from "@material-ui/core/Card"
import { useHistory } from "react-router-dom"

import { makeStyles, withStyles } from "@material-ui/core/styles"
import colors from "../../colors"

let { primary } = colors

const styles = makeStyles({
  paper: {
    height: "150%",
    backgroundColor: primary.backgroundColor,
    width: "100%",
    position: "absolute",
  },
  cardHeader: {
    backgroundColor: primary.lighBackgroundColor,
    marginTop: "40px",
    width: "220px",
    padding: "4px",
    opacity: 0.8,
    borderRadius: "4px",
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

  let redirectToTarget = (to, param) => {
    history.push(`/${to}/${param}`)
  }

  let bestSell = [
    {
      name: "Banana Suprema",
      image: "https://picsum.photos/200",
      description: "Uma banana trazida por um ser supremo",
      price: 10.0,
      autor: "Desconhecido",
    },
    {
      name: "Banana Plus",
      image: "https://picsum.photos/150",
      description: "Uma banana trazida por um ser anciao",
      price: 9.0,
      autor: "Desconhecido",
    },
    {
      name: "Banana",
      image: "https://picsum.photos/210",
      description: "Uma banana normal",
      price: 4.0,
      autor: "Desconhecido",
    },
    {
      name: "Banana Podre",
      image: "https://picsum.photos/212",
      description:
        "Uma banana normal que passou do ponto pra caramba, ta fedendo.",
      price: 0.0,
      autor: "Desconhecido",
    },
  ]

  let categorias = [
    {
      name: "Alimenticio",
      image: "https://picsum.photos/210",
      description: "Something, that makes lot of sense to me",
    },
    {
      name: "Eletronicos",
      image: "https://picsum.photos/211",
      description: "Something, that makes lot of sense to me",
    },
    {
      name: "Farmacos",
      image: "https://picsum.photos/213",
      description: "Something, that makes lot of sense to me",
    },
    {
      name: "Teatro",
      image: "https://picsum.photos/214",
      description: "Something, that makes lot of sense to me",
    },
    {
      name: "Musica",
      image: "https://picsum.photos/215",
      description: "Something, that makes lot of sense to me",
    },
    {
      name: "Jogos",
      image: "https://picsum.photos/219",
      description: "Something, that makes lot of sense to me",
    },
    {
      name: "Diversão",
      image: "https://picsum.photos/218",
      description: "Something, that makes lot of sense to me",
    },
    {
      name: "Diversos",
      image: "https://picsum.photos/216",
      description: "Something, that makes lot of sense to me",
    },
  ]
  return (
    <>
      <Header />
      <MenuNavigator routeListen={"produtos"} />
      <Container className={classes.paper}>
        <div className={classes.cardHeader}>
          <h1 className={classes.text}>Mais Vendidos</h1>
        </div>

        <div className={classes.mostSaler}>
          <div>
            <DinamicCard data={bestSell} />
          </div>
        </div>
        <Card className={classes.paperBody}></Card>

        <div className={classes.cardHeader}>
          <h1 className={classes.text}>Categorias</h1>
        </div>

        <div className={classes.mostSaler}>
          <div className={classes.divDinamic}>
            <DinamicCard
              onClick={redirectToTarget}
              variant={"category"}
              data={categorias}
            />
          </div>
        </div>
      </Container>
    </>
  )
}

export default Main
