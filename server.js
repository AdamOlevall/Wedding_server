import cors from 'cors';
import express from 'express';
import mongoose from 'mongoose';
import User from './model/user';

var bodyParser = require('body-parser');

require("dotenv/config");

const app = express();

app.use(cors());

var jsonParser = bodyParser.json()


app.get('/users', async (req, res) => {
    const users = await User.find();
    res.send(users);
})

app.post('/create-user', jsonParser, async (req, res) => {
  try {
    const myUser = new User(req.body);
    await myUser.save();
    res.send(myUser);
  } catch (err) {
    res.status(400).send(err);
  }
})

mongoose.connect(
  process.env.DB_CONNECTION_STRING,
  { useUnifiedTopology: true, useNewUrlParser: true },
  (req, res) => {
    console.log("Connected to database")
  }
);

app.listen(process.env.PORT, function() {
    console.log(`listening on ${process.env.PORT}`)
  })