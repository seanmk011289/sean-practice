const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const morgan = require("morgan");
const router = require("./router/index");

const app = express();

app.use(bodyParser.json());
app.use(cors());
app.use(morgan("combined"));

app.use('/', router);

app.listen(process.env.PORT || 3000, () => {
    console.log("App is running")
})

