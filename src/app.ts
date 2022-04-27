import dotenv from 'dotenv'
import express from 'express'

dotenv.config()

const app = express()
const port = process.env.PORT || 3000
app.get('/', (req, res) => {
  res.send(`Welcome to Node Starter | Made with <3 by @paolodapul`)
})

app.listen(port, () => {
  return console.log(
    `Express is listening at http://localhost:${process.env.PORT}`,
  )
})
