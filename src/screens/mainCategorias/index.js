/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-key */
import React from "react"

import Header from "../../components/Header"
import MenuNavigator from "../../components/MenuNavigator"
import { Container, Divider, IconButton, Button } from "@material-ui/core"
import DinamicCard from "../../components/DinamicCardProduct"
import Card from "@material-ui/core/Card"
import { useHistory } from "react-router-dom"

import { makeStyles, withStyles } from "@material-ui/core/styles"
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

  let categorias = [
    {
      name: "Alimenticio",
      image: "https://picsum.photos/210",
      description: "Something, that makes lot of sense to me",
    },
  ]
  return (
    <>
      <Header />
      <MenuNavigator routeListen={"mainCategorias"} />
      <Container className={classes.paper}>
        <div className={classes.wallpaper}>
          <div className={classes.cardHeader}>
            <h1 className={classes.text}>Categorias</h1>
          </div>

          <div className={classes.mostSaler}>
            <div className={classes.divDinamic}>
              <DinamicCard
                toGo={"categorias"}
                onClick={redirectToTarget}
                variant={"category"}
                data={categorias}
              />
            </div>
          </div>
        </div>
      </Container>
    </>
  )
}

export default Main
