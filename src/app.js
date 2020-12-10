const express = require('express');
const morgan = require('morgan');
const cors = require('cors')
const db = require('./config/database');

const app = express();

app.use(cors())
app.use(morgan('dev'));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.get('/', (req, res) => {
    res.send('Welcome on djs API');
})

db.authenticate()
    .then(() => console.log('Database connected'))
    .catch(err => console.log('Error: ' + err))

module.exports = app