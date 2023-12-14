const express = require("express");
const req = require("express/lib/request");
const app = express();
const port = 3000

//serving a specific json file thorugh a specific route
app.get("/json", (req,res)=>{
    const messageStyle = process.env.MESSAGE_STYLE;
    const jsonResponse = 
    {
        "id":"1",
        "productName": "Logitech Mechanical Keyboard",
        "productPrice": "$230"
    }
    const transformedResponse =transformedKeys(jsonResponse)
    res.json(transformedResponse)
   function transformedKeys(obj, style)
   {
    const transformedObj={};
    for (let key in obj)
    {
        if(Object.prototype.hasOwnProperty.call(obj,key))
        {
            transformedObj[style === "uppercase"? key.toUpperCase(): key.toLowerCase()]= obj[key];
        }
    }
    return transformedObj;
   } 
})
app.listen(port, (()=>
{
    console.log("Server successfully started")
}))