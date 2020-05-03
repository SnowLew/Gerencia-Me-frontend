import React from 'react';

import TabMenu from '../../components/TabMenu'
import Header from '../../components/Header'
import MainPage from '../../components/mainPage'
import { Container } from '@material-ui/core';
import Paper from '@material-ui/core/Paper'
import Card from '@material-ui/core/Card'
import { CardContent, Box, CardMedia } from '@material-ui/core';
import Rating from '@material-ui/lab/Rating';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import Grid from '@material-ui/core/Grid';
import clsx from 'clsx';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';

import { makeStyles, withStyles } from '@material-ui/core/styles';
import colors from '../../colors'
let { primary } = colors;

const styles = makeStyles({
  paper: {
    height: '150%',
    backgroundColor: primary.backgroundColor,
    width: '100%',
    position: "absolute",
  },
  cardHeader: {
    backgroundColor: primary.lighBackgroundColor,
    marginTop: '40px',
    width: '220px',
    padding: '4px',
    opacity: 0.8
  },
  text:{
    textAlign: 'center',
    fontSize: '20px'
  },
  paperBody: {
    backgroundColor: primary.lighBackgroundColor,
    display: 'flex',
    flexDirection: 'row'
  },
  productBody:{

  },
  productName:{
    color: 'black',
    padding: 200,
  },
  heading: {
    fontSize: 17,
    fontWeight: 'bold',
    letterSpacing: '0.5px',
    marginBottom: 0,
    marginRight: '25px',
    display: 'inline-block',
  },
  rating: {
    verticalAlign: 'text-top',
  },
  body: {
    fontSize: 14,
    color: 'gray',
  },
  divider: {
    margin: '8px'
  },
  cardRoot: {
    width: '250px',
  },
  media: {
    width: '100%',
    height: '150px',
    margin: 0
  },
  textAutor: {
    fontSize: '12px'
  },
  row: {
    display: 'flex',
    flexDirection: 'row'
  },
  textPrice: {
    flex: 3
  },
  IconButton: {
    flex: 5
  }
});

const NewContainer = withStyles((theme) => ({
  root: {
      width: '100%',
      height: '100%',
      backgroundColor: primary.backgroundColor,
      marginTop: 0,
      opacity: 0.89,
      width: '100%'
  },
}))((props) => <Paper {...props} />);

function renderProducts(expanded,setExpanded,handleExpandClick) {
  const classes = styles()

  let lastProduct = [
    {
      
    }
  ]
  let produtsData = [
    {
      name: 'Abacate',
      description: 'Um produto muito gostoso e saudavel',
      price: 20.3,
      urlProduct: 'https://picsum.photos/200/300',
      autor: 'Lorem Ipsum'
    },
    {
      name: 'Abacate',
      description: 'Um produto muito gostoso e saudavel',
      price: 20.3,
      urlProduct: 'https://picsum.photos/200/300',
      autor: 'Lorem Ipsum'
    },
    {
      name: 'Abacate',
      description: 'Um produto muito gostoso e saudavel',
      price: 20.3,
      urlProduct: 'https://picsum.photos/200/300',
      autor: 'Lorem Ipsum'
    },
    {
      name: 'Abacate',
      description: 'Um produto muito gostoso e saudavel',
      price: 20.3,
      urlProduct: 'https://picsum.photos/200/300',
      autor: 'Lorem Ipsum'
    },
    {
      name: 'Abacate',
      description: 'Um produto muito gostoso e saudavel',
      price: 20.3,
      urlProduct: 'https://picsum.photos/200/300',
      autor: 'Lorem Ipsum'
    },
    {
      name: 'Abacate',
      description: 'Um produto muito gostoso e saudavel',
      price: 20.3,
      urlProduct: 'https://picsum.photos/200/300',
      autor: 'Lorem Ipsum'
    },

  ]

  let renderObj = [];
  for(let i=0; i < produtsData.length; i++) {
    renderObj = [...renderObj, (
      <Card elevation={2} className={classes.cardRoot}> 
      <CardContent>
        <Box>
          <h3 className={classes.heading}>{produtsData[i].name}</h3>
        </Box>
        <p className={classes.textAutor}>{produtsData[i].autor}</p>

        <Divider className={classes.divider} light />

        <img
          className={classes.media}
          src={produtsData[i].urlProduct}
          title="Paella dish"
        />        
        <Divider className={classes.divider} light />
        <p className={classes.body}>
          {produtsData[i].description}
        </p>

        <div className={classes.row}>
          <IconButton
            className={classes.IconButton}
            onClick={handleExpandClick}
            aria-label="show more"
          >
            <ShoppingCartIcon/>
          </IconButton>
          <p className={classes.textPrice}> 
            {`$ ${produtsData[i].price}`}
          </p>
        </div>
        
      </CardContent>
    </Card>
    )]

  }
  
  return renderObj
}



function Main() {
  const classes = styles()
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return(
    <> 
      <Header/>

        <TabMenu aria_label={'menu-principal'}>
          <h1>Produtos</h1>
          <h1>Vendedores</h1>
          <h1>Mais Vendidos</h1>
          <h1>Lista de Desejos</h1>
          <h1>Carrinho</h1>
        </TabMenu>

        <Container className={classes.paper}>
          <Card className={classes.cardHeader}> 
            <h1 className={classes.text}>Mais Vendidos</h1>
          </Card>
          
          <Card className={classes.paperBody}>
          {renderProducts(expanded,setExpanded,handleExpandClick)}
          </Card>

          <Card className={classes.cardHeader}> 
            <h1 className={classes.text}>Recentes</h1>
          </Card>
          
          <Card className={classes.paperBody}>
          {renderProducts(expanded,setExpanded,handleExpandClick)}
          </Card>

          <Card className={classes.cardHeader}> 
            <h1 className={classes.text}>Lorem Ipsum</h1>
          </Card>
          
          <Card className={classes.paperBody}>
          {renderProducts(expanded,setExpanded,handleExpandClick)}
          </Card>

         
        </Container>
        

    </>
  )
}

export default Main;