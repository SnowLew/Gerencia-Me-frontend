import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container'
import { makeStyles, withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField'

import Typography from '@material-ui/core/Typography'
import Link from '@material-ui/core/Link'

import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox'

import A from '../../image/logo.png'
import colors from '../../colors'
let { primary } = colors

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    width: '100%'
  },
  avatar: {
    marginTop: '8%',
    width: 100,
    height: 100,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: primary.lighBackgroundColor
  },
  image: {
    backgroundImage: 'url(null))',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },
  center: {
    backgroundColor: primary.backgroundColor,
    display: 'flex',
    flexDirection: 'column',
    alignSelf: 'center',
    alignItems: 'center',
    marginTop: '0.5%',
    maxWidth: '40%',
    borderRadius: 17,
    marginBottom: '0.5%',
    minWidth: 400,
  },
  formContent: {
    backgroundColor: primary.lighBackgroundColor,
    width: '70%',
    borderRadius: 10,
    padding: 15,
  },
  formInput: {
    marginTop: '6%',
 },
 headerText: {
   color: primary.lightText,
   fontSize: 28
 },
 textLogin: {
   color: primary.darkText,
   fontSize: 16,
   marginTop: '6%',
   textAlign: 'center'
 },
 buttonLogin: {
   color: primary.lightText,
   borderColor: 'white',
   marginTop: 15,
   fontSize: 20,
   opacity: 0.9,
   backgroundColor: primary.backgroundColor,
   "&:hover": {
     opacity: 1,
     color: primary.lightText,
     backgroundColor: primary.backgroundColor,
    }
 },
 copy: {
  color: primary.darkText,
  marginTop: 10,
  marginBottom: 10,

},
recovery:{
  padding: theme.spacing(1),
  alignContent: 'space-between',
},
textRecovery: {
  margin: theme.spacing(1),
},
link:{
  color: primary.darkTextPlus
},
field: {

}
}));

const GreenCheckbox = withStyles({
  root: {
    color: primary.darkText,
    '&$checked': {
      color: primary.backgroundColor,
    },
  },
  checked: {},
})((props) => <Checkbox color="default" {...props} />);


function Copyright() {
  const classes = useStyles();

  return (
    <Typography  className={classes.copy} align="center">
      {'Copyright © '}
      <Link className={classes.link} href="https://material-ui.com/">
        Gerencia-me 
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

export default function SignInSide() {
  const classes = useStyles();

  return (
    <Container className={classes.root}>
      <CssBaseline />
      <Container className={classes.image}>
        <Container elevation={5} className={classes.center}>
          <Avatar alt="BA" className={classes.avatar} src={A} />
          <h1 className={classes.headerText}>Gerencia-me</h1>
          <Container className={classes.formContent}>
            <h1 className={classes.textLogin}>Faça seu Log-in!</h1>
            <form noValidate autoComplete="off">

            <TextField 
            margin="normal"
            required
            fullWidth
            className={classes.formInput} 
            id="outlined-basic" 
            label='Usuario' 
            variant="outlined" 
              
            />

            <TextField margin="normal"
            required
            fullWidth
            color={primary.backgroundColor} 
            className={classes.formInput} id="outlined-basic" label="Senha" variant="outlined" />
           
           <FormControlLabel
            control={<GreenCheckbox value="remember" />}
            className={classes.checkbox}
            label="Lembrar-se"
          />

            <Button
              type="submit"
              href="/main"
              fullWidth
              variant={"outlined"} 
              className={classes.buttonLogin}>
            Login!
            </Button>  

            <Grid className={classes.recovery} container>
            <Grid className={classes.textRecovery}>
                <Link href="#" variant="body3">
                  Esqueceu a senha?
                </Link>
              </Grid>
              <Grid className={classes.textRecovery}>
                <Link href="#" variant="body3">
                  {"Cadastrar-se"}
                </Link>
              </Grid>
            </Grid>

            </form>

            
          </Container>  
          <Copyright/>
        </Container>
      </Container>
    </Container>
  );
}
