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
  TextField,
  Grid,
} from "@material-ui/core"
import Paper from "@material-ui/core/Paper"
import FavoriteIcon from "@material-ui/icons/Favorite"
import DinamicCard from "../../components/DinamicCardProduct"
import Card from "@material-ui/core/Card"
import ImageUploader from "react-images-upload"

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
  newProductsBody: {
    backgroundColor: primary.lighBackgroundColor,
  },
  divName: {
    display: "flex",
  },
  form: {
    padding: "30px",
  },
  divPrice: {},
  divDescricao: {},
  div: {
    paddingTop: "5px",
  },
  divDescripton: {
    marginTop: "30px",
  },
  productImage: {
    display: "flex",
    flexDirection: "row",
  },
  enviar: {
    padding: "2px",
    width: "200px",
    backgroundColor: primary.buttonDone,
    marginRight: "40px",
  },
  limpar: {
    padding: "2px",
    width: "200px",
    backgroundColor: primary.buttonClean,
  },
  divButtons: {
    alignSelf: "center",
  },
})

function CadastrarProduto() {
  const classes = styles()
  let history = useHistory()
  const [pictures, setPictures] = useState()
  const [name, setName] = useState()
  const [price, setPrice] = useState()
  const [category, setCategory] = useState()
  const [description, setDescription] = useState()

  const onDrop = (picture) => {
    console.log(picture)
    setPictures(picture)
  }

  let redirectToTarget = (to) => {
    history.push(`/${to}`)
  }

  let buttonSubmit = () => {
    let newProd = {
      name,
      price,
      category,
      description,
      pictures,
    }
    console.log(newProd)
    alert("Produto Cadastrado!")
    redirectToTarget("produtos")
  }

  return (
    <>
      <Header />
      <MenuNavigator />
      <Container className={classes.paper}>
        <div className={classes.cardHeader}>
          <h1 className={classes.text}>Cadastrar Produtos</h1>
        </div>
        <div className={classes.newProductsBody}>
          <form className={classes.form} noValidate autoComplete="off">
            <Grid container spacing={3}>
              <Grid item xs={3}>
                <div className={classes.div}>
                  <TextField
                    value={name}
                    onChange={(event) => setName(event.target.value)}
                    id="filled-basic"
                    label="Nome"
                    variant="filled"
                  />
                </div>
              </Grid>
              <Grid item xs={3}>
                <div className={classes.div}>
                  <TextField
                    value={price}
                    onChange={(event) => setPrice(event.target.value)}
                    id="filled-basic"
                    label="Preço"
                    variant="filled"
                  />
                </div>
              </Grid>
              <Grid item xs={3}>
                <div className={classes.div}>
                  <TextField
                    value={category}
                    onChange={(event) => setCategory(event.target.value)}
                    id="filled-basic"
                    label="Categoria"
                    variant="filled"
                  />
                </div>
              </Grid>
            </Grid>

            <div className={classes.divDescripton}>
              <TextField
                value={description}
                onChange={(event) => setDescription(event.target.value)}
                id="filled-basic"
                label="Descrição"
                variant="filled"
                fullWidth
                multiline
                rows={10}
              />
            </div>
            <div className={classes.productImage}>
              <ImageUploader
                withIcon={true}
                label={"Foto do seu Produto"}
                buttonText="Enviar Imagem"
                onChange={onDrop}
                imgExtension={[".jpg", ".png", ".jpeg"]}
                maxFileSize={5242880}
                buttonStyles={{
                  color: primary.lightText,
                  backgroundColor: primary.backgroundColor,
                  padding: "10px",
                }}
                withPreview
              />
            </div>

            <div className={classes.divButtons}>
              <Button onClick={() => buttonSubmit()} className={classes.enviar}>
                <p>Enviar</p>
              </Button>
            </div>
          </form>
        </div>
      </Container>
    </>
  )
}

export default CadastrarProduto
