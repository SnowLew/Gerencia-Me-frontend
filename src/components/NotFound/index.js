import React from "react"
import Grid from "@material-ui/core/Grid"
import gif from '../../image/NotFound.gif'

function NaoEncontrado() {
  return (
    <>
      <Grid
        container
        direction="row"
        alignItems="center"
        style={{textAlign: 'center', padding: '5%', justifyContent: 'center' }}
      >
        <img width="350" height="350" src={gif} alt=" Nada encontrado." />
        <h1> Ainda não há nada cadastrado ! </h1>
      </Grid>
    </>
  )
}

export default NaoEncontrado

