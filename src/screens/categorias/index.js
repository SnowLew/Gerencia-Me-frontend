/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-key */
import React from "react"

import Header from "../../components/Header"
import MenuNavigator from "../../components/MenuNavigator"
import { Container, Card } from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles"
import DinamicCard from "../../components/DinamicCardProduct"
import colors from "../../colors"

let { primary } = colors

const styles = makeStyles({
  paper: {
    height: "90%",
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
  mostSaler: {
    backgroundColor: primary.lighBackgroundColor,
    display: "flex",
  },
})

function Categorias(props) {
  let mainText = props.match.params.category
  const classes = styles()

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

  return (
    <>
      <Header />
      <MenuNavigator />
      <Container className={classes.paper}>
        <div className={classes.cardHeader}>
          <h1 className={classes.text}>{mainText}</h1>
        </div>

        <div className={classes.mostSaler}>
          <div>
            <DinamicCard data={bestSell} />
          </div>
        </div>
        <Card className={classes.paperBody}></Card>
      </Container>
    </>
  )
}

export default Categorias
