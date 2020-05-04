/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-key */
import React, { useState } from "react"

import Header from "../../components/Header"
import MenuNavigator from "../../components/MenuNavigator"
import {
  Container,
  Divider,
  IconButton,
  Button,
  Grid,
  TextField,
  Paper,
} from "@material-ui/core"
import DinamicCard from "../../components/DinamicCardProduct"
import Card from "@material-ui/core/Card"
import { useHistory } from "react-router-dom"
import ImageUploader from "react-images-upload"

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
    marginTop: "30px",
  },
  divDinamic: {
    marginTop: "-10px",
  },
  divLateral: {
    textAlign: "end",
    flex: 2,
    fontSize: "30px",
    color: primary.darkText,
    opacity: 0.8,
  },
  gridPrincipal: {
    padding: "40px",
  },
  buttons: {
    margin: "20px",
  },
  image: {
    borderRadius: "30px",
    marginTop: "40px",
  },
  textMeuPerfil: {
    fontSize: "30px",
  },
})

function MeuPerfil() {
  const classes = styles()
  let history = useHistory()
  const [pictures, setPictures] = useState()
  const [name, setName] = useState()
  const [category, setCategory] = useState()
  const [description, setDescription] = useState()
  const [contato, setContato] = useState()
  const [localidade, setLocalidade] = useState()
  const [links, setLinks] = useState()

  const onDrop = (picture) => {
    console.log(picture)
    setPictures(picture)
  }

  let user = {
    pictures: "https://picsum.photos/1500/",
    name: "Aroldo Goulart Barros",
    description: "Um jovem diferenciado",
    contato: "(65) 9.9816-3472",
    localidade: "Cuaibá - MT",
    link: [{ url: "https://github.com/snowlew" }],
  }

  let redirectToTarget = (to) => {
    history.push(`/${to}`)
  }

  let buttonSubmit = () => {
    alert("Produto Cadastrado!")
    redirectToTarget("produtos")
  }

  return (
    <>
      <Header />
      <MenuNavigator />
      <Container className={classes.paper}>
        <div className={classes.mostSaler}>
          <div>
            <form noValidate autoComplete="off">
              <Grid
                container
                direction="row"
                justify="space-evenly"
                alignItems="flex-start"
                className={classes.gridPrincipal}
                spacing={3}
              >
                <Grid item xs={6}>
                  <div>
                    <img
                      height={"20%"}
                      width={"100%"}
                      className={classes.image}
                      src={user.pictures}
                    />
                  </div>
                </Grid>
                <Grid item xs={6}>
                  <div className={classes.divLateral}>
                    <h1 className={classes.textMeuPerfil}>Meu Perfil</h1>

                    <TextField
                      value={name}
                      fullWidth
                      onChange={(event) => setName(event.target.value)}
                      id="filled-basic"
                      label="Nome"
                      variant="filled"
                      className={classes.buttons}
                    />
                    <TextField
                      fullWidth
                      value={name}
                      onChange={(event) => setName(event.target.value)}
                      id="filled-basic"
                      label="Contato"
                      variant="filled"
                      className={classes.buttons}
                    />
                    <TextField
                      value={name}
                      fullWidth
                      onChange={(event) => setName(event.target.value)}
                      id="filled-basic"
                      label="Localidade"
                      variant="filled"
                      className={classes.buttons}
                    />
                    <TextField
                      value={name}
                      fullWidth
                      onChange={(event) => setName(event.target.value)}
                      id="filled-basic"
                      label="Links"
                      variant="filled"
                      className={classes.buttons}
                    />
                    <TextField
                      value={name}
                      fullWidth
                      onChange={(event) => setName(event.target.value)}
                      id="filled-basic"
                      label="Description"
                      variant="filled"
                      multiline
                      rows={4}
                      className={classes.buttons}
                    />
                  </div>
                </Grid>
              </Grid>
            </form>
          </div>
        </div>
      </Container>
    </>
  )
}

export default MeuPerfil
