const express = require('express');
const path = require('path');
const { createServer } = require('node:http');
const { join } = require('node:path');

//Création du serveur express
const app = express();

const expressHbs = require('express-handlebars');
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: false})); // parse response

// Static files middlware. Serve public folder (static files etc)
app.use(express.static('public'));

// template engine
app.engine('hbs', expressHbs.engine(
    {   extname: "hbs",
        defaultLayout: "",
        layoutsDir: "",
    }
));
app.set('view engine', 'hbs');
app.set('views', 'views');

const server = createServer(app);

app.get('/', (req, res) => {
  res.render("index.hbs");
});

module.exports = server;