const express = require('express');
const hbs = require('hbs');



var app = express();

//Express middleware
hbs.registerPartials(__dirname+'/views/partials');
app.set('view engine','hbs');
app.use(express.static(__dirname+'/public'));

//set up the router
app.get('/',(req, res)=>{
    // res.send("<h1>hello Ani</h1>");
    //try passing json data
    res.render('home.hbs',{
        pageTitle:'Home',
        welcomeMessage:'Welcome to my website',
        currentYear:new Date().getFullYear(),
    })
    
});

app.get('/about',(req, res)=>{
    res.render('about.hbs',{
        pageTitle:'About page',
        currentYear: new Date().getFullYear()
    });
})

app.get('/bad',(req, res)=>{
    res.send("This is not working");
});

//make ports to listen
// app.listen(3000,()=>{
//     console.log("server is up on port:3000");
// });

//end