const express=require('express');
const app =express();
app.listen(3000,()=>console.log('listening at 3000'));
// app.use(express.static('Home'));
app.use(express.static('Post'));
app.use(express.json( {limit:'1mb'}));


app.post('/api',(request,response)=>{
    console.log("i got a request");
    const data=request.body;
console.log(data);
response.json({
    status:'success',
    dd:data
});
});