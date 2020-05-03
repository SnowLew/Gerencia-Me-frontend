
import React from 'react';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import { useHistory } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import colors from '../../colors'

let { primary } = colors;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-end',
    '& > *': {
      margin: '0px 0px 0px 0px',
    },
  },
  buttonGroup: {
  },
  button: {
      backgroundColor: primary.backgroundColorLowOpacity,
      color: primary.darkText,
      opacity: 0.98,
      padding: '15px',
      "&:hover": {
        opacity: 1,
        color: primary.darkTextPlus,
        backgroundColor: primary.backgroundColor,
    }
  }
}));


function MenuNavigator () {
    const classes = useStyles()

    let history = useHistory();

    let redirectToTarget = (to) => {
      console.log('aa')
      history.push(`/${to}`)
    }

    return(
        <div className={classes.root}>
        {RenderMenu()}
        <ButtonGroup 
        variant='default' 
        size="large" 
        fullWidth
        aria-label="large outlined primary button group"
        className={classes.buttonGroup}>           
            <Button onClick={() => console.log('opa')} className={classes.menu}>Menu</Button>
            <Button onClick={() => redirectToTarget('produtos')} className={classes.button}>Produtos</Button>
            <Button onClick={() => redirectToTarget('vendedores')} className={classes.button}>Vendedores</Button>
            <Button onClick={() => redirectToTarget('listaDesejos')} className={classes.button}>Lista de Desejos</Button>
            <Button onClick={() => redirectToTarget('carrinho')} className={classes.button}>Carrinho</Button>
        </ButtonGroup>
    </div>
    )
}

export default MenuNavigator