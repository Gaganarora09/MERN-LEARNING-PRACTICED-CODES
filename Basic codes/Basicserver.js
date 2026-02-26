//BASIC SERVER
console.log("Hello, World Gagan");
console.log("This is the index.js file.");
function sum(a,b){
    return Number(a)+Number(b);
}

const express = require('express');
const app = express();
app.get('/',function(req,res){
    const a=req.query.a;
    const b=req.query.b;
    res.json(sum(a,b));
})
app.listen(3000);