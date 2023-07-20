const cors = require('cors');
const express = require('express');
const mongoose = require('mongoose');
const User = require('./model/user');
const config = require('./config.json');
const bodyParser = require('body-parser');
const app = express();

app.use(cors());

const jsonParser = bodyParser.json();

app.get('/attenders', async (req, res) => {
    const users = await User.find();
    res.send(users);
});

app.post('/post-form', jsonParser, async (req, res) => {
  res.send("okey");
});

mongoose.connect(
  config.connectionString,
  { useUnifiedTopology: true, useNewUrlParser: true },
  (req, res) => {
    console.log("Connected to database")
  }
);

app.listen(4000, function() {
    console.log('listening on 4000');
  });