const express = require("express");
const app = express();
const port = 3000;

app.use("/",(req, res, next)=>
{
   console.log(`${req.method} ${req.path} -  ${req.ip}`)
    next();
})
app.listen(port, ((console.log("Server started"))))