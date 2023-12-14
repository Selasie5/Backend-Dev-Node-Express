const express = require("express");
const req = require("express/lib/request");
const app = express();
const port = 8080

//serving a specific json file thorugh a specific route
app.get("/json", (req,res)=>{
    res.json({
        "id":"1",
        "productName": "Logitech Mechanical Keyboard",
        "productPrice": "$230"
        
    })
})
app.listen(port, (()=>
{
    console.log("Server successfully started")
}))