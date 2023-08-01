const express = require('express')
const app = express()
const port = 3000


app.use( express.static('public') ) 


app.get('/home', (req, res, next) => {
  res.sendFile( __dirname + '/views/home.html')
})


app.get('/about', (req, res, next) => {
  res.sendFile( __dirname + '/views/about.html')
})


app.get('/works', (req, res, next) => {
  res.sendFile( __dirname + '/views/works.html')
})


app.get('/gallery', (req, res, next) => {
  res.sendFile( __dirname + '/views/gallery.html')
})








app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})