const cors = require('cors');
const express = require('express');
const mongoose = require('mongoose');
const User = require('./model/user');
const Task = require('./model/task');
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
  try {
    const myUser = new User(req.body); 
    await myUser.save();
    res.status(200).send();
  } catch (err) {
    res.status(400).send(err);
  }
});

app.post('/post-task', jsonParser, async (req, res) => {
  try {
    const task = new Task(req.body); 
    await task.save();
    res.status(200).send();
  } catch (err) {
    res.status(400).send(err);
  }
});

app.get('/tasks', async (req, res) => {
  const tasks = await Task.find();
  res.send(tasks);
});

app.put('/add-assignee', jsonParser, async (req, res) => {
  await Task.findOneAndUpdate({id: req.body.id}, {assignee: req.body.assignee});
  res.status(200).send();
});

app.put('/toggle-complete-task', jsonParser, async (req, res) => {
  await Task.findOneAndUpdate({id: req.body.id}, {isDone: req.body.isDone});
  res.status(200).send();
});

mongoose.connect(
  config.connectionString,
  { useUnifiedTopology: true, useNewUrlParser: true, useFindAndModify: false },
  (req, res) => {
    console.log("Connected to database")
  }
);

app.listen(4000, function() {
    console.log('listening on 4000');
  });