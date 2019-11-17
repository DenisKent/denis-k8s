const express = require('express')
const app = express()
const port = 3000

console.log("here");

app.use((req, res, next) => {
  console.log(req.url);
  next();
})

app.get('/', (req, res) => res.send('Hello World4!'))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))