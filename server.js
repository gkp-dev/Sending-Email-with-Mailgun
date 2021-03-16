const express = require('express');
const app = express();
require('dotenv').config()


const mail = require('./routes/mail')

app.use('/api/mail', mail)


const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`My app is listening on port ${port}...`)
})