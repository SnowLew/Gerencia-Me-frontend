/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-key */
import React from "react"

import { Container, Divider, IconButton, Button } from "@material-ui/core"
import Paper from "@material-ui/core/Paper"
import FavoriteIcon from "@material-ui/icons/Favorite"
import RemoveShoppingCartIcon from "@material-ui/icons/RemoveShoppingCart"
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart"

import Card from "@material-ui/core/Card"

import { makeStyles, withStyles } from "@material-ui/core/styles"
import colors from "../../colors"

let { primary } = colors

const styles = makeStyles({
  text: {
    textAlign: "center",
    fontSize: "20px",
  },
  paperBody: {
    backgroundColor: primary.lighBackgroundColor,
    display: "flex",
    flexDirection: "row",
  },
  heading: {
    fontSize: 17,
    fontWeight: "bold",
    letterSpacing: "0.5px",
    marginBottom: 0,
    marginRight: "25px",
    display: "inline-block",
  },
  body: {
    fontSize: 14,
    color: "gray",
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
  mostSaler: {
    backgroundColor: primary.lighBackgroundColor,
    display: "flex",
  },
  mostSalerCards: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
  },
  mostSalerBackground: {
    padding: "7px",
    margin: "10px",
    height: "450px",
    width: "250px",
  },
  mostSalerBackgroundFour: {
    padding: "7px",
    margin: "10px",
    height: "450px",
    width: "250px",
    marginTop: "-100px",
  },
  mostSalerTextHeader: {
    fontSize: "25px",
  },
  mostSalerTextAutor: {
    fontSize: "15px",
    opacity: 0.6,
    marginTop: "-12px",
  },
  mostSalerImage: {
    width: "100%",
    height: "200px",
    marginTop: "5px",
    borderRadius: "10px",
  },
  mostSalerDivParagraf: {
    height: "60px",
  },
  mostSalerDivFooter: {
    display: "flex",
    flexDirection: "row",
  },
  mostSalerTextFooter: {
    textAlign: "end",
    flex: 2,
    fontSize: "30px",
    color: primary.darkText,
    opacity: 0.8,
  },
})

function RenderCard(props) {
  const classes = styles()
  let renderObj = []
  let { data } = props
  if (props.variant) {
    for (let i = 0; i < data.length; i++) {
      renderObj = [
        ...renderObj,
        <Paper
          elevation={0}
          className={
            i >= 4
              ? classes.mostSalerBackgroundFour
              : classes.mostSalerBackground
          }
        >
          <h1 className={classes.mostSalerTextHeader}>{data[i].name}</h1>
          <img className={classes.mostSalerImage} src={data[i].image} />
          <div className={classes.categoriasDe}>
            <p>{data[i].description}</p>
          </div>
          <Divider />
          <Button onClick={() => props.onClick(props.toGo, data[i].name)}>
            {" "}
            Ver mais{" "}
          </Button>
        </Paper>,
      ]
    }

    return <div className={classes.mostSalerCards}>{renderObj}</div>
  }

  for (let i = 0; i < data.length; i++) {
    renderObj = [
      ...renderObj,
      <Paper elevation={0} className={classes.mostSalerBackground}>
        <h1 className={classes.mostSalerTextHeader}>{data[i].name}</h1>
        <h4 className={classes.mostSalerTextAutor}>@{data[i].autor}</h4>
        <img className={classes.mostSalerImage} src={data[i].image} />
        <div className={classes.mostSalerDivParagraf}>
          <p>{data[i].description}</p>
        </div>
        <Divider />
        <div className={classes.mostSalerDivFooter}>
          <IconButton>
            <FavoriteIcon />
          </IconButton>
          {props.withRemover && (
            <IconButton>
              <RemoveShoppingCartIcon />
            </IconButton>
          )}
          {props.withMarket && (
            <IconButton>
              <ShoppingCartIcon />
            </IconButton>
          )}

          <h1 className={classes.mostSalerTextFooter}>$ {data[i].price} </h1>
        </div>
      </Paper>,
    ]
  }

  return <div className={classes.mostSalerCards}>{renderObj}</div>
}

export default RenderCard
