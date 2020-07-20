/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-key */
import React, { useState } from "react"

import Header from "../../components/Header"
import MenuNavigator from "../../components/MenuNavigator"
import {
  Container,
  Button,
  TextField,
  Grid,
} from "@material-ui/core"
import { useHistory } from "react-router-dom"
import { makeStyles } from "@material-ui/core/styles"
import colors from "../../colors"

import api from "../../api"

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
    marginTop: "10px",
    marginBottom: "10px",
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
  formControl: {},
})

/*
function RenderSelect(props) {
  let obj = [{ value: null, label: "Criar Categoria" }]
  for (let i = 0; i < props.data.length; i++) {
    obj = [...obj, { value: props.data[i].name, label: props.data[i].name }]
  }
  return <Select options={obj} onChange={(e) => props.onChange("a")} />
}
*/

function CadastrarProduto() {
  const classes = styles()
  let history = useHistory()
  const [pictures, setPictures] = useState()
  const [name, setName] = useState()
  const [price, setPrice] = useState()
  const [category, setCategory] = useState()
  const [newCategory, setNewCategory] = useState()
  //const [categoryToSelect, setcategoryToSelect] = useState()
  const [description, setDescription] = useState()
  //const [showMenu, setshowMenu] = useState(false)

  /*
  function toogle(event) {
    event.preventDefault()
    setshowMenu(!showMenu)
  }
  */
  
  let redirectToTarget = (to) => {
    history.push(`/${to}`)
  }

  let buttonSubmit = async () => {
    let userId = Number(await localStorage.getItem("userId"))
    let categoryId = (await api().categories.getAllCategories().length) + 1

    if (newCategory) {
      let obj = {
        id: categoryId,
        name: newCategory,
        userId,
      }
      setCategory(newCategory)
      await api().categories.createCategory(obj)
    }

    let newProd = {
      id: (await api().products.getAllProducts().length) + 1,
      name,
      desc: description,
      imageUrl: pictures, // Can be null
      price,
      userId,
    }

    await api().products.createProduct(newProd)

    showData()
    alert("Produto Cadastrado!")

    redirectToTarget("produtos")
  }

  let showData = async () => {
    let a = await api().categories.getAllCategories()
    console.log(a)
  }

  return (
    <>
      <Header />
      <MenuNavigator />
      <Container className={classes.paper}>
        <div className={classes.wallpaper}>
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
                    <div>
                      <TextField
                        value={category}
                        onChange={(event) => setCategory(event.target.value)}
                        id="filled-basic"
                        label="Categoria"
                        variant="filled"
                      />
                    </div>
                  </div>
                </Grid>
                {!category && (
                  <Grid item xs={3}>
                    <div className={classes.div}>
                      <TextField
                        value={newCategory}
                        onChange={(event) => setNewCategory(event.target.value)}
                        id="filled-newCategory"
                        label="Criar Categoria"
                        variant="filled"
                        fullWidth
                      />
                    </div>
                  </Grid>
                )}
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
                <TextField
                  value={pictures}
                  onChange={(event) => setPictures(event.target.value)}
                  id="filled-IMAGE"
                  label="Link da Imagem"
                  variant="filled"
                  fullWidth
                />
              </div>

              <div className={classes.divButtons}>
                <Button
                  onClick={async () => await buttonSubmit()}
                  className={classes.enviar}
                >
                  <p>Enviar</p>
                </Button>
              </div>
            </form>
          </div>
        </div>
      </Container>
    </>
  )
}

export default CadastrarProduto

/*

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
                />*/
