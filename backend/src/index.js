require('dotenv').config();

const express = require('express');
const routes = require('./routes');
const cors = require('cors');

const app = express();

const corsOptions = {
    exposedHeaders: 'X-Total-Count',
};

app.use(cors(corsOptions));
app.use(express.json());
app.use(routes);


const mongoose = require('mongoose');

mongoose.connect(process.env.MONGO_ACESS_TOKEN, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false
});

mongoose.connection.on('error', console.error.bind(console, 'connection error'));

mongoose.connection.once('open', () => {console.log('database connect!');});

app.listen(3333);