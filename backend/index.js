const connectToMongo=require('./db.js')
const express = require('express');
const cors = require('cors')
connectToMongo();
const app = express();
const port = 5000;
const bodyParser = require('body-parser')
app.use(cors())



app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());
app.use(bodyParser.json());
//Available Routes
app.use('/api/auth',require('./routes/auth'));
app.use('/api/notes',require('./routes/notes'))

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })