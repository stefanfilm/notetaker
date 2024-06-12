const express = require('express');
const app = express ();
const port = 3001 || process.env.PORT;
const htmlroutes = require("./routes/routeshtml")
const apiroutes = require("./routes/routesapi")
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));
app.use("/", htmlroutes)
app.use("/api", apiroutes)
app.listen(port, () => {
    console.log("the server is alive")
} )

