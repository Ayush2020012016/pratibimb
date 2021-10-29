const express = require('express');
const app = express();
const fs = require('fs');
const port = 3000;


// stuff related to express
app.use('/static',express.static('static'));
app.use(express.urlencoded());//middleware to get data from form to express

// stuff related to pug
app.set('view engine', 'pug');

//endpoints
app.get('/',(req,res)=>{
    res.setHeader('content-type','text/html')
    res.end("this is a random file")
})

app.listen(port ,()=>{
    console.log("server started at port 3000");
})