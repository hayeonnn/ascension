const express = require('express')
const app = express()
const PORT = 8001
app.set('views', __dirname+'/views');


app.use('/dist', express.static( __dirname + '/dist'));

app.get('/', (req, res) => {
  res.render('index')
})
app.listen(PORT, () => {
    console.log(`server started on PORT ${PORT}`)
})
// web.js