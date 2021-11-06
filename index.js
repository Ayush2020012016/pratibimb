const express = require('express');
const formidable = require('formidable');
const app = express();
const fs = require('fs');
const path = require("path");
const port = 80;


// stuff related to express
app.use('/static', express.static('post/static'));
app.use(express.urlencoded({ extended: true }));//middleware to get data from form to express
app.use(function (req, res, next) {
    req.rawHeaders['content-type'] = 'multipart/formdata';
    req.headers['content-type'] = 'multipart/formdata';
    next();
  });

// stuff related to pug
app.set('view engine', 'pug');
app.set('views', path.join(__dirname, '/post/views'))

//endpoints
app.get('/', (req, res) => {
    console.log(req.get('Content-Type') + "\n\n\nthis is content type\n\n\n");
    console.log(req.rawHeaders + "\n\n\nthis is raw headers \n\n\n\n\n\n")
    console.log(JSON.stringify(req.headers) + "\n\nthis is headers\n\n\n\n");
    res.status(200).render('create.pug');
})

app.post('/', (req, res) => {
    console.log(req.get('Content-Type'));

    // basic setup
    const form = new formidable.IncomingForm();
    const uploadfolder = path.join(__dirname, 'static/uploads')


    //  basic configuration
    form.maxFileSize = 50 * 1024 * 1024;
    form.uploadDir = uploadfolder;
    // parsing
    form.parse(req, async function (err, fields, files) {
        console.log(req.rawHeaders + "\n\n\nthis is rawheader of form");
        console.log(files, JSON.stringify(fields) + "\n\n\n\n this are files and fields of form");
        console.log(JSON.stringify(res) + "\n\n\nthis is res of form");
        res.status(400).render('create.pug');

    })

})


app.listen(port, () => {
    console.log("server started at port 80 \n\n\n\n\n");
})