/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-key */
import React from "react"

import Header from "../../components/Header"
import MenuNavigator from "../../components/MenuNavigator"
import { Container } from "@material-ui/core"
import DinamicCard from "../../components/DinamicCardProduct"
import { useHistory } from "react-router-dom"
import { makeStyles } from "@material-ui/core/styles"
import colors from "../../colors"
import api from "../../api"
import NotFound from "../../components/NotFound"

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

function Vendedores() {
  const classes = styles()
  let history = useHistory()

  const [obj, setObj] = React.useState()

  let showProducts = async () => {
    // let userId = Number(await localStorage.getItem("userId"))
    let products = await api().stores.getAllStores()
    let obj = []
    if(products) {
      for (let i = 0; i < products.length; i++) {
        /*
        console.log("user criado..")
        await api().stores.createStore({
          id: i,
          email: "aroldogooulart@gmail.com",
          name: `Lorem Ipsum ${i}`,
          address: "Cuiabá -Mt",
          desc: `Certus coelum videbo imo est aërem sit animus. Ego regi fuit dici imo ego esto mea. ${i}`,
          storeType: "food",
          userId,
        })
        */

        obj = [
          ...obj,
          {
            name: products[i].name,
            description: products[i].desc,
            image: `https://picsum.photos/20${i}`,
          },
        ]
      }
      setObj(obj)
    }
  }

  React.useEffect(() => {
    showProducts()
  }, [])

  let redirectToTarget = (to, param) => {
    history.push(`/${to}/${param}`)
  }

  return (
    <>
      <Header />
      <MenuNavigator routeListen={"vendedores"} />
      <Container className={classes.paper}>
        {obj && (
          <div className={classes.wallpaper}>
            <div className={classes.cardHeader}>
              <h1 className={classes.text}>Lojas</h1>
            </div>

            <div className={classes.mostSaler}>
              <div className={classes.divDinamic}>
                <DinamicCard
                  toGo={"produtos"}
                  onClick={redirectToTarget}
                  variant={"category"}
                  data={obj}
                />
              </div>
            </div>
          </div>
        )}
      </Container>
      {!obj && <NotFound/>}
    </>
  )
}

export default Vendedores
