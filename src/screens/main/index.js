import React from "react"

import TabMenu from "../../components/TabMenu"
import Header from "../../components/Header"
import MenuNavigator from "../../components/MenuNavigator"
import { Container } from "@material-ui/core"
import Paper from "@material-ui/core/Paper"
import Card from "@material-ui/core/Card"

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
  productBody: {},
  productName: {
    color: "black",
    padding: 200,
  },
  heading: {
    fontSize: 17,
    fontWeight: "bold",
    letterSpacing: "0.5px",
    marginBottom: 0,
    marginRight: "25px",
    display: "inline-block",
  },
  rating: {
    verticalAlign: "text-top",
  },
  body: {
    fontSize: 14,
    color: "gray",
  },
  divider: {
    margin: "8px",
  },
  cardRoot: {
    width: "250px",
  },
  media: {
    width: "100%",
    height: "150px",
    margin: 0,
  },
  textAutor: {
    fontSize: "12px",
  },
  row: {
    display: "flex",
    flexDirection: "row",
  },
  textPrice: {
    flex: 3,
  },
  IconButton: {
    flex: 5,
  },
})

const NewContainer = withStyles((theme) => ({
  root: {
    width: "100%",
    height: "100%",
    backgroundColor: primary.backgroundColor,
    marginTop: 0,
    opacity: 0.89,
    // width: '100%'
  },
}))((props) => <Paper {...props} />)

function Main() {
  const classes = styles()

  return (
    <>
      <Header />
      <MenuNavigator />
      <Container className={classes.paper}>
        <Card className={classes.cardHeader}>
          <h1 className={classes.text}>Mais Vendidos</h1>
        </Card>

        <Card className={classes.paperBody}></Card>
      </Container>
    </>
  )
}

export default Main
