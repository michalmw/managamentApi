const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose')
const path = require('path');
const bson = require('bson');
const mongodbURL = 'mongodb://localhost/Users'
const cookieParser = require('cookie-parser');
let app = express();


mongoose.connect(mongodbURL, (err, res) => {
    if (err)
        return console.log("Baza danych nie odpowiada! : " + err)

    console.log(" Połączono pomyślnie")
});

//let modal = require('./modals/user')
let client = require('./routing/client');






//files
//let schema = require('./Schema/User.js');
//Systems
//let login = require("./routes/login");
//let register = require("./routes/register");
//let postApp = require("./routes/postApp");
//let getApp = require("./routes/getApp");
//let webSites = require("./websites");
//let users = require('./routes/users')
//app.set('views', path.join(__dirname, 'views'));
//app.engine('handlebars');
//app.engine('handlebars' ,exphbs({defaultLayout: 'layout'}));
app.set('view engine', 'handlebars');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}))
app.use(cookieParser());
// Express Session
//app.use(session({
  //  secret: 'secret',
    //saveUninitialized: true,
    //resave: true
//}));

//	app.use(passport.initialize());
//	app.use(passport.session());

/*	app.use(expressValidator({
errorFormatter: function(param, msg, value) {
    var namespace = param.split('.')
    , root    = namespace.shift()
    , formParam = root;

  while(namespace.length) {
    formParam += '[' + namespace.shift() + ']';
  }
  return {
    param : formParam,
    msg   : msg,
    value : value
  };
}
}));
*/
//connect-flash
  //app.use('/',routes);
  //app.use('/', login);
  //app.use('/', register);
  //app.use('/', postApp);
  //app.use('/', getApp);
  //app.use('/' ,webSites);
  //app.use('/users' ,users);

app.use('/', client);


app.listen(8080, function() {
    console.log('Server Started on Port 8080...')
  // body...
});
