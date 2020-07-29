const express = require("express");
const bodyParser = require("body-parser");
require("dotenv").config();

const app = express();

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

//routes

require("./src/routes/users.route")(app);

let port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log("Server is listening to the port : " + port);
});