const express = require('express');
const path = require('path');

const port = 3007;
const app = express();

app.use('/', express.static(path.join(__dirname, '../public')));

app.listen(port, () => { console.log(`server up and running. Now listing on port ${port}`) });