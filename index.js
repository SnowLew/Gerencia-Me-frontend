const express = require("express")
const path = require("path")
const PORT = process.env.PORT || 8888
const appprincipal = require("./src/indx")

express()
  .use(express.static(path.join(__dirname, "public")))
  .get(appprincipal)
  .listen(PORT, () => console.log(`Listening on ${PORT}`))
