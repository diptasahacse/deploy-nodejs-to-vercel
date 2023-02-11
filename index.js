const express = require('express')
const app = express()
const port = 3000

app.get('/user', (req, res) => {
  res.send([
    {
        "id": 5,
        "name": "Dipta"
    }
  ])
})
app.get('/', (req, res) => {
  res.send("Site is running")
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})