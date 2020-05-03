import React from 'react';

import colors from '../../colors'

import { makeStyles, withStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container'
import Paper from '@material-ui/core/Paper'
import Card from '@material-ui/core/Card'
import { CardContent, Box, CardMedia } from '@material-ui/core';
import Rating from '@material-ui/lab/Rating';
import Divider from '@material-ui/core/Divider';
import { usePushingGutterStyles } from '@mui-treasury/styles/gutter/pushing';
import { useLabelIconStyles } from '@mui-treasury/styles/icon/label';
import { useRowFlexStyles } from '@mui-treasury/styles/flex/row';

let { primary } = colors;


const NewContainer = withStyles((theme) => ({
    root: {
        width: '100%',
        height: 1000,
        backgroundColor: primary.backgroundColor,
        marginTop: 0,
        opacity: 0.89,
        width: '100%'
    },
  }))((props) => <Paper {...props} />);

const styles = makeStyles({
  paper: {
    height: '100%',
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
    margin: '25px'
  },
  cardRoot: {
    width: '250px'
  },
  media: {
    width: 300
  }
});


function renderProducts() {
  const classes = styles()


  let produtsData = [
    {
      name: 'Abacate',
      description: 'Um produto muito gostoso e saudavel',
      price: 20.3
    }
  ]

  let renderObj = [];
  for(let i=0; i < produtsData.length; i++) {
    renderObj = [...renderObj, <h1>{produtsData[i].name}</h1>]

  }
  
  return (
    <Card elevation={2} className={classes.cardRoot}> 
      <CardContent>
        <Box>
          <h3 className={classes.heading}>{produtsData[0].name}</h3>
            <Rating
              name={'rating'}
              value={2}
              className={classes.rating}
              size={'small'}
            />
        </Box>
        <p className={classes.body}>
          Lorem ipsum is placeholder text commonly used in the graphic, print,
          and publishing industries for previewing layouts and visual mockups.
          credit (www.brighttv.co.th)
        </p>
        <Divider className={classes.divider} light />

      </CardContent>
    </Card>
  ) 
}


function mainPage(props) {
  const classes = styles()

    return(
        <Container className={classes.paper}>
          <Card className={classes.cardHeader}> 
            <h1 className={classes.text}>Mais Vendidos</h1>
          </Card>
          <Card className={classes.paperBody}>
          {renderProducts()}
          </Card>
        </Container>
    )
  }
  
export default mainPage;