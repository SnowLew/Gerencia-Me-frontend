/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-key */
import React from "react"

import Header from "../../components/Header"
import MenuNavigator from "../../components/MenuNavigator"
import { Container, Divider, IconButton, Button } from "@material-ui/core"
import DinamicCard from "../../components/DinamicCardProduct"
import Card from "@material-ui/core/Card"
import { useHistory } from "react-router-dom"
import api from "../../api"

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
  const [obj, setObj] = React.useState()

  let redirectToTarget = (to, param) => {
    history.push(`/${to}/${param}`)
  }

  let b = async () => {
    let products = await api().categories.getAllCategories()
    let obj = []
    for (let i = 0; i < products.length; i++) {
      obj = [
        ...obj,
        {
          name: products[i].name,
          description: "",
          image: `https://picsum.photos/20${i}`,
        },
      ]
    }
    console.log(obj)
    setObj(obj)
  }
  React.useEffect(() => {
    b()
  }, [])

  return (
    <>
      <Header />
      <MenuNavigator routeListen={"mainCategorias"} />
      <Container className={classes.paper}>
        {obj && (
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
                  data={obj}
                />
              </div>
            </div>
          </div>
        )}
      </Container>
    </>
  )
}

export default Main
