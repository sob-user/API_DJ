const app = require('./app.js')

require('dotenv').config();

app.listen(
    process.env.PORT,
    console.log(
    `Server started on port ${process.env.PORT}`
));