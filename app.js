const express = require('express');
const port = process.env.port || 5000;
const app = express();

// response to send for GET request from browser
app.get('/', (req, res) => {
    res.send('App is firing!');
});

// listening for connections to app
app.listen(port, () => { console.log(`The server is running at port ${port}`); });
module.exports = app