/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-key */
import React from "react"

import Header from "../../components/Header"
import MenuNavigator from "../../components/MenuNavigator"
import { Container, Button } from "@material-ui/core"
import DinamicCard from "../../components/DinamicCardProduct"
import { useHistory } from "react-router-dom"

import { makeStyles } from "@material-ui/core/styles"
import colors from "../../colors"

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
  cardButton: {
    backgroundColor: primary.buttonDone,
    marginTop: "40px",
    width: "220px",
    opacity: 0.8,
    borderRadius: "8px",
    padding: "0px",
    "&:hover": {
      backgroundColor: primary.lightText,
    },
  },
  mostSaler: {
    backgroundColor: primary.lighBackgroundColor,
    display: "flex",
  },
  divDinamic: {
    marginTop: "-10px",
  },
  divRow: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  button: {
    alignSelf: "center",
  },
  buttonDiv: {
    justifySelf: "flex-end",
    alignSelf: "center",
    backgroundColor: primary.buttonDone,
    borderRadius: "10px",
  },
  textButton: {
    fontSize: "20px",
    color: primary.darkText,
    "&:hover": {
      color: primary.darkText,
    },
  },
})

function Carrinho() {
  const classes = styles()
  let history = useHistory()

  let redirectToTarget = (to, param) => {
    history.push(`/${to}/${param}`)
  }

  let bestSell = [
    {
      id: 0,
      name: "Banana Suprema",
      image: "https://picsum.photos/200",
      description: "Uma banana trazida por um ser supremo",
      price: 10.0,
      autor: "Desconhecido",
    },
    {
      id: 1,
      name: "Banana Plus",
      image: "https://picsum.photos/150",
      description: "Uma banana trazida por um ser anciao",
      price: 9.0,
      autor: "Desconhecido",
    },
    {
      id: 2,
      name: "Banana",
      image: "https://picsum.photos/210",
      description: "Uma banana normal",
      price: 4.0,
      autor: "Desconhecido",
    },
    {
      id: 3,
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
      <MenuNavigator routeListen={"carrinho"} />
      <Container className={classes.paper}>
        <div className={classes.wallpaper}>
          <div className={classes.divRow}>
            <div className={classes.cardHeader}>
              <h1 className={classes.text}>Carrinho</h1>
            </div>
            <div>
              <Button className={classes.cardButton}>
                <h1 className={classes.textButton}>Carrinho</h1>
              </Button>
            </div>
          </div>

          <div className={classes.mostSaler}>
            <div className={classes.divDinamic}>
              <DinamicCard
                toGo={"produtos"}
                onClick={redirectToTarget}
                data={bestSell}
                withRemover={true}
              />
            </div>
          </div>
        </div>
      </Container>
    </>
  )
}

export default Carrinho
