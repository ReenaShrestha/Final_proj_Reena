const express = require('express')
const port = process.env.PORT || 3000
const app = express()



app.use(express.static('public'))
app.set('view engine','pug')
app.get('/', (req, res) => {
  res.render('index', {});
});
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})