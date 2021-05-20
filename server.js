const cors = require('cors');
const express = require('express');
const mongoose = require('mongoose');
const nodemailer = require('nodemailer');
const User = require('./model/user');
const config = require('./config.json');
const bodyParser = require('body-parser');
const app = express();

app.use(cors());

const jsonParser = bodyParser.json();

var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'adamolevall@gmail.com',
        pass: 'ynwa1892'
    }
});


app.get('/users', async (req, res) => {
    const users = await User.find();
    console.log("what", users);
    res.send(users);
});

app.post('/create-user', jsonParser, async (req, res) => {
    console.log("test", req.body);
    var mailOptions = {
        from: 'adamolevall@gmail.com',
        to: 'einarssonwedding@gmail.com',
        subject: req.body.firstName + ' ' + req.body.lastName,
        text: `Namn: ${req.body.firstName} ${req.body.lastName}\nMail: ${req.body.mail}\nTelefon: ${req.body.phone}\nKommer dagen innan: ${req.body.dayBefore}\nKommer på bröllopet: ${req.body.weddingDay}\nKött: ${req.body.meat}\nFisk: ${req.body.fish}\nVegan: ${req.body.vegan}\nVegetariskt: ${req.body.vegetarian}\nTransport: ${req.body.transport}`,
    };
    await transporter.sendMail(mailOptions, function(error, info){
        if (error) {
            console.log(error);
        } else {
            console.log('Email sent: ' + info.response);
        }
    });
  try {
    const myUser = new User(req.body);
    await myUser.save();
    res.send(myUser);
  } catch (err) {
    res.status(400).send(err);
  }
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