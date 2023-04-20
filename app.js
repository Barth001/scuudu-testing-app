const express = require('express');
const bodyParser = require('body-parser');
const routers = require("./src/router/indexRoute");
const app = express();


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json())


app.use("/api/v1", routers);

// listening for connections to app
const port = process.env.port || 5000;
app.listen(port, () => { console.log(`The server is running at port ${port}`); });
module.exports = app;