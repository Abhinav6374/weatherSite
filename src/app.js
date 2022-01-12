const express = require('express');
const path = require('path');
const hbs = require('hbs');
const app = express();
const port = process.env.PORT || 8000;



const static_join = path.join(__dirname, "../public");
const template_join = path.join(__dirname, "../templates/views");
const partials_join = path.join(__dirname, "../templates/partials");

app.set('view engine', 'hbs');
app.set('views',template_join);
hbs.registerPartials(partials_join);
app.use(express.static(static_join));

//Routing

app.get("/", (req, res) => {
    res.render('index')
});

app.get("/about", (req, res) => {
    res.render('about')
});

app.get("/weather", (req, res) => {
    res.render('weather')
});

app.get("*", (req, res) => {
    res.render('404error',{
        errormsg:'Oops! Page Not Found'
    })
});

app.listen(port, () => {
    console.log(`Listening at the port ${port}`);
});