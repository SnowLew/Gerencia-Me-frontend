import React from "react"

import Logo from "../../image/logo.png"
import Avatar from "@material-ui/core/Avatar"

import { withStyles } from "@material-ui/core/styles"
import Grid from "@material-ui/core/Grid"

const Image = withStyles((theme) => ({
  root: {
    width: "250px",
    height: "30%",
    backgroundImage: Logo,
    margin: "10px 60px 0px 65px",
  },
}))((props) => <Avatar src={Logo} {...props} />)

/*
const useStyles = makeStyles((theme) => ({
  root: {
    padding: "8px 10px 0px 5px ",
    display: "flex",
    alignItems: "center",
    width: 300,
    marginRight: "20px",
    marginTop: "10px",
  },
  input: {
    marginLeft: 10,
    flex: 1,
  },
  iconButton: {
    padding: 12,
  },
}))
*/

function Header() {
  return (
    <>
      <Grid
        container
        direction="row"
        justify="space-between"
        alignItems="center"
      >
        <Image />
      </Grid>
    </>
  )
}

export default Header

/*

 <Paper elevation={3} component="form" className={classes.root}>
          <InputBase
            className={classes.input}
            placeholder="Pesquise aqui seu produto"
            inputProps={{ "aria-label": "Pesquisa-produto" }}
          />
          <IconButton
            type="submit"
            className={classes.iconButton}
            aria-label="search"
          >
            <SearchIcon />
          </IconButton>
        </Paper>

        */
