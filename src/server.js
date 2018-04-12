import 'babel-polyfill';
import path from 'path';
import express from 'express';
import cookieParser from 'cookie-parser';
import bodyParser from 'body-parser';
import expressJwt from 'express-jwt';

// import expressGraphQL from 'express-graphql';
// import jwt from 'jsonwebtoken';
import React from 'react';
import ReactDOM from 'react-dom/server';
import UniversalRouter from 'universal-router';
import PrettyError from 'pretty-error';
import Html from './components/Html';
import { ErrorPageWithoutStyle } from './routes/error/ErrorPage';
import errorPageStyle from './routes/error/ErrorPage.css';
// import passport from './core/passport';
// import models from './data/models';
// import schema from './data/schema';
import routes from './routes';
import assets from './assets'; // eslint-disable-line import/no-unresolved
import { port, auth } from './config';
import con from './db';

var flash = require('connect-flash');
var urlencodedParser = bodyParser.urlencoded({ extended: false })
var db = require('./db');

const app = express();

//
// Tell any CSS tooling (such as Material UI) to use all vendor prefixes if the
// user agent is not known.
// -----------------------------------------------------------------------------
global.navigator = global.navigator || {};
global.navigator.userAgent = global.navigator.userAgent || 'all';

//
// Register Node.js middleware
// -----------------------------------------------------------------------------
app.use(express.static(path.join(__dirname, 'public')));
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(flash());

//
// Authentication
// -----------------------------------------------------------------------------
app.use(expressJwt({
  secret: auth.jwt.secret,
  credentialsRequired: false,
  getToken: req => req.cookies.id_token,
}));

// app.use(passport.initialize());
//
// app.get('/login/facebook',
//   passport.authenticate('facebook', { scope: ['email', 'user_location'], session: false })
// );
// app.get('/login/facebook/return',
//   passport.authenticate('facebook', { failureRedirect: '/login', session: false }),
//   (req, res) => {
//     const expiresIn = 60 * 60 * 24 * 180; // 180 days
//     const token = jwt.sign(req.user, auth.jwt.secret, { expiresIn });
//     res.cookie('id_token', token, { maxAge: 1000 * expiresIn, httpOnly: true });
//     res.redirect('/');
//   }
// );

//
// Register API middleware
// -----------------------------------------------------------------------------
// app.use('/graphql', expressGraphQL(req => ({
//   schema,
//   graphiql: true,
//   rootValue: { request: req },
//   pretty: process.env.NODE_ENV !== 'production',
// })));

//
// Register server-side rendering middleware
// -----------------------------------------------------------------------------
app.get('*', async (req, res, next) => {
  try {
    let css = new Set();
    let statusCode = 200;
    const data = { title: '', description: '', style: '', script: assets.main.js, children: '' };

    await UniversalRouter.resolve(routes, {
      path: req.path,
      query: req.query,
      context: {
        insertCss: (...styles) => {
          styles.forEach(style => css.add(style._getCss())); // eslint-disable-line no-underscore-dangle, max-len
        },
        setTitle: value => (data.title = value),
        setMeta: (key, value) => (data[key] = value),
      },
      render(component, status = 200) {
        // console.log('inside render of UniversalRouter', component);
        css = new Set();
        statusCode = status;
        data.children = ReactDOM.renderToString(component);
        data.style = [...css].join('');
        return true;
      },
    });

    // console.log('outside render func of UniversalRouter with statusCode', statusCode);
    const html = ReactDOM.renderToStaticMarkup(<Html {...data} />);

    res.status(statusCode);
    res.send(`<!doctype html>${html}`);
  } catch (err) {
    // console.log('some error occured', err);
    next(err);
  }
});

//
// Error handling
// -----------------------------------------------------------------------------
const pe = new PrettyError();
pe.skipNodeFiles();
pe.skipPackage('express');

app.use((err, req, res, next) => { // eslint-disable-line no-unused-vars
  console.log(pe.render(err)); // eslint-disable-line no-console
  const statusCode = err.status || 500;
  const html = ReactDOM.renderToStaticMarkup(
    <Html
      title="Internal Server Error"
      description={err.message}
      style={errorPageStyle._getCss()} // eslint-disable-line no-underscore-dangle
    >
      {ReactDOM.renderToString(<ErrorPageWithoutStyle error={err} />)}
    </Html>
  );
  res.status(statusCode);
  res.send(`<!doctype html>${html}`);
});

app.listen(port, () => {
  console.log(`The server is running at http://localhost:${port}/`);
});

app.post('/createClub', function(req, res){

        var clubName = req.body.clubName;
        var typeOfClub = req.body.clubType;
        var town = req.body.town;
        var county = req.body.county;
        var name = req.body.name;
        var email = req.body.email;
        var password = req.body.password;
        var clubPost  = {clubName: clubName, typeOfClub: typeOfClub, town:town, county:county};


    con.query('INSERT INTO tbl_clubs SET?',clubPost,  function(err, result){
        if(err) throw err;

        console.log("1 record inserted");
        var clubId = result.insertId
        var userPost  = {name: name, email: email, password:password};
            con.query('INSERT INTO tbl_users SET?',userPost,  function(err, result){
                    if(err) throw err;

                    console.log("1 record inserted");
                    var userId = result.insertId
                    var clubAdminPost  = {clubId: clubId, userId: userId};
                                    con.query('INSERT INTO tbl_clubAdmins SET?',clubAdminPost,  function(err, result){
                                                if(err) throw err;

                                                console.log("1 record inserted");
                                                var userId = result.insertId
                                            });
                });

    });


});

app.post('/checkLogin', urlencodedParser, function(req, res){
    var email=req.body.email;
    var password=req.body.password;
    con.query('SELECT * FROM tbl_users WHERE email = ?',[email], function (error, results, fields, req) {
      if (error) {
          console.log("error with query");
      }else{
        if(results.length >0){
            if(password==results[0].password){
               console.log("working");

               res.redirect('/profile');

            }else{
                console.log("Email and password dont match");
                 res.redirect('/failed');
            }

        }
        else{
          console.log("Email does not exist");
          res.redirect('/failed')
        }
      }
    });

});

app.post('/createCheckout', function(req, res){
        var message='';
        var name = req.body.name;
        var address = req.body.address;
        var cardName = req.body.cardName;
        var cardNo = req.body.cardNo;
        var csv = req.body.csv;
        var expiryDate = req.body.expiryDate;
        var checkoutPost  = {name: name, address: address, cardName:cardName, cardNumber:cardNo,  expiryDate:expiryDate, csv:csv};


    con.query('INSERT INTO tbl_checkOut SET?',checkoutPost,  function(err, result){
        if(err) throw err;

        console.log("1 record inserted");


    });


});

//
// Launch the server
// --------------------------------------------------s---------------------------
/* eslint-disable no-console */
// models.sync().catch(err => console.error(err.stack)).then(() => {
//   app.listen(port, () => {
//     console.log(`The server is running at http://localhost:${port}/`);
//   });
// });
/* eslint-enable no-console */
