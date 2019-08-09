const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const path = require('path');

const postsRouters = require('./routes/posts');
const userRouters = require('./routes/user');

const app = express();
// mongoose.connect('mongodb+srv://max:Uz04LDKtf21yRj6Z@cluster0-fby03.mongodb.net/node-angular?retryWrites=true&w=majority', { useNewUrlParser: true })
mongoose.connect('mongodb://localhost:27017/node-angular', { useNewUrlParser: true })
  .catch(() => {
    console.log('Connection failed.')
  });

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use('/images', express.static(path.join('backend/images')));

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'Origin, X-Resquested-With, Content-Type, Accept, Authorization'
  );
  res.setHeader(
    'Access-Control-Allow-Methods',
    'GET, POST, PATCH, PUT, DELETE, OPTIONS'
  );
  next();
});

app.use('/api/posts', postsRouters);
app.use('/api/user', userRouters);

module.exports = app;
//Uz04LDKtf21yRj6Z
//mongodb+srv://max:Uz04LDKtf21yRj6Z@cluster0-fby03.mongodb.net/test?retryWrites=true&w=majority
