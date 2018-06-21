const express = require("express")
const app = express()
const cors = require("cors")
const bodyParser = require("body-parser")

const PORT = 8080;

app.use(cors())
app.use(bodyParser.json())

// routes here

app.use((req,res,next) => {
  let err = new Error("Not Found")
  err.status = 404;
  next(err)
})

app.listen(PORT, () => {
  console.log(`Server is starting on port ${PORT}`)
})
