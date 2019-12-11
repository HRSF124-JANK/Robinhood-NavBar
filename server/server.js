const express = require('express');
const path = require('path');
const port = 3000;

const app = express();

app.use('/', express.static(path.join(__dirname, '../public')));
// app.use('/', express.static('http://localhost:3001/Public'));

app.get('/graph/getStocks', (req, res) => {
  res.redirect(`http://localhost:3001/graph/getStocks?${Object.keys(req.query)[0]}=${req.query.id}`);
})
app.get('/graph/img/:photo', (req, res) => {
  res.redirect(`http://localhost:3001/graph/img/${path.basename(req.url)}`)
})

app.get('/tradeStock/api/:id', (req, res) => {
  res.redirect(`http://localhost:3002/tradeStock/api/${path.basename(req.url)}`);
})
app.get('/tradeStock/img/:photo', (req, res) => {
  res.redirect(`http://localhost:3001/img/${path.basename(req.url)}`)
})

app.get('/about/getData/:id', (req, res) => {
  res.redirect(`http://localhost:3003/about/getData/${req.params.id}`);
})

app.get('/news/getData', (req, res) => {
  res.redirect(`http://localhost:3004/news/getData?${Object.keys(req.query)[0]}=${req.query.id}`);
})

app.get('/ratings/getData/:id', (req, res) => {
  res.redirect(`http://localhost:3005/ratings/getData/${req.params.id}`);
})
app.get('/ratings/img/:photo', (req, res) => {
  res.redirect(`http://localhost:3001/img/${path.basename(req.url)}`)
})

app.get('/earnings/getData', (req, res) => {
  res.redirect(`http://localhost:3006/earnings/getData?${Object.keys(req.query)[0]}=${req.query.id}`);
})

app.listen(port, () => { console.log(`server up and running. Now listing on port ${port}`) });