require("source-map-support").install();
module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/assets/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

  'use strict';
  
  var _regenerator = __webpack_require__(1);
  
  var _regenerator2 = _interopRequireDefault(_regenerator);
  
  var _toConsumableArray2 = __webpack_require__(2);
  
  var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);
  
  var _set = __webpack_require__(3);
  
  var _set2 = _interopRequireDefault(_set);
  
  var _asyncToGenerator2 = __webpack_require__(4);
  
  var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);
  
  __webpack_require__(5);
  
  var _path = __webpack_require__(6);
  
  var _path2 = _interopRequireDefault(_path);
  
  var _express = __webpack_require__(7);
  
  var _express2 = _interopRequireDefault(_express);
  
  var _cookieParser = __webpack_require__(8);
  
  var _cookieParser2 = _interopRequireDefault(_cookieParser);
  
  var _bodyParser = __webpack_require__(9);
  
  var _bodyParser2 = _interopRequireDefault(_bodyParser);
  
  var _expressJwt = __webpack_require__(10);
  
  var _expressJwt2 = _interopRequireDefault(_expressJwt);
  
  var _react = __webpack_require__(11);
  
  var _react2 = _interopRequireDefault(_react);
  
  var _server = __webpack_require__(12);
  
  var _server2 = _interopRequireDefault(_server);
  
  var _universalRouter = __webpack_require__(13);
  
  var _universalRouter2 = _interopRequireDefault(_universalRouter);
  
  var _prettyError = __webpack_require__(14);
  
  var _prettyError2 = _interopRequireDefault(_prettyError);
  
  var _Html = __webpack_require__(15);
  
  var _Html2 = _interopRequireDefault(_Html);
  
  var _ErrorPage = __webpack_require__(17);
  
  var _ErrorPage2 = __webpack_require__(19);
  
  var _ErrorPage3 = _interopRequireDefault(_ErrorPage2);
  
  var _routes = __webpack_require__(27);
  
  var _routes2 = _interopRequireDefault(_routes);
  
  var _assets = __webpack_require__(197);
  
  var _assets2 = _interopRequireDefault(_assets);
  
  var _config = __webpack_require__(16);
  
  var _db = __webpack_require__(198);
  
  var _db2 = _interopRequireDefault(_db);
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  // eslint-disable-line import/no-unresolved
  
  // import passport from './core/passport';
  // import models from './data/models';
  // import schema from './data/schema';
  var db = __webpack_require__(198);
  
  // import expressGraphQL from 'express-graphql';
  // import jwt from 'jsonwebtoken';
  
  
  var app = (0, _express2.default)();
  
  //
  // Tell any CSS tooling (such as Material UI) to use all vendor prefixes if the
  // user agent is not known.
  // -----------------------------------------------------------------------------
  global.navigator = global.navigator || {};
  global.navigator.userAgent = global.navigator.userAgent || 'all';
  
  //
  // Register Node.js middleware
  // -----------------------------------------------------------------------------
  app.use(_express2.default.static(_path2.default.join(__dirname, 'public')));
  app.use((0, _cookieParser2.default)());
  app.use(_bodyParser2.default.urlencoded({ extended: true }));
  app.use(_bodyParser2.default.json());
  
  //
  // Authentication
  // -----------------------------------------------------------------------------
  app.use((0, _expressJwt2.default)({
    secret: _config.auth.jwt.secret,
    credentialsRequired: false,
    getToken: function getToken(req) {
      return req.cookies.id_token;
    }
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
  app.get('*', function () {
    var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(req, res, next) {
      var css, statusCode, data, html;
      return _regenerator2.default.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              css = new _set2.default();
              statusCode = 200;
              data = { title: '', description: '', style: '', script: _assets2.default.main.js, children: '' };
              _context.next = 6;
              return _universalRouter2.default.resolve(_routes2.default, {
                path: req.path,
                query: req.query,
                context: {
                  insertCss: function insertCss() {
                    for (var _len = arguments.length, styles = Array(_len), _key = 0; _key < _len; _key++) {
                      styles[_key] = arguments[_key];
                    }
  
                    styles.forEach(function (style) {
                      return css.add(style._getCss());
                    }); // eslint-disable-line no-underscore-dangle, max-len
                  },
                  setTitle: function setTitle(value) {
                    return data.title = value;
                  },
                  setMeta: function setMeta(key, value) {
                    return data[key] = value;
                  }
                },
                render: function render(component) {
                  var status = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 200;
  
                  // console.log('inside render of UniversalRouter', component);
                  css = new _set2.default();
                  statusCode = status;
                  data.children = _server2.default.renderToString(component);
                  data.style = [].concat((0, _toConsumableArray3.default)(css)).join('');
                  return true;
                }
              });
  
            case 6:
  
              // console.log('outside render func of UniversalRouter with statusCode', statusCode);
              html = _server2.default.renderToStaticMarkup(_react2.default.createElement(_Html2.default, data));
  
  
              res.status(statusCode);
              res.send('<!doctype html>' + html);
              _context.next = 14;
              break;
  
            case 11:
              _context.prev = 11;
              _context.t0 = _context['catch'](0);
  
              // console.log('some error occured', err);
              next(_context.t0);
  
            case 14:
            case 'end':
              return _context.stop();
          }
        }
      }, _callee, undefined, [[0, 11]]);
    }));
  
    return function (_x, _x2, _x3) {
      return _ref.apply(this, arguments);
    };
  }());
  
  //
  // Error handling
  // -----------------------------------------------------------------------------
  var pe = new _prettyError2.default();
  pe.skipNodeFiles();
  pe.skipPackage('express');
  
  app.use(function (err, req, res, next) {
    // eslint-disable-line no-unused-vars
    console.log(pe.render(err)); // eslint-disable-line no-console
    var statusCode = err.status || 500;
    var html = _server2.default.renderToStaticMarkup(_react2.default.createElement(
      _Html2.default,
      {
        title: 'Internal Server Error',
        description: err.message,
        style: _ErrorPage3.default._getCss() // eslint-disable-line no-underscore-dangle
      },
      _server2.default.renderToString(_react2.default.createElement(_ErrorPage.ErrorPageWithoutStyle, { error: err }))
    ));
    res.status(statusCode);
    res.send('<!doctype html>' + html);
  });
  
  var server = __webpack_require__(200).createServer(app);
  var io = __webpack_require__(201)(server);
  io.on('connection', function (client) {
    console.log('The server is running at http://localhost:' + _config.port + '/');
  });
  app.listen(_config.port, function () {
    console.log('The server is running at http://localhost:' + _config.port + '/');
  });
  
  app.post('/getMessage', function (req, res) {
    io.emit('sendMessage', req.body);
  });
  
  app.post('/createClub', function (req, res) {
  
    var clubName = req.body.clubName;
    var typeOfClub = req.body.clubType;
    var town = req.body.town;
    var county = req.body.county;
    var name = req.body.name;
    var email = req.body.email;
    var password = req.body.password;
    var clubPost = { clubName: clubName, typeOfClub: typeOfClub, town: town, county: county };
  
    _db2.default.query('INSERT INTO tbl_clubs SET?', clubPost, function (err, result) {
      if (err) throw err;
  
      console.log("1 record inserted");
      var clubId = result.insertId;
      var userPost = { name: name, email: email, password: password };
      _db2.default.query('INSERT INTO tbl_users SET?', userPost, function (err, result) {
        if (err) throw err;
  
        console.log("1 record inserted");
        var userId = result.insertId;
        var clubAdminPost = { clubId: clubId, userId: userId };
        _db2.default.query('INSERT INTO tbl_clubAdmins SET?', clubAdminPost, function (err, result) {
          if (err) throw err;
  
          console.log("1 record inserted");
          var userId = result.insertId;
        });
      });
    });
  });
  
  //
  // Launch the server
  // -----------------------------------------------------------------------------
  /* eslint-disable no-console */
  // models.sync().catch(err => console.error(err.stack)).then(() => {
  //   app.listen(port, () => {
  //     console.log(`The server is running at http://localhost:${port}/`);
  //   });
  // });
  /* eslint-enable no-console */

/***/ }),
/* 1 */
/***/ (function(module, exports) {

  module.exports = require("babel-runtime/regenerator");

/***/ }),
/* 2 */
/***/ (function(module, exports) {

  module.exports = require("babel-runtime/helpers/toConsumableArray");

/***/ }),
/* 3 */
/***/ (function(module, exports) {

  module.exports = require("babel-runtime/core-js/set");

/***/ }),
/* 4 */
/***/ (function(module, exports) {

  module.exports = require("babel-runtime/helpers/asyncToGenerator");

/***/ }),
/* 5 */
/***/ (function(module, exports) {

  module.exports = require("babel-polyfill");

/***/ }),
/* 6 */
/***/ (function(module, exports) {

  module.exports = require("path");

/***/ }),
/* 7 */
/***/ (function(module, exports) {

  module.exports = require("express");

/***/ }),
/* 8 */
/***/ (function(module, exports) {

  module.exports = require("cookie-parser");

/***/ }),
/* 9 */
/***/ (function(module, exports) {

  module.exports = require("body-parser");

/***/ }),
/* 10 */
/***/ (function(module, exports) {

  module.exports = require("express-jwt");

/***/ }),
/* 11 */
/***/ (function(module, exports) {

  module.exports = require("react");

/***/ }),
/* 12 */
/***/ (function(module, exports) {

  module.exports = require("react-dom/server");

/***/ }),
/* 13 */
/***/ (function(module, exports) {

  module.exports = require("universal-router");

/***/ }),
/* 14 */
/***/ (function(module, exports) {

  module.exports = require("pretty-error");

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  
  var _react = __webpack_require__(11);
  
  var _react2 = _interopRequireDefault(_react);
  
  var _config = __webpack_require__(16);
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  function Html(_ref) {
    var title = _ref.title,
        description = _ref.description,
        style = _ref.style,
        script = _ref.script,
        children = _ref.children;
  
    return _react2.default.createElement(
      'html',
      { className: 'no-js', lang: 'en' },
      _react2.default.createElement(
        'head',
        null,
        _react2.default.createElement('meta', { charSet: 'utf-8' }),
        _react2.default.createElement('meta', { httpEquiv: 'x-ua-compatible', content: 'ie=edge' }),
        _react2.default.createElement(
          'title',
          null,
          title
        ),
        _react2.default.createElement('meta', { name: 'description', content: description }),
        _react2.default.createElement('meta', { name: 'viewport', content: 'width=device-width, initial-scale=1' }),
        _react2.default.createElement('link', { rel: 'stylesheet', href: '/css/bootstrap.min.css' }),
        _react2.default.createElement('link', { rel: 'apple-touch-icon', href: 'apple-touch-icon.png' }),
        _react2.default.createElement('link', { rel: 'stylesheet', href: '/css/bootstrap-social.css' }),
        _react2.default.createElement('link', { rel: 'stylesheet', href: '/css/font-awesome.min.css' }),
        _react2.default.createElement('link', { rel: 'stylesheet', href: '/css/sb-admin.css' }),
        _react2.default.createElement('style', { id: 'css', dangerouslySetInnerHTML: { __html: style } })
      ),
      _react2.default.createElement(
        'body',
        null,
        _react2.default.createElement('div', { id: 'app', dangerouslySetInnerHTML: { __html: children } }),
        script && _react2.default.createElement('script', { src: script }),
        _config.analytics.google.trackingId && _react2.default.createElement('script', {
          dangerouslySetInnerHTML: { __html: 'window.ga=function(){ga.q.push(arguments)};ga.q=[];ga.l=+new Date;' + ('ga(\'create\',\'' + _config.analytics.google.trackingId + '\',\'auto\');ga(\'send\',\'pageview\')') }
        }),
        _config.analytics.google.trackingId && _react2.default.createElement('script', { src: 'https://www.google-analytics.com/analytics.js', async: true, defer: true })
      )
    );
  }
  
  Html.propTypes = {
    title: _react.PropTypes.string.isRequired,
    description: _react.PropTypes.string.isRequired,
    style: _react.PropTypes.string.isRequired,
    script: _react.PropTypes.string,
    children: _react.PropTypes.string
  };
  
  exports.default = Html;

/***/ }),
/* 16 */
/***/ (function(module, exports) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  /**
   * React Starter Kit (https://www.reactstarterkit.com/)
   *
   * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE.txt file in the root directory of this source tree.
   */
  
  /* eslint-disable max-len */
  
  var port = exports.port = process.env.PORT || 3000;
  var host = exports.host = process.env.WEBSITE_HOSTNAME || 'localhost:' + port;
  
  var databaseUrl = exports.databaseUrl = process.env.DATABASE_URL || 'sqlite:database.sqlite';
  
  var analytics = exports.analytics = {
  
    // https://analytics.google.com/
    google: {
      trackingId: process.env.GOOGLE_TRACKING_ID // UA-XXXXX-X
    }
  
  };
  
  var auth = exports.auth = {
  
    jwt: { secret: process.env.JWT_SECRET || 'React Starter Kit' },
  
    // https://developers.facebook.com/
    facebook: {
      id: process.env.FACEBOOK_APP_ID || '186244551745631',
      secret: process.env.FACEBOOK_APP_SECRET || 'a970ae3240ab4b9b8aae0f9f0661c6fc'
    },
  
    // https://cloud.google.com/console/project
    google: {
      id: process.env.GOOGLE_CLIENT_ID || '251410730550-ahcg0ou5mgfhl8hlui1urru7jn5s12km.apps.googleusercontent.com',
      secret: process.env.GOOGLE_CLIENT_SECRET || 'Y8yR9yZAhm9jQ8FKAL8QIEcd'
    },
  
    // https://apps.twitter.com/
    twitter: {
      key: process.env.TWITTER_CONSUMER_KEY || 'Ie20AZvLJI2lQD5Dsgxgjauns',
      secret: process.env.TWITTER_CONSUMER_SECRET || 'KTZ6cxoKnEakQCeSpZlaUCJWGAlTEBJj0y2EMkUBujA7zWSvaQ'
    }
  
  };

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.ErrorPageWithoutStyle = undefined;
  
  var _react = __webpack_require__(11);
  
  var _react2 = _interopRequireDefault(_react);
  
  var _withStyles = __webpack_require__(18);
  
  var _withStyles2 = _interopRequireDefault(_withStyles);
  
  var _ErrorPage = __webpack_require__(19);
  
  var _ErrorPage2 = _interopRequireDefault(_ErrorPage);
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  function ErrorPage(_ref, context) {
    var error = _ref.error;
  
    var title = 'Error';
    var content = 'Sorry, a critical error occurred on this page.';
    var errorMessage = null;
  
    if (error.status === 404) {
      title = 'Page Not Found';
      content = 'Sorry, the page you were trying to view does not exist.';
    } else if (true) {
      errorMessage = _react2.default.createElement(
        'pre',
        null,
        error.stack
      );
    }
  
    if (context.setTitle) {
      context.setTitle(title);
    }
  
    return _react2.default.createElement(
      'div',
      null,
      _react2.default.createElement(
        'h1',
        null,
        title
      ),
      _react2.default.createElement(
        'p',
        null,
        content
      ),
      errorMessage
    );
  } /**
     * React Starter Kit (https://www.reactstarterkit.com/)
     *
     * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
     *
     * This source code is licensed under the MIT license found in the
     * LICENSE.txt file in the root directory of this source tree.
     */
  
  ErrorPage.propTypes = { error: _react.PropTypes.object.isRequired };
  ErrorPage.contextTypes = { setTitle: _react.PropTypes.func.isRequired };
  
  exports.ErrorPageWithoutStyle = ErrorPage;
  exports.default = (0, _withStyles2.default)(_ErrorPage2.default)(ErrorPage);

/***/ }),
/* 18 */
/***/ (function(module, exports) {

  module.exports = require("isomorphic-style-loader/lib/withStyles");

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

  
      var content = __webpack_require__(20);
      var insertCss = __webpack_require__(22);
  
      if (typeof content === 'string') {
        content = [[module.id, content, '']];
      }
  
      module.exports = content.locals || {};
      module.exports._getCss = function() { return content.toString(); };
      module.exports._insertCss = function(options) { return insertCss(content, options) };
    
      // Hot Module Replacement
      // https://webpack.github.io/docs/hot-module-replacement
      // Only activated in browser context
      if (false) {
        var removeCss = function() {};
        module.hot.accept("!!../../../node_modules/css-loader/index.js?{\"sourceMap\":true,\"modules\":true,\"localIdentName\":\"[name]_[local]_[hash:base64:3]\",\"minimize\":false}!../../../node_modules/postcss-loader/index.js?pack=default!./ErrorPage.css", function() {
          content = require("!!../../../node_modules/css-loader/index.js?{\"sourceMap\":true,\"modules\":true,\"localIdentName\":\"[name]_[local]_[hash:base64:3]\",\"minimize\":false}!../../../node_modules/postcss-loader/index.js?pack=default!./ErrorPage.css");
  
          if (typeof content === 'string') {
            content = [[module.id, content, '']];
          }
  
          removeCss = insertCss(content, { replace: true });
        });
        module.hot.dispose(function() { removeCss(); });
      }
    

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

  exports = module.exports = __webpack_require__(21)();
  // imports
  
  
  // module
  exports.push([module.id, "/**\n * React Starter Kit (https://www.reactstarterkit.com/)\n *\n * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE.txt file in the root directory of this source tree.\n */\n\n* {\n  line-height: 1.2;\n  margin: 0;\n}\n\nhtml {\n  color: #888;\n  display: table;\n  font-family: sans-serif;\n  height: 100%;\n  text-align: center;\n  width: 100%;\n}\n\nbody {\n  display: table-cell;\n  vertical-align: middle;\n  /* stylelint-disable */\n  margin: 2em auto;\n  /* stylelint-enable */\n}\n\nh1 {\n  color: #555;\n  font-size: 2em;\n  font-weight: 400;\n}\n\np {\n  margin: 0 auto;\n  width: 280px;\n}\n\npre {\n  text-align: left;\n  margin-top: 32px;\n  margin-top: 2rem;\n}\n\n@media only screen and (max-width: 280px) {\n  body,\n  p {\n    width: 95%;\n  }\n\n  h1 {\n    font-size: 1.5em;\n    margin: 0 0 0.3em;\n  }\n}\n", "", {"version":3,"sources":["/./routes/error/ErrorPage.css"],"names":[],"mappings":"AAAA;;;;;;;GAOG;;AAEH;EACE,iBAAiB;EACjB,UAAU;CACX;;AAED;EACE,YAAY;EACZ,eAAe;EACf,wBAAwB;EACxB,aAAa;EACb,mBAAmB;EACnB,YAAY;CACb;;AAED;EACE,oBAAoB;EACpB,uBAAuB;EACvB,uBAAuB;EACvB,iBAAiB;EACjB,sBAAsB;CACvB;;AAED;EACE,YAAY;EACZ,eAAe;EACf,iBAAiB;CAClB;;AAED;EACE,eAAe;EACf,aAAa;CACd;;AAED;EACE,iBAAiB;EACjB,iBAAiB;EAAjB,iBAAiB;CAClB;;AAED;EACE;;IAEE,WAAW;GACZ;;EAED;IACE,iBAAiB;IACjB,kBAAkB;GACnB;CACF","file":"ErrorPage.css","sourcesContent":["/**\n * React Starter Kit (https://www.reactstarterkit.com/)\n *\n * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE.txt file in the root directory of this source tree.\n */\n\n* {\n  line-height: 1.2;\n  margin: 0;\n}\n\nhtml {\n  color: #888;\n  display: table;\n  font-family: sans-serif;\n  height: 100%;\n  text-align: center;\n  width: 100%;\n}\n\nbody {\n  display: table-cell;\n  vertical-align: middle;\n  /* stylelint-disable */\n  margin: 2em auto;\n  /* stylelint-enable */\n}\n\nh1 {\n  color: #555;\n  font-size: 2em;\n  font-weight: 400;\n}\n\np {\n  margin: 0 auto;\n  width: 280px;\n}\n\npre {\n  text-align: left;\n  margin-top: 2rem;\n}\n\n@media only screen and (max-width: 280px) {\n  body,\n  p {\n    width: 95%;\n  }\n\n  h1 {\n    font-size: 1.5em;\n    margin: 0 0 0.3em;\n  }\n}\n"],"sourceRoot":"webpack://"}]);
  
  // exports


/***/ }),
/* 21 */
/***/ (function(module, exports) {

  /*
  	MIT License http://www.opensource.org/licenses/mit-license.php
  	Author Tobias Koppers @sokra
  */
  // css base code, injected by the css-loader
  module.exports = function() {
  	var list = [];
  
  	// return the list of modules as css string
  	list.toString = function toString() {
  		var result = [];
  		for(var i = 0; i < this.length; i++) {
  			var item = this[i];
  			if(item[2]) {
  				result.push("@media " + item[2] + "{" + item[1] + "}");
  			} else {
  				result.push(item[1]);
  			}
  		}
  		return result.join("");
  	};
  
  	// import a list of modules into the list
  	list.i = function(modules, mediaQuery) {
  		if(typeof modules === "string")
  			modules = [[null, modules, ""]];
  		var alreadyImportedModules = {};
  		for(var i = 0; i < this.length; i++) {
  			var id = this[i][0];
  			if(typeof id === "number")
  				alreadyImportedModules[id] = true;
  		}
  		for(i = 0; i < modules.length; i++) {
  			var item = modules[i];
  			// skip already imported module
  			// this implementation is not 100% perfect for weird media query combinations
  			//  when a module is imported multiple times with different media queries.
  			//  I hope this will never occur (Hey this way we have smaller bundles)
  			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
  				if(mediaQuery && !item[2]) {
  					item[2] = mediaQuery;
  				} else if(mediaQuery) {
  					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
  				}
  				list.push(item);
  			}
  		}
  	};
  	return list;
  };


/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

  'use strict';
  
  var _assign = __webpack_require__(23);
  
  var _assign2 = _interopRequireDefault(_assign);
  
  var _stringify = __webpack_require__(24);
  
  var _stringify2 = _interopRequireDefault(_stringify);
  
  var _slicedToArray2 = __webpack_require__(25);
  
  var _slicedToArray3 = _interopRequireDefault(_slicedToArray2);
  
  var _getIterator2 = __webpack_require__(26);
  
  var _getIterator3 = _interopRequireDefault(_getIterator2);
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  /**
   * Isomorphic CSS style loader for Webpack
   *
   * Copyright © 2015-2016 Kriasoft, LLC. All rights reserved.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE.txt file in the root directory of this source tree.
   */
  
  var prefix = 's';
  var inserted = {};
  
  // Base64 encoding and decoding - The "Unicode Problem"
  // https://developer.mozilla.org/en-US/docs/Web/API/WindowBase64/Base64_encoding_and_decoding#The_Unicode_Problem
  function b64EncodeUnicode(str) {
    return btoa(encodeURIComponent(str).replace(/%([0-9A-F]{2})/g, function (match, p1) {
      return String.fromCharCode('0x' + p1);
    }));
  }
  
  /**
   * Remove style/link elements for specified node IDs
   * if they are no longer referenced by UI components.
   */
  function removeCss(ids) {
    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;
  
    try {
      for (var _iterator = (0, _getIterator3.default)(ids), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
        var id = _step.value;
  
        if (--inserted[id] <= 0) {
          var elem = document.getElementById(prefix + id);
          if (elem) {
            elem.parentNode.removeChild(elem);
          }
        }
      }
    } catch (err) {
      _didIteratorError = true;
      _iteratorError = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion && _iterator.return) {
          _iterator.return();
        }
      } finally {
        if (_didIteratorError) {
          throw _iteratorError;
        }
      }
    }
  }
  
  /**
   * Example:
   *   // Insert CSS styles object generated by `css-loader` into DOM
   *   var removeCss = insertCss([[1, 'body { color: red; }']]);
   *
   *   // Remove it from the DOM
   *   removeCss();
   */
  function insertCss(styles, options) {
    var _Object$assign = (0, _assign2.default)({
      replace: false,
      prepend: false
    }, options);
  
    var replace = _Object$assign.replace;
    var prepend = _Object$assign.prepend;
  
  
    var ids = [];
    for (var i = 0; i < styles.length; i++) {
      var _styles$i = (0, _slicedToArray3.default)(styles[i], 4);
  
      var moduleId = _styles$i[0];
      var css = _styles$i[1];
      var media = _styles$i[2];
      var sourceMap = _styles$i[3];
  
      var id = moduleId + '-' + i;
  
      ids.push(id);
  
      if (inserted[id]) {
        if (!replace) {
          inserted[id]++;
          continue;
        }
      }
  
      inserted[id] = 1;
  
      var elem = document.getElementById(prefix + id);
      var create = false;
  
      if (!elem) {
        create = true;
  
        elem = document.createElement('style');
        elem.setAttribute('type', 'text/css');
        elem.id = prefix + id;
  
        if (media) {
          elem.setAttribute('media', media);
        }
      }
  
      var cssText = css;
      if (sourceMap) {
        cssText += '\n/*# sourceMappingURL=data:application/json;base64,' + b64EncodeUnicode((0, _stringify2.default)(sourceMap)) + '*/';
        cssText += '\n/*# sourceURL=' + sourceMap.file + '*/';
      }
  
      if ('textContent' in elem) {
        elem.textContent = cssText;
      } else {
        elem.styleSheet.cssText = cssText;
      }
  
      if (create) {
        if (prepend) {
          document.head.insertBefore(elem, document.head.childNodes[0]);
        } else {
          document.head.appendChild(elem);
        }
      }
    }
  
    return removeCss.bind(null, ids);
  }
  
  module.exports = insertCss;

/***/ }),
/* 23 */
/***/ (function(module, exports) {

  module.exports = require("babel-runtime/core-js/object/assign");

/***/ }),
/* 24 */
/***/ (function(module, exports) {

  module.exports = require("babel-runtime/core-js/json/stringify");

/***/ }),
/* 25 */
/***/ (function(module, exports) {

  module.exports = require("babel-runtime/helpers/slicedToArray");

/***/ }),
/* 26 */
/***/ (function(module, exports) {

  module.exports = require("babel-runtime/core-js/get-iterator");

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  
  var _regenerator = __webpack_require__(1);
  
  var _regenerator2 = _interopRequireDefault(_regenerator);
  
  var _asyncToGenerator2 = __webpack_require__(4);
  
  var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);
  
  var _react = __webpack_require__(11);
  
  var _react2 = _interopRequireDefault(_react);
  
  var _App = __webpack_require__(28);
  
  var _App2 = _interopRequireDefault(_App);
  
  var _home = __webpack_require__(48);
  
  var _home2 = _interopRequireDefault(_home);
  
  var _login = __webpack_require__(148);
  
  var _login2 = _interopRequireDefault(_login);
  
  var _tables = __webpack_require__(154);
  
  var _tables2 = _interopRequireDefault(_tables);
  
  var _buttons = __webpack_require__(159);
  
  var _buttons2 = _interopRequireDefault(_buttons);
  
  var _flotCharts = __webpack_require__(161);
  
  var _flotCharts2 = _interopRequireDefault(_flotCharts);
  
  var _forms = __webpack_require__(163);
  
  var _forms2 = _interopRequireDefault(_forms);
  
  var _grid = __webpack_require__(168);
  
  var _grid2 = _interopRequireDefault(_grid);
  
  var _onlinestore = __webpack_require__(170);
  
  var _onlinestore2 = _interopRequireDefault(_onlinestore);
  
  var _morrisjsCharts = __webpack_require__(173);
  
  var _morrisjsCharts2 = _interopRequireDefault(_morrisjsCharts);
  
  var _notification = __webpack_require__(175);
  
  var _notification2 = _interopRequireDefault(_notification);
  
  var _membershipReg = __webpack_require__(182);
  
  var _membershipReg2 = _interopRequireDefault(_membershipReg);
  
  var _chat = __webpack_require__(184);
  
  var _chat2 = _interopRequireDefault(_chat);
  
  var _resultsFixtures = __webpack_require__(190);
  
  var _resultsFixtures2 = _interopRequireDefault(_resultsFixtures);
  
  var _error = __webpack_require__(192);
  
  var _error2 = _interopRequireDefault(_error);
  
  var _clubs = __webpack_require__(193);
  
  var _clubs2 = _interopRequireDefault(_clubs);
  
  var _Header = __webpack_require__(37);
  
  var _Header2 = _interopRequireDefault(_Header);
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  // Child routes
  /**
   * React Starter Kit (https://www.reactstarterkit.com/)
   *
   * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE.txt file in the root directory of this source tree.
   */
  
  exports.default = [{
    path: '/login',
    children: [_login2.default],
    action: function action(_ref) {
      var _this = this;
  
      var next = _ref.next,
          render = _ref.render,
          context = _ref.context;
      return (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
        var component;
        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return next();
  
              case 2:
                component = _context.sent;
  
                if (!(component === undefined)) {
                  _context.next = 5;
                  break;
                }
  
                return _context.abrupt('return', component);
  
              case 5:
                return _context.abrupt('return', render(_react2.default.createElement(
                  _App2.default,
                  { context: context },
                  component
                )));
  
              case 6:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, _this);
      }))();
    }
  }, {
    path: '/',
  
    // keep in mind, routes are evaluated in order
    children: [_home2.default,
    // contact,
    _tables2.default, _clubs2.default, _buttons2.default, _flotCharts2.default, _forms2.default, _grid2.default, _onlinestore2.default, _morrisjsCharts2.default, _notification2.default, _membershipReg2.default, _chat2.default,
    // register,
    _resultsFixtures2.default,
  
    // place new routes before...
    // content,
    _error2.default],
  
    action: function action(_ref2) {
      var _this2 = this;
  
      var next = _ref2.next,
          render = _ref2.render,
          context = _ref2.context;
      return (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2() {
        var component;
        return _regenerator2.default.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return next();
  
              case 2:
                component = _context2.sent;
  
                if (!(component === undefined)) {
                  _context2.next = 5;
                  break;
                }
  
                return _context2.abrupt('return', component);
  
              case 5:
                return _context2.abrupt('return', render(_react2.default.createElement(
                  'div',
                  null,
                  _react2.default.createElement(_Header2.default, null),
                  _react2.default.createElement(
                    'div',
                    { id: 'page-wrapper', className: 'page-wrapper' },
                    _react2.default.createElement(
                      _App2.default,
                      { context: context },
                      component
                    )
                  )
                )));
  
              case 6:
              case 'end':
                return _context2.stop();
            }
          }
        }, _callee2, _this2);
      }))();
    }
  }, {
    path: '/error',
    children: [_error2.default],
    action: function action(_ref3) {
      var _this3 = this;
  
      var next = _ref3.next,
          render = _ref3.render,
          context = _ref3.context;
      return (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee3() {
        var component;
        return _regenerator2.default.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.next = 2;
                return next();
  
              case 2:
                component = _context3.sent;
  
                if (!(component === undefined)) {
                  _context3.next = 5;
                  break;
                }
  
                return _context3.abrupt('return', component);
  
              case 5:
                return _context3.abrupt('return', render(_react2.default.createElement(
                  _App2.default,
                  { context: context },
                  component
                )));
  
              case 6:
              case 'end':
                return _context3.stop();
            }
          }
        }, _callee3, _this3);
      }))();
    }
  }];

/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  
  var _getPrototypeOf = __webpack_require__(29);
  
  var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);
  
  var _classCallCheck2 = __webpack_require__(30);
  
  var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
  
  var _createClass2 = __webpack_require__(31);
  
  var _createClass3 = _interopRequireDefault(_createClass2);
  
  var _possibleConstructorReturn2 = __webpack_require__(32);
  
  var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);
  
  var _inherits2 = __webpack_require__(33);
  
  var _inherits3 = _interopRequireDefault(_inherits2);
  
  var _react = __webpack_require__(11);
  
  var _react2 = _interopRequireDefault(_react);
  
  var _emptyFunction = __webpack_require__(34);
  
  var _emptyFunction2 = _interopRequireDefault(_emptyFunction);
  
  var _App = __webpack_require__(35);
  
  var _App2 = _interopRequireDefault(_App);
  
  var _Header = __webpack_require__(37);
  
  var _Header2 = _interopRequireDefault(_Header);
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  // import Feedback from '../Feedback';
  // import Footer from '../Footer';
  
  /**
   * React Starter Kit (https://www.reactstarterkit.com/)
   *
   * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE.txt file in the root directory of this source tree.
   */
  
  var App = function (_Component) {
    (0, _inherits3.default)(App, _Component);
  
    function App() {
      (0, _classCallCheck3.default)(this, App);
      return (0, _possibleConstructorReturn3.default)(this, (App.__proto__ || (0, _getPrototypeOf2.default)(App)).apply(this, arguments));
    }
  
    (0, _createClass3.default)(App, [{
      key: 'getChildContext',
      value: function getChildContext() {
        var context = this.props.context;
        return {
          insertCss: context.insertCss || _emptyFunction2.default,
          setTitle: context.setTitle || _emptyFunction2.default,
          setMeta: context.setMeta || _emptyFunction2.default
        };
      }
    }, {
      key: 'componentWillMount',
      value: function componentWillMount() {
        var insertCss = this.props.context.insertCss;
  
        this.removeCss = insertCss(_App2.default);
      }
    }, {
      key: 'componentWillUnmount',
      value: function componentWillUnmount() {
  
        this.removeCss();
      }
    }, {
      key: 'render',
      value: function render() {
        // console.log('\n********\n', this.props, '\n********12334\n');
        return this.props.children;
      }
    }]);
    return App;
  }(_react.Component);
  
  App.propTypes = {
    context: _react.PropTypes.shape({
      insertCss: _react.PropTypes.func,
      setTitle: _react.PropTypes.func,
      setMeta: _react.PropTypes.func
    }),
    children: _react.PropTypes.element.isRequired,
    error: _react.PropTypes.object
  };
  App.childContextTypes = {
    insertCss: _react.PropTypes.func.isRequired,
    setTitle: _react.PropTypes.func.isRequired,
    setMeta: _react.PropTypes.func.isRequired
  };
  exports.default = App;

/***/ }),
/* 29 */
/***/ (function(module, exports) {

  module.exports = require("babel-runtime/core-js/object/get-prototype-of");

/***/ }),
/* 30 */
/***/ (function(module, exports) {

  module.exports = require("babel-runtime/helpers/classCallCheck");

/***/ }),
/* 31 */
/***/ (function(module, exports) {

  module.exports = require("babel-runtime/helpers/createClass");

/***/ }),
/* 32 */
/***/ (function(module, exports) {

  module.exports = require("babel-runtime/helpers/possibleConstructorReturn");

/***/ }),
/* 33 */
/***/ (function(module, exports) {

  module.exports = require("babel-runtime/helpers/inherits");

/***/ }),
/* 34 */
/***/ (function(module, exports) {

  module.exports = require("fbjs/lib/emptyFunction");

/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

  
      var content = __webpack_require__(36);
      var insertCss = __webpack_require__(22);
  
      if (typeof content === 'string') {
        content = [[module.id, content, '']];
      }
  
      module.exports = content.locals || {};
      module.exports._getCss = function() { return content.toString(); };
      module.exports._insertCss = function(options) { return insertCss(content, options) };
    
      // Hot Module Replacement
      // https://webpack.github.io/docs/hot-module-replacement
      // Only activated in browser context
      if (false) {
        var removeCss = function() {};
        module.hot.accept("!!../../../node_modules/css-loader/index.js?{\"sourceMap\":true,\"modules\":true,\"localIdentName\":\"[name]_[local]_[hash:base64:3]\",\"minimize\":false}!../../../node_modules/postcss-loader/index.js?pack=default!./App.css", function() {
          content = require("!!../../../node_modules/css-loader/index.js?{\"sourceMap\":true,\"modules\":true,\"localIdentName\":\"[name]_[local]_[hash:base64:3]\",\"minimize\":false}!../../../node_modules/postcss-loader/index.js?pack=default!./App.css");
  
          if (typeof content === 'string') {
            content = [[module.id, content, '']];
          }
  
          removeCss = insertCss(content, { replace: true });
        });
        module.hot.dispose(function() { removeCss(); });
      }
    

/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

  exports = module.exports = __webpack_require__(21)();
  // imports
  
  
  // module
  exports.push([module.id, "/**\n * React Starter Kit (https://www.reactstarterkit.com/)\n *\n * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE.txt file in the root directory of this source tree.\n */\n\n/*! normalize.css v4.1.1 | MIT License | github.com/necolas/normalize.css */\n\n/**\n * 1. Change the default font family in all browsers (opinionated).\n * 2. Correct the line height in all browsers.\n * 3. Prevent adjustments of font size after orientation changes in IE and iOS.\n */\n\nhtml {\n  font-family: sans-serif; /* 1 */\n  line-height: 1.15; /* 2 */\n  -ms-text-size-adjust: 100%; /* 3 */\n  -webkit-text-size-adjust: 100%; /* 3 */\n}\n\n/**\n * Remove the margin in all browsers (opinionated).\n */\n\nbody {\n  margin: 0;\n}\n\n/* HTML5 display definitions\n   ========================================================================== */\n\n/**\n * Add the correct display in IE 9-.\n * 1. Add the correct display in Edge, IE, and Firefox.\n * 2. Add the correct display in IE.\n */\n\narticle,\naside,\ndetails, /* 1 */\nfigcaption,\nfigure,\nfooter,\nheader,\nmain, /* 2 */\nmenu,\nnav,\nsection,\nsummary { /* 1 */\n  display: block;\n}\n\n/**\n * Add the correct display in IE 9-.\n */\n\naudio,\ncanvas,\nprogress,\nvideo {\n  display: inline-block;\n}\n\n/**\n * Add the correct display in iOS 4-7.\n */\n\naudio:not([controls]) {\n  display: none;\n  height: 0;\n}\n\n/**\n * Add the correct vertical alignment in Chrome, Firefox, and Opera.\n */\n\nprogress {\n  vertical-align: baseline;\n}\n\n/**\n * Add the correct display in IE 10-.\n * 1. Add the correct display in IE.\n */\n\ntemplate, /* 1 */\n[hidden] {\n  display: none;\n}\n\n/* Links\n   ========================================================================== */\n\n/**\n * 1. Remove the gray background on active links in IE 10.\n * 2. Remove gaps in links underline in iOS 8+ and Safari 8+.\n */\n\na {\n  background-color: transparent; /* 1 */\n  -webkit-text-decoration-skip: objects; /* 2 */\n}\n\n/**\n * Remove the outline on focused links when they are also active or hovered\n * in all browsers (opinionated).\n */\n\na:active,\na:hover {\n  outline-width: 0;\n}\n\n/* Text-level semantics\n   ========================================================================== */\n\n/**\n * 1. Remove the bottom border in Firefox 39-.\n * 2. Add the correct text decoration in Chrome, Edge, IE, Opera, and Safari.\n */\n\nabbr[title] {\n  border-bottom: none; /* 1 */\n  text-decoration: underline; /* 2 */\n  text-decoration: underline dotted; /* 2 */\n}\n\n/**\n * Prevent the duplicate application of `bolder` by the next rule in Safari 6.\n */\n\nb,\nstrong {\n  font-weight: inherit;\n}\n\n/**\n * Add the correct font weight in Chrome, Edge, and Safari.\n */\n\nb,\nstrong {\n  font-weight: bolder;\n}\n\n/**\n * Add the correct font style in Android 4.3-.\n */\n\ndfn {\n  font-style: italic;\n}\n\n/**\n * Correct the font size and margin on `h1` elements within `section` and\n * `article` contexts in Chrome, Firefox, and Safari.\n */\n\nh1 {\n  font-size: 2em;\n  margin: 0.67em 0;\n}\n\n/**\n * Add the correct background and color in IE 9-.\n */\n\nmark {\n  background-color: #ff0;\n  color: #000;\n}\n\n/**\n * Add the correct font size in all browsers.\n */\n\nsmall {\n  font-size: 80%;\n}\n\n/**\n * Prevent `sub` and `sup` elements from affecting the line height in\n * all browsers.\n */\n\nsub,\nsup {\n  font-size: 75%;\n  line-height: 0;\n  position: relative;\n  vertical-align: baseline;\n}\n\nsub {\n  bottom: -0.25em;\n}\n\nsup {\n  top: -0.5em;\n}\n\n/* Embedded content\n   ========================================================================== */\n\n/**\n * Remove the border on images inside links in IE 10-.\n */\n\nimg {\n  border-style: none;\n}\n\n/**\n * Hide the overflow in IE.\n */\n\nsvg:not(:root) {\n  overflow: hidden;\n}\n\n/* Grouping content\n   ========================================================================== */\n\n/**\n * 1. Correct the inheritance and scaling of font size in all browsers.\n * 2. Correct the odd `em` font sizing in all browsers.\n */\n\ncode,\nkbd,\npre,\nsamp {\n  font-family: monospace, monospace; /* 1 */\n  font-size: 1em; /* 2 */\n}\n\n/**\n * Add the correct margin in IE 8.\n */\n\nfigure {\n  margin: 1em 40px;\n}\n\n/**\n * 1. Add the correct box sizing in Firefox.\n * 2. Show the overflow in Edge and IE.\n */\n\nhr {\n  -webkit-box-sizing: content-box;\n          box-sizing: content-box; /* 1 */\n  height: 0; /* 1 */\n  overflow: visible; /* 2 */\n}\n\n/* Forms\n   ========================================================================== */\n\n/**\n * 1. Change font properties to `inherit` in all browsers (opinionated).\n * 2. Remove the margin in Firefox and Safari.\n */\n\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  font: inherit; /* 1 */\n  margin: 0; /* 2 */\n}\n\n/**\n * Restore the font weight unset by the previous rule.\n */\n\noptgroup {\n  font-weight: bold;\n}\n\n/**\n * Show the overflow in IE.\n * 1. Show the overflow in Edge.\n */\n\nbutton,\ninput { /* 1 */\n  overflow: visible;\n}\n\n/**\n * Remove the inheritance of text transform in Edge, Firefox, and IE.\n * 1. Remove the inheritance of text transform in Firefox.\n */\n\nbutton,\nselect { /* 1 */\n  text-transform: none;\n}\n\n/**\n * 1. Prevent a WebKit bug where (2) destroys native `audio` and `video`\n *    controls in Android 4.\n * 2. Correct the inability to style clickable types in iOS and Safari.\n */\n\nbutton,\nhtml [type=\"button\"], /* 1 */\n[type=\"reset\"],\n[type=\"submit\"] {\n  -webkit-appearance: button; /* 2 */\n}\n\n/**\n * Remove the inner border and padding in Firefox.\n */\n\nbutton::-moz-focus-inner,\n[type=\"button\"]::-moz-focus-inner,\n[type=\"reset\"]::-moz-focus-inner,\n[type=\"submit\"]::-moz-focus-inner {\n  border-style: none;\n  padding: 0;\n}\n\n/**\n * Restore the focus styles unset by the previous rule.\n */\n\nbutton:-moz-focusring,\n[type=\"button\"]:-moz-focusring,\n[type=\"reset\"]:-moz-focusring,\n[type=\"submit\"]:-moz-focusring {\n  outline: 1px dotted ButtonText;\n}\n\n/**\n * Change the border, margin, and padding in all browsers (opinionated).\n */\n\nfieldset {\n  border: 1px solid #c0c0c0;\n  margin: 0 2px;\n  padding: 0.35em 0.625em 0.75em;\n}\n\n/**\n * 1. Correct the text wrapping in Edge and IE.\n * 2. Correct the color inheritance from `fieldset` elements in IE.\n * 3. Remove the padding so developers are not caught out when they zero out\n *    `fieldset` elements in all browsers.\n */\n\nlegend {\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box; /* 1 */\n  color: inherit; /* 2 */\n  display: table; /* 1 */\n  max-width: 100%; /* 1 */\n  padding: 0; /* 3 */\n  white-space: normal; /* 1 */\n}\n\n/**\n * Remove the default vertical scrollbar in IE.\n */\n\ntextarea {\n  overflow: auto;\n}\n\n/**\n * 1. Add the correct box sizing in IE 10-.\n * 2. Remove the padding in IE 10-.\n */\n\n[type=\"checkbox\"],\n[type=\"radio\"] {\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box; /* 1 */\n  padding: 0; /* 2 */\n}\n\n/**\n * Correct the cursor style of increment and decrement buttons in Chrome.\n */\n\n[type=\"number\"]::-webkit-inner-spin-button,\n[type=\"number\"]::-webkit-outer-spin-button {\n  height: auto;\n}\n\n/**\n * 1. Correct the odd appearance in Chrome and Safari.\n * 2. Correct the outline style in Safari.\n */\n\n[type=\"search\"] {\n  -webkit-appearance: textfield; /* 1 */\n  outline-offset: -2px; /* 2 */\n}\n\n/**\n * Remove the inner padding and cancel buttons in Chrome and Safari on OS X.\n */\n\n[type=\"search\"]::-webkit-search-cancel-button,\n[type=\"search\"]::-webkit-search-decoration {\n  -webkit-appearance: none;\n}\n\n/**\n * Correct the text style of placeholders in Chrome, Edge, and Safari.\n */\n\n::-webkit-input-placeholder {\n  color: inherit;\n  opacity: 0.54;\n}\n\n/**\n * 1. Correct the inability to style clickable types in iOS and Safari.\n * 2. Change font properties to `inherit` in Safari.\n */\n\n::-webkit-file-upload-button {\n  -webkit-appearance: button; /* 1 */\n  font: inherit; /* 2 */\n}\n\n/*! React Starter Kit | MIT License | https://www.reactstarterkit.com/ */\n\n/**\n * React Starter Kit (https://www.reactstarterkit.com/)\n *\n * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE.txt file in the root directory of this source tree.\n */\n\n:root {\n  /*\n   * Typography\n   * ======================================================================== */\n\n  /*\n   * Layout\n   * ======================================================================== */\n\n  /*\n   * Media queries breakpoints\n   * ======================================================================== */  /* Extra small screen / phone */  /* Small screen / tablet */  /* Medium screen / desktop */ /* Large screen / wide desktop */\n}\n\n/*\n * Base styles\n * ========================================================================== */\n\nhtml {\n  color: #222;\n  font-size: 1em; /* ~16px; */\n  font-family: 'Segoe UI', 'HelveticaNeue-Light', sans-serif;\n  line-height: 1.375; /* ~22px */\n}\n\na {\n  color: #0074c2;\n}\n\n/*\n * Remove text-shadow in selection highlight:\n * https://twitter.com/miketaylr/status/12228805301\n *\n * These selection rule sets have to be separate.\n * Customize the background color to match your design.\n */\n\n::-moz-selection {\n  background: #b3d4fc;\n  text-shadow: none;\n}\n\n::selection {\n  background: #b3d4fc;\n  text-shadow: none;\n}\n\n/*\n * A better looking default horizontal rule\n */\n\nhr {\n  display: block;\n  height: 1px;\n  border: 0;\n  border-top: 1px solid #ccc;\n  margin: 1em 0;\n  padding: 0;\n}\n\n/*\n * Remove the gap between audio, canvas, iframes,\n * images, videos and the bottom of their containers:\n * https://github.com/h5bp/html5-boilerplate/issues/440\n */\n\naudio,\ncanvas,\niframe,\nimg,\nsvg,\nvideo {\n  vertical-align: middle;\n}\n\n/*\n * Remove default fieldset styles.\n */\n\nfieldset {\n  border: 0;\n  margin: 0;\n  padding: 0;\n}\n\n/*\n * Allow only vertical resizing of textareas.\n */\n\ntextarea {\n  resize: vertical;\n}\n\n/*\n * Browser upgrade prompt\n * ========================================================================== */\n\n.browserupgrade {\n  margin: 0.2em 0;\n  background: #ccc;\n  color: #000;\n  padding: 0.2em 0;\n}\n\n/*\n * Print styles\n * Inlined to avoid the additional HTTP request:\n * http://www.phpied.com/delay-loading-your-print-css/\n * ========================================================================== */\n\n@media print {\n  *,\n  *::before,\n  *::after {\n    background: transparent !important;\n    color: #000 !important; /* Black prints faster: http://www.sanbeiji.com/archives/953 */\n    -webkit-box-shadow: none !important;\n            box-shadow: none !important;\n    text-shadow: none !important;\n  }\n\n  a,\n  a:visited {\n    text-decoration: underline;\n  }\n\n  a[href]::after {\n    content: ' (' attr(href) ')';\n  }\n\n  abbr[title]::after {\n    content: ' (' attr(title) ')';\n  }\n\n  /*\n   * Don't show links that are fragment identifiers,\n   * or use the `javascript:` pseudo protocol\n   */\n\n  a[href^='#']::after,\n  a[href^='javascript:']::after {\n    content: '';\n  }\n\n  pre,\n  blockquote {\n    border: 1px solid #999;\n    page-break-inside: avoid;\n  }\n\n  /*\n   * Printing Tables:\n   * http://css-discuss.incutio.com/wiki/Printing_Tables\n   */\n\n  thead {\n    display: table-header-group;\n  }\n\n  tr,\n  img {\n    page-break-inside: avoid;\n  }\n\n  img {\n    max-width: 100% !important;\n  }\n\n  p,\n  h2,\n  h3 {\n    orphans: 3;\n    widows: 3;\n  }\n\n  h2,\n  h3 {\n    page-break-after: avoid;\n  }\n}\n", "", {"version":3,"sources":["/./components/App/App.css","/../node_modules/normalize.css/normalize.css","/./components/variables.css"],"names":[],"mappings":"AAAA;;;;;;;GAOG;;ACPH,4EAA4E;;AAE5E;;;;GAIG;;AAEH;EACE,wBAAwB,CAAC,OAAO;EAChC,kBAAkB,CAAC,OAAO;EAC1B,2BAA2B,CAAC,OAAO;EACnC,+BAA+B,CAAC,OAAO;CACxC;;AAED;;GAEG;;AAEH;EACE,UAAU;CACX;;AAED;gFACgF;;AAEhF;;;;GAIG;;AAEH;;;;;;;;;;;UAWU,OAAO;EACf,eAAe;CAChB;;AAED;;GAEG;;AAEH;;;;EAIE,sBAAsB;CACvB;;AAED;;GAEG;;AAEH;EACE,cAAc;EACd,UAAU;CACX;;AAED;;GAEG;;AAEH;EACE,yBAAyB;CAC1B;;AAED;;;GAGG;;AAEH;;EAEE,cAAc;CACf;;AAED;gFACgF;;AAEhF;;;GAGG;;AAEH;EACE,8BAA8B,CAAC,OAAO;EACtC,sCAAsC,CAAC,OAAO;CAC/C;;AAED;;;GAGG;;AAEH;;EAEE,iBAAiB;CAClB;;AAED;gFACgF;;AAEhF;;;GAGG;;AAEH;EACE,oBAAoB,CAAC,OAAO;EAC5B,2BAA2B,CAAC,OAAO;EACnC,kCAAkC,CAAC,OAAO;CAC3C;;AAED;;GAEG;;AAEH;;EAEE,qBAAqB;CACtB;;AAED;;GAEG;;AAEH;;EAEE,oBAAoB;CACrB;;AAED;;GAEG;;AAEH;EACE,mBAAmB;CACpB;;AAED;;;GAGG;;AAEH;EACE,eAAe;EACf,iBAAiB;CAClB;;AAED;;GAEG;;AAEH;EACE,uBAAuB;EACvB,YAAY;CACb;;AAED;;GAEG;;AAEH;EACE,eAAe;CAChB;;AAED;;;GAGG;;AAEH;;EAEE,eAAe;EACf,eAAe;EACf,mBAAmB;EACnB,yBAAyB;CAC1B;;AAED;EACE,gBAAgB;CACjB;;AAED;EACE,YAAY;CACb;;AAED;gFACgF;;AAEhF;;GAEG;;AAEH;EACE,mBAAmB;CACpB;;AAED;;GAEG;;AAEH;EACE,iBAAiB;CAClB;;AAED;gFACgF;;AAEhF;;;GAGG;;AAEH;;;;EAIE,kCAAkC,CAAC,OAAO;EAC1C,eAAe,CAAC,OAAO;CACxB;;AAED;;GAEG;;AAEH;EACE,iBAAiB;CAClB;;AAED;;;GAGG;;AAEH;EACE,gCAAwB;UAAxB,wBAAwB,CAAC,OAAO;EAChC,UAAU,CAAC,OAAO;EAClB,kBAAkB,CAAC,OAAO;CAC3B;;AAED;gFACgF;;AAEhF;;;GAGG;;AAEH;;;;;EAKE,cAAc,CAAC,OAAO;EACtB,UAAU,CAAC,OAAO;CACnB;;AAED;;GAEG;;AAEH;EACE,kBAAkB;CACnB;;AAED;;;GAGG;;AAEH;QACQ,OAAO;EACb,kBAAkB;CACnB;;AAED;;;GAGG;;AAEH;SACS,OAAO;EACd,qBAAqB;CACtB;;AAED;;;;GAIG;;AAEH;;;;EAIE,2BAA2B,CAAC,OAAO;CACpC;;AAED;;GAEG;;AAEH;;;;EAIE,mBAAmB;EACnB,WAAW;CACZ;;AAED;;GAEG;;AAEH;;;;EAIE,+BAA+B;CAChC;;AAED;;GAEG;;AAEH;EACE,0BAA0B;EAC1B,cAAc;EACd,+BAA+B;CAChC;;AAED;;;;;GAKG;;AAEH;EACE,+BAAuB;UAAvB,uBAAuB,CAAC,OAAO;EAC/B,eAAe,CAAC,OAAO;EACvB,eAAe,CAAC,OAAO;EACvB,gBAAgB,CAAC,OAAO;EACxB,WAAW,CAAC,OAAO;EACnB,oBAAoB,CAAC,OAAO;CAC7B;;AAED;;GAEG;;AAEH;EACE,eAAe;CAChB;;AAED;;;GAGG;;AAEH;;EAEE,+BAAuB;UAAvB,uBAAuB,CAAC,OAAO;EAC/B,WAAW,CAAC,OAAO;CACpB;;AAED;;GAEG;;AAEH;;EAEE,aAAa;CACd;;AAED;;;GAGG;;AAEH;EACE,8BAA8B,CAAC,OAAO;EACtC,qBAAqB,CAAC,OAAO;CAC9B;;AAED;;GAEG;;AAEH;;EAEE,yBAAyB;CAC1B;;AAED;;GAEG;;AAEH;EACE,eAAe;EACf,cAAc;CACf;;AAED;;;GAGG;;AAEH;EACE,2BAA2B,CAAC,OAAO;EACnC,cAAc,CAAC,OAAO;CACvB;;AD1ZD,yEAAyE;;AEXzE;;;;;;;GAOG;;AAEH;EACE;;gFAE8E;;EAI9E;;gFAE8E;;EAI9E;;gFAE8E,EAErD,gCAAgC,EAChC,2BAA2B,EAC3B,6BAA6B,CAC7B,iCAAiC;CAC3D;;AFfD;;gFAEgF;;AAEhF;EACE,YAAY;EACZ,eAAe,CAAC,YAAY;EAC5B,2DAAqC;EACrC,mBAAmB,CAAC,WAAW;CAChC;;AAED;EACE,eAAe;CAChB;;AAED;;;;;;GAMG;;AAEH;EACE,oBAAoB;EACpB,kBAAkB;CACnB;;AAED;EACE,oBAAoB;EACpB,kBAAkB;CACnB;;AAED;;GAEG;;AAEH;EACE,eAAe;EACf,YAAY;EACZ,UAAU;EACV,2BAA2B;EAC3B,cAAc;EACd,WAAW;CACZ;;AAED;;;;GAIG;;AAEH;;;;;;EAME,uBAAuB;CACxB;;AAED;;GAEG;;AAEH;EACE,UAAU;EACV,UAAU;EACV,WAAW;CACZ;;AAED;;GAEG;;AAEH;EACE,iBAAiB;CAClB;;AAED;;gFAEgF;;AAEhF;EACE,gBAAgB;EAChB,iBAAiB;EACjB,YAAY;EACZ,iBAAiB;CAClB;;AAED;;;;gFAIgF;;AAEhF;EACE;;;IAGE,mCAAmC;IACnC,uBAAuB,CAAC,+DAA+D;IACvF,oCAA4B;YAA5B,4BAA4B;IAC5B,6BAA6B;GAC9B;;EAED;;IAEE,2BAA2B;GAC5B;;EAED;IACE,6BAA6B;GAC9B;;EAED;IACE,8BAA8B;GAC/B;;EAED;;;KAGG;;EAEH;;IAEE,YAAY;GACb;;EAED;;IAEE,uBAAuB;IACvB,yBAAyB;GAC1B;;EAED;;;KAGG;;EAEH;IACE,4BAA4B;GAC7B;;EAED;;IAEE,yBAAyB;GAC1B;;EAED;IACE,2BAA2B;GAC5B;;EAED;;;IAGE,WAAW;IACX,UAAU;GACX;;EAED;;IAEE,wBAAwB;GACzB;CACF","file":"App.css","sourcesContent":["/**\n * React Starter Kit (https://www.reactstarterkit.com/)\n *\n * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE.txt file in the root directory of this source tree.\n */\n\n@import '../../../node_modules/normalize.css/normalize.css';\n\n/*! React Starter Kit | MIT License | https://www.reactstarterkit.com/ */\n\n@import '../variables.css';\n\n/*\n * Base styles\n * ========================================================================== */\n\nhtml {\n  color: #222;\n  font-size: 1em; /* ~16px; */\n  font-family: var(--font-family-base);\n  line-height: 1.375; /* ~22px */\n}\n\na {\n  color: #0074c2;\n}\n\n/*\n * Remove text-shadow in selection highlight:\n * https://twitter.com/miketaylr/status/12228805301\n *\n * These selection rule sets have to be separate.\n * Customize the background color to match your design.\n */\n\n::-moz-selection {\n  background: #b3d4fc;\n  text-shadow: none;\n}\n\n::selection {\n  background: #b3d4fc;\n  text-shadow: none;\n}\n\n/*\n * A better looking default horizontal rule\n */\n\nhr {\n  display: block;\n  height: 1px;\n  border: 0;\n  border-top: 1px solid #ccc;\n  margin: 1em 0;\n  padding: 0;\n}\n\n/*\n * Remove the gap between audio, canvas, iframes,\n * images, videos and the bottom of their containers:\n * https://github.com/h5bp/html5-boilerplate/issues/440\n */\n\naudio,\ncanvas,\niframe,\nimg,\nsvg,\nvideo {\n  vertical-align: middle;\n}\n\n/*\n * Remove default fieldset styles.\n */\n\nfieldset {\n  border: 0;\n  margin: 0;\n  padding: 0;\n}\n\n/*\n * Allow only vertical resizing of textareas.\n */\n\ntextarea {\n  resize: vertical;\n}\n\n/*\n * Browser upgrade prompt\n * ========================================================================== */\n\n:global(.browserupgrade) {\n  margin: 0.2em 0;\n  background: #ccc;\n  color: #000;\n  padding: 0.2em 0;\n}\n\n/*\n * Print styles\n * Inlined to avoid the additional HTTP request:\n * http://www.phpied.com/delay-loading-your-print-css/\n * ========================================================================== */\n\n@media print {\n  *,\n  *::before,\n  *::after {\n    background: transparent !important;\n    color: #000 !important; /* Black prints faster: http://www.sanbeiji.com/archives/953 */\n    box-shadow: none !important;\n    text-shadow: none !important;\n  }\n\n  a,\n  a:visited {\n    text-decoration: underline;\n  }\n\n  a[href]::after {\n    content: ' (' attr(href) ')';\n  }\n\n  abbr[title]::after {\n    content: ' (' attr(title) ')';\n  }\n\n  /*\n   * Don't show links that are fragment identifiers,\n   * or use the `javascript:` pseudo protocol\n   */\n\n  a[href^='#']::after,\n  a[href^='javascript:']::after {\n    content: '';\n  }\n\n  pre,\n  blockquote {\n    border: 1px solid #999;\n    page-break-inside: avoid;\n  }\n\n  /*\n   * Printing Tables:\n   * http://css-discuss.incutio.com/wiki/Printing_Tables\n   */\n\n  thead {\n    display: table-header-group;\n  }\n\n  tr,\n  img {\n    page-break-inside: avoid;\n  }\n\n  img {\n    max-width: 100% !important;\n  }\n\n  p,\n  h2,\n  h3 {\n    orphans: 3;\n    widows: 3;\n  }\n\n  h2,\n  h3 {\n    page-break-after: avoid;\n  }\n}\n","/*! normalize.css v4.1.1 | MIT License | github.com/necolas/normalize.css */\n\n/**\n * 1. Change the default font family in all browsers (opinionated).\n * 2. Correct the line height in all browsers.\n * 3. Prevent adjustments of font size after orientation changes in IE and iOS.\n */\n\nhtml {\n  font-family: sans-serif; /* 1 */\n  line-height: 1.15; /* 2 */\n  -ms-text-size-adjust: 100%; /* 3 */\n  -webkit-text-size-adjust: 100%; /* 3 */\n}\n\n/**\n * Remove the margin in all browsers (opinionated).\n */\n\nbody {\n  margin: 0;\n}\n\n/* HTML5 display definitions\n   ========================================================================== */\n\n/**\n * Add the correct display in IE 9-.\n * 1. Add the correct display in Edge, IE, and Firefox.\n * 2. Add the correct display in IE.\n */\n\narticle,\naside,\ndetails, /* 1 */\nfigcaption,\nfigure,\nfooter,\nheader,\nmain, /* 2 */\nmenu,\nnav,\nsection,\nsummary { /* 1 */\n  display: block;\n}\n\n/**\n * Add the correct display in IE 9-.\n */\n\naudio,\ncanvas,\nprogress,\nvideo {\n  display: inline-block;\n}\n\n/**\n * Add the correct display in iOS 4-7.\n */\n\naudio:not([controls]) {\n  display: none;\n  height: 0;\n}\n\n/**\n * Add the correct vertical alignment in Chrome, Firefox, and Opera.\n */\n\nprogress {\n  vertical-align: baseline;\n}\n\n/**\n * Add the correct display in IE 10-.\n * 1. Add the correct display in IE.\n */\n\ntemplate, /* 1 */\n[hidden] {\n  display: none;\n}\n\n/* Links\n   ========================================================================== */\n\n/**\n * 1. Remove the gray background on active links in IE 10.\n * 2. Remove gaps in links underline in iOS 8+ and Safari 8+.\n */\n\na {\n  background-color: transparent; /* 1 */\n  -webkit-text-decoration-skip: objects; /* 2 */\n}\n\n/**\n * Remove the outline on focused links when they are also active or hovered\n * in all browsers (opinionated).\n */\n\na:active,\na:hover {\n  outline-width: 0;\n}\n\n/* Text-level semantics\n   ========================================================================== */\n\n/**\n * 1. Remove the bottom border in Firefox 39-.\n * 2. Add the correct text decoration in Chrome, Edge, IE, Opera, and Safari.\n */\n\nabbr[title] {\n  border-bottom: none; /* 1 */\n  text-decoration: underline; /* 2 */\n  text-decoration: underline dotted; /* 2 */\n}\n\n/**\n * Prevent the duplicate application of `bolder` by the next rule in Safari 6.\n */\n\nb,\nstrong {\n  font-weight: inherit;\n}\n\n/**\n * Add the correct font weight in Chrome, Edge, and Safari.\n */\n\nb,\nstrong {\n  font-weight: bolder;\n}\n\n/**\n * Add the correct font style in Android 4.3-.\n */\n\ndfn {\n  font-style: italic;\n}\n\n/**\n * Correct the font size and margin on `h1` elements within `section` and\n * `article` contexts in Chrome, Firefox, and Safari.\n */\n\nh1 {\n  font-size: 2em;\n  margin: 0.67em 0;\n}\n\n/**\n * Add the correct background and color in IE 9-.\n */\n\nmark {\n  background-color: #ff0;\n  color: #000;\n}\n\n/**\n * Add the correct font size in all browsers.\n */\n\nsmall {\n  font-size: 80%;\n}\n\n/**\n * Prevent `sub` and `sup` elements from affecting the line height in\n * all browsers.\n */\n\nsub,\nsup {\n  font-size: 75%;\n  line-height: 0;\n  position: relative;\n  vertical-align: baseline;\n}\n\nsub {\n  bottom: -0.25em;\n}\n\nsup {\n  top: -0.5em;\n}\n\n/* Embedded content\n   ========================================================================== */\n\n/**\n * Remove the border on images inside links in IE 10-.\n */\n\nimg {\n  border-style: none;\n}\n\n/**\n * Hide the overflow in IE.\n */\n\nsvg:not(:root) {\n  overflow: hidden;\n}\n\n/* Grouping content\n   ========================================================================== */\n\n/**\n * 1. Correct the inheritance and scaling of font size in all browsers.\n * 2. Correct the odd `em` font sizing in all browsers.\n */\n\ncode,\nkbd,\npre,\nsamp {\n  font-family: monospace, monospace; /* 1 */\n  font-size: 1em; /* 2 */\n}\n\n/**\n * Add the correct margin in IE 8.\n */\n\nfigure {\n  margin: 1em 40px;\n}\n\n/**\n * 1. Add the correct box sizing in Firefox.\n * 2. Show the overflow in Edge and IE.\n */\n\nhr {\n  box-sizing: content-box; /* 1 */\n  height: 0; /* 1 */\n  overflow: visible; /* 2 */\n}\n\n/* Forms\n   ========================================================================== */\n\n/**\n * 1. Change font properties to `inherit` in all browsers (opinionated).\n * 2. Remove the margin in Firefox and Safari.\n */\n\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  font: inherit; /* 1 */\n  margin: 0; /* 2 */\n}\n\n/**\n * Restore the font weight unset by the previous rule.\n */\n\noptgroup {\n  font-weight: bold;\n}\n\n/**\n * Show the overflow in IE.\n * 1. Show the overflow in Edge.\n */\n\nbutton,\ninput { /* 1 */\n  overflow: visible;\n}\n\n/**\n * Remove the inheritance of text transform in Edge, Firefox, and IE.\n * 1. Remove the inheritance of text transform in Firefox.\n */\n\nbutton,\nselect { /* 1 */\n  text-transform: none;\n}\n\n/**\n * 1. Prevent a WebKit bug where (2) destroys native `audio` and `video`\n *    controls in Android 4.\n * 2. Correct the inability to style clickable types in iOS and Safari.\n */\n\nbutton,\nhtml [type=\"button\"], /* 1 */\n[type=\"reset\"],\n[type=\"submit\"] {\n  -webkit-appearance: button; /* 2 */\n}\n\n/**\n * Remove the inner border and padding in Firefox.\n */\n\nbutton::-moz-focus-inner,\n[type=\"button\"]::-moz-focus-inner,\n[type=\"reset\"]::-moz-focus-inner,\n[type=\"submit\"]::-moz-focus-inner {\n  border-style: none;\n  padding: 0;\n}\n\n/**\n * Restore the focus styles unset by the previous rule.\n */\n\nbutton:-moz-focusring,\n[type=\"button\"]:-moz-focusring,\n[type=\"reset\"]:-moz-focusring,\n[type=\"submit\"]:-moz-focusring {\n  outline: 1px dotted ButtonText;\n}\n\n/**\n * Change the border, margin, and padding in all browsers (opinionated).\n */\n\nfieldset {\n  border: 1px solid #c0c0c0;\n  margin: 0 2px;\n  padding: 0.35em 0.625em 0.75em;\n}\n\n/**\n * 1. Correct the text wrapping in Edge and IE.\n * 2. Correct the color inheritance from `fieldset` elements in IE.\n * 3. Remove the padding so developers are not caught out when they zero out\n *    `fieldset` elements in all browsers.\n */\n\nlegend {\n  box-sizing: border-box; /* 1 */\n  color: inherit; /* 2 */\n  display: table; /* 1 */\n  max-width: 100%; /* 1 */\n  padding: 0; /* 3 */\n  white-space: normal; /* 1 */\n}\n\n/**\n * Remove the default vertical scrollbar in IE.\n */\n\ntextarea {\n  overflow: auto;\n}\n\n/**\n * 1. Add the correct box sizing in IE 10-.\n * 2. Remove the padding in IE 10-.\n */\n\n[type=\"checkbox\"],\n[type=\"radio\"] {\n  box-sizing: border-box; /* 1 */\n  padding: 0; /* 2 */\n}\n\n/**\n * Correct the cursor style of increment and decrement buttons in Chrome.\n */\n\n[type=\"number\"]::-webkit-inner-spin-button,\n[type=\"number\"]::-webkit-outer-spin-button {\n  height: auto;\n}\n\n/**\n * 1. Correct the odd appearance in Chrome and Safari.\n * 2. Correct the outline style in Safari.\n */\n\n[type=\"search\"] {\n  -webkit-appearance: textfield; /* 1 */\n  outline-offset: -2px; /* 2 */\n}\n\n/**\n * Remove the inner padding and cancel buttons in Chrome and Safari on OS X.\n */\n\n[type=\"search\"]::-webkit-search-cancel-button,\n[type=\"search\"]::-webkit-search-decoration {\n  -webkit-appearance: none;\n}\n\n/**\n * Correct the text style of placeholders in Chrome, Edge, and Safari.\n */\n\n::-webkit-input-placeholder {\n  color: inherit;\n  opacity: 0.54;\n}\n\n/**\n * 1. Correct the inability to style clickable types in iOS and Safari.\n * 2. Change font properties to `inherit` in Safari.\n */\n\n::-webkit-file-upload-button {\n  -webkit-appearance: button; /* 1 */\n  font: inherit; /* 2 */\n}\n","/**\n * React Starter Kit (https://www.reactstarterkit.com/)\n *\n * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE.txt file in the root directory of this source tree.\n */\n\n:root {\n  /*\n   * Typography\n   * ======================================================================== */\n\n  --font-family-base: 'Segoe UI', 'HelveticaNeue-Light', sans-serif;\n\n  /*\n   * Layout\n   * ======================================================================== */\n\n  --max-content-width: 1000px;\n\n  /*\n   * Media queries breakpoints\n   * ======================================================================== */\n\n  --screen-xs-min: 480px;  /* Extra small screen / phone */\n  --screen-sm-min: 768px;  /* Small screen / tablet */\n  --screen-md-min: 992px;  /* Medium screen / desktop */\n  --screen-lg-min: 1200px; /* Large screen / wide desktop */\n}\n"],"sourceRoot":"webpack://"}]);
  
  // exports


/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  
  var _react = __webpack_require__(11);
  
  var _react2 = _interopRequireDefault(_react);
  
  var _withStyles = __webpack_require__(18);
  
  var _withStyles2 = _interopRequireDefault(_withStyles);
  
  var _reactBootstrap = __webpack_require__(38);
  
  var _Navbar = __webpack_require__(39);
  
  var _Navbar2 = _interopRequireDefault(_Navbar);
  
  var _history = __webpack_require__(40);
  
  var _history2 = _interopRequireDefault(_history);
  
  var _jquery = __webpack_require__(44);
  
  var _jquery2 = _interopRequireDefault(_jquery);
  
  var _Sidebar = __webpack_require__(45);
  
  var _Sidebar2 = _interopRequireDefault(_Sidebar);
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  var logo = __webpack_require__(47); /**
                                      * React Starter Kit (https://www.reactstarterkit.com/)
                                      *
                                      * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
                                      *
                                      * This source code is licensed under the MIT license found in the
                                      * LICENSE.txt file in the root directory of this source tree.
                                      */
  
  function Header() {
    return _react2.default.createElement(
      'div',
      { id: 'wrapper', className: 'content' },
      _react2.default.createElement(
        _Navbar2.default,
        { fluid: true, style: { margin: 0 } },
        _react2.default.createElement(
          _Navbar.Brand,
          null,
          _react2.default.createElement(
            'span',
            null,
            _react2.default.createElement('img', { src: logo, alt: 'Club Connect', title: 'ClubConnect' }),
            _react2.default.createElement(
              'span',
              null,
              '\xA0Club Connect'
            )
          )
        ),
        _react2.default.createElement(
          'ul',
          { className: 'nav navbar-top-links navbar-right' },
          _react2.default.createElement(
            _reactBootstrap.NavDropdown,
            { title: _react2.default.createElement('i', { className: 'fa fa-user fa-fw' }), id: 'navDropdown4' },
            _react2.default.createElement(
              _reactBootstrap.MenuItem,
              { eventKey: '4', onClick: function onClick(event) {
                  _history2.default.push('/login');
                } },
              _react2.default.createElement(
                'span',
                null,
                ' ',
                _react2.default.createElement('i', { className: 'fa fa-sign-out fa-fw' }),
                ' Logout '
              )
            )
          ),
          _react2.default.createElement(
            _reactBootstrap.MenuItem,
            { eventKey: '4', onClick: function onClick(event) {
                _history2.default.push('/login');
              } },
            _react2.default.createElement(
              'span',
              null,
              ' ',
              _react2.default.createElement('div', { className: 'pt button pt-intent-button' }),
              ' Registration/Login '
            )
          )
        ),
        _react2.default.createElement(_Sidebar2.default, null)
      )
    );
  }
  function toggleMenu() {
    if ((0, _jquery2.default)(".navbar-collapse").hasClass('collapse')) {
      (0, _jquery2.default)(".navbar-collapse").removeClass('collapse');
    } else {
      (0, _jquery2.default)(".navbar-collapse").addClass('collapse');
    }
  }
  
  exports.default = Header;

/***/ }),
/* 38 */
/***/ (function(module, exports) {

  module.exports = require("react-bootstrap");

/***/ }),
/* 39 */
/***/ (function(module, exports) {

  module.exports = require("react-bootstrap/lib/Navbar");

/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  
  var _createBrowserHistory = __webpack_require__(41);
  
  var _createBrowserHistory2 = _interopRequireDefault(_createBrowserHistory);
  
  var _createMemoryHistory = __webpack_require__(42);
  
  var _createMemoryHistory2 = _interopRequireDefault(_createMemoryHistory);
  
  var _useQueries = __webpack_require__(43);
  
  var _useQueries2 = _interopRequireDefault(_useQueries);
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  var history = (0, _useQueries2.default)( false ? _createBrowserHistory2.default : _createMemoryHistory2.default)(); /**
                                                                                                                                    * React Starter Kit (https://www.reactstarterkit.com/)
                                                                                                                                    *
                                                                                                                                    * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
                                                                                                                                    *
                                                                                                                                    * This source code is licensed under the MIT license found in the
                                                                                                                                    * LICENSE.txt file in the root directory of this source tree.
                                                                                                                                    */
  
  exports.default = history;

/***/ }),
/* 41 */
/***/ (function(module, exports) {

  module.exports = require("history/lib/createBrowserHistory");

/***/ }),
/* 42 */
/***/ (function(module, exports) {

  module.exports = require("history/lib/createMemoryHistory");

/***/ }),
/* 43 */
/***/ (function(module, exports) {

  module.exports = require("history/lib/useQueries");

/***/ }),
/* 44 */
/***/ (function(module, exports) {

  module.exports = require("jquery");

/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  
  var _getPrototypeOf = __webpack_require__(29);
  
  var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);
  
  var _classCallCheck2 = __webpack_require__(30);
  
  var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
  
  var _createClass2 = __webpack_require__(31);
  
  var _createClass3 = _interopRequireDefault(_createClass2);
  
  var _possibleConstructorReturn2 = __webpack_require__(32);
  
  var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);
  
  var _inherits2 = __webpack_require__(33);
  
  var _inherits3 = _interopRequireDefault(_inherits2);
  
  var _react = __webpack_require__(11);
  
  var _react2 = _interopRequireDefault(_react);
  
  var _classnames = __webpack_require__(46);
  
  var _classnames2 = _interopRequireDefault(_classnames);
  
  var _history = __webpack_require__(40);
  
  var _history2 = _interopRequireDefault(_history);
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  var Sidebar = function (_Component) {
    (0, _inherits3.default)(Sidebar, _Component);
  
    function Sidebar(props) {
      (0, _classCallCheck3.default)(this, Sidebar);
  
      var _this = (0, _possibleConstructorReturn3.default)(this, (Sidebar.__proto__ || (0, _getPrototypeOf2.default)(Sidebar)).call(this, props));
  
      _this.state = {
        uiElementsCollapsed: true,
        chartsElementsCollapsed: true,
        multiLevelDropdownCollapsed: true,
        thirdLevelDropdownCollapsed: true,
        samplePagesCollapsed: true
      };
      return _this;
    }
  
    (0, _createClass3.default)(Sidebar, [{
      key: 'render',
      value: function render() {
        return _react2.default.createElement(
          'div',
          { className: 'navbar-default sidebar', style: { marginLeft: '-20px' }, role: 'navigation' },
          _react2.default.createElement(
            'div',
            { className: 'sidebar-nav navbar-collapse collapse' },
            _react2.default.createElement(
              'ul',
              { className: 'nav in', id: 'side-menu' },
              _react2.default.createElement(
                'li',
                null,
                _react2.default.createElement(
                  'a',
                  { href: '', onClick: function onClick(e) {
                      e.preventDefault();_history2.default.push('/membershipReg');
                    } },
                  _react2.default.createElement('i', { className: 'fa fa-user-plus fa-fw' }),
                  ' \xA0Members Registration'
                )
              ),
              _react2.default.createElement(
                'li',
                null,
                _react2.default.createElement(
                  'a',
                  { href: '', onClick: function onClick(e) {
                      e.preventDefault();_history2.default.push('/resultsFixtures');
                    } },
                  _react2.default.createElement('i', { className: 'fa fa-dashboard fa-fw' }),
                  ' \xA0Fixtures / Results'
                )
              ),
              _react2.default.createElement(
                'li',
                null,
                _react2.default.createElement(
                  'a',
                  { href: '', onClick: function onClick(e) {
                      e.preventDefault();_history2.default.push('/chat');
                    } },
                  _react2.default.createElement('i', { className: 'fa fa-comments fa-fw' }),
                  ' \xA0Group Chat'
                )
              ),
              _react2.default.createElement(
                'li',
                null,
                _react2.default.createElement(
                  'a',
                  { href: '', onClick: function onClick(e) {
                      e.preventDefault();_history2.default.push('/onlineStore');
                    } },
                  _react2.default.createElement('i', { className: 'fa fa-shopping-cart fa-fw' }),
                  ' \xA0Online Shore'
                )
              )
            )
          )
        );
      }
    }]);
    return Sidebar;
  }(_react.Component);
  
  exports.default = Sidebar;

/***/ }),
/* 46 */
/***/ (function(module, exports) {

  module.exports = require("classnames");

/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

  module.exports = __webpack_require__.p + "components/Header/logo1.png?8a2775b651bd94385e39b7025ca10ce3";

/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  
  var _regenerator = __webpack_require__(1);
  
  var _regenerator2 = _interopRequireDefault(_regenerator);
  
  var _asyncToGenerator2 = __webpack_require__(4);
  
  var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);
  
  var _react = __webpack_require__(11);
  
  var _react2 = _interopRequireDefault(_react);
  
  var _Home = __webpack_require__(49);
  
  var _Home2 = _interopRequireDefault(_Home);
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  // import fetch from '../../core/fetch';
  
  /**
   * React Starter Kit (https://www.reactstarterkit.com/)
   *
   * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE.txt file in the root directory of this source tree.
   */
  
  exports.default = {
  
    path: '/',
  
    action: function action() {
      var _this = this;
  
      return (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                return _context.abrupt('return', _react2.default.createElement(_Home2.default, null));
  
              case 1:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, _this);
      }))();
    }
  };

/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  
  var _react = __webpack_require__(11);
  
  var _react2 = _interopRequireDefault(_react);
  
  var _withStyles = __webpack_require__(18);
  
  var _withStyles2 = _interopRequireDefault(_withStyles);
  
  var _reactBootstrap = __webpack_require__(38);
  
  var _Home = __webpack_require__(50);
  
  var _Home2 = _interopRequireDefault(_Home);
  
  var _Widget = __webpack_require__(52);
  
  var _Widget2 = _interopRequireDefault(_Widget);
  
  var _Donut = __webpack_require__(57);
  
  var _Donut2 = _interopRequireDefault(_Donut);
  
  var _recharts = __webpack_require__(100);
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  var title = 'Club Connect';
  
  var data = [{ name: 'Page A', uv: 4000, pv: 2400, amt: 2400, value: 600 }, { name: 'Page B', uv: 3000, pv: 1398, amt: 2210, value: 300 }, { name: 'Page C', uv: 2000, pv: 9800, amt: 2290, value: 500 }, { name: 'Page D', uv: 2780, pv: 3908, amt: 2000, value: 400 }, { name: 'Page E', uv: 1890, pv: 4800, amt: 2181, value: 200 }, { name: 'Page F', uv: 2390, pv: 3800, amt: 2500, value: 700 }, { name: 'Page G', uv: 3490, pv: 4300, amt: 2100, value: 100 }];
  
  function Home(props, context) {
    context.setTitle(title);
    return _react2.default.createElement(
      'div',
      null,
      _react2.default.createElement(
        'div',
        { className: 'row' },
        _react2.default.createElement(
          'div',
          { className: 'col-lg-12' },
          _react2.default.createElement(
            _reactBootstrap.PageHeader,
            null,
            'Welcome to ClubConnect'
          )
        )
      ),
      _react2.default.createElement(
        'div',
        { className: 'col-lg-8 col-md-6' },
        _react2.default.createElement(_Widget2.default, {
          style: 'panel-green',
          icon: 'fa fa-tasks fa-5x',
          count: '12',
          headerText: 'All clubs signed up',
          footerText: 'View Clubs',
          linkTo: '/forms'
        })
      ),
      _react2.default.createElement(
        'div',
        { className: 'col-lg-4' },
        _react2.default.createElement(
          _reactBootstrap.Panel,
          {
            header: _react2.default.createElement(
              'span',
              null,
              _react2.default.createElement('i', { className: 'fa fa-bell fa-fw' }),
              ' All clubs'
            )
          },
          _react2.default.createElement(
            _reactBootstrap.ListGroup,
            null,
            _react2.default.createElement(
              _reactBootstrap.ListGroupItem,
              { href: '', onClick: function onClick(e) {
                  e.preventDefault();
                } },
              _react2.default.createElement('i', { className: 'fa fa-comment fa-fw' }),
              ' New Comment',
              _react2.default.createElement(
                'span',
                { className: 'pull-right text-muted small' },
                _react2.default.createElement(
                  'em',
                  null,
                  '4 minutes ago'
                )
              )
            )
          ),
          _react2.default.createElement(
            _reactBootstrap.Button,
            { block: true },
            'View All Alerts'
          )
        )
      )
    );
  }
  
  Home.propTypes = {
    // news: PropTypes.arrayOf(PropTypes.shape({
    //   title: PropTypes.string.isRequired,
    //   link: PropTypes.string.isRequired,
    //   contentSnippet: PropTypes.string,
    // })).isRequired,
  };
  Home.contextTypes = { setTitle: _react.PropTypes.func.isRequired };
  
  exports.default = (0, _withStyles2.default)(_Home2.default)(Home);

/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

  
      var content = __webpack_require__(51);
      var insertCss = __webpack_require__(22);
  
      if (typeof content === 'string') {
        content = [[module.id, content, '']];
      }
  
      module.exports = content.locals || {};
      module.exports._getCss = function() { return content.toString(); };
      module.exports._insertCss = function(options) { return insertCss(content, options) };
    
      // Hot Module Replacement
      // https://webpack.github.io/docs/hot-module-replacement
      // Only activated in browser context
      if (false) {
        var removeCss = function() {};
        module.hot.accept("!!../../../node_modules/css-loader/index.js?{\"sourceMap\":true,\"modules\":true,\"localIdentName\":\"[name]_[local]_[hash:base64:3]\",\"minimize\":false}!../../../node_modules/postcss-loader/index.js?pack=default!./Home.css", function() {
          content = require("!!../../../node_modules/css-loader/index.js?{\"sourceMap\":true,\"modules\":true,\"localIdentName\":\"[name]_[local]_[hash:base64:3]\",\"minimize\":false}!../../../node_modules/postcss-loader/index.js?pack=default!./Home.css");
  
          if (typeof content === 'string') {
            content = [[module.id, content, '']];
          }
  
          removeCss = insertCss(content, { replace: true });
        });
        module.hot.dispose(function() { removeCss(); });
      }
    

/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

  exports = module.exports = __webpack_require__(21)();
  // imports
  
  
  // module
  exports.push([module.id, "/**\n * React Starter Kit (https://www.reactstarterkit.com/)\n *\n * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE.txt file in the root directory of this source tree.\n */\n\n/**\n * React Starter Kit (https://www.reactstarterkit.com/)\n *\n * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE.txt file in the root directory of this source tree.\n */\n\n:root {\n  /*\n   * Typography\n   * ======================================================================== */\n\n  /*\n   * Layout\n   * ======================================================================== */\n\n  /*\n   * Media queries breakpoints\n   * ======================================================================== */  /* Extra small screen / phone */  /* Small screen / tablet */  /* Medium screen / desktop */ /* Large screen / wide desktop */\n}\n\n.Home_root_2IM {\n  padding-left: 20px;\n  padding-right: 20px;\n}\n\n.Home_container_2Ye {\n  margin: 0 auto;\n  padding: 0 0 40px;\n  max-width: 1000px;\n}\n\n.Home_news_oTy {\n  padding: 0;\n}\n\n.Home_newsItem_3Ob {\n  list-style-type: none;\n  padding-bottom: 6px;\n}\n\n.Home_newsTitle_1yW {\n  font-size: 1.125em;\n}\n\n.Home_newsTitle_1yW,\n.Home_newsDesc_21L {\n  display: block;\n}\n", "", {"version":3,"sources":["/./routes/home/Home.css","/./components/variables.css"],"names":[],"mappings":"AAAA;;;;;;;GAOG;;ACPH;;;;;;;GAOG;;AAEH;EACE;;gFAE8E;;EAI9E;;gFAE8E;;EAI9E;;gFAE8E,EAErD,gCAAgC,EAChC,2BAA2B,EAC3B,6BAA6B,CAC7B,iCAAiC;CAC3D;;ADnBD;EACE,mBAAmB;EACnB,oBAAoB;CACrB;;AAED;EACE,eAAe;EACf,kBAAkB;EAClB,kBAAoC;CACrC;;AAED;EACE,WAAW;CACZ;;AAED;EACE,sBAAsB;EACtB,oBAAoB;CACrB;;AAED;EACE,mBAAmB;CACpB;;AAED;;EAEE,eAAe;CAChB","file":"Home.css","sourcesContent":["/**\n * React Starter Kit (https://www.reactstarterkit.com/)\n *\n * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE.txt file in the root directory of this source tree.\n */\n\n@import '../../components/variables.css';\n\n.root {\n  padding-left: 20px;\n  padding-right: 20px;\n}\n\n.container {\n  margin: 0 auto;\n  padding: 0 0 40px;\n  max-width: var(--max-content-width);\n}\n\n.news {\n  padding: 0;\n}\n\n.newsItem {\n  list-style-type: none;\n  padding-bottom: 6px;\n}\n\n.newsTitle {\n  font-size: 1.125em;\n}\n\n.newsTitle,\n.newsDesc {\n  display: block;\n}\n","/**\n * React Starter Kit (https://www.reactstarterkit.com/)\n *\n * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE.txt file in the root directory of this source tree.\n */\n\n:root {\n  /*\n   * Typography\n   * ======================================================================== */\n\n  --font-family-base: 'Segoe UI', 'HelveticaNeue-Light', sans-serif;\n\n  /*\n   * Layout\n   * ======================================================================== */\n\n  --max-content-width: 1000px;\n\n  /*\n   * Media queries breakpoints\n   * ======================================================================== */\n\n  --screen-xs-min: 480px;  /* Extra small screen / phone */\n  --screen-sm-min: 768px;  /* Small screen / tablet */\n  --screen-md-min: 992px;  /* Medium screen / desktop */\n  --screen-lg-min: 1200px; /* Large screen / wide desktop */\n}\n"],"sourceRoot":"webpack://"}]);
  
  // exports
  exports.locals = {
  	"root": "Home_root_2IM",
  	"container": "Home_container_2Ye",
  	"news": "Home_news_oTy",
  	"newsItem": "Home_newsItem_3Ob",
  	"newsTitle": "Home_newsTitle_1yW",
  	"newsDesc": "Home_newsDesc_21L"
  };

/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  
  var _defineProperty2 = __webpack_require__(53);
  
  var _defineProperty3 = _interopRequireDefault(_defineProperty2);
  
  var _getPrototypeOf = __webpack_require__(29);
  
  var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);
  
  var _classCallCheck2 = __webpack_require__(30);
  
  var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
  
  var _createClass2 = __webpack_require__(31);
  
  var _createClass3 = _interopRequireDefault(_createClass2);
  
  var _possibleConstructorReturn2 = __webpack_require__(32);
  
  var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);
  
  var _inherits2 = __webpack_require__(33);
  
  var _inherits3 = _interopRequireDefault(_inherits2);
  
  var _react = __webpack_require__(11);
  
  var _react2 = _interopRequireDefault(_react);
  
  var _reactBootstrap = __webpack_require__(38);
  
  var _Link = __webpack_require__(54);
  
  var _Link2 = _interopRequireDefault(_Link);
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  var StatWidget = function (_Component) {
    (0, _inherits3.default)(StatWidget, _Component);
  
    function StatWidget() {
      (0, _classCallCheck3.default)(this, StatWidget);
      return (0, _possibleConstructorReturn3.default)(this, (StatWidget.__proto__ || (0, _getPrototypeOf2.default)(StatWidget)).apply(this, arguments));
    }
  
    (0, _createClass3.default)(StatWidget, [{
      key: 'render',
      value: function render() {
        var _React$createElement;
  
        return _react2.default.createElement(_reactBootstrap.Panel, (_React$createElement = {
          className: 'stat'
        }, (0, _defineProperty3.default)(_React$createElement, 'className', this.props.style), (0, _defineProperty3.default)(_React$createElement, 'header', _react2.default.createElement(
          'div',
          { className: 'row' },
          _react2.default.createElement(
            'div',
            { className: 'col-xs-3' },
            _react2.default.createElement('i', {
              className: this.props.icon
            })
          ),
          _react2.default.createElement(
            'div',
            { className: 'col-xs-9 text-right' },
            _react2.default.createElement(
              'div',
              { className: 'huge' },
              this.props.count
            ),
            _react2.default.createElement(
              'div',
              null,
              this.props.headerText
            )
          )
        )), (0, _defineProperty3.default)(_React$createElement, 'footer', _react2.default.createElement(
          _Link2.default,
          {
            to: this.props.linkTo // eslint-disable-line
  
          },
          _react2.default.createElement(
            'span',
            { className: 'pull-left' },
            this.props.footerText
          ),
          _react2.default.createElement(
            'span',
            { className: 'pull-right' },
            _react2.default.createElement('i', { className: 'fa fa-arrow-circle-right' })
          ),
          _react2.default.createElement('div', { className: 'clearfix' })
        )), _React$createElement));
      } // eslint-disable-line
  
    }]);
    return StatWidget;
  }(_react.Component);
  
  StatWidget.propTypes = {
    style: _react2.default.PropTypes.string,
    count: _react2.default.PropTypes.string,
    headerText: _react2.default.PropTypes.string,
    icon: _react2.default.PropTypes.string,
    footerText: _react2.default.PropTypes.string
  };
  exports.default = StatWidget;

/***/ }),
/* 53 */
/***/ (function(module, exports) {

  module.exports = require("babel-runtime/helpers/defineProperty");

/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  
  var _extends2 = __webpack_require__(55);
  
  var _extends3 = _interopRequireDefault(_extends2);
  
  var _objectWithoutProperties2 = __webpack_require__(56);
  
  var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);
  
  var _getPrototypeOf = __webpack_require__(29);
  
  var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);
  
  var _classCallCheck2 = __webpack_require__(30);
  
  var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
  
  var _createClass2 = __webpack_require__(31);
  
  var _createClass3 = _interopRequireDefault(_createClass2);
  
  var _possibleConstructorReturn2 = __webpack_require__(32);
  
  var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);
  
  var _inherits2 = __webpack_require__(33);
  
  var _inherits3 = _interopRequireDefault(_inherits2);
  
  var _react = __webpack_require__(11);
  
  var _react2 = _interopRequireDefault(_react);
  
  var _history = __webpack_require__(40);
  
  var _history2 = _interopRequireDefault(_history);
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  /**
   * React Starter Kit (https://www.reactstarterkit.com/)
   *
   * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE.txt file in the root directory of this source tree.
   */
  
  function isLeftClickEvent(event) {
    return event.button === 0;
  }
  
  function isModifiedEvent(event) {
    return !!(event.metaKey || event.altKey || event.ctrlKey || event.shiftKey);
  }
  
  var Link = function (_Component) {
    (0, _inherits3.default)(Link, _Component);
  
    function Link() {
      var _ref;
  
      var _temp, _this, _ret;
  
      (0, _classCallCheck3.default)(this, Link);
  
      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }
  
      return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = Link.__proto__ || (0, _getPrototypeOf2.default)(Link)).call.apply(_ref, [this].concat(args))), _this), _this.handleClick = function (event) {
        var allowTransition = true;
  
        if (_this.props.onClick) {
          _this.props.onClick(event);
        }
  
        if (isModifiedEvent(event) || !isLeftClickEvent(event)) {
          return;
        }
  
        if (event.defaultPrevented === true) {
          allowTransition = false;
        }
  
        event.preventDefault();
  
        if (allowTransition) {
          if (_this.props.to) {
            _history2.default.push(_this.props.to);
          } else {
            _history2.default.push({
              pathname: event.currentTarget.pathname,
              search: event.currentTarget.search
            });
          }
        }
      }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
    } // eslint-disable-line react/prefer-stateless-function
  
    (0, _createClass3.default)(Link, [{
      key: 'render',
      value: function render() {
        var _props = this.props,
            to = _props.to,
            props = (0, _objectWithoutProperties3.default)(_props, ['to']); // eslint-disable-line no-use-before-define
  
        return _react2.default.createElement('a', (0, _extends3.default)({ href: _history2.default.createHref(to) }, props, { onClick: this.handleClick }));
      }
    }]);
    return Link;
  }(_react.Component);
  
  Link.propTypes = {
    to: _react.PropTypes.oneOfType([_react.PropTypes.string, _react.PropTypes.object]).isRequired,
    onClick: _react.PropTypes.func
  };
  exports.default = Link;

/***/ }),
/* 55 */
/***/ (function(module, exports) {

  module.exports = require("babel-runtime/helpers/extends");

/***/ }),
/* 56 */
/***/ (function(module, exports) {

  module.exports = require("babel-runtime/helpers/objectWithoutProperties");

/***/ }),
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  
  var _getPrototypeOf = __webpack_require__(29);
  
  var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);
  
  var _classCallCheck2 = __webpack_require__(30);
  
  var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
  
  var _createClass2 = __webpack_require__(31);
  
  var _createClass3 = _interopRequireDefault(_createClass2);
  
  var _possibleConstructorReturn2 = __webpack_require__(32);
  
  var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);
  
  var _inherits2 = __webpack_require__(33);
  
  var _inherits3 = _interopRequireDefault(_inherits2);
  
  var _react = __webpack_require__(11);
  
  var _react2 = _interopRequireDefault(_react);
  
  var _PieChart = __webpack_require__(58);
  
  var _PieChart2 = _interopRequireDefault(_PieChart);
  
  var _Pie = __webpack_require__(85);
  
  var _Pie2 = _interopRequireDefault(_Pie);
  
  var _Sector = __webpack_require__(88);
  
  var _Sector2 = _interopRequireDefault(_Sector);
  
  var _ResponsiveContainer = __webpack_require__(97);
  
  var _ResponsiveContainer2 = _interopRequireDefault(_ResponsiveContainer);
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  // import { PieCharts, Pie, Sector, ResponsiveContainer } from '../../vendor/recharts';
  var renderActiveShape = function renderActiveShape(props) {
    var RADIAN = Math.PI / 180;
    var cx = props.cx,
        cy = props.cy,
        midAngle = props.midAngle,
        innerRadius = props.innerRadius,
        outerRadius = props.outerRadius,
        startAngle = props.startAngle,
        endAngle = props.endAngle,
        fill = props.fill,
        payload = props.payload,
        percent = props.percent,
        value = props.value;
  
    var sin = Math.sin(-RADIAN * midAngle);
    var cos = Math.cos(-RADIAN * midAngle);
    var sx = cx + (outerRadius + 5) * cos;
    var sy = cy + (outerRadius + 5) * sin;
    var mx = cx + (outerRadius + 10) * cos;
    var my = cy + (outerRadius + 10) * sin;
    var ex = mx + (cos >= 0 ? 1 : -1) * 11;
    var ey = my;
    var textAnchor = cos >= 0 ? 'start' : 'end';
  
    return _react2.default.createElement(
      'g',
      null,
      _react2.default.createElement(
        'text',
        { x: cx, y: cy, dy: 8, textAnchor: 'middle', fill: fill },
        payload.name
      ),
      _react2.default.createElement(_Sector2.default, {
        cx: cx,
        cy: cy,
        innerRadius: innerRadius,
        outerRadius: outerRadius,
        startAngle: startAngle,
        endAngle: endAngle,
        fill: fill
      }),
      _react2.default.createElement(_Sector2.default, {
        cx: cx,
        cy: cy,
        startAngle: startAngle,
        endAngle: endAngle,
        innerRadius: outerRadius + 6,
        outerRadius: outerRadius + 10,
        fill: fill
      }),
      _react2.default.createElement('path', { d: 'M' + sx + ',' + sy + 'L' + mx + ',' + my + 'L' + ex + ',' + ey, stroke: fill, fill: 'none' }),
      _react2.default.createElement('circle', { cx: ex, cy: ey, r: 2, fill: fill, stroke: 'none' }),
      _react2.default.createElement(
        'text',
        {
          x: ex + (cos >= 0 ? 1 : -1) * 12,
          y: ey,
          textAnchor: textAnchor,
          fill: '#333'
        },
        'Value ' + value
      ),
      _react2.default.createElement(
        'text',
        { x: ex + (cos >= 0 ? 1 : -1) * 12, y: ey, dy: 18, textAnchor: textAnchor, fill: 'red' },
        '(Rate ' + (percent * 100).toFixed(2) + '%)'
      )
    );
  };
  
  var Donut = function (_Component) {
    (0, _inherits3.default)(Donut, _Component);
  
    function Donut(props) {
      (0, _classCallCheck3.default)(this, Donut);
  
      var _this = (0, _possibleConstructorReturn3.default)(this, (Donut.__proto__ || (0, _getPrototypeOf2.default)(Donut)).call(this, props));
  
      _this.state = {
        activeIndex: 0
      };
      // this.onPieEnter = this.onPieEnter.bind(this);
      return _this;
    }
  
    (0, _createClass3.default)(Donut, [{
      key: 'onPieEnter',
      value: function onPieEnter(data, index) {
        this.setState({
          activeIndex: index
        });
      }
    }, {
      key: 'render',
      value: function render() {
        var _this2 = this;
  
        return _react2.default.createElement(
          _ResponsiveContainer2.default,
          { width: '100%', aspect: 2 },
          _react2.default.createElement(
            _PieChart2.default,
            {
              margin: { top: 10, right: 30, left: 0, bottom: 0 },
              onMouseEnter: function onMouseEnter(data, index) {
                _this2.onPieEnter(data, index);
              }
            },
            _react2.default.createElement(_Pie2.default, {
              activeIndex: this.state.activeIndex,
              activeShape: renderActiveShape,
              data: this.props.data,
              innerRadius: this.props.innerRadius,
              outerRadius: this.props.outerRadius,
              fill: this.props.color
            })
          )
        );
      }
    }]);
    return Donut;
  }(_react.Component);
  
  Donut.propTypes = {
    data: _react2.default.PropTypes.array,
    innerRadius: _react2.default.PropTypes.oneOfType([_react2.default.PropTypes.string, _react2.default.PropTypes.number]),
    outerRadius: _react2.default.PropTypes.oneOfType([_react2.default.PropTypes.string, _react2.default.PropTypes.number]),
    color: _react2.default.PropTypes.string
  };
  exports.default = Donut;

/***/ }),
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

  'use strict';
  
  var _getPrototypeOf = __webpack_require__(29);
  
  var _getPrototypeOf2 = _interopRequireDefault2(_getPrototypeOf);
  
  var _setPrototypeOf = __webpack_require__(59);
  
  var _setPrototypeOf2 = _interopRequireDefault2(_setPrototypeOf);
  
  var _create = __webpack_require__(60);
  
  var _create2 = _interopRequireDefault2(_create);
  
  var _typeof2 = __webpack_require__(61);
  
  var _typeof3 = _interopRequireDefault2(_typeof2);
  
  var _defineProperty = __webpack_require__(62);
  
  var _defineProperty2 = _interopRequireDefault2(_defineProperty);
  
  var _assign = __webpack_require__(23);
  
  var _assign2 = _interopRequireDefault2(_assign);
  
  function _interopRequireDefault2(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  
  var _extends = _assign2.default || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }return target;
  };
  
  var _createClass = function () {
    function defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;(0, _defineProperty2.default)(target, descriptor.key, descriptor);
      }
    }return function (Constructor, protoProps, staticProps) {
      if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
    };
  }();
  
  var _class, _class2, _temp2; /**
                                * @fileOverview Pie Chart
                                */
  
  var _react = __webpack_require__(11);
  
  var _react2 = _interopRequireDefault(_react);
  
  var _classnames = __webpack_require__(46);
  
  var _classnames2 = _interopRequireDefault(_classnames);
  
  var _Surface = __webpack_require__(63);
  
  var _Surface2 = _interopRequireDefault(_Surface);
  
  var _Legend = __webpack_require__(71);
  
  var _Legend2 = _interopRequireDefault(_Legend);
  
  var _Tooltip = __webpack_require__(82);
  
  var _Tooltip2 = _interopRequireDefault(_Tooltip);
  
  var _Pie = __webpack_require__(85);
  
  var _Pie2 = _interopRequireDefault(_Pie);
  
  var _Cell = __webpack_require__(95);
  
  var _Cell2 = _interopRequireDefault(_Cell);
  
  var _DataUtils = __webpack_require__(96);
  
  var _ReactUtils = __webpack_require__(64);
  
  var _PolarUtils = __webpack_require__(89);
  
  var _PureRender = __webpack_require__(72);
  
  var _PureRender2 = _interopRequireDefault(_PureRender);
  
  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
  }
  
  function _objectWithoutProperties(obj, keys) {
    var target = {};for (var i in obj) {
      if (keys.indexOf(i) >= 0) continue;if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;target[i] = obj[i];
    }return target;
  }
  
  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }
  
  function _possibleConstructorReturn(self, call) {
    if (!self) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }return call && ((typeof call === "undefined" ? "undefined" : (0, _typeof3.default)(call)) === "object" || typeof call === "function") ? call : self;
  }
  
  function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : (0, _typeof3.default)(superClass)));
    }subClass.prototype = (0, _create2.default)(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) _setPrototypeOf2.default ? (0, _setPrototypeOf2.default)(subClass, superClass) : subClass.__proto__ = superClass;
  }
  
  var PieChart = (0, _PureRender2.default)(_class = (_temp2 = _class2 = function (_Component) {
    _inherits(PieChart, _Component);
  
    function PieChart() {
      var _ref;
  
      var _temp, _this, _ret;
  
      _classCallCheck(this, PieChart);
  
      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }
  
      return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = PieChart.__proto__ || (0, _getPrototypeOf2.default)(PieChart)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
        activeTooltipLabel: '',
        activeTooltipCoord: { x: 0, y: 0 },
        activeTooltipPayload: [],
        isTooltipActive: false
      }, _this.handleMouseEnter = function (el, index, e) {
        var _this$props = _this.props;
        var children = _this$props.children;
        var onMouseEnter = _this$props.onMouseEnter;
        var cx = el.cx;
        var cy = el.cy;
        var outerRadius = el.outerRadius;
        var midAngle = el.midAngle;
  
        var tooltipItem = (0, _ReactUtils.findChildByType)(children, _Tooltip2.default);
  
        if (tooltipItem) {
          _this.setState({
            isTooltipActive: true,
            activeTooltipCoord: (0, _PolarUtils.polarToCartesian)(cx, cy, outerRadius, midAngle),
            activeTooltipPayload: [el]
          }, function () {
            if (onMouseEnter) {
              onMouseEnter(el, index, e);
            }
          });
        } else if (onMouseEnter) {
          onMouseEnter(el, index, e);
        }
      }, _this.handleMouseLeave = function (el, index, e) {
        var _this$props2 = _this.props;
        var children = _this$props2.children;
        var onMouseLeave = _this$props2.onMouseLeave;
  
        var tooltipItem = (0, _ReactUtils.findChildByType)(children, _Tooltip2.default);
  
        if (tooltipItem) {
          _this.setState({
            isTooltipActive: false
          }, function () {
            if (onMouseLeave) {
              onMouseLeave(el, index, e);
            }
          });
        } else if (onMouseLeave) {
          onMouseLeave(el, index, e);
        }
      }, _temp), _possibleConstructorReturn(_this, _ret);
    }
  
    _createClass(PieChart, [{
      key: 'getComposedData',
      value: function getComposedData(item) {
        var _item$props = item.props;
        var data = _item$props.data;
        var children = _item$props.children;
  
        var props = (0, _ReactUtils.getPresentationAttributes)(item.props);
        var cells = (0, _ReactUtils.findAllByType)(children, _Cell2.default);
  
        if (data && data.length) {
          return data.map(function (entry, index) {
            return _extends({}, props, entry, cells && cells[index] && cells[index].props);
          });
        }
  
        if (cells && cells.length) {
          return cells.map(function (cell) {
            return _extends({}, props, cell.props);
          });
        }
  
        return [];
      }
    }, {
      key: 'renderLegend',
  
      /**
       * Draw legend
       * @param  {Array} items             The instances of Pie
       * @return {ReactElement}            The instance of Legend
       */
      value: function renderLegend(items) {
        var _this2 = this;
  
        var children = this.props.children;
  
        var legendItem = (0, _ReactUtils.findChildByType)(children, _Legend2.default);
        if (!legendItem) {
          return null;
        }
  
        var _props = this.props;
        var width = _props.width;
        var height = _props.height;
        var margin = _props.margin;
  
        var legendData = legendItem.props && legendItem.props.payload || items.reduce(function (result, child) {
          var nameKey = child.props.nameKey;
  
          var data = _this2.getComposedData(child);
  
          return result.concat(data.map(function (entry) {
            return _extends({}, entry, { type: child.props.legendType, value: entry[nameKey],
              color: entry.fill
            });
          }));
        }, []);
  
        return _react2.default.cloneElement(legendItem, _extends({}, _Legend2.default.getWithHeight(legendItem, width, height), {
          payload: legendData,
          chartWidth: width,
          chartHeight: height,
          margin: margin
        }));
      }
    }, {
      key: 'renderTooltip',
      value: function renderTooltip() {
        var children = this.props.children;
  
        var tooltipItem = (0, _ReactUtils.findChildByType)(children, _Tooltip2.default);
  
        if (!tooltipItem) {
          return null;
        }
  
        var _props2 = this.props;
        var width = _props2.width;
        var height = _props2.height;
        var _state = this.state;
        var isTooltipActive = _state.isTooltipActive;
        var activeTooltipLabel = _state.activeTooltipLabel;
        var activeTooltipCoord = _state.activeTooltipCoord;
        var activeTooltipPayload = _state.activeTooltipPayload;
  
        var viewBox = { x: 0, y: 0, width: width, height: height };
  
        return _react2.default.cloneElement(tooltipItem, {
          viewBox: viewBox,
          active: isTooltipActive,
          label: activeTooltipLabel,
          payload: activeTooltipPayload,
          coordinate: activeTooltipCoord
        });
      }
  
      /**
       * Draw the main part of bar chart
       * @param  {Array} items    All the instance of Pie
       * @return {ReactComponent} All the instance of Pie
       */
  
    }, {
      key: 'renderItems',
      value: function renderItems(items) {
        var _this3 = this;
  
        var _props3 = this.props;
        var width = _props3.width;
        var height = _props3.height;
        var margin = _props3.margin;
        var onClick = _props3.onClick;
  
        return items.map(function (child, i) {
          var _child$props = child.props;
          var innerRadius = _child$props.innerRadius;
          var outerRadius = _child$props.outerRadius;
          var data = _child$props.data;
  
          var cx = (0, _DataUtils.getPercentValue)(child.props.cx, width, width / 2);
          var cy = (0, _DataUtils.getPercentValue)(child.props.cy, height, height / 2);
          var maxRadius = (0, _PolarUtils.getMaxRadius)(width, height, margin);
  
          return _react2.default.cloneElement(child, {
            key: 'recharts-pie-' + i,
            cx: cx,
            cy: cy,
            maxRadius: child.props.maxRadius || Math.sqrt(width * width + height * height) / 2,
            innerRadius: (0, _DataUtils.getPercentValue)(innerRadius, maxRadius, 0),
            outerRadius: (0, _DataUtils.getPercentValue)(outerRadius, maxRadius, maxRadius * 0.8),
            composedData: _this3.getComposedData(child),
            onMouseEnter: _this3.handleMouseEnter,
            onMouseLeave: _this3.handleMouseLeave,
            onClick: onClick
          });
        });
      }
    }, {
      key: 'render',
      value: function render() {
        if (!(0, _ReactUtils.validateWidthHeight)(this)) {
          return null;
        }
  
        var _props4 = this.props;
        var style = _props4.style;
        var children = _props4.children;
        var className = _props4.className;
        var width = _props4.width;
        var height = _props4.height;
  
        var others = _objectWithoutProperties(_props4, ['style', 'children', 'className', 'width', 'height']);
  
        var items = (0, _ReactUtils.findAllByType)(children, _Pie2.default);
        var attrs = (0, _ReactUtils.getPresentationAttributes)(others);
  
        return _react2.default.createElement('div', {
          className: (0, _classnames2.default)('recharts-wrapper', className),
          style: _extends({}, style, { position: 'relative', cursor: 'default', width: width, height: height })
        }, _react2.default.createElement(_Surface2.default, _extends({}, attrs, { width: width, height: height }), this.renderItems(items), (0, _ReactUtils.filterSvgElements)(children)), this.renderLegend(items), this.renderTooltip());
      }
    }]);
  
    return PieChart;
  }(_react.Component), _class2.displayName = 'PieChart', _class2.propTypes = {
    width: _react.PropTypes.number,
    height: _react.PropTypes.number,
    margin: _react.PropTypes.shape({
      top: _react.PropTypes.number,
      right: _react.PropTypes.number,
      bottom: _react.PropTypes.number,
      left: _react.PropTypes.number
    }),
    title: _react.PropTypes.string,
    style: _react.PropTypes.object,
    children: _react.PropTypes.oneOfType([_react.PropTypes.arrayOf(_react.PropTypes.node), _react.PropTypes.node]),
    className: _react.PropTypes.string,
    onMouseEnter: _react.PropTypes.func,
    onMouseLeave: _react.PropTypes.func,
    onClick: _react.PropTypes.func
  }, _class2.defaultProps = {
    style: {},
    margin: { top: 0, right: 0, bottom: 0, left: 0 }
  }, _temp2)) || _class;
  
  exports.default = PieChart;

/***/ }),
/* 59 */
/***/ (function(module, exports) {

  module.exports = require("babel-runtime/core-js/object/set-prototype-of");

/***/ }),
/* 60 */
/***/ (function(module, exports) {

  module.exports = require("babel-runtime/core-js/object/create");

/***/ }),
/* 61 */
/***/ (function(module, exports) {

  module.exports = require("babel-runtime/helpers/typeof");

/***/ }),
/* 62 */
/***/ (function(module, exports) {

  module.exports = require("babel-runtime/core-js/object/define-property");

/***/ }),
/* 63 */
/***/ (function(module, exports, __webpack_require__) {

  'use strict';
  
  var _assign = __webpack_require__(23);
  
  var _assign2 = _interopRequireDefault2(_assign);
  
  function _interopRequireDefault2(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  
  var _extends = _assign2.default || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }return target;
  };
  
  var _react = __webpack_require__(11);
  
  var _react2 = _interopRequireDefault(_react);
  
  var _classnames = __webpack_require__(46);
  
  var _classnames2 = _interopRequireDefault(_classnames);
  
  var _ReactUtils = __webpack_require__(64);
  
  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
  }
  
  function _objectWithoutProperties(obj, keys) {
    var target = {};for (var i in obj) {
      if (keys.indexOf(i) >= 0) continue;if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;target[i] = obj[i];
    }return target;
  } /**
     * @fileOverview Surface
     */
  
  var propTypes = {
    width: _react.PropTypes.number.isRequired,
    height: _react.PropTypes.number.isRequired,
    viewBox: _react.PropTypes.shape({
      x: _react.PropTypes.number,
      y: _react.PropTypes.number,
      width: _react.PropTypes.number,
      height: _react.PropTypes.number
    }),
    className: _react.PropTypes.string,
    style: _react.PropTypes.object,
    children: _react.PropTypes.oneOfType([_react.PropTypes.arrayOf(_react.PropTypes.node), _react.PropTypes.node])
  };
  function Surface(props) {
    var children = props.children;
    var width = props.width;
    var height = props.height;
    var viewBox = props.viewBox;
    var className = props.className;
    var style = props.style;
  
    var others = _objectWithoutProperties(props, ['children', 'width', 'height', 'viewBox', 'className', 'style']);
  
    var svgView = viewBox || { width: width, height: height, x: 0, y: 0 };
    var layerClass = (0, _classnames2.default)('recharts-surface', className);
    var attrs = (0, _ReactUtils.getPresentationAttributes)(others);
  
    return _react2.default.createElement('svg', _extends({}, attrs, {
      className: layerClass,
      width: width,
      height: height,
      style: style,
      viewBox: svgView.x + ' ' + svgView.y + ' ' + svgView.width + ' ' + svgView.height,
      version: '1.1'
    }), children);
  }
  
  Surface.propTypes = propTypes;
  
  exports.default = Surface;

/***/ }),
/* 64 */
/***/ (function(module, exports, __webpack_require__) {

  'use strict';
  
  var _keys = __webpack_require__(65);
  
  var _keys2 = _interopRequireDefault2(_keys);
  
  var _defineProperty2 = __webpack_require__(62);
  
  var _defineProperty3 = _interopRequireDefault2(_defineProperty2);
  
  var _assign = __webpack_require__(23);
  
  var _assign2 = _interopRequireDefault2(_assign);
  
  function _interopRequireDefault2(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.filterSvgElements = exports.isSsr = exports.validateWidthHeight = exports.filterEventsOfChild = exports.filterEventAttributes = exports.getPresentationAttributes = exports.withoutType = exports.findChildByType = exports.findAllByType = exports.getDisplayName = exports.PRESENTATION_ATTRIBUTES = undefined;
  
  var _isString2 = __webpack_require__(66);
  
  var _isString3 = _interopRequireDefault(_isString2);
  
  var _isNumber2 = __webpack_require__(67);
  
  var _isNumber3 = _interopRequireDefault(_isNumber2);
  
  var _isObject2 = __webpack_require__(68);
  
  var _isObject3 = _interopRequireDefault(_isObject2);
  
  var _isFunction2 = __webpack_require__(69);
  
  var _isFunction3 = _interopRequireDefault(_isFunction2);
  
  var _isArray2 = __webpack_require__(70);
  
  var _isArray3 = _interopRequireDefault(_isArray2);
  
  var _extends = _assign2.default || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }return target;
  };
  
  var _react = __webpack_require__(11);
  
  var _react2 = _interopRequireDefault(_react);
  
  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
  }
  
  function _defineProperty(obj, key, value) {
    if (key in obj) {
      (0, _defineProperty3.default)(obj, key, { value: value, enumerable: true, configurable: true, writable: true });
    } else {
      obj[key] = value;
    }return obj;
  }
  
  var PRESENTATION_ATTRIBUTES = exports.PRESENTATION_ATTRIBUTES = {
    alignmentBaseline: _react.PropTypes.string,
    baselineShift: _react.PropTypes.string,
    clip: _react.PropTypes.string,
    clipPath: _react.PropTypes.string,
    clipRule: _react.PropTypes.string,
    color: _react.PropTypes.string,
    colorInterpolation: _react.PropTypes.string,
    colorInterpolationFilters: _react.PropTypes.string,
    colorProfile: _react.PropTypes.string,
    colorRendering: _react.PropTypes.string,
    cursor: _react.PropTypes.string,
    direction: _react.PropTypes.oneOf(['ltr', 'rtl', 'inherit']),
    display: _react.PropTypes.string,
    dominantBaseline: _react.PropTypes.string,
    enableBackground: _react.PropTypes.string,
    fill: _react.PropTypes.string,
    fillOpacity: _react.PropTypes.oneOfType([_react.PropTypes.string, _react.PropTypes.number]),
    fillRule: _react.PropTypes.oneOf(['nonzero', 'evenodd', 'inherit']),
    filter: _react.PropTypes.string,
    floodColor: _react.PropTypes.string,
    floodOpacity: _react.PropTypes.oneOfType([_react.PropTypes.string, _react.PropTypes.number]),
    font: _react.PropTypes.string,
    fontFamily: _react.PropTypes.string,
    fontSize: _react.PropTypes.number,
    fontSizeAdjust: _react.PropTypes.oneOfType([_react.PropTypes.number, _react.PropTypes.string]),
    fontStretch: _react.PropTypes.oneOf(['normal', 'wider', 'narrower', 'ultra-condensed', 'extra-condensed', 'condensed', 'semi-condensed', 'semi-expanded', 'expanded', 'extra-expanded', 'ultra-expanded', 'inherit']),
    fontStyle: _react.PropTypes.oneOf(['normal', 'italic', 'oblique', 'inherit']),
    fontVariant: _react.PropTypes.oneOf(['normal', 'small-caps', 'inherit']),
    fontWeight: _react.PropTypes.oneOf(['normal', 'bold', 'bolder', 'lighter', 100, 200, 300, 400, 500, 600, 700, 800, 900, 'inherit']),
    glyphOrientationHorizontal: _react.PropTypes.string,
    glyphOrientationVertical: _react.PropTypes.string,
    imageRendering: _react.PropTypes.oneOf(['auto', 'optimizeSpeed', 'optimizeQuality', 'inherit']),
    kerning: _react.PropTypes.oneOfType([_react.PropTypes.number, _react.PropTypes.string]),
    letterSpacing: _react.PropTypes.oneOfType([_react.PropTypes.number, _react.PropTypes.string]),
    lightingColor: _react.PropTypes.string,
    markerEnd: _react.PropTypes.string,
    markerMid: _react.PropTypes.string,
    markerStart: _react.PropTypes.string,
    mask: _react.PropTypes.string,
    opacity: _react.PropTypes.oneOfType([_react.PropTypes.number, _react.PropTypes.string]),
    overflow: _react.PropTypes.oneOf(['visible', 'hidden', 'scroll', 'auto', 'inherit']),
    pointerEvents: _react.PropTypes.oneOf(['visiblePainted', 'visibleFill', 'visibleStroke', 'visible', 'painted', 'fill', 'stroke', 'all', 'none', 'inherit']),
    shapeRendering: _react.PropTypes.oneOf(['auto', 'optimizeSpeed', 'crispEdges', 'geometricPrecision', 'inherit']),
    stopColor: _react.PropTypes.string,
    stopOpacity: _react.PropTypes.oneOfType([_react.PropTypes.number, _react.PropTypes.string]),
    stroke: _react.PropTypes.oneOfType([_react.PropTypes.number, _react.PropTypes.string]),
    strokeDasharray: _react.PropTypes.string,
    strokeDashoffset: _react.PropTypes.oneOfType([_react.PropTypes.number, _react.PropTypes.string]),
    strokeLinecap: _react.PropTypes.oneOf(['butt', 'round', 'square', 'inherit']),
    strokeLinejoin: _react.PropTypes.oneOf(['miter', 'round', 'bevel', 'inherit']),
    strokeMiterlimit: _react.PropTypes.oneOfType([_react.PropTypes.number, _react.PropTypes.string]),
    strokeOpacity: _react.PropTypes.oneOfType([_react.PropTypes.number, _react.PropTypes.string]),
    strokeWidth: _react.PropTypes.oneOfType([_react.PropTypes.number, _react.PropTypes.string]),
    textAnchor: _react.PropTypes.oneOf(['start', 'middle', 'end', 'inherit']),
    textDecoration: _react.PropTypes.oneOf(['none', 'underline', 'overline', 'line-through', 'blink', 'inherit']),
    textRendering: _react.PropTypes.oneOf(['auto', 'optimizeSpeed', 'optimizeLegibility', 'geometricPrecision', 'inherit']),
    unicodeBidi: _react.PropTypes.oneOf(['normal', 'embed', 'bidi-override', 'inherit']),
    visibility: _react.PropTypes.oneOf(['visible', 'hidden', 'collapse', 'inherit']),
    wordSpacing: _react.PropTypes.oneOfType([_react.PropTypes.number, _react.PropTypes.string]),
    writingMode: _react.PropTypes.oneOf(['lr-tb', 'rl-tb', 'tb-rl', 'lr', 'rl', 'tb', 'inherit']),
    transform: _react.PropTypes.string,
    style: _react.PropTypes.object,
  
    width: _react.PropTypes.number,
    height: _react.PropTypes.number,
    dx: _react.PropTypes.number,
    dy: _react.PropTypes.number,
    x: _react.PropTypes.number,
    y: _react.PropTypes.number,
    r: _react.PropTypes.number
  };
  
  var EVENT_ATTRIBUTES = {
    onClick: _react.PropTypes.func,
    onMouseDown: _react.PropTypes.func,
    onMouseUp: _react.PropTypes.func,
    onMouseOver: _react.PropTypes.func,
    onMouseMove: _react.PropTypes.func,
    onMouseOut: _react.PropTypes.func,
    onMouseEnter: _react.PropTypes.func,
    onMouseLeave: _react.PropTypes.func
  };
  /**
   * Get the display name of a component
   * @param  {Object} Comp Specified Component
   * @return {String}      Display name of Component
   */
  var getDisplayName = exports.getDisplayName = function getDisplayName(Comp) {
    if (!Comp) {
      return '';
    }
    if (typeof Comp === 'string') {
      return Comp;
    }
    return Comp.displayName || Comp.name || 'Component';
  };
  
  /*
   * Find and return all matched children by type. `type` can be a React element class or
   * string
   */
  var findAllByType = exports.findAllByType = function findAllByType(children, type) {
    var result = [];
    var types = [];
  
    if ((0, _isArray3.default)(type)) {
      types = type.map(function (t) {
        return getDisplayName(t);
      });
    } else {
      types = [getDisplayName(type)];
    }
  
    _react2.default.Children.forEach(children, function (child) {
      var childType = child && child.type && (child.type.displayName || child.type.name);
      if (types.indexOf(childType) !== -1) {
        result.push(child);
      }
    });
  
    return result;
  };
  /*
   * Return the first matched child by type, return null otherwise.
   * `type` can be a React element class or string.
   */
  var findChildByType = exports.findChildByType = function findChildByType(children, type) {
    var result = findAllByType(children, type);
  
    return result && result[0];
  };
  
  /*
   * Create a new array of children excluding the ones matched the type
   */
  var withoutType = exports.withoutType = function withoutType(children, type) {
    var newChildren = [];
    var types = void 0;
  
    if ((0, _isArray3.default)(type)) {
      types = type.map(function (t) {
        return getDisplayName(t);
      });
    } else {
      types = [getDisplayName(type)];
    }
  
    _react2.default.Children.forEach(children, function (child) {
      if (child && child.type && child.type.displayName && types.indexOf(child.type.displayName) !== -1) {
        return;
      }
      newChildren.push(child);
    });
  
    return newChildren;
  };
  
  /**
   * get all the presentation attribute of svg element
   * @param  {Object} el A react element or the props of a react element
   * @return {Object}    attributes or null
   */
  var getPresentationAttributes = exports.getPresentationAttributes = function getPresentationAttributes(el) {
    if (!el || (0, _isFunction3.default)(el)) {
      return null;
    }
  
    var props = _react2.default.isValidElement(el) ? el.props : el;
  
    if (!(0, _isObject3.default)(props)) {
      return null;
    }
  
    var keys = (0, _keys2.default)(props).filter(function (k) {
      return PRESENTATION_ATTRIBUTES[k];
    });
  
    return keys && keys.length ? keys.reduce(function (result, k) {
      return _extends({}, result, _defineProperty({}, k, props[k]));
    }, {}) : null;
  };
  
  /**
   * get all the event attribute of svg element
   * @param  {Object} el A react element or the props of a react element
   * @return {Object}    attributes or null
   */
  var filterEventAttributes = exports.filterEventAttributes = function filterEventAttributes(el) {
    if (!el || (0, _isFunction3.default)(el)) {
      return null;
    }
  
    var props = _react2.default.isValidElement(el) ? el.props : el;
  
    if (!(0, _isObject3.default)(props)) {
      return null;
    }
  
    var keys = (0, _keys2.default)(props).filter(function (k) {
      return EVENT_ATTRIBUTES[k];
    });
  
    return keys && keys.length ? keys.reduce(function (result, k) {
      return _extends({}, result, _defineProperty({}, k, props[k]));
    }, {}) : null;
  };
  
  var getEventHandler = function getEventHandler(originalHandler, data, index) {
    return function (e) {
      originalHandler(data, index, e);
  
      return null;
    };
  };
  
  var filterEventsOfChild = exports.filterEventsOfChild = function filterEventsOfChild(props, data, index) {
    if (!(0, _isObject3.default)(props)) {
      return null;
    }
  
    var events = (0, _keys2.default)(props).filter(function (k) {
      return EVENT_ATTRIBUTES[k] && (0, _isFunction3.default)(props[k]);
    });
  
    return events && events.length ? events.reduce(function (result, e) {
      return _extends({}, result, _defineProperty({}, e, getEventHandler(props[e], data, index)));
    }, {}) : null;
  };
  
  /**
   * validate the width and height props of a chart element
   * @param  {Object} el A chart element
   * @return {Boolean}   true If the props width and height are number, and greater than 0
   */
  var validateWidthHeight = exports.validateWidthHeight = function validateWidthHeight(el) {
    if (!el || !el.props) {
      return false;
    }
    var _el$props = el.props;
    var width = _el$props.width;
    var height = _el$props.height;
  
    if (!(0, _isNumber3.default)(width) || width <= 0 || !(0, _isNumber3.default)(height) || height <= 0) {
      return false;
    }
  
    return true;
  };
  
  var isSsr = exports.isSsr = function isSsr() {
    return typeof document === 'undefined';
  };
  
  var SVG_TAGS = ['a', 'altGlyph', 'altGlyphDef', 'altGlyphItem', 'animate', 'animateColor', 'animateMotion', 'animateTransform', 'circle', 'clipPath', 'color-profile', 'cursor', 'defs', 'desc', 'ellipse', 'feBlend', 'feColormatrix', 'feComponentTransfer', 'feComposite', 'feConvolveMatrix', 'feDiffuseLighting', 'feDisplacementMap', 'feDistantLight', 'feFlood', 'feFuncA', 'feFuncB', 'feFuncG', 'feFuncR', 'feGaussianBlur', 'feImage', 'feMerge', 'feMergeNode', 'feMorphology', 'feOffset', 'fePointLight', 'feSpecularLighting', 'feSpotLight', 'feTile', 'feTurbulence', 'filter', 'font', 'font-face', 'font-face-format', 'font-face-name', 'font-face-url', 'foreignObject', 'g', 'glyph', 'glyphRef', 'hkern', 'image', 'line', 'lineGradient', 'marker', 'mask', 'metadata', 'missing-glyph', 'mpath', 'path', 'pattern', 'polygon', 'polyline', 'radialGradient', 'rect', 'script', 'set', 'stop', 'style', 'svg', 'switch', 'symbol', 'text', 'textPath', 'title', 'tref', 'tspan', 'use', 'view', 'vkern'];
  /**
   * Filter all the svg elements of children
   * @param  {Array} children The children of a react element
   * @return {Array}          All the svg elements
   */
  var filterSvgElements = exports.filterSvgElements = function filterSvgElements(children) {
    var svgElements = [];
  
    _react2.default.Children.forEach(children, function (entry) {
      if (entry && entry.type && (0, _isString3.default)(entry.type) && SVG_TAGS.indexOf(entry.type) >= 0) {
        svgElements.push(entry);
      }
    });
  
    return svgElements;
  };

/***/ }),
/* 65 */
/***/ (function(module, exports) {

  module.exports = require("babel-runtime/core-js/object/keys");

/***/ }),
/* 66 */
/***/ (function(module, exports) {

  module.exports = require("lodash/isString");

/***/ }),
/* 67 */
/***/ (function(module, exports) {

  module.exports = require("lodash/isNumber");

/***/ }),
/* 68 */
/***/ (function(module, exports) {

  module.exports = require("lodash/isObject");

/***/ }),
/* 69 */
/***/ (function(module, exports) {

  module.exports = require("lodash/isFunction");

/***/ }),
/* 70 */
/***/ (function(module, exports) {

  module.exports = require("lodash/isArray");

/***/ }),
/* 71 */
/***/ (function(module, exports, __webpack_require__) {

  'use strict';
  
  var _getPrototypeOf = __webpack_require__(29);
  
  var _getPrototypeOf2 = _interopRequireDefault2(_getPrototypeOf);
  
  var _setPrototypeOf = __webpack_require__(59);
  
  var _setPrototypeOf2 = _interopRequireDefault2(_setPrototypeOf);
  
  var _create = __webpack_require__(60);
  
  var _create2 = _interopRequireDefault2(_create);
  
  var _typeof2 = __webpack_require__(61);
  
  var _typeof3 = _interopRequireDefault2(_typeof2);
  
  var _defineProperty = __webpack_require__(62);
  
  var _defineProperty2 = _interopRequireDefault2(_defineProperty);
  
  var _assign = __webpack_require__(23);
  
  var _assign2 = _interopRequireDefault2(_assign);
  
  function _interopRequireDefault2(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  
  var _isNumber2 = __webpack_require__(67);
  
  var _isNumber3 = _interopRequireDefault(_isNumber2);
  
  var _isFunction2 = __webpack_require__(69);
  
  var _isFunction3 = _interopRequireDefault(_isFunction2);
  
  var _extends = _assign2.default || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }return target;
  };
  
  var _createClass = function () {
    function defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;(0, _defineProperty2.default)(target, descriptor.key, descriptor);
      }
    }return function (Constructor, protoProps, staticProps) {
      if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
    };
  }();
  
  var _class, _class2, _temp; /**
                               * @fileOverview Legend
                               */
  
  var _react = __webpack_require__(11);
  
  var _react2 = _interopRequireDefault(_react);
  
  var _PureRender = __webpack_require__(72);
  
  var _PureRender2 = _interopRequireDefault(_PureRender);
  
  var _server = __webpack_require__(12);
  
  var _server2 = _interopRequireDefault(_server);
  
  var _Surface = __webpack_require__(63);
  
  var _Surface2 = _interopRequireDefault(_Surface);
  
  var _DefaultLegendContent = __webpack_require__(77);
  
  var _DefaultLegendContent2 = _interopRequireDefault(_DefaultLegendContent);
  
  var _DOMUtils = __webpack_require__(80);
  
  var _ReactUtils = __webpack_require__(64);
  
  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
  }
  
  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }
  
  function _possibleConstructorReturn(self, call) {
    if (!self) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }return call && ((typeof call === 'undefined' ? 'undefined' : (0, _typeof3.default)(call)) === "object" || typeof call === "function") ? call : self;
  }
  
  function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === 'undefined' ? 'undefined' : (0, _typeof3.default)(superClass)));
    }subClass.prototype = (0, _create2.default)(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) _setPrototypeOf2.default ? (0, _setPrototypeOf2.default)(subClass, superClass) : subClass.__proto__ = superClass;
  }
  
  var SIZE = 32;
  
  var renderContent = function renderContent(content, props) {
    if (_react2.default.isValidElement(content)) {
      return _react2.default.cloneElement(content, props);
    } else if ((0, _isFunction3.default)(content)) {
      return content(props);
    }
  
    return _react2.default.createElement(_DefaultLegendContent2.default, props);
  };
  
  var Legend = (0, _PureRender2.default)(_class = (_temp = _class2 = function (_Component) {
    _inherits(Legend, _Component);
  
    function Legend() {
      _classCallCheck(this, Legend);
  
      return _possibleConstructorReturn(this, (Legend.__proto__ || (0, _getPrototypeOf2.default)(Legend)).apply(this, arguments));
    }
  
    _createClass(Legend, [{
      key: 'getDefaultPosition',
      value: function getDefaultPosition(style) {
        var _props = this.props;
        var layout = _props.layout;
        var align = _props.align;
        var verticalAlign = _props.verticalAlign;
        var margin = _props.margin;
        var chartWidth = _props.chartWidth;
        var chartHeight = _props.chartHeight;
  
        var hPos = void 0;
        var vPos = void 0;
  
        if (!style || (style.left === undefined || style.left === null) && (style.right === undefined || style.right === null)) {
          if (align === 'center' && layout === 'vertical') {
            var box = Legend.getLegendBBox(this.props) || { width: 0 };
            hPos = { left: ((chartWidth || 0) - box.width) / 2 };
          } else {
            hPos = align === 'right' ? { right: margin && margin.right || 0 } : { left: margin && margin.left || 0 };
          }
        }
  
        if (!style || (style.top === undefined || style.top === null) && (style.bottom === undefined || style.bottom === null)) {
          if (verticalAlign === 'middle') {
            var _box = Legend.getLegendBBox(this.props) || { height: 0 };
            vPos = { top: ((chartHeight || 0) - _box.height) / 2 };
          } else {
            vPos = verticalAlign === 'bottom' ? { bottom: margin && margin.bottom || 0 } : { top: margin && margin.top || 0 };
          }
        }
  
        return _extends({}, hPos, vPos);
      }
    }, {
      key: 'render',
      value: function render() {
        var _props2 = this.props;
        var content = _props2.content;
        var width = _props2.width;
        var height = _props2.height;
        var layout = _props2.layout;
        var wrapperStyle = _props2.wrapperStyle;
  
        var outerStyle = _extends({
          position: 'absolute',
          width: width || 'auto',
          height: height || 'auto'
        }, this.getDefaultPosition(wrapperStyle), wrapperStyle);
  
        return _react2.default.createElement('div', { className: 'recharts-legend-wrapper', style: outerStyle }, renderContent(content, this.props));
      }
    }], [{
      key: 'getWithHeight',
      value: function getWithHeight(item, chartWidth, chartHeight) {
        var layout = item.props.layout;
  
        if (layout === 'vertical' && (0, _isNumber3.default)(item.props.height)) {
          return {
            height: item.props.height
          };
        } else if (layout === 'horizontal') {
          return {
            width: item.props.width || chartWidth
          };
        }
  
        return null;
      }
    }, {
      key: 'getLegendBBox',
      value: function getLegendBBox(props) {
        if (!(0, _ReactUtils.isSsr)()) {
          var content = props.content;
          var width = props.width;
          var height = props.height;
          var wrapperStyle = props.wrapperStyle;
  
          var contentHtml = _server2.default.renderToStaticMarkup(renderContent(content, props));
          var style = _extends({
            // solve the problem temporarily that the width and height will be affect by the global css
            fontSize: 12,
            position: 'absolute',
            width: width || 'auto',
            height: height || 'auto'
          }, wrapperStyle, {
            top: -20000,
            left: 0,
            display: 'block'
          });
          var wrapper = document.createElement('div');
  
          wrapper.setAttribute('style', (0, _DOMUtils.getStyleString)(style));
          wrapper.innerHTML = contentHtml;
          document.body.appendChild(wrapper);
          var box = wrapper.getBoundingClientRect();
  
          document.body.removeChild(wrapper);
  
          return box;
        }
  
        return null;
      }
    }]);
  
    return Legend;
  }(_react.Component), _class2.displayName = 'Legend', _class2.propTypes = {
    content: _react.PropTypes.oneOfType([_react.PropTypes.element, _react.PropTypes.func]),
    wrapperStyle: _react.PropTypes.object,
    chartWidth: _react.PropTypes.number,
    chartHeight: _react.PropTypes.number,
    width: _react.PropTypes.number,
    height: _react.PropTypes.number,
    iconSize: _react.PropTypes.number,
    layout: _react.PropTypes.oneOf(['horizontal', 'vertical']),
    align: _react.PropTypes.oneOf(['center', 'left', 'right']),
    verticalAlign: _react.PropTypes.oneOf(['top', 'bottom', 'middle']),
    margin: _react.PropTypes.shape({
      top: _react.PropTypes.number,
      left: _react.PropTypes.number,
      bottom: _react.PropTypes.number,
      right: _react.PropTypes.number
    }),
    payload: _react.PropTypes.arrayOf(_react.PropTypes.shape({
      value: _react.PropTypes.any,
      id: _react.PropTypes.any,
      type: _react.PropTypes.oneOf(['line', 'square', 'rect', 'circle', 'cross', 'diamond', 'square', 'star', 'triangle', 'wye'])
    }))
  }, _class2.defaultProps = {
    iconSize: 14,
    layout: 'horizontal',
    align: 'center',
    verticalAlign: 'bottom'
  }, _temp)) || _class;
  
  exports.default = Legend;

/***/ }),
/* 72 */
/***/ (function(module, exports, __webpack_require__) {

  'use strict';
  
  var _keys = __webpack_require__(65);
  
  var _keys2 = _interopRequireDefault2(_keys);
  
  var _iterator = __webpack_require__(73);
  
  var _iterator2 = _interopRequireDefault2(_iterator);
  
  var _typeof3 = __webpack_require__(61);
  
  var _typeof4 = _interopRequireDefault2(_typeof3);
  
  var _symbol = __webpack_require__(74);
  
  var _symbol2 = _interopRequireDefault2(_symbol);
  
  function _interopRequireDefault2(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.shallowEqual = undefined;
  
  var _isPlainObject2 = __webpack_require__(75);
  
  var _isPlainObject3 = _interopRequireDefault(_isPlainObject2);
  
  var _isEqual2 = __webpack_require__(76);
  
  var _isEqual3 = _interopRequireDefault(_isEqual2);
  
  var _isArray2 = __webpack_require__(70);
  
  var _isArray3 = _interopRequireDefault(_isArray2);
  
  var _typeof = typeof _symbol2.default === "function" && (0, _typeof4.default)(_iterator2.default) === "symbol" ? function (obj) {
    return typeof obj === 'undefined' ? 'undefined' : (0, _typeof4.default)(obj);
  } : function (obj) {
    return obj && typeof _symbol2.default === "function" && obj.constructor === _symbol2.default ? "symbol" : typeof obj === 'undefined' ? 'undefined' : (0, _typeof4.default)(obj);
  };
  
  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
  }
  
  function shallowEqual(objA, objB) {
    if (objA === objB) {
      return true;
    }
  
    if ((typeof objA === 'undefined' ? 'undefined' : _typeof(objA)) !== 'object' || objA === null || (typeof objB === 'undefined' ? 'undefined' : _typeof(objB)) !== 'object' || objB === null) {
      return false;
    }
  
    var keysA = (0, _keys2.default)(objA);
    var keysB = (0, _keys2.default)(objB);
  
    if (keysA.length !== keysB.length) {
      return false;
    }
  
    var bHasOwnProperty = hasOwnProperty.bind(objB);
    for (var i = 0; i < keysA.length; i++) {
      var keyA = keysA[i];
  
      if (objA[keyA] === objB[keyA]) {
        continue;
      }
  
      // special diff with Array or Object
      if ((0, _isArray3.default)(objA[keyA])) {
        if (!(0, _isArray3.default)(objB[keyA]) || objA[keyA].length !== objB[keyA].length) {
          return false;
        } else if (!(0, _isEqual3.default)(objA[keyA], objB[keyA])) {
          return false;
        }
      } else if ((0, _isPlainObject3.default)(objA[keyA])) {
        if (!(0, _isPlainObject3.default)(objB[keyA]) || !(0, _isEqual3.default)(objA[keyA], objB[keyA])) {
          return false;
        }
      } else if (!bHasOwnProperty(keysA[i]) || objA[keysA[i]] !== objB[keysA[i]]) {
        return false;
      }
    }
  
    return true;
  }
  
  function shallowCompare(instance, nextProps, nextState) {
    return !shallowEqual(instance.props, nextProps) || !shallowEqual(instance.state, nextState);
  }
  
  function shouldComponentUpdate(nextProps, nextState) {
    return shallowCompare(this, nextProps, nextState);
  }
  /* eslint-disable no-param-reassign */
  function pureRenderDecorator(component) {
    component.prototype.shouldComponentUpdate = shouldComponentUpdate;
  }
  exports.shallowEqual = shallowEqual;
  exports.default = pureRenderDecorator;

/***/ }),
/* 73 */
/***/ (function(module, exports) {

  module.exports = require("babel-runtime/core-js/symbol/iterator");

/***/ }),
/* 74 */
/***/ (function(module, exports) {

  module.exports = require("babel-runtime/core-js/symbol");

/***/ }),
/* 75 */
/***/ (function(module, exports) {

  module.exports = require("lodash/isPlainObject");

/***/ }),
/* 76 */
/***/ (function(module, exports) {

  module.exports = require("lodash/isEqual");

/***/ }),
/* 77 */
/***/ (function(module, exports, __webpack_require__) {

  'use strict';
  
  var _getPrototypeOf = __webpack_require__(29);
  
  var _getPrototypeOf2 = _interopRequireDefault2(_getPrototypeOf);
  
  var _setPrototypeOf = __webpack_require__(59);
  
  var _setPrototypeOf2 = _interopRequireDefault2(_setPrototypeOf);
  
  var _create = __webpack_require__(60);
  
  var _create2 = _interopRequireDefault2(_create);
  
  var _typeof2 = __webpack_require__(61);
  
  var _typeof3 = _interopRequireDefault2(_typeof2);
  
  var _defineProperty = __webpack_require__(62);
  
  var _defineProperty2 = _interopRequireDefault2(_defineProperty);
  
  function _interopRequireDefault2(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  
  var _createClass = function () {
    function defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;(0, _defineProperty2.default)(target, descriptor.key, descriptor);
      }
    }return function (Constructor, protoProps, staticProps) {
      if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
    };
  }();
  
  var _class, _class2, _temp; /**
                               * @fileOverview Default Legend Content
                               */
  
  var _react = __webpack_require__(11);
  
  var _react2 = _interopRequireDefault(_react);
  
  var _PureRender = __webpack_require__(72);
  
  var _PureRender2 = _interopRequireDefault(_PureRender);
  
  var _Surface = __webpack_require__(63);
  
  var _Surface2 = _interopRequireDefault(_Surface);
  
  var _Symbols = __webpack_require__(78);
  
  var _Symbols2 = _interopRequireDefault(_Symbols);
  
  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
  }
  
  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }
  
  function _possibleConstructorReturn(self, call) {
    if (!self) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }return call && ((typeof call === "undefined" ? "undefined" : (0, _typeof3.default)(call)) === "object" || typeof call === "function") ? call : self;
  }
  
  function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : (0, _typeof3.default)(superClass)));
    }subClass.prototype = (0, _create2.default)(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) _setPrototypeOf2.default ? (0, _setPrototypeOf2.default)(subClass, superClass) : subClass.__proto__ = superClass;
  }
  
  var PI = Math.PI;
  var SIZE = 32;
  
  var DefaultLegendContent = (0, _PureRender2.default)(_class = (_temp = _class2 = function (_Component) {
    _inherits(DefaultLegendContent, _Component);
  
    function DefaultLegendContent() {
      _classCallCheck(this, DefaultLegendContent);
  
      return _possibleConstructorReturn(this, (DefaultLegendContent.__proto__ || (0, _getPrototypeOf2.default)(DefaultLegendContent)).apply(this, arguments));
    }
  
    _createClass(DefaultLegendContent, [{
      key: 'renderIcon',
  
      /**
       * Render the path of icon
       * @param {Object} data Data of each legend item
       * @return {String} Path element
       */
      value: function renderIcon(data) {
        var color = data.color;
  
        var halfSize = SIZE / 2;
        var sixthSize = SIZE / 6;
        var thirdSize = SIZE / 3;
  
        if (data.type === 'line') {
          return _react2.default.createElement('path', {
            strokeWidth: 4,
            fill: 'none',
            stroke: color,
            d: 'M0,' + halfSize + 'h' + thirdSize + '\n            A' + sixthSize + ',' + sixthSize + ',0,1,1,' + 2 * thirdSize + ',' + halfSize + '\n            H' + SIZE + 'M' + 2 * thirdSize + ',' + halfSize + '\n            A' + sixthSize + ',' + sixthSize + ',0,1,1,' + thirdSize + ',' + halfSize,
            className: 'recharts-legend-icon'
          });
        } else if (data.type === 'rect') {
          return _react2.default.createElement('path', {
            stroke: 'none',
            fill: color,
            d: 'M0,' + SIZE / 8 + 'h' + SIZE + 'v' + SIZE * 3 / 4 + 'h' + -SIZE + 'z',
            className: 'recharts-legend-icon'
          });
        }
  
        return _react2.default.createElement(_Symbols2.default, {
          fill: color,
          cx: halfSize,
          cy: halfSize,
          size: SIZE,
          sizeType: 'diameter',
          type: data.type
        });
      }
  
      /**
       * Draw items of legend
       * @return {ReactElement} Items
       */
  
    }, {
      key: 'renderItems',
      value: function renderItems() {
        var _this2 = this;
  
        var _props = this.props;
        var payload = _props.payload;
        var iconSize = _props.iconSize;
        var layout = _props.layout;
  
        var viewBox = { x: 0, y: 0, width: SIZE, height: SIZE };
        var itemStyle = {
          display: layout === 'horizontal' ? 'inline-block' : 'block',
          marginRight: 10
        };
        var svgStyle = { display: 'inline-block', verticalAlign: 'middle', marginRight: 4 };
  
        return payload.map(function (entry, i) {
          return _react2.default.createElement('li', {
            className: 'recharts-legend-item legend-item-' + i,
            style: itemStyle,
            key: 'legend-item-' + i
          }, _react2.default.createElement(_Surface2.default, { width: iconSize, height: iconSize, viewBox: viewBox, style: svgStyle }, _this2.renderIcon(entry, iconSize)), _react2.default.createElement('span', { className: 'recharts-legend-item-text' }, entry.value));
        });
      }
    }, {
      key: 'render',
      value: function render() {
        var _props2 = this.props;
        var payload = _props2.payload;
        var layout = _props2.layout;
        var align = _props2.align;
  
        if (!payload || !payload.length) {
          return null;
        }
  
        var finalStyle = {
          padding: 0,
          margin: 0,
          textAlign: layout === 'horizontal' ? align : 'left'
        };
  
        return _react2.default.createElement('ul', { className: 'recharts-default-legend', style: finalStyle }, this.renderItems());
      }
    }]);
  
    return DefaultLegendContent;
  }(_react.Component), _class2.displayName = 'Legend', _class2.propTypes = {
    content: _react.PropTypes.element,
    iconSize: _react.PropTypes.number,
    layout: _react.PropTypes.oneOf(['horizontal', 'vertical']),
    align: _react.PropTypes.oneOf(['center', 'left', 'right']),
    verticalAlign: _react.PropTypes.oneOf(['top', 'bottom', 'middle']),
    payload: _react.PropTypes.arrayOf(_react.PropTypes.shape({
      value: _react.PropTypes.any,
      id: _react.PropTypes.any,
      type: _react.PropTypes.oneOf(['line', 'square', 'rect', 'circle', 'cross', 'diamond', 'square', 'star', 'triangle', 'wye'])
    }))
  }, _class2.defaultProps = {
    iconSize: 14,
    layout: 'horizontal',
    align: 'center',
    verticalAlign: 'middle'
  }, _temp)) || _class;
  
  exports.default = DefaultLegendContent;

/***/ }),
/* 78 */
/***/ (function(module, exports, __webpack_require__) {

  'use strict';
  
  var _getPrototypeOf = __webpack_require__(29);
  
  var _getPrototypeOf2 = _interopRequireDefault2(_getPrototypeOf);
  
  var _setPrototypeOf = __webpack_require__(59);
  
  var _setPrototypeOf2 = _interopRequireDefault2(_setPrototypeOf);
  
  var _create = __webpack_require__(60);
  
  var _create2 = _interopRequireDefault2(_create);
  
  var _typeof2 = __webpack_require__(61);
  
  var _typeof3 = _interopRequireDefault2(_typeof2);
  
  var _defineProperty = __webpack_require__(62);
  
  var _defineProperty2 = _interopRequireDefault2(_defineProperty);
  
  var _assign = __webpack_require__(23);
  
  var _assign2 = _interopRequireDefault2(_assign);
  
  function _interopRequireDefault2(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  
  var _extends = _assign2.default || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }return target;
  };
  
  var _createClass = function () {
    function defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;(0, _defineProperty2.default)(target, descriptor.key, descriptor);
      }
    }return function (Constructor, protoProps, staticProps) {
      if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
    };
  }();
  
  var _class, _class2, _temp; /**
                               * @fileOverview Curve
                               */
  
  var _react = __webpack_require__(11);
  
  var _react2 = _interopRequireDefault(_react);
  
  var _d3Shape = __webpack_require__(79);
  
  var _PureRender = __webpack_require__(72);
  
  var _PureRender2 = _interopRequireDefault(_PureRender);
  
  var _classnames = __webpack_require__(46);
  
  var _classnames2 = _interopRequireDefault(_classnames);
  
  var _ReactUtils = __webpack_require__(64);
  
  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
  }
  
  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }
  
  function _possibleConstructorReturn(self, call) {
    if (!self) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }return call && ((typeof call === "undefined" ? "undefined" : (0, _typeof3.default)(call)) === "object" || typeof call === "function") ? call : self;
  }
  
  function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : (0, _typeof3.default)(superClass)));
    }subClass.prototype = (0, _create2.default)(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) _setPrototypeOf2.default ? (0, _setPrototypeOf2.default)(subClass, superClass) : subClass.__proto__ = superClass;
  }
  
  var SYMBOL_FACTORIES = {
    symbolCircle: _d3Shape.symbolCircle, symbolCross: _d3Shape.symbolCross, symbolDiamond: _d3Shape.symbolDiamond,
    symbolSquare: _d3Shape.symbolSquare, symbolStar: _d3Shape.symbolStar, symbolTriangle: _d3Shape.symbolTriangle, symbolWye: _d3Shape.symbolWye
  };
  var RADIAN = Math.PI / 180;
  
  var getSymbolFactory = function getSymbolFactory(type) {
    var name = 'symbol' + type.slice(0, 1).toUpperCase() + type.slice(1);
  
    return SYMBOL_FACTORIES[name] || _d3Shape.symbolCircle;
  };
  
  var calculateAreaSize = function calculateAreaSize(size, sizeType, type) {
    if (sizeType === 'area') {
      return size;
    }
  
    switch (type) {
      case 'cross':
        return 5 * size * size / 9;
      case 'diamond':
        return 0.5 * size * size / Math.sqrt(3);
      case 'square':
        return size * size;
      case 'star':
        {
          var angle = 18 * RADIAN;
  
          return 1.25 * size * size * (Math.tan(angle) - Math.tan(angle * 2) * Math.pow(Math.tan(angle), 2));
        }
      case 'triangle':
        return Math.sqrt(3) * size * size / 4;
      case 'wye':
        return (21 - 10 * Math.sqrt(3)) * size * size / 8;
      default:
        return Math.PI * size * size / 4;
    }
  };
  
  var Symbols = (0, _PureRender2.default)(_class = (_temp = _class2 = function (_Component) {
    _inherits(Symbols, _Component);
  
    function Symbols() {
      _classCallCheck(this, Symbols);
  
      return _possibleConstructorReturn(this, (Symbols.__proto__ || (0, _getPrototypeOf2.default)(Symbols)).apply(this, arguments));
    }
  
    _createClass(Symbols, [{
      key: 'getPath',
  
      /**
       * Calculate the path of curve
       * @return {String} path
       */
      value: function getPath() {
        var _props = this.props;
        var size = _props.size;
        var sizeType = _props.sizeType;
        var type = _props.type;
  
        var symbolFactory = getSymbolFactory(type);
        var symbol = (0, _d3Shape.symbol)().type(symbolFactory).size(calculateAreaSize(size, sizeType, type));
  
        return symbol();
      }
    }, {
      key: 'render',
      value: function render() {
        var _props2 = this.props;
        var className = _props2.className;
        var cx = _props2.cx;
        var cy = _props2.cy;
        var size = _props2.size;
  
        if (cx === +cx && cy === +cy && size === +size) {
  
          return _react2.default.createElement('path', _extends({}, (0, _ReactUtils.getPresentationAttributes)(this.props), (0, _ReactUtils.filterEventAttributes)(this.props), {
            className: (0, _classnames2.default)('recharts-symbols', className),
            transform: 'translate(' + cx + ', ' + cy + ')',
            d: this.getPath()
          }));
        }
  
        return null;
      }
    }]);
  
    return Symbols;
  }(_react.Component), _class2.displayName = 'Symbols', _class2.propTypes = _extends({}, _ReactUtils.PRESENTATION_ATTRIBUTES, {
    className: _react.PropTypes.string,
    type: _react.PropTypes.oneOf(['circle', 'cross', 'diamond', 'square', 'star', 'triangle', 'wye']),
    cx: _react.PropTypes.number,
    cy: _react.PropTypes.number,
    size: _react.PropTypes.number,
    sizeType: _react.PropTypes.oneOf(['area', 'diameter'])
  }), _class2.defaultProps = {
    type: 'circle',
    stroke: 'none',
    fill: '#000',
    size: 64,
    sizeType: 'area'
  }, _temp)) || _class;
  
  exports.default = Symbols;

/***/ }),
/* 79 */
/***/ (function(module, exports) {

  module.exports = require("d3-shape");

/***/ }),
/* 80 */
/***/ (function(module, exports, __webpack_require__) {

  'use strict';
  
  var _keys = __webpack_require__(65);
  
  var _keys2 = _interopRequireDefault(_keys);
  
  var _from = __webpack_require__(81);
  
  var _from2 = _interopRequireDefault(_from);
  
  var _assign = __webpack_require__(23);
  
  var _assign2 = _interopRequireDefault(_assign);
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.calculateChartCoordinate = exports.getOffset = exports.getStringSize = exports.getStyleString = undefined;
  
  var _extends = _assign2.default || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }return target;
  };
  
  var _ReactUtils = __webpack_require__(64);
  
  function _toConsumableArray(arr) {
    if (Array.isArray(arr)) {
      for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) {
        arr2[i] = arr[i];
      }return arr2;
    } else {
      return (0, _from2.default)(arr);
    }
  }
  
  var stringCache = {
    widthCache: {},
    cacheCount: 0
  };
  var MAX_CACHE_NUM = 2000;
  var SPAN_STYLE = {
    position: 'absolute',
    top: '-20000px',
    left: 0,
    padding: 0,
    margin: 0,
    border: 'none',
    whiteSpace: 'pre'
  };
  var STYLE_LIST = ['minWidth', 'maxWidth', 'width', 'minHeight', 'maxHeight', 'height', 'top', 'left', 'fontSize', 'lineHeight', 'padding', 'margin', 'paddingLeft', 'paddingRight', 'paddingTop', 'paddingBottom', 'marginLeft', 'marginRight', 'marginTop', 'marginBottom'];
  var MEASUREMENT_SPAN_ID = 'recharts_measurement_span';
  
  function autoCompleteStyle(name, value) {
    if (STYLE_LIST.indexOf(name) >= 0 && value === +value) {
      return value + 'px';
    }
  
    return value;
  }
  
  function camelToMiddleLine(text) {
    var strs = text.split('');
  
    var formatStrs = strs.reduce(function (result, entry) {
      if (entry === entry.toUpperCase()) {
        return [].concat(_toConsumableArray(result), ['-', entry.toLowerCase()]);
      }
  
      return [].concat(_toConsumableArray(result), [entry]);
    }, []);
  
    return formatStrs.join('');
  }
  
  function getComputedStyles(el) {
    return el.ownerDocument.defaultView.getComputedStyle(el, null);
  }
  
  var getStyleString = exports.getStyleString = function getStyleString(style) {
    return (0, _keys2.default)(style).reduce(function (result, s) {
      return '' + result + camelToMiddleLine(s) + ':' + autoCompleteStyle(s, style[s]) + ';';
    }, '');
  };
  
  var getStringSize = exports.getStringSize = function getStringSize(text) {
    var style = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];
  
    if (text === undefined || text === null || (0, _ReactUtils.isSsr)()) {
      return 0;
    }
  
    var str = '' + text;
    var styleString = getStyleString(style);
    var cacheKey = str + '-' + styleString;
  
    if (stringCache.widthCache[cacheKey]) {
      return stringCache.widthCache[cacheKey];
    }
  
    var measurementSpan = document.getElementById(MEASUREMENT_SPAN_ID);
    if (!measurementSpan) {
      measurementSpan = document.createElement('span');
      measurementSpan.setAttribute('id', MEASUREMENT_SPAN_ID);
      document.body.appendChild(measurementSpan);
    }
  
    measurementSpan.setAttribute('style', getStyleString(_extends({}, SPAN_STYLE, style)));
    measurementSpan.textContent = str;
  
    var rect = measurementSpan.getBoundingClientRect();
    var result = { width: rect.width, height: rect.height };
  
    stringCache.widthCache[cacheKey] = result;
  
    if (++stringCache.cacheCount > MAX_CACHE_NUM) {
      stringCache.cacheCount = 0;
      stringCache.widthCache = {};
    }
  
    return result;
  };
  
  var getOffset = exports.getOffset = function getOffset(el) {
    var html = el.ownerDocument.documentElement;
    var box = { top: 0, left: 0 };
  
    // If we don't have gBCR, just use 0,0 rather than error
    // BlackBerry 5, iOS 3 (original iPhone)
    if (typeof el.getBoundingClientRect !== 'undefined') {
      box = el.getBoundingClientRect();
    }
  
    return {
      top: box.top + window.pageYOffset - html.clientTop,
      left: box.left + window.pageXOffset - html.clientLeft
    };
  };
  
  /**
   * Calculate coordinate of cursor in chart
   * @param  {Object} event  Event object
   * @param  {Object} offset The offset of main part in the svg element
   * @return {Object}        {chartX, chartY}
   */
  var calculateChartCoordinate = exports.calculateChartCoordinate = function calculateChartCoordinate(event, offset) {
    return {
      chartX: Math.round(event.pageX - offset.left),
      chartY: Math.round(event.pageY - offset.top)
    };
  };

/***/ }),
/* 81 */
/***/ (function(module, exports) {

  module.exports = require("babel-runtime/core-js/array/from");

/***/ }),
/* 82 */
/***/ (function(module, exports, __webpack_require__) {

  'use strict';
  
  var _getPrototypeOf = __webpack_require__(29);
  
  var _getPrototypeOf2 = _interopRequireDefault2(_getPrototypeOf);
  
  var _setPrototypeOf = __webpack_require__(59);
  
  var _setPrototypeOf2 = _interopRequireDefault2(_setPrototypeOf);
  
  var _create = __webpack_require__(60);
  
  var _create2 = _interopRequireDefault2(_create);
  
  var _typeof2 = __webpack_require__(61);
  
  var _typeof3 = _interopRequireDefault2(_typeof2);
  
  var _assign = __webpack_require__(23);
  
  var _assign2 = _interopRequireDefault2(_assign);
  
  var _defineProperty = __webpack_require__(62);
  
  var _defineProperty2 = _interopRequireDefault2(_defineProperty);
  
  function _interopRequireDefault2(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  
  var _isString2 = __webpack_require__(66);
  
  var _isString3 = _interopRequireDefault(_isString2);
  
  var _isNumber2 = __webpack_require__(67);
  
  var _isNumber3 = _interopRequireDefault(_isNumber2);
  
  var _isFunction2 = __webpack_require__(69);
  
  var _isFunction3 = _interopRequireDefault(_isFunction2);
  
  var _createClass = function () {
    function defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;(0, _defineProperty2.default)(target, descriptor.key, descriptor);
      }
    }return function (Constructor, protoProps, staticProps) {
      if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
    };
  }();
  
  var _class, _temp;
  
  var _extends = _assign2.default || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }return target;
  }; /**
      * @fileOverview Tooltip
      */
  
  var _react = __webpack_require__(11);
  
  var _react2 = _interopRequireDefault(_react);
  
  var _PureRender = __webpack_require__(72);
  
  var _PureRender2 = _interopRequireDefault(_PureRender);
  
  var _server = __webpack_require__(12);
  
  var _server2 = _interopRequireDefault(_server);
  
  var _DefaultTooltipContent = __webpack_require__(83);
  
  var _DefaultTooltipContent2 = _interopRequireDefault(_DefaultTooltipContent);
  
  var _DOMUtils = __webpack_require__(80);
  
  var _ReactUtils = __webpack_require__(64);
  
  var _reactSmooth = __webpack_require__(84);
  
  var _reactSmooth2 = _interopRequireDefault(_reactSmooth);
  
  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
  }
  
  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }
  
  function _possibleConstructorReturn(self, call) {
    if (!self) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }return call && ((typeof call === 'undefined' ? 'undefined' : (0, _typeof3.default)(call)) === "object" || typeof call === "function") ? call : self;
  }
  
  function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === 'undefined' ? 'undefined' : (0, _typeof3.default)(superClass)));
    }subClass.prototype = (0, _create2.default)(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) _setPrototypeOf2.default ? (0, _setPrototypeOf2.default)(subClass, superClass) : subClass.__proto__ = superClass;
  }
  
  var propTypes = {
    content: _react.PropTypes.oneOfType([_react.PropTypes.element, _react.PropTypes.func]),
    viewBox: _react.PropTypes.shape({
      x: _react.PropTypes.number,
      y: _react.PropTypes.number,
      width: _react.PropTypes.number,
      height: _react.PropTypes.number
    }),
  
    active: _react.PropTypes.bool,
    separator: _react.PropTypes.string,
    formatter: _react.PropTypes.func,
    offset: _react.PropTypes.number,
  
    itemStyle: _react.PropTypes.object,
    labelStyle: _react.PropTypes.object,
    wrapperStyle: _react.PropTypes.object,
    cursor: _react.PropTypes.oneOfType([_react.PropTypes.bool, _react.PropTypes.element, _react.PropTypes.object]),
  
    coordinate: _react.PropTypes.shape({
      x: _react.PropTypes.number,
      y: _react.PropTypes.number
    }),
  
    label: _react.PropTypes.any,
    payload: _react.PropTypes.arrayOf(_react.PropTypes.shape({
      name: _react.PropTypes.any,
      value: _react.PropTypes.oneOfType([_react.PropTypes.number, _react.PropTypes.string]),
      unit: _react.PropTypes.any
    })),
  
    isAnimationActive: _react.PropTypes.bool,
    animationDuration: _react.PropTypes.number,
    animationEasing: _react.PropTypes.oneOf(['ease', 'ease-in', 'ease-out', 'ease-in-out', 'linear']),
    itemSorter: _react.PropTypes.func
  };
  
  var defaultProps = {
    active: false,
    offset: 10,
    viewBox: { x1: 0, x2: 0, y1: 0, y2: 0 },
    coordinate: { x: 0, y: 0 },
    cursorStyle: {},
    separator: ' : ',
    wrapperStyle: {},
    itemStyle: {},
    labelStyle: {},
    cursor: true,
    isAnimationActive: true,
    animationEasing: 'ease',
    animationDuration: 400,
    itemSorter: function itemSorter(item1, item2) {
      return -1;
    }
  };
  
  var getTooltipBBox = function getTooltipBBox(wrapperStyle, contentItem) {
    if (!(0, _ReactUtils.isSsr)()) {
      var contentHtml = _server2.default.renderToStaticMarkup(contentItem);
      var style = _extends({
        // solve the problem temporarily that the width and height will be affect by the global css
        fontSize: 12
      }, wrapperStyle, {
        top: -20000,
        left: 0,
        display: 'block'
      });
  
      var wrapper = document.createElement('div');
  
      wrapper.setAttribute('style', (0, _DOMUtils.getStyleString)(style));
      wrapper.innerHTML = contentHtml;
      document.body.appendChild(wrapper);
      var box = wrapper.getBoundingClientRect();
  
      document.body.removeChild(wrapper);
  
      return box;
    }
  
    return null;
  };
  
  var renderContent = function renderContent(content, props) {
    if (_react2.default.isValidElement(content)) {
      return _react2.default.cloneElement(content, props);
    } else if ((0, _isFunction3.default)(content)) {
      return content(props);
    }
  
    return _react2.default.createElement(_DefaultTooltipContent2.default, props);
  };
  
  var Tooltip = (_temp = _class = function (_Component) {
    _inherits(Tooltip, _Component);
  
    function Tooltip() {
      _classCallCheck(this, Tooltip);
  
      return _possibleConstructorReturn(this, (Tooltip.__proto__ || (0, _getPrototypeOf2.default)(Tooltip)).apply(this, arguments));
    }
  
    _createClass(Tooltip, [{
      key: 'render',
      value: function render() {
        var _props = this.props;
        var payload = _props.payload;
        var isAnimationActive = _props.isAnimationActive;
        var animationDuration = _props.animationDuration;
        var animationEasing = _props.animationEasing;
  
        if (!payload || !payload.length || !payload.filter(function (entry) {
          return (0, _isNumber3.default)(entry.value) || (0, _isString3.default)(entry.value);
        }).length) {
          return null;
        }
  
        var _props2 = this.props;
        var content = _props2.content;
        var viewBox = _props2.viewBox;
        var coordinate = _props2.coordinate;
        var active = _props2.active;
        var offset = _props2.offset;
        var wrapperStyle = _props2.wrapperStyle;
  
        var outerStyle = _extends({
          pointerEvents: 'none',
          display: active ? 'block' : 'none',
          position: 'absolute',
          top: 0
        }, wrapperStyle);
        var contentItem = renderContent(content, this.props);
        var box = getTooltipBBox(outerStyle, contentItem);
  
        if (!box) {
          return null;
        }
        var translateX = Math.max(coordinate.x + box.width + offset > viewBox.x + viewBox.width ? coordinate.x - box.width - offset : coordinate.x + offset, viewBox.x);
  
        var translateY = Math.max(coordinate.y + box.height + offset > viewBox.y + viewBox.height ? coordinate.y - box.height - offset : coordinate.y + offset, viewBox.y);
  
        return _react2.default.createElement(_reactSmooth2.default, {
          from: 'translate(' + translateX + 'px, ' + translateY + 'px)',
          to: 'translate(' + translateX + 'px, ' + translateY + 'px)',
          duration: animationDuration,
          isActive: isAnimationActive,
          easing: animationEasing,
          attributeName: 'transform'
        }, _react2.default.createElement('div', {
          className: 'recharts-tooltip-wrapper',
          style: outerStyle
        }, contentItem));
      }
    }]);
  
    return Tooltip;
  }(_react.Component), _class.displayName = 'Tooltip', _class.propTypes = propTypes, _class.defaultProps = defaultProps, _temp);
  exports.default = Tooltip;

/***/ }),
/* 83 */
/***/ (function(module, exports, __webpack_require__) {

  'use strict';
  
  var _getPrototypeOf = __webpack_require__(29);
  
  var _getPrototypeOf2 = _interopRequireDefault2(_getPrototypeOf);
  
  var _setPrototypeOf = __webpack_require__(59);
  
  var _setPrototypeOf2 = _interopRequireDefault2(_setPrototypeOf);
  
  var _create = __webpack_require__(60);
  
  var _create2 = _interopRequireDefault2(_create);
  
  var _typeof2 = __webpack_require__(61);
  
  var _typeof3 = _interopRequireDefault2(_typeof2);
  
  var _defineProperty = __webpack_require__(62);
  
  var _defineProperty2 = _interopRequireDefault2(_defineProperty);
  
  var _assign = __webpack_require__(23);
  
  var _assign2 = _interopRequireDefault2(_assign);
  
  function _interopRequireDefault2(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  
  var _isString2 = __webpack_require__(66);
  
  var _isString3 = _interopRequireDefault(_isString2);
  
  var _isNumber2 = __webpack_require__(67);
  
  var _isNumber3 = _interopRequireDefault(_isNumber2);
  
  var _extends = _assign2.default || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }return target;
  };
  
  var _createClass = function () {
    function defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;(0, _defineProperty2.default)(target, descriptor.key, descriptor);
      }
    }return function (Constructor, protoProps, staticProps) {
      if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
    };
  }();
  
  var _class, _class2, _temp; /**
                               * @fileOverview Default Tooltip Content
                               */
  
  var _react = __webpack_require__(11);
  
  var _react2 = _interopRequireDefault(_react);
  
  var _PureRender = __webpack_require__(72);
  
  var _PureRender2 = _interopRequireDefault(_PureRender);
  
  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
  }
  
  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }
  
  function _possibleConstructorReturn(self, call) {
    if (!self) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }return call && ((typeof call === 'undefined' ? 'undefined' : (0, _typeof3.default)(call)) === "object" || typeof call === "function") ? call : self;
  }
  
  function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === 'undefined' ? 'undefined' : (0, _typeof3.default)(superClass)));
    }subClass.prototype = (0, _create2.default)(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) _setPrototypeOf2.default ? (0, _setPrototypeOf2.default)(subClass, superClass) : subClass.__proto__ = superClass;
  }
  
  var DefaultTooltipContent = (0, _PureRender2.default)(_class = (_temp = _class2 = function (_Component) {
    _inherits(DefaultTooltipContent, _Component);
  
    function DefaultTooltipContent() {
      _classCallCheck(this, DefaultTooltipContent);
  
      return _possibleConstructorReturn(this, (DefaultTooltipContent.__proto__ || (0, _getPrototypeOf2.default)(DefaultTooltipContent)).apply(this, arguments));
    }
  
    _createClass(DefaultTooltipContent, [{
      key: 'renderContent',
      value: function renderContent() {
        var _props = this.props;
        var payload = _props.payload;
        var separator = _props.separator;
        var formatter = _props.formatter;
        var itemStyle = _props.itemStyle;
        var itemSorter = _props.itemSorter;
  
        if (payload && payload.length) {
          var listStyle = { padding: 0, margin: 0 };
  
          var items = payload.filter(function (entry) {
            return (0, _isNumber3.default)(entry.value) || (0, _isString3.default)(entry.value);
          }).sort(itemSorter).map(function (entry, i) {
            var finalItemStyle = _extends({
              display: 'block',
              paddingTop: 4,
              paddingBottom: 4,
              color: entry.color || '#000'
            }, itemStyle);
            var finalFormatter = entry.formatter || formatter;
  
            return _react2.default.createElement('li', { className: 'recharts-tooltip-item', key: 'tooltip-item-' + i, style: finalItemStyle }, _react2.default.createElement('span', { className: 'recharts-tooltip-item-name' }, entry.name), _react2.default.createElement('span', { className: 'recharts-tooltip-item-separator' }, separator), _react2.default.createElement('span', { className: 'recharts-tooltip-item-value' }, finalFormatter ? finalFormatter(entry.value, entry.name, entry) : entry.value), _react2.default.createElement('span', { className: 'recharts-tooltip-item-unit' }, entry.unit || ''));
          });
  
          return _react2.default.createElement('ul', { className: 'recharts-tooltip-item-list', style: listStyle }, items);
        }
  
        return null;
      }
    }, {
      key: 'render',
      value: function render() {
        var _props2 = this.props;
        var labelStyle = _props2.labelStyle;
        var label = _props2.label;
        var labelFormatter = _props2.labelFormatter;
        var wrapperStyle = _props2.wrapperStyle;
  
        var finalStyle = _extends({
          margin: 0,
          padding: 10,
          backgroundColor: '#fff',
          border: '1px solid #ccc',
          whiteSpace: 'nowrap'
        }, wrapperStyle);
        var finalLabelStyle = _extends({
          margin: 0
        }, labelStyle);
        var hasLabel = (0, _isNumber3.default)(label) || (0, _isString3.default)(label);
        var finalLabel = hasLabel ? label : '';
  
        if (hasLabel && labelFormatter) {
          finalLabel = labelFormatter(label);
        }
  
        return _react2.default.createElement('div', { className: 'recharts-default-tooltip', style: finalStyle }, _react2.default.createElement('p', { className: 'recharts-tooltip-label', style: finalLabelStyle }, finalLabel), this.renderContent());
      }
    }]);
  
    return DefaultTooltipContent;
  }(_react.Component), _class2.displayName = 'DefaultTooltipContent', _class2.propTypes = {
    separator: _react.PropTypes.string,
    formatter: _react.PropTypes.func,
    wrapperStyle: _react.PropTypes.object,
    itemStyle: _react.PropTypes.object,
    labelStyle: _react.PropTypes.object,
    labelFormatter: _react.PropTypes.func,
    label: _react.PropTypes.any,
    payload: _react.PropTypes.arrayOf(_react.PropTypes.shape({
      name: _react.PropTypes.any,
      value: _react.PropTypes.oneOfType([_react.PropTypes.number, _react.PropTypes.string]),
      unit: _react.PropTypes.any
    })),
    itemSorter: _react.PropTypes.func
  }, _class2.defaultProps = {
    separator: ' : ',
    itemStyle: {},
    labelStyle: {}
  }, _temp)) || _class;
  
  exports.default = DefaultTooltipContent;

/***/ }),
/* 84 */
/***/ (function(module, exports) {

  module.exports = require("react-smooth");

/***/ }),
/* 85 */
/***/ (function(module, exports, __webpack_require__) {

  'use strict';
  
  var _sign = __webpack_require__(86);
  
  var _sign2 = _interopRequireDefault2(_sign);
  
  var _getPrototypeOf = __webpack_require__(29);
  
  var _getPrototypeOf2 = _interopRequireDefault2(_getPrototypeOf);
  
  var _setPrototypeOf = __webpack_require__(59);
  
  var _setPrototypeOf2 = _interopRequireDefault2(_setPrototypeOf);
  
  var _create = __webpack_require__(60);
  
  var _create2 = _interopRequireDefault2(_create);
  
  var _typeof2 = __webpack_require__(61);
  
  var _typeof3 = _interopRequireDefault2(_typeof2);
  
  var _defineProperty = __webpack_require__(62);
  
  var _defineProperty2 = _interopRequireDefault2(_defineProperty);
  
  var _assign = __webpack_require__(23);
  
  var _assign2 = _interopRequireDefault2(_assign);
  
  function _interopRequireDefault2(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  
  var _isNumber2 = __webpack_require__(67);
  
  var _isNumber3 = _interopRequireDefault(_isNumber2);
  
  var _isPlainObject2 = __webpack_require__(75);
  
  var _isPlainObject3 = _interopRequireDefault(_isPlainObject2);
  
  var _isFunction2 = __webpack_require__(69);
  
  var _isFunction3 = _interopRequireDefault(_isFunction2);
  
  var _extends = _assign2.default || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }return target;
  };
  
  var _createClass = function () {
    function defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;(0, _defineProperty2.default)(target, descriptor.key, descriptor);
      }
    }return function (Constructor, protoProps, staticProps) {
      if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
    };
  }();
  
  var _class, _class2, _temp; /**
                               * @fileOverview Render sectors of a pie
                               */
  
  var _react = __webpack_require__(11);
  
  var _react2 = _interopRequireDefault(_react);
  
  var _PureRender = __webpack_require__(72);
  
  var _PureRender2 = _interopRequireDefault(_PureRender);
  
  var _classnames = __webpack_require__(46);
  
  var _classnames2 = _interopRequireDefault(_classnames);
  
  var _Layer = __webpack_require__(87);
  
  var _Layer2 = _interopRequireDefault(_Layer);
  
  var _Sector = __webpack_require__(88);
  
  var _Sector2 = _interopRequireDefault(_Sector);
  
  var _Curve = __webpack_require__(90);
  
  var _Curve2 = _interopRequireDefault(_Curve);
  
  var _Text = __webpack_require__(91);
  
  var _Text2 = _interopRequireDefault(_Text);
  
  var _reactSmooth = __webpack_require__(84);
  
  var _reactSmooth2 = _interopRequireDefault(_reactSmooth);
  
  var _ReactUtils = __webpack_require__(64);
  
  var _PolarUtils = __webpack_require__(89);
  
  var _AnimationDecorator = __webpack_require__(94);
  
  var _AnimationDecorator2 = _interopRequireDefault(_AnimationDecorator);
  
  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
  }
  
  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }
  
  function _possibleConstructorReturn(self, call) {
    if (!self) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }return call && ((typeof call === 'undefined' ? 'undefined' : (0, _typeof3.default)(call)) === "object" || typeof call === "function") ? call : self;
  }
  
  function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === 'undefined' ? 'undefined' : (0, _typeof3.default)(superClass)));
    }subClass.prototype = (0, _create2.default)(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) _setPrototypeOf2.default ? (0, _setPrototypeOf2.default)(subClass, superClass) : subClass.__proto__ = superClass;
  }
  
  var Pie = (0, _AnimationDecorator2.default)(_class = (0, _PureRender2.default)(_class = (_temp = _class2 = function (_Component) {
    _inherits(Pie, _Component);
  
    function Pie(props, ctx) {
      _classCallCheck(this, Pie);
  
      var _this = _possibleConstructorReturn(this, (Pie.__proto__ || (0, _getPrototypeOf2.default)(Pie)).call(this, props, ctx));
  
      _this.handleAnimationEnd = function () {
        _this.setState({
          isAnimationFinished: true
        });
      };
  
      _this.state = {
        isAnimationFinished: false
      };
  
      if (!_this.id) {
        _this.id = 'clipPath' + Date.now();
      }
      return _this;
    }
  
    _createClass(Pie, [{
      key: 'getDeltaAngle',
      value: function getDeltaAngle() {
        var _props = this.props;
        var startAngle = _props.startAngle;
        var endAngle = _props.endAngle;
  
        var sign = (0, _sign2.default)(endAngle - startAngle);
        var deltaAngle = Math.min(Math.abs(endAngle - startAngle), 360);
  
        return sign * deltaAngle;
      }
    }, {
      key: 'getSectors',
      value: function getSectors(data) {
        var _props2 = this.props;
        var cx = _props2.cx;
        var cy = _props2.cy;
        var innerRadius = _props2.innerRadius;
        var outerRadius = _props2.outerRadius;
        var startAngle = _props2.startAngle;
        var paddingAngle = _props2.paddingAngle;
        var minAngle = _props2.minAngle;
        var endAngle = _props2.endAngle;
        var nameKey = _props2.nameKey;
        var valueKey = _props2.valueKey;
  
        var len = data.length;
        var deltaAngle = this.getDeltaAngle();
        var absDeltaAngle = Math.abs(deltaAngle);
        var totalPadingAngle = (absDeltaAngle >= 360 ? len : len - 1) * paddingAngle;
        var sum = data.reduce(function (result, entry) {
          return result + entry[valueKey];
        }, 0);
  
        var sectors = [];
        var prev = void 0;
  
        if (sum > 0) {
          sectors = data.map(function (entry, i) {
            var percent = entry[valueKey] / sum;
            var tempStartAngle = void 0;
  
            if (i) {
              tempStartAngle = (deltaAngle < 0 ? prev.endAngle : prev.startAngle) + (0, _sign2.default)(deltaAngle) * paddingAngle;
            } else {
              tempStartAngle = startAngle;
            }
  
            var tempEndAngle = tempStartAngle + (0, _sign2.default)(deltaAngle) * (minAngle + percent * (absDeltaAngle - len * minAngle - totalPadingAngle));
  
            prev = _extends({
              percent: percent
            }, entry, {
              cx: cx,
              cy: cy,
              innerRadius: innerRadius,
              outerRadius: outerRadius,
              name: entry[nameKey],
              value: entry[valueKey],
              startAngle: deltaAngle < 0 ? tempStartAngle : tempEndAngle,
              endAngle: deltaAngle < 0 ? tempEndAngle : tempStartAngle,
              payload: entry,
              midAngle: (tempStartAngle + tempEndAngle) / 2
            });
  
            return prev;
          });
        }
  
        return sectors;
      }
    }, {
      key: 'getTextAnchor',
      value: function getTextAnchor(x, cx) {
        if (x > cx) {
          return 'start';
        } else if (x < cx) {
          return 'end';
        }
  
        return 'middle';
      }
    }, {
      key: 'isActiveIndex',
      value: function isActiveIndex(i) {
        var activeIndex = this.props.activeIndex;
  
        if (Array.isArray(activeIndex)) {
          return activeIndex.indexOf(i) !== -1;
        }
  
        return i === activeIndex;
      }
    }, {
      key: 'renderClipPath',
      value: function renderClipPath() {
        var _props3 = this.props;
        var cx = _props3.cx;
        var cy = _props3.cy;
        var maxRadius = _props3.maxRadius;
        var startAngle = _props3.startAngle;
        var isAnimationActive = _props3.isAnimationActive;
        var animationDuration = _props3.animationDuration;
        var animationEasing = _props3.animationEasing;
        var animationBegin = _props3.animationBegin;
        var animationId = _props3.animationId;
  
        return _react2.default.createElement('defs', null, _react2.default.createElement('clipPath', { id: this.id }, _react2.default.createElement(_reactSmooth2.default, {
          easing: animationEasing,
          isActive: isAnimationActive,
          duration: animationDuration,
          key: animationId,
          animationBegin: animationBegin,
          onAnimationEnd: this.handleAnimationEnd,
          from: {
            endAngle: startAngle
          },
          to: {
            outerRadius: Math.max(this.props.outerRadius, maxRadius || 0),
            innerRadius: 0,
            endAngle: this.props.endAngle
          }
        }, function (_ref) {
          var outerRadius = _ref.outerRadius;
          var innerRadius = _ref.innerRadius;
          var endAngle = _ref.endAngle;
          return _react2.default.createElement(_Sector2.default, {
            cx: cx,
            cy: cy,
            outerRadius: outerRadius,
            innerRadius: innerRadius,
            startAngle: startAngle,
            endAngle: endAngle
          });
        })));
      }
    }, {
      key: 'renderLabelLineItem',
      value: function renderLabelLineItem(option, props) {
        if (_react2.default.isValidElement(option)) {
          return _react2.default.cloneElement(option, props);
        } else if ((0, _isFunction3.default)(option)) {
          return option(props);
        }
  
        return _react2.default.createElement(_Curve2.default, _extends({}, props, { type: 'linear', className: 'recharts-pie-label-line' }));
      }
    }, {
      key: 'renderLabelItem',
      value: function renderLabelItem(option, props, value) {
        if (_react2.default.isValidElement(option)) {
          return _react2.default.cloneElement(option, props);
        }
        var label = value;
        if ((0, _isFunction3.default)(option)) {
          label = option(props);
          if (_react2.default.isValidElement(label)) {
            return label;
          }
        }
  
        return _react2.default.createElement(_Text2.default, _extends({}, props, {
          alignmentBaseline: 'middle',
          className: 'recharts-pie-label-text'
        }), label);
      }
    }, {
      key: 'renderLabels',
      value: function renderLabels(sectors) {
        var _this2 = this;
  
        var isAnimationActive = this.props.isAnimationActive;
  
        if (isAnimationActive && !this.state.isAnimationFinished) {
          return null;
        }
        var _props4 = this.props;
        var label = _props4.label;
        var labelLine = _props4.labelLine;
        var valueKey = _props4.valueKey;
  
        var pieProps = (0, _ReactUtils.getPresentationAttributes)(this.props);
        var customLabelProps = (0, _ReactUtils.getPresentationAttributes)(label);
        var customLabelLineProps = (0, _ReactUtils.getPresentationAttributes)(labelLine);
        var offsetRadius = label && label.offsetRadius || 20;
  
        var labels = sectors.map(function (entry, i) {
          var midAngle = (entry.startAngle + entry.endAngle) / 2;
          var endPoint = (0, _PolarUtils.polarToCartesian)(entry.cx, entry.cy, entry.outerRadius + offsetRadius, midAngle);
          var labelProps = _extends({}, pieProps, entry, {
            stroke: 'none'
          }, customLabelProps, {
            index: i,
            textAnchor: _this2.getTextAnchor(endPoint.x, entry.cx)
          }, endPoint);
          var lineProps = _extends({}, pieProps, entry, {
            fill: 'none',
            stroke: entry.fill
          }, customLabelLineProps, {
            points: [(0, _PolarUtils.polarToCartesian)(entry.cx, entry.cy, entry.outerRadius, midAngle), endPoint]
          });
  
          return _react2.default.createElement(_Layer2.default, { key: 'label-' + i }, labelLine && _this2.renderLabelLineItem(labelLine, lineProps), _this2.renderLabelItem(label, labelProps, entry[valueKey]));
        });
  
        return _react2.default.createElement(_Layer2.default, { className: 'recharts-pie-labels' }, labels);
      }
    }, {
      key: 'renderSectorItem',
      value: function renderSectorItem(option, props) {
        if (_react2.default.isValidElement(option)) {
          return _react2.default.cloneElement(option, props);
        } else if ((0, _isFunction3.default)(option)) {
          return option(props);
        } else if ((0, _isPlainObject3.default)(option)) {
          return _react2.default.createElement(_Sector2.default, _extends({}, props, option));
        }
  
        return _react2.default.createElement(_Sector2.default, props);
      }
    }, {
      key: 'renderSectors',
      value: function renderSectors(sectors) {
        var _this3 = this;
  
        var activeShape = this.props.activeShape;
  
        return sectors.map(function (entry, i) {
          return _react2.default.createElement(_Layer2.default, _extends({
            className: 'recharts-pie-sector'
          }, (0, _ReactUtils.filterEventsOfChild)(_this3.props, entry, i), {
            key: 'sector-' + i
          }), _this3.renderSectorItem(_this3.isActiveIndex(i) ? activeShape : null, entry));
        });
      }
    }, {
      key: 'render',
      value: function render() {
        var _props5 = this.props;
        var data = _props5.data;
        var composedData = _props5.composedData;
        var className = _props5.className;
        var label = _props5.label;
        var cx = _props5.cx;
        var cy = _props5.cy;
        var innerRadius = _props5.innerRadius;
        var outerRadius = _props5.outerRadius;
  
        var pieData = composedData || data;
  
        if (!pieData || !pieData.length || !(0, _isNumber3.default)(cx) || !(0, _isNumber3.default)(cy) || !(0, _isNumber3.default)(innerRadius) || !(0, _isNumber3.default)(outerRadius)) {
          return null;
        }
  
        var sectors = this.getSectors(pieData);
        var layerClass = (0, _classnames2.default)('recharts-pie', className);
  
        return _react2.default.createElement(_Layer2.default, { className: layerClass }, this.renderClipPath(), _react2.default.createElement('g', { clipPath: 'url(#' + this.id + ')' }, this.renderSectors(sectors)), label && this.renderLabels(sectors));
      }
    }]);
  
    return Pie;
  }(_react.Component), _class2.displayName = 'Pie', _class2.propTypes = _extends({}, _ReactUtils.PRESENTATION_ATTRIBUTES, {
    className: _react.PropTypes.string,
    cx: _react.PropTypes.oneOfType([_react.PropTypes.number, _react.PropTypes.string]),
    cy: _react.PropTypes.oneOfType([_react.PropTypes.number, _react.PropTypes.string]),
    startAngle: _react.PropTypes.number,
    endAngle: _react.PropTypes.number,
    paddingAngle: _react.PropTypes.number,
    innerRadius: _react.PropTypes.oneOfType([_react.PropTypes.number, _react.PropTypes.string]),
    outerRadius: _react.PropTypes.oneOfType([_react.PropTypes.number, _react.PropTypes.string]),
    nameKey: _react.PropTypes.oneOfType([_react.PropTypes.number, _react.PropTypes.string]),
    valueKey: _react.PropTypes.oneOfType([_react.PropTypes.number, _react.PropTypes.string]),
    data: _react.PropTypes.arrayOf(_react.PropTypes.object),
    composedData: _react.PropTypes.arrayOf(_react.PropTypes.object),
    minAngle: _react.PropTypes.number,
    legendType: _react.PropTypes.oneOf(['line', 'square', 'rect', 'circle', 'cross', 'diamond', 'square', 'star', 'triangle', 'wye']),
    maxRadius: _react.PropTypes.number,
  
    labelLine: _react.PropTypes.oneOfType([_react.PropTypes.object, _react.PropTypes.func, _react.PropTypes.element, _react.PropTypes.bool]),
    label: _react.PropTypes.oneOfType([_react.PropTypes.shape({
      offsetRadius: _react.PropTypes.number
    }), _react.PropTypes.func, _react.PropTypes.element, _react.PropTypes.bool]),
    activeShape: _react.PropTypes.oneOfType([_react.PropTypes.object, _react.PropTypes.func, _react.PropTypes.element]),
    activeIndex: _react.PropTypes.oneOfType([_react.PropTypes.number, _react.PropTypes.arrayOf(_react.PropTypes.number)]),
  
    onMouseEnter: _react.PropTypes.func,
    onMouseLeave: _react.PropTypes.func,
    onClick: _react.PropTypes.func,
    isAnimationActive: _react.PropTypes.bool,
    animationBegin: _react.PropTypes.number,
    animationDuration: _react.PropTypes.number,
    animationEasing: _react.PropTypes.oneOf(['ease', 'ease-in', 'ease-out', 'ease-in-out', 'spring', 'linear'])
  }), _class2.defaultProps = {
    stroke: '#fff',
    fill: '#808080',
    legendType: 'rect',
    // The abscissa of pole
    cx: '50%',
    // The ordinate of pole
    cy: '50%',
    // The start angle of first sector
    startAngle: 0,
    // The direction of drawing sectors
    endAngle: 360,
    // The inner radius of sectors
    innerRadius: 0,
    // The outer radius of sectors
    outerRadius: '80%',
    paddingAngle: 0,
    nameKey: 'name',
    valueKey: 'value',
    labelLine: true,
    data: [],
    minAngle: 0,
    animationId: _react.PropTypes.number,
    isAnimationActive: true,
    animationBegin: 400,
    animationDuration: 1500,
    animationEasing: 'ease'
  }, _temp)) || _class) || _class;
  
  exports.default = Pie;

/***/ }),
/* 86 */
/***/ (function(module, exports) {

  module.exports = require("babel-runtime/core-js/math/sign");

/***/ }),
/* 87 */
/***/ (function(module, exports, __webpack_require__) {

  'use strict';
  
  var _assign = __webpack_require__(23);
  
  var _assign2 = _interopRequireDefault2(_assign);
  
  function _interopRequireDefault2(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  
  var _extends = _assign2.default || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }return target;
  };
  
  var _react = __webpack_require__(11);
  
  var _react2 = _interopRequireDefault(_react);
  
  var _classnames = __webpack_require__(46);
  
  var _classnames2 = _interopRequireDefault(_classnames);
  
  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
  }
  
  function _objectWithoutProperties(obj, keys) {
    var target = {};for (var i in obj) {
      if (keys.indexOf(i) >= 0) continue;if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;target[i] = obj[i];
    }return target;
  } /**
     * @fileOverview Layer
     */
  
  var propTypes = {
    className: _react.PropTypes.string,
    children: _react.PropTypes.oneOfType([_react.PropTypes.arrayOf(_react.PropTypes.node), _react.PropTypes.node])
  };
  
  function Layer(props) {
    var children = props.children;
    var className = props.className;
  
    var others = _objectWithoutProperties(props, ['children', 'className']);
  
    var layerClass = (0, _classnames2.default)('recharts-layer', className);
  
    return _react2.default.createElement('g', _extends({ className: layerClass }, others), children);
  }
  
  Layer.propTypes = propTypes;
  
  exports.default = Layer;

/***/ }),
/* 88 */
/***/ (function(module, exports, __webpack_require__) {

  'use strict';
  
  var _getPrototypeOf = __webpack_require__(29);
  
  var _getPrototypeOf2 = _interopRequireDefault2(_getPrototypeOf);
  
  var _sign = __webpack_require__(86);
  
  var _sign2 = _interopRequireDefault2(_sign);
  
  var _setPrototypeOf = __webpack_require__(59);
  
  var _setPrototypeOf2 = _interopRequireDefault2(_setPrototypeOf);
  
  var _create = __webpack_require__(60);
  
  var _create2 = _interopRequireDefault2(_create);
  
  var _typeof2 = __webpack_require__(61);
  
  var _typeof3 = _interopRequireDefault2(_typeof2);
  
  var _defineProperty = __webpack_require__(62);
  
  var _defineProperty2 = _interopRequireDefault2(_defineProperty);
  
  var _assign = __webpack_require__(23);
  
  var _assign2 = _interopRequireDefault2(_assign);
  
  function _interopRequireDefault2(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  
  var _extends = _assign2.default || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }return target;
  };
  
  var _createClass = function () {
    function defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;(0, _defineProperty2.default)(target, descriptor.key, descriptor);
      }
    }return function (Constructor, protoProps, staticProps) {
      if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
    };
  }();
  
  var _class, _class2, _temp; /**
                               * @fileOverview Sector
                               */
  
  var _react = __webpack_require__(11);
  
  var _react2 = _interopRequireDefault(_react);
  
  var _PureRender = __webpack_require__(72);
  
  var _PureRender2 = _interopRequireDefault(_PureRender);
  
  var _classnames = __webpack_require__(46);
  
  var _classnames2 = _interopRequireDefault(_classnames);
  
  var _ReactUtils = __webpack_require__(64);
  
  var _PolarUtils = __webpack_require__(89);
  
  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
  }
  
  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }
  
  function _possibleConstructorReturn(self, call) {
    if (!self) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }return call && ((typeof call === "undefined" ? "undefined" : (0, _typeof3.default)(call)) === "object" || typeof call === "function") ? call : self;
  }
  
  function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : (0, _typeof3.default)(superClass)));
    }subClass.prototype = (0, _create2.default)(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) _setPrototypeOf2.default ? (0, _setPrototypeOf2.default)(subClass, superClass) : subClass.__proto__ = superClass;
  }
  
  var getDeltaAngle = function getDeltaAngle(startAngle, endAngle) {
    var sign = (0, _sign2.default)(endAngle - startAngle);
    var deltaAngle = Math.min(Math.abs(endAngle - startAngle), 359.999);
  
    return sign * deltaAngle;
  };
  
  var getSectorPath = function getSectorPath(_ref) {
    var cx = _ref.cx;
    var cy = _ref.cy;
    var innerRadius = _ref.innerRadius;
    var outerRadius = _ref.outerRadius;
    var startAngle = _ref.startAngle;
    var endAngle = _ref.endAngle;
  
    var angle = getDeltaAngle(startAngle, endAngle);
  
    // When the angle of sector equals to 360, star point and end point coincide
    var tempEndAngle = startAngle + angle;
    var outerStartPoint = (0, _PolarUtils.polarToCartesian)(cx, cy, outerRadius, startAngle);
    var outerEndPoint = (0, _PolarUtils.polarToCartesian)(cx, cy, outerRadius, tempEndAngle);
  
    var path = void 0;
  
    if (innerRadius > 0) {
      var innerStartPoint = (0, _PolarUtils.polarToCartesian)(cx, cy, innerRadius, startAngle);
      var innerEndPoint = (0, _PolarUtils.polarToCartesian)(cx, cy, innerRadius, tempEndAngle);
      path = 'M ' + outerStartPoint.x + ',' + outerStartPoint.y + '\n            A ' + outerRadius + ',' + outerRadius + ',0,\n            ' + +(Math.abs(angle) > 180) + ',' + +(startAngle > tempEndAngle) + ',\n            ' + outerEndPoint.x + ',' + outerEndPoint.y + '\n            L ' + innerEndPoint.x + ',' + innerEndPoint.y + '\n            A ' + innerRadius + ',' + innerRadius + ',0,\n            ' + +(Math.abs(angle) > 180) + ',' + +(startAngle <= tempEndAngle) + ',\n            ' + innerStartPoint.x + ',' + innerStartPoint.y + ' Z';
    } else {
      path = 'M ' + outerStartPoint.x + ',' + outerStartPoint.y + '\n            A ' + outerRadius + ',' + outerRadius + ',0,\n            ' + +(Math.abs(angle) > 180) + ',' + +(startAngle > tempEndAngle) + ',\n            ' + outerEndPoint.x + ',' + outerEndPoint.y + '\n            L ' + cx + ',' + cy + ' Z';
    }
  
    return path;
  };
  
  var Sector = (0, _PureRender2.default)(_class = (_temp = _class2 = function (_Component) {
    _inherits(Sector, _Component);
  
    function Sector() {
      _classCallCheck(this, Sector);
  
      return _possibleConstructorReturn(this, (Sector.__proto__ || (0, _getPrototypeOf2.default)(Sector)).apply(this, arguments));
    }
  
    _createClass(Sector, [{
      key: 'render',
      value: function render() {
        var _props = this.props;
        var cx = _props.cx;
        var cy = _props.cy;
        var innerRadius = _props.innerRadius;
        var outerRadius = _props.outerRadius;
        var startAngle = _props.startAngle;
        var endAngle = _props.endAngle;
        var className = _props.className;
  
        if (outerRadius < innerRadius || startAngle === endAngle) {
          return null;
        }
  
        var layerClass = (0, _classnames2.default)('recharts-sector', className);
  
        return _react2.default.createElement('path', _extends({}, (0, _ReactUtils.getPresentationAttributes)(this.props), (0, _ReactUtils.filterEventAttributes)(this.props), {
          className: layerClass,
          d: getSectorPath({ cx: cx, cy: cy, innerRadius: innerRadius, outerRadius: outerRadius, startAngle: startAngle, endAngle: endAngle })
        }));
      }
    }]);
  
    return Sector;
  }(_react.Component), _class2.displayName = 'Sector', _class2.propTypes = _extends({}, _ReactUtils.PRESENTATION_ATTRIBUTES, {
    className: _react.PropTypes.string,
    cx: _react.PropTypes.number,
    cy: _react.PropTypes.number,
    innerRadius: _react.PropTypes.number,
    outerRadius: _react.PropTypes.number,
    startAngle: _react.PropTypes.number,
    endAngle: _react.PropTypes.number
  }), _class2.defaultProps = {
    cx: 0,
    cy: 0,
    innerRadius: 0,
    outerRadius: 0,
    startAngle: 0,
    endAngle: 0
  }, _temp)) || _class;
  
  exports.default = Sector;

/***/ }),
/* 89 */
/***/ (function(module, exports) {

  "use strict";
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  var RADIAN = Math.PI / 180;
  
  var polarToCartesian = exports.polarToCartesian = function polarToCartesian(cx, cy, radius, angle) {
    return {
      x: cx + Math.cos(-RADIAN * angle) * radius,
      y: cy + Math.sin(-RADIAN * angle) * radius
    };
  };
  
  var getMaxRadius = exports.getMaxRadius = function getMaxRadius(width, height) {
    var margin = arguments.length <= 2 || arguments[2] === undefined ? {
      top: 0, right: 0, bottom: 0, left: 0
    } : arguments[2];
    return Math.min(Math.abs(width - (margin.left || 0) - (margin.right || 0)), Math.abs(height - (margin.left || 0) - (margin.right || 0))) / 2;
  };

/***/ }),
/* 90 */
/***/ (function(module, exports, __webpack_require__) {

  'use strict';
  
  var _getPrototypeOf = __webpack_require__(29);
  
  var _getPrototypeOf2 = _interopRequireDefault2(_getPrototypeOf);
  
  var _setPrototypeOf = __webpack_require__(59);
  
  var _setPrototypeOf2 = _interopRequireDefault2(_setPrototypeOf);
  
  var _create = __webpack_require__(60);
  
  var _create2 = _interopRequireDefault2(_create);
  
  var _typeof2 = __webpack_require__(61);
  
  var _typeof3 = _interopRequireDefault2(_typeof2);
  
  var _defineProperty = __webpack_require__(62);
  
  var _defineProperty2 = _interopRequireDefault2(_defineProperty);
  
  var _assign = __webpack_require__(23);
  
  var _assign2 = _interopRequireDefault2(_assign);
  
  function _interopRequireDefault2(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  
  var _isNumber2 = __webpack_require__(67);
  
  var _isNumber3 = _interopRequireDefault(_isNumber2);
  
  var _isArray2 = __webpack_require__(70);
  
  var _isArray3 = _interopRequireDefault(_isArray2);
  
  var _isFunction2 = __webpack_require__(69);
  
  var _isFunction3 = _interopRequireDefault(_isFunction2);
  
  var _extends = _assign2.default || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }return target;
  };
  
  var _createClass = function () {
    function defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;(0, _defineProperty2.default)(target, descriptor.key, descriptor);
      }
    }return function (Constructor, protoProps, staticProps) {
      if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
    };
  }();
  
  var _class, _class2, _temp; /**
                               * @fileOverview Curve
                               */
  
  var _react = __webpack_require__(11);
  
  var _react2 = _interopRequireDefault(_react);
  
  var _d3Shape = __webpack_require__(79);
  
  var _PureRender = __webpack_require__(72);
  
  var _PureRender2 = _interopRequireDefault(_PureRender);
  
  var _classnames = __webpack_require__(46);
  
  var _classnames2 = _interopRequireDefault(_classnames);
  
  var _ReactUtils = __webpack_require__(64);
  
  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
  }
  
  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }
  
  function _possibleConstructorReturn(self, call) {
    if (!self) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }return call && ((typeof call === 'undefined' ? 'undefined' : (0, _typeof3.default)(call)) === "object" || typeof call === "function") ? call : self;
  }
  
  function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === 'undefined' ? 'undefined' : (0, _typeof3.default)(superClass)));
    }subClass.prototype = (0, _create2.default)(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) _setPrototypeOf2.default ? (0, _setPrototypeOf2.default)(subClass, superClass) : subClass.__proto__ = superClass;
  }
  
  var CURVE_FACTORIES = {
    curveBasisClosed: _d3Shape.curveBasisClosed, curveBasisOpen: _d3Shape.curveBasisOpen, curveBasis: _d3Shape.curveBasis, curveLinearClosed: _d3Shape.curveLinearClosed, curveLinear: _d3Shape.curveLinear,
    curveMonotoneX: _d3Shape.curveMonotoneX, curveMonotoneY: _d3Shape.curveMonotoneY, curveNatural: _d3Shape.curveNatural, curveStep: _d3Shape.curveStep, curveStepAfter: _d3Shape.curveStepAfter,
    curveStepBefore: _d3Shape.curveStepBefore
  };
  
  var defined = function defined(p) {
    return p.x === +p.x && p.y === +p.y;
  };
  var getX = function getX(p) {
    return p.x;
  };
  var getY = function getY(p) {
    return p.y;
  };
  
  var getCurveFactory = function getCurveFactory(type, layout) {
    if ((0, _isFunction3.default)(type)) {
      return type;
    }
  
    var name = 'curve' + type.slice(0, 1).toUpperCase() + type.slice(1);
  
    if (name === 'curveMonotone' && layout) {
      return CURVE_FACTORIES['' + name + (layout === 'vertical' ? 'Y' : 'X')];
    }
    return CURVE_FACTORIES[name] || _d3Shape.curveLinear;
  };
  
  var Curve = (0, _PureRender2.default)(_class = (_temp = _class2 = function (_Component) {
    _inherits(Curve, _Component);
  
    function Curve() {
      _classCallCheck(this, Curve);
  
      return _possibleConstructorReturn(this, (Curve.__proto__ || (0, _getPrototypeOf2.default)(Curve)).apply(this, arguments));
    }
  
    _createClass(Curve, [{
      key: 'getPath',
  
      /**
       * Calculate the path of curve
       * @return {String} path
       */
      value: function getPath() {
        var _props = this.props;
        var type = _props.type;
        var points = _props.points;
        var baseLine = _props.baseLine;
        var layout = _props.layout;
        var connectNulls = _props.connectNulls;
  
        var curveFactory = getCurveFactory(type, layout);
        var formatPoints = connectNulls ? points.filter(function (entry) {
          return defined(entry);
        }) : points;
        var lineFunction = void 0;
  
        if ((0, _isArray3.default)(baseLine)) {
          var areaPoints = formatPoints.map(function (entry, index) {
            return _extends({}, entry, { base: baseLine[index] });
          });
          if (layout === 'vertical') {
            lineFunction = (0, _d3Shape.area)().y(getY).x1(getX).x0(function (d) {
              return d.base.x;
            });
          } else {
            lineFunction = (0, _d3Shape.area)().x(getX).y1(getY).y0(function (d) {
              return d.base.y;
            });
          }
          lineFunction.defined(defined).curve(curveFactory);
  
          return lineFunction(areaPoints);
        } else if (layout === 'vertical' && (0, _isNumber3.default)(baseLine)) {
          lineFunction = (0, _d3Shape.area)().y(getY).x1(getX).x0(baseLine);
        } else if ((0, _isNumber3.default)(baseLine)) {
          lineFunction = (0, _d3Shape.area)().x(getX).y1(getY).y0(baseLine);
        } else {
          lineFunction = (0, _d3Shape.line)().x(getX).y(getY);
        }
  
        lineFunction.defined(defined).curve(curveFactory);
  
        return lineFunction(formatPoints);
      }
    }, {
      key: 'render',
      value: function render() {
        var _props2 = this.props;
        var className = _props2.className;
        var points = _props2.points;
        var type = _props2.type;
  
        if (!points || !points.length) {
          return null;
        }
  
        return _react2.default.createElement('path', _extends({}, (0, _ReactUtils.getPresentationAttributes)(this.props), (0, _ReactUtils.filterEventAttributes)(this.props), {
          className: (0, _classnames2.default)('recharts-curve', className),
          d: this.getPath()
        }));
      }
    }]);
  
    return Curve;
  }(_react.Component), _class2.displayName = 'Curve', _class2.propTypes = _extends({}, _ReactUtils.PRESENTATION_ATTRIBUTES, {
    className: _react.PropTypes.string,
    type: _react.PropTypes.oneOfType([_react.PropTypes.oneOf(['basis', 'basisClosed', 'basisOpen', 'linear', 'linearClosed', 'natural', 'monotoneX', 'monotoneY', 'monotone', 'step', 'stepBefore', 'stepAfter']), _react.PropTypes.func]),
    layout: _react.PropTypes.oneOf(['horizontal', 'vertical']),
    baseLine: _react.PropTypes.oneOfType([_react.PropTypes.number, _react.PropTypes.array]),
    points: _react.PropTypes.arrayOf(_react.PropTypes.object),
    connectNulls: _react.PropTypes.bool
  }), _class2.defaultProps = {
    type: 'linear',
    stroke: '#000',
    fill: 'none',
    strokeWidth: 1,
    strokeDasharray: 'none',
    points: [],
    connectNulls: false
  }, _temp)) || _class;
  
  exports.default = Curve;

/***/ }),
/* 91 */
/***/ (function(module, exports, __webpack_require__) {

  'use strict';
  
  var _getPrototypeOf = __webpack_require__(29);
  
  var _getPrototypeOf2 = _interopRequireDefault2(_getPrototypeOf);
  
  var _setPrototypeOf = __webpack_require__(59);
  
  var _setPrototypeOf2 = _interopRequireDefault2(_setPrototypeOf);
  
  var _create = __webpack_require__(60);
  
  var _create2 = _interopRequireDefault2(_create);
  
  var _typeof2 = __webpack_require__(61);
  
  var _typeof3 = _interopRequireDefault2(_typeof2);
  
  var _defineProperty = __webpack_require__(62);
  
  var _defineProperty2 = _interopRequireDefault2(_defineProperty);
  
  var _assign = __webpack_require__(23);
  
  var _assign4 = _interopRequireDefault2(_assign);
  
  function _interopRequireDefault2(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  
  var _assign2 = __webpack_require__(92);
  
  var _assign3 = _interopRequireDefault(_assign2);
  
  var _extends = _assign4.default || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }return target;
  };
  
  var _createClass = function () {
    function defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;(0, _defineProperty2.default)(target, descriptor.key, descriptor);
      }
    }return function (Constructor, protoProps, staticProps) {
      if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
    };
  }();
  
  var _class, _temp2;
  
  var _react = __webpack_require__(11);
  
  var _react2 = _interopRequireDefault(_react);
  
  var _reduceCssCalc = __webpack_require__(93);
  
  var _reduceCssCalc2 = _interopRequireDefault(_reduceCssCalc);
  
  var _classnames = __webpack_require__(46);
  
  var _classnames2 = _interopRequireDefault(_classnames);
  
  var _ReactUtils = __webpack_require__(64);
  
  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
  }
  
  function _objectWithoutProperties(obj, keys) {
    var target = {};for (var i in obj) {
      if (keys.indexOf(i) >= 0) continue;if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;target[i] = obj[i];
    }return target;
  }
  
  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }
  
  function _possibleConstructorReturn(self, call) {
    if (!self) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }return call && ((typeof call === 'undefined' ? 'undefined' : (0, _typeof3.default)(call)) === "object" || typeof call === "function") ? call : self;
  }
  
  function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === 'undefined' ? 'undefined' : (0, _typeof3.default)(superClass)));
    }subClass.prototype = (0, _create2.default)(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) _setPrototypeOf2.default ? (0, _setPrototypeOf2.default)(subClass, superClass) : subClass.__proto__ = superClass;
  }
  
  var Text = (_temp2 = _class = function (_Component) {
    _inherits(Text, _Component);
  
    function Text() {
      var _ref;
  
      var _temp, _this, _ret;
  
      _classCallCheck(this, Text);
  
      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }
  
      return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Text.__proto__ || (0, _getPrototypeOf2.default)(Text)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
        wordsByLines: []
      }, _temp), _possibleConstructorReturn(_this, _ret);
    }
  
    _createClass(Text, [{
      key: 'componentWillMount',
      value: function componentWillMount() {
        this.updateWordsByLines(this.props, true);
      }
    }, {
      key: 'componentWillReceiveProps',
      value: function componentWillReceiveProps(nextProps) {
        var calculateWordWidths = this.props.children !== nextProps.children || this.props.style !== nextProps.style;
        this.updateWordsByLines(nextProps, calculateWordWidths);
      }
    }, {
      key: 'updateWordsByLines',
      value: function updateWordsByLines(props, calculateWordWidths) {
        // Only perform calculations if using features that require them (multiline, scaleToFit)
        if (props.width || props.scaleToFit) {
          if (calculateWordWidths) {
            var _calculateWordWidths = this.calculateWordWidths(props);
  
            var wordsWithComputedWidth = _calculateWordWidths.wordsWithComputedWidth;
            var spaceWidth = _calculateWordWidths.spaceWidth;
  
            this.wordsWithComputedWidth = wordsWithComputedWidth;
            this.spaceWidth = spaceWidth;
          }
  
          var wordsByLines = this.calculateWordsByLines(this.wordsWithComputedWidth, this.spaceWidth, props.width);
          this.setState({ wordsByLines: wordsByLines });
        } else {
          var words = props.children ? props.children.toString().split(/\s+/) : [];
          this.setState({ wordsByLines: [{ words: words }] });
        }
      }
    }, {
      key: 'calculateWordWidths',
      value: function calculateWordWidths(props) {
        // Calculate length of each word to be used to determine number of words per line
        var svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
        var text = document.createElementNS('http://www.w3.org/2000/svg', 'text');
        (0, _assign3.default)(text.style, props.style);
        svg.appendChild(text);
        document.body.appendChild(svg);
  
        var words = props.children ? props.children.toString().split(/\s+/) : [];
        var wordsWithComputedWidth = words.map(function (word) {
          text.textContent = word;
          return { word: word, width: text.getComputedTextLength() };
        });
  
        text.textContent = ' '; // Unicode space
        var spaceWidth = text.getComputedTextLength();
  
        document.body.removeChild(svg);
  
        return { wordsWithComputedWidth: wordsWithComputedWidth, spaceWidth: spaceWidth };
      }
    }, {
      key: 'calculateWordsByLines',
      value: function calculateWordsByLines(wordsWithComputedWidth, spaceWidth, lineWidth) {
        var scaleToFit = this.props.scaleToFit;
  
        return wordsWithComputedWidth.reduce(function (result, _ref2) {
          var word = _ref2.word;
          var width = _ref2.width;
  
          var currentLine = result[result.length - 1];
  
          if (currentLine && (lineWidth == null || scaleToFit || currentLine.width + width + spaceWidth < lineWidth)) {
            // Word can be added to an existing line
            currentLine.words.push(word);
            currentLine.width += width + spaceWidth;
          } else {
            // Add first word to line or word is too long to scaleToFit on existing line
            var newLine = { words: [word], width: width };
            result.push(newLine);
          }
  
          return result;
        }, []);
      }
    }, {
      key: 'render',
      value: function render() {
        var _props = this.props;
        var textAnchor = _props.textAnchor;
        var verticalAnchor = _props.verticalAnchor;
        var scaleToFit = _props.scaleToFit;
        var angle = _props.angle;
        var lineHeight = _props.lineHeight;
        var capHeight = _props.capHeight;
        var className = _props.className;
  
        var textProps = _objectWithoutProperties(_props, ['textAnchor', 'verticalAnchor', 'scaleToFit', 'angle', 'lineHeight', 'capHeight', 'className']);
  
        var wordsByLines = this.state.wordsByLines;
        var x = textProps.x;
        var y = textProps.y;
  
        var startDy = void 0;
        switch (verticalAnchor) {
          case 'start':
            startDy = (0, _reduceCssCalc2.default)('calc(' + capHeight + ')');
            break;
          case 'middle':
            startDy = (0, _reduceCssCalc2.default)('calc(' + (wordsByLines.length - 1) / 2 + ' * -' + lineHeight + ' + (' + capHeight + ' / 2))');
            break;
          default:
            startDy = (0, _reduceCssCalc2.default)('calc(' + (wordsByLines.length - 1) + ' * -' + lineHeight + ')');
            break;
        }
  
        var transforms = [];
        if (scaleToFit) {
          var lineWidth = wordsByLines[0].width;
          transforms.push('scale(' + this.props.width / lineWidth + ')');
        }
        if (angle) {
          transforms.push('rotate(' + angle + ', ' + x + ', ' + y + ')');
        }
        if (transforms.length) {
          textProps.transform = transforms.join(' ');
        }
  
        return _react2.default.createElement('text', _extends({}, (0, _ReactUtils.getPresentationAttributes)(textProps), {
          className: (0, _classnames2.default)('recharts-text', className),
          textAnchor: textAnchor
        }), wordsByLines.map(function (line, index) {
          return _react2.default.createElement('tspan', { x: x, dy: index === 0 ? startDy : lineHeight, key: index }, line.words.join(' '));
        }));
      }
    }]);
  
    return Text;
  }(_react.Component), _class.propTypes = _extends({}, _ReactUtils.PRESENTATION_ATTRIBUTES, {
    scaleToFit: _react.PropTypes.bool,
    angle: _react.PropTypes.number,
    textAnchor: _react.PropTypes.oneOf(['start', 'middle', 'end', 'inherit']),
    verticalAnchor: _react.PropTypes.oneOf(['start', 'middle', 'end'])
  }), _class.defaultProps = {
    x: 0,
    y: 0,
    lineHeight: '1em',
    capHeight: '0.71em', // Magic number from d3
    scaleToFit: false,
    textAnchor: 'start',
    verticalAnchor: 'end' }, _temp2);
  exports.default = Text;

/***/ }),
/* 92 */
/***/ (function(module, exports) {

  module.exports = require("lodash/assign");

/***/ }),
/* 93 */
/***/ (function(module, exports) {

  module.exports = require("reduce-css-calc");

/***/ }),
/* 94 */
/***/ (function(module, exports, __webpack_require__) {

  'use strict';
  
  var _setPrototypeOf = __webpack_require__(59);
  
  var _setPrototypeOf2 = _interopRequireDefault2(_setPrototypeOf);
  
  var _create = __webpack_require__(60);
  
  var _create2 = _interopRequireDefault2(_create);
  
  var _typeof2 = __webpack_require__(61);
  
  var _typeof3 = _interopRequireDefault2(_typeof2);
  
  var _getPrototypeOf = __webpack_require__(29);
  
  var _getPrototypeOf2 = _interopRequireDefault2(_getPrototypeOf);
  
  var _defineProperty = __webpack_require__(62);
  
  var _defineProperty2 = _interopRequireDefault2(_defineProperty);
  
  var _assign = __webpack_require__(23);
  
  var _assign2 = _interopRequireDefault2(_assign);
  
  function _interopRequireDefault2(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  
  var _extends = _assign2.default || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }return target;
  };
  
  var _createClass = function () {
    function defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;(0, _defineProperty2.default)(target, descriptor.key, descriptor);
      }
    }return function (Constructor, protoProps, staticProps) {
      if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
    };
  }();
  
  exports.default = function (WrappedComponent) {
    var _class, _temp2;
  
    var AnimationDecorator = (_temp2 = _class = function (_Component) {
      _inherits(AnimationDecorator, _Component);
  
      function AnimationDecorator() {
        var _ref;
  
        var _temp, _this, _ret;
  
        _classCallCheck(this, AnimationDecorator);
  
        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }
  
        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = AnimationDecorator.__proto__ || (0, _getPrototypeOf2.default)(AnimationDecorator)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
          animationId: 0
        }, _temp), _possibleConstructorReturn(_this, _ret);
      }
  
      _createClass(AnimationDecorator, [{
        key: 'componentWillReceiveProps',
        value: function componentWillReceiveProps(nextProps) {
          var animationId = this.state.animationId;
  
          if (this.props.data !== nextProps.data) {
            this.setState({
              animationId: animationId + 1
            });
          }
        }
      }, {
        key: 'render',
        value: function render() {
          return _react2.default.createElement(WrappedComponent, _extends({}, this.props, { animationId: this.state.animationId }));
        }
      }]);
  
      return AnimationDecorator;
    }(_react.Component), _class.displayName = 'AnimationDecorator(' + (0, _ReactUtils.getDisplayName)(WrappedComponent) + ')', _class.propTypes = _extends({}, WrappedComponent.propTypes, {
      data: _react.PropTypes.array
    }), _class.WrappedComponent = WrappedComponent, _class.defaultProps = WrappedComponent.defaultProps, _temp2);
  
    return AnimationDecorator;
  };
  
  var _react = __webpack_require__(11);
  
  var _react2 = _interopRequireDefault(_react);
  
  var _ReactUtils = __webpack_require__(64);
  
  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
  }
  
  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }
  
  function _possibleConstructorReturn(self, call) {
    if (!self) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }return call && ((typeof call === "undefined" ? "undefined" : (0, _typeof3.default)(call)) === "object" || typeof call === "function") ? call : self;
  }
  
  function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : (0, _typeof3.default)(superClass)));
    }subClass.prototype = (0, _create2.default)(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) _setPrototypeOf2.default ? (0, _setPrototypeOf2.default)(subClass, superClass) : subClass.__proto__ = superClass;
  }

/***/ }),
/* 95 */
/***/ (function(module, exports, __webpack_require__) {

  'use strict';
  
  var _getPrototypeOf = __webpack_require__(29);
  
  var _getPrototypeOf2 = _interopRequireDefault2(_getPrototypeOf);
  
  var _setPrototypeOf = __webpack_require__(59);
  
  var _setPrototypeOf2 = _interopRequireDefault2(_setPrototypeOf);
  
  var _create = __webpack_require__(60);
  
  var _create2 = _interopRequireDefault2(_create);
  
  var _typeof2 = __webpack_require__(61);
  
  var _typeof3 = _interopRequireDefault2(_typeof2);
  
  var _defineProperty = __webpack_require__(62);
  
  var _defineProperty2 = _interopRequireDefault2(_defineProperty);
  
  function _interopRequireDefault2(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  
  var _createClass = function () {
    function defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;(0, _defineProperty2.default)(target, descriptor.key, descriptor);
      }
    }return function (Constructor, protoProps, staticProps) {
      if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
    };
  }();
  
  var _class, _class2, _temp; /**
                               * @fileOverview Cross
                               */
  
  var _react = __webpack_require__(11);
  
  var _react2 = _interopRequireDefault(_react);
  
  var _PureRender = __webpack_require__(72);
  
  var _PureRender2 = _interopRequireDefault(_PureRender);
  
  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
  }
  
  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }
  
  function _possibleConstructorReturn(self, call) {
    if (!self) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }return call && ((typeof call === "undefined" ? "undefined" : (0, _typeof3.default)(call)) === "object" || typeof call === "function") ? call : self;
  }
  
  function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : (0, _typeof3.default)(superClass)));
    }subClass.prototype = (0, _create2.default)(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) _setPrototypeOf2.default ? (0, _setPrototypeOf2.default)(subClass, superClass) : subClass.__proto__ = superClass;
  }
  
  var Cell = (0, _PureRender2.default)(_class = (_temp = _class2 = function (_Component) {
    _inherits(Cell, _Component);
  
    function Cell() {
      _classCallCheck(this, Cell);
  
      return _possibleConstructorReturn(this, (Cell.__proto__ || (0, _getPrototypeOf2.default)(Cell)).apply(this, arguments));
    }
  
    _createClass(Cell, [{
      key: 'render',
      value: function render() {
        return null;
      }
    }]);
  
    return Cell;
  }(_react.Component), _class2.displayName = 'Cell', _temp)) || _class;
  
  exports.default = Cell;

/***/ }),
/* 96 */
/***/ (function(module, exports, __webpack_require__) {

  'use strict';
  
  var _keys = __webpack_require__(65);
  
  var _keys2 = _interopRequireDefault2(_keys);
  
  function _interopRequireDefault2(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.hasDuplicate = exports.getAnyElementOfObject = exports.getBandSizeOfScale = exports.validateCoordinateInRange = exports.parseSpecifiedDomain = exports.getPercentValue = exports.isPercent = undefined;
  
  var _isArray2 = __webpack_require__(70);
  
  var _isArray3 = _interopRequireDefault(_isArray2);
  
  var _isNumber2 = __webpack_require__(67);
  
  var _isNumber3 = _interopRequireDefault(_isNumber2);
  
  var _isString2 = __webpack_require__(66);
  
  var _isString3 = _interopRequireDefault(_isString2);
  
  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
  }
  
  var isPercent = exports.isPercent = function isPercent(value) {
    return (0, _isString3.default)(value) && value.indexOf('%') === value.length - 1;
  };
  /**
   * Get percent value of a total value
   * @param {Number|String} percent A percent
   * @param {Number} totalValue     Total value
   * @param {NUmber} defaultValue   The value returned when percent is undefined or invalid
   * @param {Boolean} validate      If set to be true, the result will be validated
   * @return {Number} value
   */
  var getPercentValue = exports.getPercentValue = function getPercentValue(percent, totalValue) {
    var defaultValue = arguments.length <= 2 || arguments[2] === undefined ? 0 : arguments[2];
    var validate = arguments.length <= 3 || arguments[3] === undefined ? false : arguments[3];
  
    if (!(0, _isNumber3.default)(percent) && !(0, _isString3.default)(percent)) {
      return defaultValue;
    }
  
    var value = void 0;
  
    if (isPercent(percent)) {
      var index = percent.indexOf('%');
      value = totalValue * parseFloat(percent.slice(0, index)) / 100;
    } else {
      value = +percent;
    }
  
    if (isNaN(value)) {
      value = defaultValue;
    }
  
    if (validate && value > totalValue) {
      value = totalValue;
    }
  
    return value;
  };
  
  var MIN_VALUE_REG = /^dataMin[\s]*-[\s]*([\d]+)$/;
  var MAX_VALUE_REG = /^dataMax[\s]*\+[\s]*([\d]+)$/;
  
  var parseSpecifiedDomain = exports.parseSpecifiedDomain = function parseSpecifiedDomain(specifiedDomain, dataDomain, allowDataOverflow) {
    if (!(0, _isArray3.default)(specifiedDomain)) {
      return dataDomain;
    }
  
    var domain = [];
  
    if ((0, _isNumber3.default)(specifiedDomain[0])) {
      domain[0] = allowDataOverflow ? specifiedDomain[0] : Math.min(specifiedDomain[0], dataDomain[0]);
    } else if (MIN_VALUE_REG.test(specifiedDomain[0])) {
      var value = +MIN_VALUE_REG.exec(specifiedDomain[0])[1];
  
      domain[0] = dataDomain[0] - value;
    } else {
      domain[0] = dataDomain[0];
    }
  
    if ((0, _isNumber3.default)(specifiedDomain[1])) {
      domain[1] = allowDataOverflow ? specifiedDomain[1] : Math.max(specifiedDomain[1], dataDomain[1]);
    } else if (MAX_VALUE_REG.test(specifiedDomain[1])) {
      var _value = +MAX_VALUE_REG.exec(specifiedDomain[1])[1];
  
      domain[1] = dataDomain[1] + _value;
    } else {
      domain[1] = dataDomain[1];
    }
  
    return domain;
  };
  
  var validateCoordinateInRange = exports.validateCoordinateInRange = function validateCoordinateInRange(coordinate, scale) {
    if (!scale) {
      return false;
    }
  
    var range = scale.range();
    var first = range[0];
    var last = range[range.length - 1];
    var isValidate = first <= last ? coordinate >= first && coordinate <= last : coordinate >= last && coordinate <= first;
  
    return isValidate;
  };
  
  /**
   * Calculate the size between two category
   * @param  {Function} scale Scale function
   * @return {Number} Size
   */
  var getBandSizeOfScale = exports.getBandSizeOfScale = function getBandSizeOfScale(scale) {
    if (scale && scale.bandwidth) {
      return scale.bandwidth();
    }
    return 0;
  };
  
  var getAnyElementOfObject = exports.getAnyElementOfObject = function getAnyElementOfObject(obj) {
    if (!obj) {
      return null;
    }
  
    var keys = (0, _keys2.default)(obj);
  
    if (keys && keys.length) {
      return obj[keys[0]];
    }
  
    return null;
  };
  
  var hasDuplicate = exports.hasDuplicate = function hasDuplicate(ary) {
    if (!(0, _isArray3.default)(ary)) {
      return false;
    }
  
    var len = ary.length;
    var cache = {};
  
    for (var i = 0; i < len; i++) {
      if (!cache[ary[i]]) {
        cache[ary[i]] = true;
      } else {
        return true;
      }
    }
  
    return false;
  };

/***/ }),
/* 97 */
/***/ (function(module, exports, __webpack_require__) {

  'use strict';
  
  var _assign = __webpack_require__(23);
  
  var _assign2 = _interopRequireDefault2(_assign);
  
  function _interopRequireDefault2(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  
  var _extends = _assign2.default || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }return target;
  }; /**
      * @fileOverview Wrapper component to make charts adapt to the size of parent * DOM
      */
  
  var _react = __webpack_require__(11);
  
  var _react2 = _interopRequireDefault(_react);
  
  var _reactContainerDimensions = __webpack_require__(98);
  
  var _reactContainerDimensions2 = _interopRequireDefault(_reactContainerDimensions);
  
  var _PureRender = __webpack_require__(72);
  
  var _PureRender2 = _interopRequireDefault(_PureRender);
  
  var _DataUtils = __webpack_require__(96);
  
  var _LogUtils = __webpack_require__(99);
  
  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
  }
  
  var render = function render(_ref) {
    var aspect = _ref.aspect;
    var width = _ref.width;
    var height = _ref.height;
    var minWidth = _ref.minWidth;
    var minHeight = _ref.minHeight;
    var container = _ref.container;
    var children = _ref.children;
  
    (0, _LogUtils.warn)((0, _DataUtils.isPercent)(width) || (0, _DataUtils.isPercent)(height), 'The width(%s) and height(%s) are both fixed numbers,\n     maybe you don\'t need to use a ResponsiveContainer.', width, height);
  
    (0, _LogUtils.warn)(!aspect || aspect > 0, 'The aspect(%s) must be greater than zero.', aspect);
  
    var calculatedWidth = (0, _DataUtils.isPercent)(width) ? container.width : width;
    var calculatedHeight = (0, _DataUtils.isPercent)(height) ? container.height : height;
  
    if (aspect && aspect > 0) {
      // Preserve the desired aspect ratio
      calculatedHeight = calculatedWidth / aspect;
    }
  
    (0, _LogUtils.warn)(calculatedWidth > 0 && calculatedHeight > 0, 'The width(%s) and height(%s) of chart should be greater than 0,\n     please check the style of container, or the props width(%s) and height(%s),\n     or add a minWidth(%s) or minHeight(%s) or use aspect(%s) to control the\n     height and width.', calculatedWidth, calculatedHeight, width, height, minWidth, minHeight, aspect);
  
    return _react2.default.cloneElement(children, {
      width: calculatedWidth,
      height: calculatedHeight
    });
  };
  
  var ResponsiveContainer = function ResponsiveContainer(props) {
    var minWidth = props.minWidth;
    var minHeight = props.minHeight;
    var width = props.width;
    var height = props.height;
  
    var style = { width: width, height: height, minWidth: minWidth, minHeight: minHeight };
    return _react2.default.createElement('div', { className: 'recharts-responsive-container', style: style }, _react2.default.createElement(_reactContainerDimensions2.default, null, function (container) {
      return render(_extends({
        container: container
      }, props));
    }));
  };
  
  ResponsiveContainer.displayName = 'ResponsiveContainer';
  ResponsiveContainer.propTypes = {
    aspect: _react.PropTypes.number,
    width: _react.PropTypes.oneOfType([_react.PropTypes.string, _react.PropTypes.number]),
    height: _react.PropTypes.oneOfType([_react.PropTypes.string, _react.PropTypes.number]),
    minHeight: _react.PropTypes.number,
    minWidth: _react.PropTypes.number,
    children: _react.PropTypes.node.isRequired
  };
  
  ResponsiveContainer.defaultProps = {
    width: '100%',
    height: '100%'
  };
  
  exports.default = ResponsiveContainer;

/***/ }),
/* 98 */
/***/ (function(module, exports) {

  module.exports = require("react-container-dimensions");

/***/ }),
/* 99 */
/***/ (function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  /* eslint no-console: 0 */
  var isDev = ("development") !== 'production';
  
  var warn = exports.warn = function warn(condition, format, a, b, c, d, e, f) {
    if (isDev && typeof console !== 'undefined' && console.warn) {
      if (format === undefined) {
        console.warn('LogUtils requires an error message argument');
      }
  
      if (!condition) {
        if (format === undefined) {
          console.warn('Minified exception occurred; use the non-minified dev environment ' + 'for the full error message and additional helpful warnings.');
        } else {
          (function () {
            var args = [a, b, c, d, e, f];
            var argIndex = 0;
  
            console.warn(format.replace(/%s/g, function () {
              return args[argIndex++];
            }));
          })();
        }
      }
    }
  };

/***/ }),
/* 100 */
/***/ (function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.ComposedChart = exports.RadialBarChart = exports.AreaChart = exports.ScatterChart = exports.RadarChart = exports.Sankey = exports.Treemap = exports.PieChart = exports.BarChart = exports.LineChart = exports.ZAxis = exports.YAxis = exports.XAxis = exports.Scatter = exports.Bar = exports.Area = exports.Line = exports.CartesianGrid = exports.CartesianAxis = exports.ReferenceArea = exports.ReferenceDot = exports.ReferenceLine = exports.Brush = exports.RadialBar = exports.Radar = exports.Pie = exports.PolarAngleAxis = exports.PolarRadiusAxis = exports.PolarGrid = exports.Symbols = exports.Cross = exports.Dot = exports.Polygon = exports.Rectangle = exports.Curve = exports.Sector = exports.Text = exports.Cell = exports.ResponsiveContainer = exports.Tooltip = exports.Legend = exports.Layer = exports.Surface = undefined;
  
  __webpack_require__(101);
  
  __webpack_require__(102);
  
  var _Surface2 = __webpack_require__(63);
  
  var _Surface3 = _interopRequireDefault(_Surface2);
  
  var _Layer2 = __webpack_require__(87);
  
  var _Layer3 = _interopRequireDefault(_Layer2);
  
  var _Legend2 = __webpack_require__(71);
  
  var _Legend3 = _interopRequireDefault(_Legend2);
  
  var _Tooltip2 = __webpack_require__(82);
  
  var _Tooltip3 = _interopRequireDefault(_Tooltip2);
  
  var _ResponsiveContainer2 = __webpack_require__(97);
  
  var _ResponsiveContainer3 = _interopRequireDefault(_ResponsiveContainer2);
  
  var _Cell2 = __webpack_require__(95);
  
  var _Cell3 = _interopRequireDefault(_Cell2);
  
  var _Text2 = __webpack_require__(91);
  
  var _Text3 = _interopRequireDefault(_Text2);
  
  var _Sector2 = __webpack_require__(88);
  
  var _Sector3 = _interopRequireDefault(_Sector2);
  
  var _Curve2 = __webpack_require__(90);
  
  var _Curve3 = _interopRequireDefault(_Curve2);
  
  var _Rectangle2 = __webpack_require__(103);
  
  var _Rectangle3 = _interopRequireDefault(_Rectangle2);
  
  var _Polygon2 = __webpack_require__(105);
  
  var _Polygon3 = _interopRequireDefault(_Polygon2);
  
  var _Dot2 = __webpack_require__(106);
  
  var _Dot3 = _interopRequireDefault(_Dot2);
  
  var _Cross2 = __webpack_require__(107);
  
  var _Cross3 = _interopRequireDefault(_Cross2);
  
  var _Symbols2 = __webpack_require__(78);
  
  var _Symbols3 = _interopRequireDefault(_Symbols2);
  
  var _PolarGrid2 = __webpack_require__(108);
  
  var _PolarGrid3 = _interopRequireDefault(_PolarGrid2);
  
  var _PolarRadiusAxis2 = __webpack_require__(109);
  
  var _PolarRadiusAxis3 = _interopRequireDefault(_PolarRadiusAxis2);
  
  var _PolarAngleAxis2 = __webpack_require__(111);
  
  var _PolarAngleAxis3 = _interopRequireDefault(_PolarAngleAxis2);
  
  var _Pie2 = __webpack_require__(85);
  
  var _Pie3 = _interopRequireDefault(_Pie2);
  
  var _Radar2 = __webpack_require__(112);
  
  var _Radar3 = _interopRequireDefault(_Radar2);
  
  var _RadialBar2 = __webpack_require__(113);
  
  var _RadialBar3 = _interopRequireDefault(_RadialBar2);
  
  var _Brush2 = __webpack_require__(115);
  
  var _Brush3 = _interopRequireDefault(_Brush2);
  
  var _ReferenceLine2 = __webpack_require__(118);
  
  var _ReferenceLine3 = _interopRequireDefault(_ReferenceLine2);
  
  var _ReferenceDot2 = __webpack_require__(120);
  
  var _ReferenceDot3 = _interopRequireDefault(_ReferenceDot2);
  
  var _ReferenceArea2 = __webpack_require__(121);
  
  var _ReferenceArea3 = _interopRequireDefault(_ReferenceArea2);
  
  var _CartesianAxis2 = __webpack_require__(122);
  
  var _CartesianAxis3 = _interopRequireDefault(_CartesianAxis2);
  
  var _CartesianGrid2 = __webpack_require__(123);
  
  var _CartesianGrid3 = _interopRequireDefault(_CartesianGrid2);
  
  var _Line2 = __webpack_require__(124);
  
  var _Line3 = _interopRequireDefault(_Line2);
  
  var _Area2 = __webpack_require__(125);
  
  var _Area3 = _interopRequireDefault(_Area2);
  
  var _Bar2 = __webpack_require__(126);
  
  var _Bar3 = _interopRequireDefault(_Bar2);
  
  var _Scatter2 = __webpack_require__(127);
  
  var _Scatter3 = _interopRequireDefault(_Scatter2);
  
  var _XAxis2 = __webpack_require__(128);
  
  var _XAxis3 = _interopRequireDefault(_XAxis2);
  
  var _YAxis2 = __webpack_require__(129);
  
  var _YAxis3 = _interopRequireDefault(_YAxis2);
  
  var _ZAxis2 = __webpack_require__(130);
  
  var _ZAxis3 = _interopRequireDefault(_ZAxis2);
  
  var _LineChart2 = __webpack_require__(131);
  
  var _LineChart3 = _interopRequireDefault(_LineChart2);
  
  var _BarChart2 = __webpack_require__(138);
  
  var _BarChart3 = _interopRequireDefault(_BarChart2);
  
  var _PieChart2 = __webpack_require__(58);
  
  var _PieChart3 = _interopRequireDefault(_PieChart2);
  
  var _Treemap2 = __webpack_require__(139);
  
  var _Treemap3 = _interopRequireDefault(_Treemap2);
  
  var _Sankey2 = __webpack_require__(140);
  
  var _Sankey3 = _interopRequireDefault(_Sankey2);
  
  var _RadarChart2 = __webpack_require__(143);
  
  var _RadarChart3 = _interopRequireDefault(_RadarChart2);
  
  var _ScatterChart2 = __webpack_require__(144);
  
  var _ScatterChart3 = _interopRequireDefault(_ScatterChart2);
  
  var _AreaChart2 = __webpack_require__(145);
  
  var _AreaChart3 = _interopRequireDefault(_AreaChart2);
  
  var _RadialBarChart2 = __webpack_require__(146);
  
  var _RadialBarChart3 = _interopRequireDefault(_RadialBarChart2);
  
  var _ComposedChart2 = __webpack_require__(147);
  
  var _ComposedChart3 = _interopRequireDefault(_ComposedChart2);
  
  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
  }
  
  exports.Surface = _Surface3.default;
  exports.Layer = _Layer3.default;
  exports.Legend = _Legend3.default;
  exports.Tooltip = _Tooltip3.default;
  exports.ResponsiveContainer = _ResponsiveContainer3.default;
  exports.Cell = _Cell3.default;
  exports.Text = _Text3.default;
  exports.Sector = _Sector3.default;
  exports.Curve = _Curve3.default;
  exports.Rectangle = _Rectangle3.default;
  exports.Polygon = _Polygon3.default;
  exports.Dot = _Dot3.default;
  exports.Cross = _Cross3.default;
  exports.Symbols = _Symbols3.default;
  exports.PolarGrid = _PolarGrid3.default;
  exports.PolarRadiusAxis = _PolarRadiusAxis3.default;
  exports.PolarAngleAxis = _PolarAngleAxis3.default;
  exports.Pie = _Pie3.default;
  exports.Radar = _Radar3.default;
  exports.RadialBar = _RadialBar3.default;
  exports.Brush = _Brush3.default;
  exports.ReferenceLine = _ReferenceLine3.default;
  exports.ReferenceDot = _ReferenceDot3.default;
  exports.ReferenceArea = _ReferenceArea3.default;
  exports.CartesianAxis = _CartesianAxis3.default;
  exports.CartesianGrid = _CartesianGrid3.default;
  exports.Line = _Line3.default;
  exports.Area = _Area3.default;
  exports.Bar = _Bar3.default;
  exports.Scatter = _Scatter3.default;
  exports.XAxis = _XAxis3.default;
  exports.YAxis = _YAxis3.default;
  exports.ZAxis = _ZAxis3.default;
  exports.LineChart = _LineChart3.default;
  exports.BarChart = _BarChart3.default;
  exports.PieChart = _PieChart3.default;
  exports.Treemap = _Treemap3.default;
  exports.Sankey = _Sankey3.default;
  exports.RadarChart = _RadarChart3.default;
  exports.ScatterChart = _ScatterChart3.default;
  exports.AreaChart = _AreaChart3.default;
  exports.RadialBarChart = _RadialBarChart3.default;
  exports.ComposedChart = _ComposedChart3.default;

/***/ }),
/* 101 */
/***/ (function(module, exports, __webpack_require__) {

  "use strict";
  
  /* eslint no-proto: 0 */
  
  var _getPrototypeOf = __webpack_require__(29);
  
  var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);
  
  var _setPrototypeOf = __webpack_require__(59);
  
  var _setPrototypeOf2 = _interopRequireDefault(_setPrototypeOf);
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  var testObject = {};
  
  if (!(_setPrototypeOf2.default || testObject.__proto__)) {
    (function () {
      var nativeGetPrototypeOf = _getPrototypeOf2.default;
  
      Object.getPrototypeOf = function (object) {
        if (object.__proto__) {
          return object.__proto__;
        }
  
        return nativeGetPrototypeOf.call(Object, object);
      };
    })();
  }

/***/ }),
/* 102 */
/***/ (function(module, exports) {

  module.exports = require("core-js/es6/math");

/***/ }),
/* 103 */
/***/ (function(module, exports, __webpack_require__) {

  'use strict';
  
  var _getPrototypeOf = __webpack_require__(29);
  
  var _getPrototypeOf2 = _interopRequireDefault2(_getPrototypeOf);
  
  var _setPrototypeOf = __webpack_require__(59);
  
  var _setPrototypeOf2 = _interopRequireDefault2(_setPrototypeOf);
  
  var _create = __webpack_require__(60);
  
  var _create2 = _interopRequireDefault2(_create);
  
  var _typeof2 = __webpack_require__(61);
  
  var _typeof3 = _interopRequireDefault2(_typeof2);
  
  var _defineProperty = __webpack_require__(62);
  
  var _defineProperty2 = _interopRequireDefault2(_defineProperty);
  
  var _assign = __webpack_require__(23);
  
  var _assign2 = _interopRequireDefault2(_assign);
  
  function _interopRequireDefault2(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  
  var _extends = _assign2.default || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }return target;
  };
  
  var _createClass = function () {
    function defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;(0, _defineProperty2.default)(target, descriptor.key, descriptor);
      }
    }return function (Constructor, protoProps, staticProps) {
      if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
    };
  }();
  
  var _class, _class2, _temp2; /**
                                * @fileOverview Rectangle
                                */
  
  var _react = __webpack_require__(11);
  
  var _react2 = _interopRequireDefault(_react);
  
  var _PureRender = __webpack_require__(72);
  
  var _PureRender2 = _interopRequireDefault(_PureRender);
  
  var _classnames = __webpack_require__(46);
  
  var _classnames2 = _interopRequireDefault(_classnames);
  
  var _reactDom = __webpack_require__(104);
  
  var _reactSmooth = __webpack_require__(84);
  
  var _reactSmooth2 = _interopRequireDefault(_reactSmooth);
  
  var _ReactUtils = __webpack_require__(64);
  
  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
  }
  
  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }
  
  function _possibleConstructorReturn(self, call) {
    if (!self) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }return call && ((typeof call === "undefined" ? "undefined" : (0, _typeof3.default)(call)) === "object" || typeof call === "function") ? call : self;
  }
  
  function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : (0, _typeof3.default)(superClass)));
    }subClass.prototype = (0, _create2.default)(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) _setPrototypeOf2.default ? (0, _setPrototypeOf2.default)(subClass, superClass) : subClass.__proto__ = superClass;
  }
  
  var getRectangePath = function getRectangePath(x, y, width, height, radius) {
    var maxRadius = Math.min(width / 2, height / 2);
    var newRadius = [];
    var path = void 0;
  
    if (maxRadius > 0 && radius instanceof Array) {
      for (var i = 0, len = 4; i < len; i++) {
        newRadius[i] = radius[i] > maxRadius ? maxRadius : radius[i];
      }
  
      path = 'M' + x + ',' + (y + newRadius[0]);
  
      if (newRadius[0] > 0) {
        path += 'A ' + newRadius[0] + ',' + newRadius[0] + ',0,0,1,' + (x + newRadius[0]) + ',' + y;
      }
  
      path += 'L ' + (x + width - newRadius[1]) + ',' + y;
  
      if (newRadius[1] > 0) {
        path += 'A ' + newRadius[1] + ',' + newRadius[1] + ',0,0,1,' + (x + width) + ',' + (y + newRadius[1]);
      }
      path += 'L ' + (x + width) + ',' + (y + height - newRadius[2]);
  
      if (newRadius[2] > 0) {
        path += 'A ' + newRadius[2] + ',' + newRadius[2] + ',0,0,1,' + (x + width - newRadius[2]) + ',' + (y + height);
      }
      path += 'L ' + (x + newRadius[3]) + ',' + (y + height);
  
      if (newRadius[3] > 0) {
        path += 'A ' + newRadius[3] + ',' + newRadius[3] + ',0,0,1,' + x + ',' + (y + height - newRadius[3]);
      }
      path += 'Z';
    } else if (maxRadius > 0 && radius === +radius && radius > 0) {
      newRadius = radius > maxRadius ? maxRadius : radius;
  
      path = 'M ' + x + ',' + (y + newRadius) + ' A ' + newRadius + ',' + newRadius + ',0,0,1,' + (x + newRadius) + ',' + y + '\n            L ' + (x + width - newRadius) + ',' + y + '\n            A ' + newRadius + ',' + newRadius + ',0,0,1,' + (x + width) + ',' + (y + newRadius) + '\n            L ' + (x + width) + ',' + (y + height - newRadius) + '\n            A ' + newRadius + ',' + newRadius + ',0,0,1,' + (x + width - newRadius) + ',' + (y + height) + '\n            L ' + (x + newRadius) + ',' + (y + height) + '\n            A ' + newRadius + ',' + newRadius + ',0,0,1,' + x + ',' + (y + height - newRadius) + ' Z';
    } else {
      path = 'M ' + x + ',' + y + ' h ' + width + ' v ' + height + ' h ' + -width + ' Z';
    }
  
    return path;
  };
  
  var Rectangle = (0, _PureRender2.default)(_class = (_temp2 = _class2 = function (_Component) {
    _inherits(Rectangle, _Component);
  
    function Rectangle() {
      var _ref;
  
      var _temp, _this, _ret;
  
      _classCallCheck(this, Rectangle);
  
      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }
  
      return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Rectangle.__proto__ || (0, _getPrototypeOf2.default)(Rectangle)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
        totalLength: -1
      }, _temp), _possibleConstructorReturn(_this, _ret);
    }
  
    _createClass(Rectangle, [{
      key: 'componentDidMount',
  
      /* eslint-disable  react/no-did-mount-set-state */
      value: function componentDidMount() {
        var path = (0, _reactDom.findDOMNode)(this);
  
        var totalLength = path && path.getTotalLength && path.getTotalLength();
  
        if (totalLength) {
          this.setState({
            totalLength: totalLength
          });
        }
      }
    }, {
      key: 'render',
      value: function render() {
        var _this2 = this;
  
        var _props = this.props;
        var x = _props.x;
        var y = _props.y;
        var width = _props.width;
        var height = _props.height;
        var radius = _props.radius;
        var className = _props.className;
        var totalLength = this.state.totalLength;
        var _props2 = this.props;
        var animationEasing = _props2.animationEasing;
        var animationDuration = _props2.animationDuration;
        var animationBegin = _props2.animationBegin;
        var isAnimationActive = _props2.isAnimationActive;
        var isUpdateAnimationActive = _props2.isUpdateAnimationActive;
  
        if (x !== +x || y !== +y || width !== +width || height !== +height) {
          return null;
        }
  
        var layerClass = (0, _classnames2.default)('recharts-rectangle', className);
  
        return _react2.default.createElement(_reactSmooth2.default, {
          canBegin: totalLength > 0,
          from: { width: width, height: height, x: x, y: y },
          to: { width: width, height: height, x: x, y: y },
          duration: animationDuration,
          animationEasing: animationEasing,
          isActive: isUpdateAnimationActive
        }, function (_ref2) {
          var currWidth = _ref2.width;
          var currHeight = _ref2.height;
          var currX = _ref2.x;
          var currY = _ref2.y;
          return _react2.default.createElement(_reactSmooth2.default, {
            canBegin: totalLength > 0,
            from: '0px ' + (totalLength === -1 ? 1 : totalLength) + 'px',
            to: totalLength + 'px 0px',
            attributeName: 'strokeDasharray',
            begin: animationBegin,
            duration: animationDuration,
            isActive: isAnimationActive,
            easing: animationEasing
          }, _react2.default.createElement('path', _extends({}, (0, _ReactUtils.getPresentationAttributes)(_this2.props), (0, _ReactUtils.filterEventAttributes)(_this2.props), {
            className: layerClass,
            d: getRectangePath(currX, currY, currWidth, currHeight, radius)
          })));
        });
      }
    }]);
  
    return Rectangle;
  }(_react.Component), _class2.displayName = 'Rectangle', _class2.propTypes = _extends({}, _ReactUtils.PRESENTATION_ATTRIBUTES, {
    className: _react.PropTypes.string,
    x: _react.PropTypes.number,
    y: _react.PropTypes.number,
    width: _react.PropTypes.number,
    height: _react.PropTypes.number,
    radius: _react.PropTypes.oneOfType([_react.PropTypes.number, _react.PropTypes.array]),
    isAnimationActive: _react.PropTypes.bool,
    isUpdateAnimationActive: _react.PropTypes.bool,
    animationBegin: _react.PropTypes.number,
    animationDuration: _react.PropTypes.number,
    animationEasing: _react.PropTypes.oneOf(['ease', 'ease-in', 'ease-out', 'ease-in-out', 'linear'])
  }), _class2.defaultProps = {
    x: 0,
    y: 0,
    width: 0,
    height: 0,
    // The radius of border
    // The radius of four corners when radius is a number
    // The radius of left-top, right-top, right-bottom, left-bottom when radius is an array
    radius: 0,
    stroke: 'none',
    strokeWidth: 1,
    strokeDasharray: 'none',
    fill: '#000',
    isAnimationActive: false,
    isUpdateAnimationActive: false,
    animationBegin: 0,
    animationDuration: 1500,
    animationEasing: 'ease'
  }, _temp2)) || _class;
  
  exports.default = Rectangle;

/***/ }),
/* 104 */
/***/ (function(module, exports) {

  module.exports = require("react-dom");

/***/ }),
/* 105 */
/***/ (function(module, exports, __webpack_require__) {

  'use strict';
  
  var _getPrototypeOf = __webpack_require__(29);
  
  var _getPrototypeOf2 = _interopRequireDefault2(_getPrototypeOf);
  
  var _setPrototypeOf = __webpack_require__(59);
  
  var _setPrototypeOf2 = _interopRequireDefault2(_setPrototypeOf);
  
  var _create = __webpack_require__(60);
  
  var _create2 = _interopRequireDefault2(_create);
  
  var _typeof2 = __webpack_require__(61);
  
  var _typeof3 = _interopRequireDefault2(_typeof2);
  
  var _defineProperty = __webpack_require__(62);
  
  var _defineProperty2 = _interopRequireDefault2(_defineProperty);
  
  var _assign = __webpack_require__(23);
  
  var _assign2 = _interopRequireDefault2(_assign);
  
  function _interopRequireDefault2(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  
  var _extends = _assign2.default || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }return target;
  };
  
  var _createClass = function () {
    function defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;(0, _defineProperty2.default)(target, descriptor.key, descriptor);
      }
    }return function (Constructor, protoProps, staticProps) {
      if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
    };
  }();
  
  var _class, _class2, _temp; /**
                               * @fileOverview Polygon
                               */
  
  var _react = __webpack_require__(11);
  
  var _react2 = _interopRequireDefault(_react);
  
  var _PureRender = __webpack_require__(72);
  
  var _PureRender2 = _interopRequireDefault(_PureRender);
  
  var _classnames = __webpack_require__(46);
  
  var _classnames2 = _interopRequireDefault(_classnames);
  
  var _ReactUtils = __webpack_require__(64);
  
  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
  }
  
  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }
  
  function _possibleConstructorReturn(self, call) {
    if (!self) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }return call && ((typeof call === "undefined" ? "undefined" : (0, _typeof3.default)(call)) === "object" || typeof call === "function") ? call : self;
  }
  
  function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : (0, _typeof3.default)(superClass)));
    }subClass.prototype = (0, _create2.default)(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) _setPrototypeOf2.default ? (0, _setPrototypeOf2.default)(subClass, superClass) : subClass.__proto__ = superClass;
  }
  
  var getPolygonPoints = function getPolygonPoints(points) {
    return points.reduce(function (result, entry) {
      if (entry.x === +entry.x && entry.y === +entry.y) {
        result.push([entry.x, entry.y]);
      }
  
      return result;
    }, []).join(' ');
  };
  
  var Polygon = (0, _PureRender2.default)(_class = (_temp = _class2 = function (_Component) {
    _inherits(Polygon, _Component);
  
    function Polygon() {
      _classCallCheck(this, Polygon);
  
      return _possibleConstructorReturn(this, (Polygon.__proto__ || (0, _getPrototypeOf2.default)(Polygon)).apply(this, arguments));
    }
  
    _createClass(Polygon, [{
      key: 'render',
      value: function render() {
        var _props = this.props;
        var points = _props.points;
        var className = _props.className;
  
        if (!points || !points.length) {
          return null;
        }
  
        var layerClass = (0, _classnames2.default)('recharts-polygon', className);
  
        return _react2.default.createElement('polygon', _extends({}, (0, _ReactUtils.getPresentationAttributes)(this.props), (0, _ReactUtils.filterEventAttributes)(this.props), {
          className: layerClass,
          points: getPolygonPoints(points)
        }));
      }
    }]);
  
    return Polygon;
  }(_react.Component), _class2.displayName = 'Polygon', _class2.propTypes = _extends({}, _ReactUtils.PRESENTATION_ATTRIBUTES, {
    className: _react.PropTypes.string,
    points: _react.PropTypes.arrayOf(_react.PropTypes.shape({
      x: _react.PropTypes.number,
      y: _react.PropTypes.number
    }))
  }), _class2.defaultProps = {
    fill: 'none',
    stroke: '#333',
    strokeWidth: 1
  }, _temp)) || _class;
  
  exports.default = Polygon;

/***/ }),
/* 106 */
/***/ (function(module, exports, __webpack_require__) {

  'use strict';
  
  var _getPrototypeOf = __webpack_require__(29);
  
  var _getPrototypeOf2 = _interopRequireDefault2(_getPrototypeOf);
  
  var _setPrototypeOf = __webpack_require__(59);
  
  var _setPrototypeOf2 = _interopRequireDefault2(_setPrototypeOf);
  
  var _create = __webpack_require__(60);
  
  var _create2 = _interopRequireDefault2(_create);
  
  var _typeof2 = __webpack_require__(61);
  
  var _typeof3 = _interopRequireDefault2(_typeof2);
  
  var _defineProperty = __webpack_require__(62);
  
  var _defineProperty2 = _interopRequireDefault2(_defineProperty);
  
  var _assign = __webpack_require__(23);
  
  var _assign2 = _interopRequireDefault2(_assign);
  
  function _interopRequireDefault2(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  
  var _extends = _assign2.default || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }return target;
  };
  
  var _createClass = function () {
    function defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;(0, _defineProperty2.default)(target, descriptor.key, descriptor);
      }
    }return function (Constructor, protoProps, staticProps) {
      if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
    };
  }();
  
  var _class, _class2, _temp; /**
                               * @fileOverview Dot
                               */
  
  var _react = __webpack_require__(11);
  
  var _react2 = _interopRequireDefault(_react);
  
  var _PureRender = __webpack_require__(72);
  
  var _PureRender2 = _interopRequireDefault(_PureRender);
  
  var _classnames = __webpack_require__(46);
  
  var _classnames2 = _interopRequireDefault(_classnames);
  
  var _ReactUtils = __webpack_require__(64);
  
  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
  }
  
  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }
  
  function _possibleConstructorReturn(self, call) {
    if (!self) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }return call && ((typeof call === "undefined" ? "undefined" : (0, _typeof3.default)(call)) === "object" || typeof call === "function") ? call : self;
  }
  
  function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : (0, _typeof3.default)(superClass)));
    }subClass.prototype = (0, _create2.default)(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) _setPrototypeOf2.default ? (0, _setPrototypeOf2.default)(subClass, superClass) : subClass.__proto__ = superClass;
  }
  
  var Dot = (0, _PureRender2.default)(_class = (_temp = _class2 = function (_Component) {
    _inherits(Dot, _Component);
  
    function Dot() {
      _classCallCheck(this, Dot);
  
      return _possibleConstructorReturn(this, (Dot.__proto__ || (0, _getPrototypeOf2.default)(Dot)).apply(this, arguments));
    }
  
    _createClass(Dot, [{
      key: 'render',
      value: function render() {
        var _props = this.props;
        var cx = _props.cx;
        var cy = _props.cy;
        var r = _props.r;
        var className = _props.className;
  
        var layerClass = (0, _classnames2.default)('recharts-dot', className);
  
        if (cx === +cx && cy === +cy && r === +r) {
          return _react2.default.createElement('circle', _extends({}, (0, _ReactUtils.getPresentationAttributes)(this.props), {
            className: layerClass,
            cx: cx,
            cy: cy,
            r: r
          }));
        }
  
        return null;
      }
    }]);
  
    return Dot;
  }(_react.Component), _class2.displayName = 'Dot', _class2.propTypes = {
    className: _react.PropTypes.string,
    cx: _react.PropTypes.number,
    cy: _react.PropTypes.number,
    r: _react.PropTypes.number
  }, _temp)) || _class;
  
  exports.default = Dot;

/***/ }),
/* 107 */
/***/ (function(module, exports, __webpack_require__) {

  'use strict';
  
  var _getPrototypeOf = __webpack_require__(29);
  
  var _getPrototypeOf2 = _interopRequireDefault2(_getPrototypeOf);
  
  var _setPrototypeOf = __webpack_require__(59);
  
  var _setPrototypeOf2 = _interopRequireDefault2(_setPrototypeOf);
  
  var _create = __webpack_require__(60);
  
  var _create2 = _interopRequireDefault2(_create);
  
  var _typeof2 = __webpack_require__(61);
  
  var _typeof3 = _interopRequireDefault2(_typeof2);
  
  var _defineProperty = __webpack_require__(62);
  
  var _defineProperty2 = _interopRequireDefault2(_defineProperty);
  
  var _assign = __webpack_require__(23);
  
  var _assign2 = _interopRequireDefault2(_assign);
  
  function _interopRequireDefault2(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  
  var _isNumber2 = __webpack_require__(67);
  
  var _isNumber3 = _interopRequireDefault(_isNumber2);
  
  var _extends = _assign2.default || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }return target;
  };
  
  var _createClass = function () {
    function defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;(0, _defineProperty2.default)(target, descriptor.key, descriptor);
      }
    }return function (Constructor, protoProps, staticProps) {
      if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
    };
  }();
  
  var _class, _class2, _temp; /**
                               * @fileOverview Cross
                               */
  
  var _react = __webpack_require__(11);
  
  var _react2 = _interopRequireDefault(_react);
  
  var _PureRender = __webpack_require__(72);
  
  var _PureRender2 = _interopRequireDefault(_PureRender);
  
  var _classnames = __webpack_require__(46);
  
  var _classnames2 = _interopRequireDefault(_classnames);
  
  var _ReactUtils = __webpack_require__(64);
  
  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
  }
  
  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }
  
  function _possibleConstructorReturn(self, call) {
    if (!self) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }return call && ((typeof call === 'undefined' ? 'undefined' : (0, _typeof3.default)(call)) === "object" || typeof call === "function") ? call : self;
  }
  
  function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === 'undefined' ? 'undefined' : (0, _typeof3.default)(superClass)));
    }subClass.prototype = (0, _create2.default)(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) _setPrototypeOf2.default ? (0, _setPrototypeOf2.default)(subClass, superClass) : subClass.__proto__ = superClass;
  }
  
  var Cross = (0, _PureRender2.default)(_class = (_temp = _class2 = function (_Component) {
    _inherits(Cross, _Component);
  
    function Cross() {
      _classCallCheck(this, Cross);
  
      return _possibleConstructorReturn(this, (Cross.__proto__ || (0, _getPrototypeOf2.default)(Cross)).apply(this, arguments));
    }
  
    _createClass(Cross, [{
      key: 'getPath',
      value: function getPath(x, y, width, height, top, left) {
        return 'M' + x + ',' + top + 'v' + height + 'M' + left + ',' + y + 'h' + width;
      }
    }, {
      key: 'render',
      value: function render() {
        var _props = this.props;
        var x = _props.x;
        var y = _props.y;
        var width = _props.width;
        var height = _props.height;
        var top = _props.top;
        var left = _props.left;
        var className = _props.className;
  
        if (!(0, _isNumber3.default)(x) || !(0, _isNumber3.default)(y) || !(0, _isNumber3.default)(width) || !(0, _isNumber3.default)(height) || !(0, _isNumber3.default)(top) || !(0, _isNumber3.default)(left)) {
          return null;
        }
  
        return _react2.default.createElement('path', _extends({}, (0, _ReactUtils.getPresentationAttributes)(this.props), {
          className: (0, _classnames2.default)('recharts-cross', className),
          d: this.getPath(x, y, width, height, top, left)
        }));
      }
    }]);
  
    return Cross;
  }(_react.Component), _class2.displayName = 'Cross', _class2.propTypes = _extends({}, _ReactUtils.PRESENTATION_ATTRIBUTES, {
    x: _react.PropTypes.number,
    y: _react.PropTypes.number,
    width: _react.PropTypes.number,
    height: _react.PropTypes.number,
    top: _react.PropTypes.number,
    left: _react.PropTypes.number,
    className: _react.PropTypes.string
  }), _class2.defaultProps = {
    x: 0,
    y: 0,
    top: 0,
    left: 0,
    width: 0,
    height: 0,
    stroke: '#000',
    fill: 'none'
  }, _temp)) || _class;
  
  exports.default = Cross;

/***/ }),
/* 108 */
/***/ (function(module, exports, __webpack_require__) {

  'use strict';
  
  var _getPrototypeOf = __webpack_require__(29);
  
  var _getPrototypeOf2 = _interopRequireDefault2(_getPrototypeOf);
  
  var _setPrototypeOf = __webpack_require__(59);
  
  var _setPrototypeOf2 = _interopRequireDefault2(_setPrototypeOf);
  
  var _create = __webpack_require__(60);
  
  var _create2 = _interopRequireDefault2(_create);
  
  var _typeof2 = __webpack_require__(61);
  
  var _typeof3 = _interopRequireDefault2(_typeof2);
  
  var _defineProperty = __webpack_require__(62);
  
  var _defineProperty2 = _interopRequireDefault2(_defineProperty);
  
  var _assign = __webpack_require__(23);
  
  var _assign2 = _interopRequireDefault2(_assign);
  
  function _interopRequireDefault2(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  
  var _extends = _assign2.default || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }return target;
  };
  
  var _createClass = function () {
    function defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;(0, _defineProperty2.default)(target, descriptor.key, descriptor);
      }
    }return function (Constructor, protoProps, staticProps) {
      if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
    };
  }();
  
  var _class, _class2, _temp; /**
                               * @fileOverview Polar Grid
                               */
  
  var _react = __webpack_require__(11);
  
  var _react2 = _interopRequireDefault(_react);
  
  var _PureRender = __webpack_require__(72);
  
  var _PureRender2 = _interopRequireDefault(_PureRender);
  
  var _PolarUtils = __webpack_require__(89);
  
  var _ReactUtils = __webpack_require__(64);
  
  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
  }
  
  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }
  
  function _possibleConstructorReturn(self, call) {
    if (!self) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }return call && ((typeof call === "undefined" ? "undefined" : (0, _typeof3.default)(call)) === "object" || typeof call === "function") ? call : self;
  }
  
  function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : (0, _typeof3.default)(superClass)));
    }subClass.prototype = (0, _create2.default)(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) _setPrototypeOf2.default ? (0, _setPrototypeOf2.default)(subClass, superClass) : subClass.__proto__ = superClass;
  }
  
  var PolarGrid = (0, _PureRender2.default)(_class = (_temp = _class2 = function (_Component) {
    _inherits(PolarGrid, _Component);
  
    function PolarGrid() {
      _classCallCheck(this, PolarGrid);
  
      return _possibleConstructorReturn(this, (PolarGrid.__proto__ || (0, _getPrototypeOf2.default)(PolarGrid)).apply(this, arguments));
    }
  
    _createClass(PolarGrid, [{
      key: 'renderPolarAngles',
  
      /**
       * Draw axis of radial line
       * @return {[type]} The lines
       */
      value: function renderPolarAngles() {
        var _props = this.props;
        var cx = _props.cx;
        var cy = _props.cy;
        var innerRadius = _props.innerRadius;
        var outerRadius = _props.outerRadius;
        var polarAngles = _props.polarAngles;
  
        if (!polarAngles || !polarAngles.length) {
          return null;
        }
        var props = _extends({
          stroke: '#ccc'
        }, (0, _ReactUtils.getPresentationAttributes)(this.props));
  
        return _react2.default.createElement('g', { className: 'recharts-polar-grid-angle' }, polarAngles.map(function (entry, i) {
          var start = (0, _PolarUtils.polarToCartesian)(cx, cy, innerRadius, entry);
          var end = (0, _PolarUtils.polarToCartesian)(cx, cy, outerRadius, entry);
  
          return _react2.default.createElement('line', _extends({}, props, {
            key: 'line-' + i,
            x1: start.x,
            y1: start.y,
            x2: end.x,
            y2: end.y
          }));
        }));
      }
      /**
       * Draw concentric circles
       * @param {Number} radius The radius of circle
       * @param {Number} index  The index of circle
       * @return {ReactElement} circle
       */
  
    }, {
      key: 'renderConcentricCircle',
      value: function renderConcentricCircle(radius, index) {
        var _props2 = this.props;
        var cx = _props2.cx;
        var cy = _props2.cy;
  
        var props = _extends({
          stroke: '#ccc',
          fill: 'none'
        }, (0, _ReactUtils.getPresentationAttributes)(this.props));
  
        return _react2.default.createElement('circle', _extends({}, props, {
          className: 'recharts-polar-grid-concentric-circle',
          key: 'circle-' + index,
          cx: cx,
          cy: cy,
          r: radius
        }));
      }
  
      /**
       * Draw concentric polygons
       * @param {Number} radius The radius of polygon
       * @param {Number} index  The index of polygon
       * @return {ReactElement} polygon
       */
  
    }, {
      key: 'renderConcentricPolygon',
      value: function renderConcentricPolygon(radius, index) {
        var _props3 = this.props;
        var cx = _props3.cx;
        var cy = _props3.cy;
        var polarAngles = _props3.polarAngles;
  
        var props = _extends({
          stroke: '#ccc',
          fill: 'none'
        }, (0, _ReactUtils.getPresentationAttributes)(this.props));
        var path = '';
  
        polarAngles.forEach(function (angle, i) {
          var point = (0, _PolarUtils.polarToCartesian)(cx, cy, radius, angle);
  
          if (i) {
            path += 'L ' + point.x + ',' + point.y;
          } else {
            path += 'M ' + point.x + ',' + point.y;
          }
        });
        path += 'Z';
  
        return _react2.default.createElement('path', _extends({}, props, {
          className: 'recharts-polar-grid-concentric-polygon',
          key: 'path-' + index,
          d: path
        }));
      }
  
      /**
       * Draw concentric axis
       * @return {ReactElement} Concentric axis
       * @todo Optimize the name
       */
  
    }, {
      key: 'renderConcentricPath',
      value: function renderConcentricPath() {
        var _this2 = this;
  
        var _props4 = this.props;
        var polarRadius = _props4.polarRadius;
        var gridType = _props4.gridType;
  
        if (!polarRadius || !polarRadius.length) {
          return null;
        }
  
        return _react2.default.createElement('g', { className: 'recharts-polar-grid-concentric' }, polarRadius.map(function (entry, i) {
          return gridType === 'circle' ? _this2.renderConcentricCircle(entry, i) : _this2.renderConcentricPolygon(entry, i);
        }));
      }
    }, {
      key: 'render',
      value: function render() {
        var outerRadius = this.props.outerRadius;
  
        if (outerRadius <= 0) {
          return null;
        }
  
        return _react2.default.createElement('g', { className: 'recharts-polar-grid' }, this.renderPolarAngles(), this.renderConcentricPath());
      }
    }]);
  
    return PolarGrid;
  }(_react.Component), _class2.displayName = 'PolarGrid', _class2.propTypes = _extends({}, _ReactUtils.PRESENTATION_ATTRIBUTES, {
    cx: _react.PropTypes.number,
    cy: _react.PropTypes.number,
    innerRadius: _react.PropTypes.number,
    outerRadius: _react.PropTypes.number,
  
    polarAngles: _react.PropTypes.arrayOf(_react.PropTypes.number),
    polarRadius: _react.PropTypes.arrayOf(_react.PropTypes.number),
    gridType: _react.PropTypes.oneOf(['polygon', 'circle'])
  }), _class2.defaultProps = {
    cx: 0,
    cy: 0,
    innerRadius: 0,
    outerRadius: 0,
    gridType: 'polygon'
  }, _temp)) || _class;
  
  exports.default = PolarGrid;

/***/ }),
/* 109 */
/***/ (function(module, exports, __webpack_require__) {

  'use strict';
  
  var _getPrototypeOf = __webpack_require__(29);
  
  var _getPrototypeOf2 = _interopRequireDefault2(_getPrototypeOf);
  
  var _setPrototypeOf = __webpack_require__(59);
  
  var _setPrototypeOf2 = _interopRequireDefault2(_setPrototypeOf);
  
  var _create = __webpack_require__(60);
  
  var _create2 = _interopRequireDefault2(_create);
  
  var _typeof2 = __webpack_require__(61);
  
  var _typeof3 = _interopRequireDefault2(_typeof2);
  
  var _defineProperty = __webpack_require__(62);
  
  var _defineProperty2 = _interopRequireDefault2(_defineProperty);
  
  var _assign = __webpack_require__(23);
  
  var _assign2 = _interopRequireDefault2(_assign);
  
  function _interopRequireDefault2(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  
  var _isNumber2 = __webpack_require__(67);
  
  var _isNumber3 = _interopRequireDefault(_isNumber2);
  
  var _isString2 = __webpack_require__(66);
  
  var _isString3 = _interopRequireDefault(_isString2);
  
  var _maxBy2 = __webpack_require__(110);
  
  var _maxBy3 = _interopRequireDefault(_maxBy2);
  
  var _isFunction2 = __webpack_require__(69);
  
  var _isFunction3 = _interopRequireDefault(_isFunction2);
  
  var _extends = _assign2.default || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }return target;
  };
  
  var _createClass = function () {
    function defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;(0, _defineProperty2.default)(target, descriptor.key, descriptor);
      }
    }return function (Constructor, protoProps, staticProps) {
      if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
    };
  }();
  
  var _class, _class2, _temp; /**
                               * @fileOverview The axis of polar coordinate system
                               */
  
  var _react = __webpack_require__(11);
  
  var _react2 = _interopRequireDefault(_react);
  
  var _PureRender = __webpack_require__(72);
  
  var _PureRender2 = _interopRequireDefault(_PureRender);
  
  var _Layer = __webpack_require__(87);
  
  var _Layer2 = _interopRequireDefault(_Layer);
  
  var _Text = __webpack_require__(91);
  
  var _Text2 = _interopRequireDefault(_Text);
  
  var _ReactUtils = __webpack_require__(64);
  
  var _PolarUtils = __webpack_require__(89);
  
  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
  }
  
  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }
  
  function _possibleConstructorReturn(self, call) {
    if (!self) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }return call && ((typeof call === 'undefined' ? 'undefined' : (0, _typeof3.default)(call)) === "object" || typeof call === "function") ? call : self;
  }
  
  function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === 'undefined' ? 'undefined' : (0, _typeof3.default)(superClass)));
    }subClass.prototype = (0, _create2.default)(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) _setPrototypeOf2.default ? (0, _setPrototypeOf2.default)(subClass, superClass) : subClass.__proto__ = superClass;
  }
  
  var PolarRadiusAxis = (0, _PureRender2.default)(_class = (_temp = _class2 = function (_Component) {
    _inherits(PolarRadiusAxis, _Component);
  
    function PolarRadiusAxis() {
      _classCallCheck(this, PolarRadiusAxis);
  
      return _possibleConstructorReturn(this, (PolarRadiusAxis.__proto__ || (0, _getPrototypeOf2.default)(PolarRadiusAxis)).apply(this, arguments));
    }
  
    _createClass(PolarRadiusAxis, [{
      key: 'getTickValueCoord',
  
      /**
       * Calculate the coordinate of tick
       * @param  {Object} radius The data of a simple tick
       * @return {Object} (x, y)
       */
      value: function getTickValueCoord(_ref) {
        var radius = _ref.radius;
        var _props = this.props;
        var angle = _props.angle;
        var cx = _props.cx;
        var cy = _props.cy;
  
        return (0, _PolarUtils.polarToCartesian)(cx, cy, radius, angle);
      }
    }, {
      key: 'getTickTextAnchor',
      value: function getTickTextAnchor() {
        var orientation = this.props.orientation;
  
        var textAnchor = void 0;
  
        switch (orientation) {
          case 'left':
            textAnchor = 'end';
            break;
          case 'right':
            textAnchor = 'start';
            break;
          default:
            textAnchor = 'middle';
            break;
        }
  
        return textAnchor;
      }
    }, {
      key: 'renderAxisLine',
      value: function renderAxisLine() {
        var _props2 = this.props;
        var cx = _props2.cx;
        var cy = _props2.cy;
        var angle = _props2.angle;
        var ticks = _props2.ticks;
        var axisLine = _props2.axisLine;
  
        var extent = ticks.reduce(function (result, entry) {
          return [Math.min(result[0], entry.radius), Math.max(result[1], entry.radius)];
        }, [Infinity, -Infinity]);
        var point0 = (0, _PolarUtils.polarToCartesian)(cx, cy, extent[0], angle);
        var point1 = (0, _PolarUtils.polarToCartesian)(cx, cy, extent[1], angle);
  
        var props = _extends({}, (0, _ReactUtils.getPresentationAttributes)(this.props), {
          fill: 'none'
        }, (0, _ReactUtils.getPresentationAttributes)(axisLine), {
          x1: point0.x,
          y1: point0.y,
          x2: point1.x,
          y2: point1.y
        });
  
        return _react2.default.createElement('line', _extends({ className: 'recharts-polar-radius-axis-line' }, props));
      }
    }, {
      key: 'renderTickItem',
      value: function renderTickItem(option, props, value) {
        var tickItem = void 0;
  
        if (_react2.default.isValidElement(option)) {
          tickItem = _react2.default.cloneElement(option, props);
        } else if ((0, _isFunction3.default)(option)) {
          tickItem = option(props);
        } else {
          tickItem = _react2.default.createElement(_Text2.default, _extends({}, props, {
            className: 'recharts-polar-radius-axis-tick-value'
          }), value);
        }
  
        return tickItem;
      }
    }, {
      key: 'renderTicks',
      value: function renderTicks() {
        var _this2 = this;
  
        var _props3 = this.props;
        var ticks = _props3.ticks;
        var tick = _props3.tick;
        var angle = _props3.angle;
        var tickFormatter = _props3.tickFormatter;
        var stroke = _props3.stroke;
  
        var textAnchor = this.getTickTextAnchor();
        var axisProps = (0, _ReactUtils.getPresentationAttributes)(this.props);
        var customTickProps = (0, _ReactUtils.getPresentationAttributes)(tick);
  
        var items = ticks.map(function (entry, i) {
          var coord = _this2.getTickValueCoord(entry);
          var tickProps = _extends({
            textAnchor: textAnchor,
            transform: 'rotate(' + (90 - angle) + ', ' + coord.x + ', ' + coord.y + ')'
          }, axisProps, {
            stroke: 'none', fill: stroke
          }, customTickProps, {
            index: i
          }, coord, {
            payload: entry
          });
  
          return _react2.default.createElement('g', { className: 'recharts-polar-radius-axis-tick', key: 'tick-' + i }, _this2.renderTickItem(tick, tickProps, tickFormatter ? tickFormatter(entry.value) : entry.value));
        });
  
        return _react2.default.createElement('g', { className: 'recharts-polar-radius-axis-ticks' }, items);
      }
    }, {
      key: 'renderLabel',
      value: function renderLabel() {
        var label = this.props.label;
        var _props4 = this.props;
        var ticks = _props4.ticks;
        var angle = _props4.angle;
        var stroke = _props4.stroke;
  
        var maxRadiusTick = (0, _maxBy3.default)(ticks, function (entry) {
          return entry.radius || 0;
        });
        var radius = maxRadiusTick.radius || 0;
        var coord = this.getTickValueCoord({ radius: radius + 10 });
        var props = _extends({}, this.props, {
          stroke: 'none',
          fill: stroke
        }, coord, {
          textAnchor: 'middle',
          transform: 'rotate(' + (90 - angle) + ', ' + coord.x + ', ' + coord.y + ')'
        });
  
        if (_react2.default.isValidElement(label)) {
          return _react2.default.cloneElement(label, props);
        } else if ((0, _isFunction3.default)(label)) {
          return label(props);
        } else if ((0, _isString3.default)(label) || (0, _isNumber3.default)(label)) {
          return _react2.default.createElement('g', { className: 'recharts-polar-radius-axis-label' }, _react2.default.createElement(_Text2.default, props, label));
        }
  
        return null;
      }
    }, {
      key: 'render',
      value: function render() {
        var _props5 = this.props;
        var ticks = _props5.ticks;
        var axisLine = _props5.axisLine;
        var tick = _props5.tick;
  
        if (!ticks || !ticks.length) {
          return null;
        }
  
        return _react2.default.createElement('g', { className: 'recharts-polar-radius-axis' }, axisLine && this.renderAxisLine(), tick && this.renderTicks(), this.renderLabel());
      }
    }]);
  
    return PolarRadiusAxis;
  }(_react.Component), _class2.displayName = 'PolarRadiusAxis', _class2.propTypes = _extends({}, _ReactUtils.PRESENTATION_ATTRIBUTES, {
    cx: _react.PropTypes.number,
    cy: _react.PropTypes.number,
    hide: _react.PropTypes.bool,
  
    angle: _react.PropTypes.number,
    tickCount: _react.PropTypes.number,
    ticks: _react.PropTypes.arrayOf(_react.PropTypes.shape({
      value: _react.PropTypes.any,
      radius: _react.PropTypes.value
    })),
    orientation: _react.PropTypes.oneOf(['left', 'right', 'middle']),
    axisLine: _react.PropTypes.oneOfType([_react.PropTypes.bool, _react.PropTypes.object]),
    label: _react.PropTypes.oneOfType([_react.PropTypes.number, _react.PropTypes.string, _react.PropTypes.element, _react.PropTypes.func]),
    tick: _react.PropTypes.oneOfType([_react.PropTypes.bool, _react.PropTypes.object, _react.PropTypes.element, _react.PropTypes.func]),
    stroke: _react.PropTypes.string,
    tickFormatter: _react.PropTypes.func,
    domain: _react.PropTypes.arrayOf(_react.PropTypes.oneOfType([_react.PropTypes.number, _react.PropTypes.oneOf(['auto', 'dataMin', 'dataMax'])])),
    allowDataOverflow: _react.PropTypes.bool
  }), _class2.defaultProps = {
    cx: 0,
    cy: 0,
    angle: 0,
    orientation: 'right',
    stroke: '#ccc',
    axisLine: true,
    tick: true,
    tickCount: 5,
    domain: [0, 'auto'],
    allowDataOverflow: false
  }, _temp)) || _class;
  
  exports.default = PolarRadiusAxis;

/***/ }),
/* 110 */
/***/ (function(module, exports) {

  module.exports = require("lodash/maxBy");

/***/ }),
/* 111 */
/***/ (function(module, exports, __webpack_require__) {

  'use strict';
  
  var _getPrototypeOf = __webpack_require__(29);
  
  var _getPrototypeOf2 = _interopRequireDefault2(_getPrototypeOf);
  
  var _setPrototypeOf = __webpack_require__(59);
  
  var _setPrototypeOf2 = _interopRequireDefault2(_setPrototypeOf);
  
  var _create = __webpack_require__(60);
  
  var _create2 = _interopRequireDefault2(_create);
  
  var _typeof2 = __webpack_require__(61);
  
  var _typeof3 = _interopRequireDefault2(_typeof2);
  
  var _defineProperty = __webpack_require__(62);
  
  var _defineProperty2 = _interopRequireDefault2(_defineProperty);
  
  var _assign = __webpack_require__(23);
  
  var _assign2 = _interopRequireDefault2(_assign);
  
  function _interopRequireDefault2(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  
  var _isFunction2 = __webpack_require__(69);
  
  var _isFunction3 = _interopRequireDefault(_isFunction2);
  
  var _extends = _assign2.default || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }return target;
  };
  
  var _createClass = function () {
    function defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;(0, _defineProperty2.default)(target, descriptor.key, descriptor);
      }
    }return function (Constructor, protoProps, staticProps) {
      if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
    };
  }();
  
  var _class, _class2, _temp; /**
                               * @fileOverview Axis of radial direction
                               */
  
  var _react = __webpack_require__(11);
  
  var _react2 = _interopRequireDefault(_react);
  
  var _PureRender = __webpack_require__(72);
  
  var _PureRender2 = _interopRequireDefault(_PureRender);
  
  var _Layer = __webpack_require__(87);
  
  var _Layer2 = _interopRequireDefault(_Layer);
  
  var _ReactUtils = __webpack_require__(64);
  
  var _Dot = __webpack_require__(106);
  
  var _Dot2 = _interopRequireDefault(_Dot);
  
  var _Polygon = __webpack_require__(105);
  
  var _Polygon2 = _interopRequireDefault(_Polygon);
  
  var _Text = __webpack_require__(91);
  
  var _Text2 = _interopRequireDefault(_Text);
  
  var _PolarUtils = __webpack_require__(89);
  
  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
  }
  
  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }
  
  function _possibleConstructorReturn(self, call) {
    if (!self) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }return call && ((typeof call === 'undefined' ? 'undefined' : (0, _typeof3.default)(call)) === "object" || typeof call === "function") ? call : self;
  }
  
  function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === 'undefined' ? 'undefined' : (0, _typeof3.default)(superClass)));
    }subClass.prototype = (0, _create2.default)(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) _setPrototypeOf2.default ? (0, _setPrototypeOf2.default)(subClass, superClass) : subClass.__proto__ = superClass;
  }
  
  var RADIAN = Math.PI / 180;
  var eps = 1e-5;
  
  var PolarAngleAxis = (0, _PureRender2.default)(_class = (_temp = _class2 = function (_Component) {
    _inherits(PolarAngleAxis, _Component);
  
    function PolarAngleAxis() {
      _classCallCheck(this, PolarAngleAxis);
  
      return _possibleConstructorReturn(this, (PolarAngleAxis.__proto__ || (0, _getPrototypeOf2.default)(PolarAngleAxis)).apply(this, arguments));
    }
  
    _createClass(PolarAngleAxis, [{
      key: 'getTickLineCoord',
  
      /**
       * Calculate the coordinate of line endpoint
       * @param  {Object} data The Data if ticks
       * @return {Object} (x0, y0): The start point of text,
       *                  (x1, y1): The end point close to text,
       *                  (x2, y2): The end point close to axis
       */
      value: function getTickLineCoord(data) {
        var _props = this.props;
        var cx = _props.cx;
        var cy = _props.cy;
        var radius = _props.radius;
        var orientation = _props.orientation;
        var tickLine = _props.tickLine;
  
        var tickLineSize = tickLine && tickLine.size || 8;
        var p1 = (0, _PolarUtils.polarToCartesian)(cx, cy, radius, data.angle);
        var p2 = (0, _PolarUtils.polarToCartesian)(cx, cy, radius + (orientation === 'inner' ? -1 : 1) * tickLineSize, data.angle);
  
        return { x1: p1.x, y1: p1.y, x2: p2.x, y2: p2.y };
      }
      /**
       * Get the text-anchor of each tick
       * @param  {Object} data Data of ticks
       * @return {String} text-anchor
       */
  
    }, {
      key: 'getTickTextAnchor',
      value: function getTickTextAnchor(data) {
        var orientation = this.props.orientation;
  
        var cos = Math.cos(-data.angle * RADIAN);
        var textAnchor = void 0;
  
        if (cos > eps) {
          textAnchor = orientation === 'outer' ? 'start' : 'end';
        } else if (cos < -eps) {
          textAnchor = orientation === 'outer' ? 'end' : 'start';
        } else {
          textAnchor = 'middle';
        }
  
        return textAnchor;
      }
    }, {
      key: 'renderAxisLine',
      value: function renderAxisLine() {
        var _props2 = this.props;
        var cx = _props2.cx;
        var cy = _props2.cy;
        var radius = _props2.radius;
        var axisLine = _props2.axisLine;
        var axisLineType = _props2.axisLineType;
  
        var props = _extends({}, (0, _ReactUtils.getPresentationAttributes)(this.props), {
          fill: 'none'
        }, (0, _ReactUtils.getPresentationAttributes)(axisLine));
  
        if (axisLineType === 'circle') {
          return _react2.default.createElement(_Dot2.default, _extends({
            className: 'recharts-polar-angle-axis-line'
          }, props, {
            cx: cx,
            cy: cy,
            r: radius
          }));
        }
        var ticks = this.props.ticks;
  
        var points = ticks.map(function (entry) {
          return (0, _PolarUtils.polarToCartesian)(cx, cy, radius, entry.angle);
        });
  
        return _react2.default.createElement(_Polygon2.default, _extends({ className: 'recharts-polar-angle-axis-line' }, props, { points: points }));
      }
    }, {
      key: 'renderTickItem',
      value: function renderTickItem(option, props, value) {
        var tickItem = void 0;
  
        if (_react2.default.isValidElement(option)) {
          tickItem = _react2.default.cloneElement(option, props);
        } else if ((0, _isFunction3.default)(option)) {
          tickItem = option(props);
        } else {
          tickItem = _react2.default.createElement(_Text2.default, _extends({}, props, {
            className: 'recharts-polar-angle-axis-tick-value'
          }), value);
        }
  
        return tickItem;
      }
    }, {
      key: 'renderTicks',
      value: function renderTicks() {
        var _this2 = this;
  
        var _props3 = this.props;
        var ticks = _props3.ticks;
        var tick = _props3.tick;
        var tickLine = _props3.tickLine;
        var tickFormatter = _props3.tickFormatter;
        var stroke = _props3.stroke;
  
        var axisProps = (0, _ReactUtils.getPresentationAttributes)(this.props);
        var customTickProps = (0, _ReactUtils.getPresentationAttributes)(tick);
        var tickLineProps = _extends({}, axisProps, { fill: 'none' }, (0, _ReactUtils.getPresentationAttributes)(tickLine));
  
        var items = ticks.map(function (entry, i) {
          var lineCoord = _this2.getTickLineCoord(entry);
          var textAnchor = _this2.getTickTextAnchor(entry);
          var tickProps = _extends({
            textAnchor: textAnchor
          }, axisProps, {
            stroke: 'none', fill: stroke
          }, customTickProps, {
            index: i, payload: entry,
            x: lineCoord.x2, y: lineCoord.y2
          });
  
          return _react2.default.createElement('g', { className: 'recharts-polar-angle-axis-tick', key: 'tick-' + i }, tickLine && _react2.default.createElement('line', _extends({
            className: 'recharts-polar-angle-axis-tick-line'
          }, tickLineProps, lineCoord)), tick && _this2.renderTickItem(tick, tickProps, tickFormatter ? tickFormatter(entry.value) : entry.value));
        });
  
        return _react2.default.createElement('g', { className: 'recharts-polar-angle-axis-ticks' }, items);
      }
    }, {
      key: 'render',
      value: function render() {
        var _props4 = this.props;
        var ticks = _props4.ticks;
        var radius = _props4.radius;
        var axisLine = _props4.axisLine;
        var tickLine = _props4.tickLine;
  
        if (radius <= 0 || !ticks || !ticks.length) {
          return null;
        }
  
        return _react2.default.createElement(_Layer2.default, { className: 'recharts-polar-angle-axis' }, axisLine && this.renderAxisLine(), this.renderTicks());
      }
    }]);
  
    return PolarAngleAxis;
  }(_react.Component), _class2.displayName = 'PolarAngleAxis', _class2.propTypes = _extends({}, _ReactUtils.PRESENTATION_ATTRIBUTES, {
    dataKey: _react.PropTypes.oneOfType([_react.PropTypes.number, _react.PropTypes.string]),
    cx: _react.PropTypes.number,
    cy: _react.PropTypes.number,
    radius: _react.PropTypes.oneOfType([_react.PropTypes.number, _react.PropTypes.string]),
    hide: _react.PropTypes.bool,
  
    axisLine: _react.PropTypes.oneOfType([_react.PropTypes.bool, _react.PropTypes.object]),
    axisLineType: _react.PropTypes.oneOf(['polygon', 'circle']),
    tickLine: _react.PropTypes.oneOfType([_react.PropTypes.bool, _react.PropTypes.object]),
    tick: _react.PropTypes.oneOfType([_react.PropTypes.bool, _react.PropTypes.func, _react.PropTypes.object, _react.PropTypes.element]),
  
    ticks: _react.PropTypes.arrayOf(_react.PropTypes.shape({
      value: _react.PropTypes.any,
      angle: _react.PropTypes.number
    })),
    stroke: _react.PropTypes.string,
    orientation: _react.PropTypes.oneOf(['inner', 'outer']),
    tickFormatter: _react.PropTypes.func
  }), _class2.defaultProps = {
    cx: 0,
    cy: 0,
    orientation: 'outer',
    fill: '#666',
    stroke: '#ccc',
    axisLine: true,
    tickLine: true,
    tick: true,
    hide: false
  }, _temp)) || _class;
  
  exports.default = PolarAngleAxis;

/***/ }),
/* 112 */
/***/ (function(module, exports, __webpack_require__) {

  'use strict';
  
  var _getPrototypeOf = __webpack_require__(29);
  
  var _getPrototypeOf2 = _interopRequireDefault2(_getPrototypeOf);
  
  var _setPrototypeOf = __webpack_require__(59);
  
  var _setPrototypeOf2 = _interopRequireDefault2(_setPrototypeOf);
  
  var _create = __webpack_require__(60);
  
  var _create2 = _interopRequireDefault2(_create);
  
  var _typeof2 = __webpack_require__(61);
  
  var _typeof3 = _interopRequireDefault2(_typeof2);
  
  var _defineProperty = __webpack_require__(62);
  
  var _defineProperty2 = _interopRequireDefault2(_defineProperty);
  
  var _assign = __webpack_require__(23);
  
  var _assign2 = _interopRequireDefault2(_assign);
  
  function _interopRequireDefault2(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  
  var _isFunction2 = __webpack_require__(69);
  
  var _isFunction3 = _interopRequireDefault(_isFunction2);
  
  var _extends = _assign2.default || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }return target;
  };
  
  var _createClass = function () {
    function defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;(0, _defineProperty2.default)(target, descriptor.key, descriptor);
      }
    }return function (Constructor, protoProps, staticProps) {
      if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
    };
  }();
  
  var _class, _class2, _temp2; /**
                                * @fileOverview Radar
                                */
  
  var _react = __webpack_require__(11);
  
  var _react2 = _interopRequireDefault(_react);
  
  var _PureRender = __webpack_require__(72);
  
  var _PureRender2 = _interopRequireDefault(_PureRender);
  
  var _classnames = __webpack_require__(46);
  
  var _classnames2 = _interopRequireDefault(_classnames);
  
  var _ReactUtils = __webpack_require__(64);
  
  var _Polygon = __webpack_require__(105);
  
  var _Polygon2 = _interopRequireDefault(_Polygon);
  
  var _Dot = __webpack_require__(106);
  
  var _Dot2 = _interopRequireDefault(_Dot);
  
  var _Layer = __webpack_require__(87);
  
  var _Layer2 = _interopRequireDefault(_Layer);
  
  var _Text = __webpack_require__(91);
  
  var _Text2 = _interopRequireDefault(_Text);
  
  var _reactSmooth = __webpack_require__(84);
  
  var _reactSmooth2 = _interopRequireDefault(_reactSmooth);
  
  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
  }
  
  function _objectWithoutProperties(obj, keys) {
    var target = {};for (var i in obj) {
      if (keys.indexOf(i) >= 0) continue;if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;target[i] = obj[i];
    }return target;
  }
  
  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }
  
  function _possibleConstructorReturn(self, call) {
    if (!self) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }return call && ((typeof call === 'undefined' ? 'undefined' : (0, _typeof3.default)(call)) === "object" || typeof call === "function") ? call : self;
  }
  
  function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === 'undefined' ? 'undefined' : (0, _typeof3.default)(superClass)));
    }subClass.prototype = (0, _create2.default)(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) _setPrototypeOf2.default ? (0, _setPrototypeOf2.default)(subClass, superClass) : subClass.__proto__ = superClass;
  }
  
  var Radar = (0, _PureRender2.default)(_class = (_temp2 = _class2 = function (_Component) {
    _inherits(Radar, _Component);
  
    function Radar() {
      var _ref;
  
      var _temp, _this, _ret;
  
      _classCallCheck(this, Radar);
  
      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }
  
      return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Radar.__proto__ || (0, _getPrototypeOf2.default)(Radar)).call.apply(_ref, [this].concat(args))), _this), _this.handleMouseEnter = function (e) {
        var onMouseEnter = _this.props.onMouseEnter;
  
        if (onMouseEnter) {
          onMouseEnter(_this.props, e);
        }
      }, _this.handleMouseLeave = function (e) {
        var onMouseLeave = _this.props.onMouseLeave;
  
        if (onMouseLeave) {
          onMouseLeave(_this.props, e);
        }
      }, _temp), _possibleConstructorReturn(_this, _ret);
    }
  
    _createClass(Radar, [{
      key: 'renderPolygon',
      value: function renderPolygon() {
        var _props = this.props;
        var shape = _props.shape;
        var points = _props.points;
        var animationDuration = _props.animationDuration;
        var animationEasing = _props.animationEasing;
        var animationBegin = _props.animationBegin;
        var isAnimationActive = _props.isAnimationActive;
        var animationId = _props.animationId;
        var dataKey = _props.dataKey;
        var className = _props.className;
  
        var others = _objectWithoutProperties(_props, ['shape', 'points', 'animationDuration', 'animationEasing', 'animationBegin', 'isAnimationActive', 'animationId', 'dataKey', 'className']);
  
        if (_react2.default.isValidElement(shape)) {
          return _react2.default.cloneElement(shape, _extends({}, others, { points: points }));
        } else if ((0, _isFunction3.default)(shape)) {
          return shape(this.props);
        }
  
        var point = points[0];
        var transformPoints = points.map(function (p) {
          return { x: p.x - point.cx, y: p.y - point.cy };
        });
  
        return _react2.default.createElement(_Layer2.default, { className: 'recharts-radar-polygon', transform: 'translate(' + point.cx + ', ' + point.cy + ')' }, _react2.default.createElement(_reactSmooth2.default, {
          from: 'scale(0)',
          to: 'scale(1)',
          attributeName: 'transform',
          isActive: isAnimationActive,
          begin: animationBegin,
          easing: animationEasing,
          duration: animationDuration,
          key: animationId
        }, _react2.default.createElement(_Polygon2.default, _extends({
          onMouseEnter: this.handleMouseEnter,
          onMouseLeave: this.handleMouseLeave
        }, (0, _ReactUtils.getPresentationAttributes)(this.props), {
          points: transformPoints
        }))));
      }
    }, {
      key: 'renderLabelItem',
      value: function renderLabelItem(option, props, value) {
        var labelItem = void 0;
  
        if (_react2.default.isValidElement(option)) {
          labelItem = _react2.default.cloneElement(option, props);
        } else if ((0, _isFunction3.default)(option)) {
          labelItem = option(props);
        } else {
          labelItem = _react2.default.createElement(_Text2.default, _extends({
            key: props.key
          }, props, {
            className: 'recharts-radar-label'
          }), value);
        }
  
        return labelItem;
      }
    }, {
      key: 'renderLabels',
      value: function renderLabels() {
        var _this2 = this;
  
        var _props2 = this.props;
        var points = _props2.points;
        var label = _props2.label;
  
        var baseProps = (0, _ReactUtils.getPresentationAttributes)(this.props);
        var customLabelProps = (0, _ReactUtils.getPresentationAttributes)(label);
  
        var labels = points.map(function (entry, i) {
          var labelProps = _extends({
            textAnchor: 'middle'
          }, baseProps, {
            stroke: 'none',
            fill: baseProps && baseProps.stroke || '#666'
          }, customLabelProps, entry, {
            index: i,
            key: 'label-' + i,
            payload: entry
          });
  
          return _this2.renderLabelItem(label, labelProps, entry.value);
        });
  
        return _react2.default.createElement(_Layer2.default, { className: 'recharts-radar-labels' }, labels);
      }
    }, {
      key: 'renderDotItem',
      value: function renderDotItem(option, props) {
        var dotItem = void 0;
  
        if (_react2.default.isValidElement(option)) {
          dotItem = _react2.default.cloneElement(option, props);
        } else if ((0, _isFunction3.default)(option)) {
          dotItem = option(props);
        } else {
          dotItem = _react2.default.createElement(_Dot2.default, _extends({}, props, { className: 'recharts-radar-dot' }));
        }
  
        return dotItem;
      }
    }, {
      key: 'renderDots',
      value: function renderDots() {
        var _this3 = this;
  
        var _props3 = this.props;
        var dot = _props3.dot;
        var points = _props3.points;
  
        var baseProps = (0, _ReactUtils.getPresentationAttributes)(this.props);
        var customDotProps = (0, _ReactUtils.getPresentationAttributes)(dot);
  
        var dots = points.map(function (entry, i) {
          var dotProps = _extends({
            key: 'dot-' + i,
            r: 3
          }, baseProps, customDotProps, {
            cx: entry.x,
            cy: entry.y,
            index: i,
            playload: entry
          });
  
          return _this3.renderDotItem(dot, dotProps);
        });
  
        return _react2.default.createElement(_Layer2.default, { className: 'recharts-radar-dots' }, dots);
      }
    }, {
      key: 'render',
      value: function render() {
        var _props4 = this.props;
        var className = _props4.className;
        var points = _props4.points;
        var label = _props4.label;
        var dot = _props4.dot;
  
        if (!points || !points.length) {
          return null;
        }
  
        var layerClass = (0, _classnames2.default)('recharts-radar', className);
        var transformOrigin = 'center center';
  
        return _react2.default.createElement(_Layer2.default, { className: layerClass }, this.renderPolygon(), label && this.renderLabels(), dot && this.renderDots());
      }
    }]);
  
    return Radar;
  }(_react.Component), _class2.displayName = 'Radar', _class2.propTypes = _extends({}, _ReactUtils.PRESENTATION_ATTRIBUTES, {
    className: _react.PropTypes.string,
    dataKey: _react.PropTypes.string.isRequired,
  
    points: _react.PropTypes.arrayOf(_react.PropTypes.shape({
      x: _react.PropTypes.number,
      y: _react.PropTypes.number,
      cx: _react.PropTypes.number,
      cy: _react.PropTypes.number,
      angle: _react.PropTypes.number,
      radius: _react.PropTypes.number,
      value: _react.PropTypes.number,
      payload: _react.PropTypes.object
    })),
    shape: _react.PropTypes.oneOfType([_react.PropTypes.element, _react.PropTypes.func]),
    dot: _react.PropTypes.oneOfType([_react.PropTypes.element, _react.PropTypes.func, _react.PropTypes.object, _react.PropTypes.bool]),
    label: _react.PropTypes.oneOfType([_react.PropTypes.element, _react.PropTypes.func, _react.PropTypes.object, _react.PropTypes.bool]),
    legendType: _react.PropTypes.oneOf(['line', 'square', 'rect', 'circle', 'cross', 'diamond', 'square', 'star', 'triangle', 'wye']),
  
    onMouseEnter: _react.PropTypes.func,
    onMouseLeave: _react.PropTypes.func,
    isAnimationActive: _react.PropTypes.bool,
    animationId: _react.PropTypes.number,
    animationBegin: _react.PropTypes.number,
    animationDuration: _react.PropTypes.number,
    animationEasing: _react.PropTypes.oneOf(['ease', 'ease-in', 'ease-out', 'ease-in-out', 'linear'])
  }), _class2.defaultProps = {
    dot: false,
    label: false,
    legendType: 'rect',
    isAnimationActive: true,
    animationBegin: 0,
    animationDuration: 1500,
    animationEasing: 'ease'
  }, _temp2)) || _class;
  
  exports.default = Radar;

/***/ }),
/* 113 */
/***/ (function(module, exports, __webpack_require__) {

  'use strict';
  
  var _sign = __webpack_require__(86);
  
  var _sign2 = _interopRequireDefault2(_sign);
  
  var _getPrototypeOf = __webpack_require__(29);
  
  var _getPrototypeOf2 = _interopRequireDefault2(_getPrototypeOf);
  
  var _setPrototypeOf = __webpack_require__(59);
  
  var _setPrototypeOf2 = _interopRequireDefault2(_setPrototypeOf);
  
  var _create = __webpack_require__(60);
  
  var _create2 = _interopRequireDefault2(_create);
  
  var _typeof2 = __webpack_require__(61);
  
  var _typeof3 = _interopRequireDefault2(_typeof2);
  
  var _defineProperty = __webpack_require__(62);
  
  var _defineProperty2 = _interopRequireDefault2(_defineProperty);
  
  var _assign = __webpack_require__(23);
  
  var _assign2 = _interopRequireDefault2(_assign);
  
  function _interopRequireDefault2(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  
  var _uniqueId2 = __webpack_require__(114);
  
  var _uniqueId3 = _interopRequireDefault(_uniqueId2);
  
  var _isFunction2 = __webpack_require__(69);
  
  var _isFunction3 = _interopRequireDefault(_isFunction2);
  
  var _extends = _assign2.default || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }return target;
  };
  
  var _createClass = function () {
    function defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;(0, _defineProperty2.default)(target, descriptor.key, descriptor);
      }
    }return function (Constructor, protoProps, staticProps) {
      if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
    };
  }();
  
  var _class, _class2, _temp2; /**
                                * @fileOverview Render a group of radial bar
                                */
  
  var _react = __webpack_require__(11);
  
  var _react2 = _interopRequireDefault(_react);
  
  var _classnames = __webpack_require__(46);
  
  var _classnames2 = _interopRequireDefault(_classnames);
  
  var _Sector = __webpack_require__(88);
  
  var _Sector2 = _interopRequireDefault(_Sector);
  
  var _Layer = __webpack_require__(87);
  
  var _Layer2 = _interopRequireDefault(_Layer);
  
  var _Text = __webpack_require__(91);
  
  var _Text2 = _interopRequireDefault(_Text);
  
  var _DOMUtils = __webpack_require__(80);
  
  var _ReactUtils = __webpack_require__(64);
  
  var _PureRender = __webpack_require__(72);
  
  var _PureRender2 = _interopRequireDefault(_PureRender);
  
  var _PolarUtils = __webpack_require__(89);
  
  var _reactSmooth = __webpack_require__(84);
  
  var _reactSmooth2 = _interopRequireDefault(_reactSmooth);
  
  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
  }
  
  function _objectWithoutProperties(obj, keys) {
    var target = {};for (var i in obj) {
      if (keys.indexOf(i) >= 0) continue;if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;target[i] = obj[i];
    }return target;
  }
  
  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }
  
  function _possibleConstructorReturn(self, call) {
    if (!self) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }return call && ((typeof call === 'undefined' ? 'undefined' : (0, _typeof3.default)(call)) === "object" || typeof call === "function") ? call : self;
  }
  
  function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === 'undefined' ? 'undefined' : (0, _typeof3.default)(superClass)));
    }subClass.prototype = (0, _create2.default)(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) _setPrototypeOf2.default ? (0, _setPrototypeOf2.default)(subClass, superClass) : subClass.__proto__ = superClass;
  }
  
  var RADIAN = Math.PI / 180;
  
  var RadialBar = (0, _PureRender2.default)(_class = (_temp2 = _class2 = function (_Component) {
    _inherits(RadialBar, _Component);
  
    function RadialBar() {
      var _ref;
  
      var _temp, _this, _ret;
  
      _classCallCheck(this, RadialBar);
  
      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }
  
      return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = RadialBar.__proto__ || (0, _getPrototypeOf2.default)(RadialBar)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
        isAnimationFinished: false
      }, _this.handleAnimationEnd = function () {
        _this.setState({ isAnimationFinished: true });
      }, _this.handleAnimationStart = function () {
        _this.setState({ isAnimationFinished: false });
      }, _temp), _possibleConstructorReturn(_this, _ret);
    }
  
    _createClass(RadialBar, [{
      key: 'getDeltaAngle',
      value: function getDeltaAngle() {
        var _props = this.props;
        var startAngle = _props.startAngle;
        var endAngle = _props.endAngle;
  
        var sign = (0, _sign2.default)(endAngle - startAngle);
        var deltaAngle = Math.min(Math.abs(endAngle - startAngle), 360);
  
        return sign * deltaAngle;
      }
    }, {
      key: 'getSectors',
      value: function getSectors() {
        var _props2 = this.props;
        var cx = _props2.cx;
        var cy = _props2.cy;
        var startAngle = _props2.startAngle;
        var endAngle = _props2.endAngle;
        var data = _props2.data;
        var minAngle = _props2.minAngle;
        var maxAngle = _props2.maxAngle;
  
        var maxValue = Math.max.apply(null, data.map(function (entry) {
          return Math.abs(entry.value);
        }));
        var absMinAngle = Math.abs(minAngle);
        var absMaxAngle = Math.abs(maxAngle);
        var deltaAngle = this.getDeltaAngle();
        var gapAngle = Math.min(Math.abs(absMaxAngle - absMinAngle), 360);
  
        var sectors = data.map(function (entry) {
          var value = entry.value;
          var tempEndAngle = maxValue === 0 ? startAngle : startAngle + (0, _sign2.default)(value * deltaAngle) * (absMinAngle + gapAngle * Math.abs(entry.value) / maxValue);
  
          return _extends({}, entry, {
            cx: cx, cy: cy,
            startAngle: startAngle,
            endAngle: tempEndAngle,
            payload: entry
          });
        });
  
        return sectors;
      }
    }, {
      key: 'getLabelPathArc',
      value: function getLabelPathArc(data, labelContent, style) {
        var label = this.props.label;
  
        var labelProps = _react2.default.isValidElement(label) ? label.props : label;
        var offsetRadius = labelProps.offsetRadius || 2;
        var orientation = labelProps.orientation || 'inner';
        var cx = data.cx;
        var cy = data.cy;
        var innerRadius = data.innerRadius;
        var outerRadius = data.outerRadius;
        var startAngle = data.startAngle;
        var endAngle = data.endAngle;
  
        var clockWise = this.getDeltaAngle() < 0 && data.value > 0;
        var radius = clockWise ? innerRadius + offsetRadius : Math.max(outerRadius - offsetRadius, 0);
  
        if (radius <= 0) {
          return '';
        }
  
        var labelSize = (0, _DOMUtils.getStringSize)(labelContent, style);
        var deltaAngle = labelSize.width / (radius * RADIAN);
        var tempStartAngle = void 0;
        var tempEndAngle = void 0;
  
        if (clockWise) {
          tempStartAngle = orientation === 'inner' ? Math.min(endAngle + deltaAngle, startAngle) : endAngle;
          tempEndAngle = tempStartAngle - deltaAngle;
        } else {
          tempStartAngle = orientation === 'inner' ? Math.max(endAngle - deltaAngle, startAngle) : endAngle;
          tempEndAngle = tempStartAngle + deltaAngle;
        }
  
        var startPoint = (0, _PolarUtils.polarToCartesian)(cx, cy, radius, tempStartAngle);
        var endPoint = (0, _PolarUtils.polarToCartesian)(cx, cy, radius, tempEndAngle);
  
        return 'M' + startPoint.x + ',' + startPoint.y + '\n            A' + radius + ',' + radius + ',0,\n            ' + (deltaAngle >= 180 ? 1 : 0) + ',\n            ' + (clockWise ? 1 : 0) + ',\n            ' + endPoint.x + ',' + endPoint.y;
      }
    }, {
      key: 'renderSectorShape',
      value: function renderSectorShape(shape, props) {
        var sectorShape = void 0;
  
        if (_react2.default.isValidElement(shape)) {
          sectorShape = _react2.default.cloneElement(shape, props);
        } else if ((0, _isFunction3.default)(shape)) {
          sectorShape = shape(props);
        } else {
          sectorShape = _react2.default.createElement(_Sector2.default, props);
        }
  
        return sectorShape;
      }
    }, {
      key: 'renderSectors',
      value: function renderSectors(sectors) {
        var _this2 = this;
  
        var _props3 = this.props;
        var className = _props3.className;
        var shape = _props3.shape;
        var activeShape = _props3.activeShape;
        var activeIndex = _props3.activeIndex;
        var data = _props3.data;
        var _props4 = this.props;
        var animationEasing = _props4.animationEasing;
        var animationDuration = _props4.animationDuration;
        var animationBegin = _props4.animationBegin;
        var isAnimationActive = _props4.isAnimationActive;
  
        var baseProps = (0, _ReactUtils.getPresentationAttributes)(this.props);
  
        return sectors.map(function (entry, i) {
          var startAngle = entry.startAngle;
          var endAngle = entry.endAngle;
  
          return _react2.default.createElement(_reactSmooth2.default, {
            from: { angle: startAngle },
            to: { angle: endAngle },
            begin: animationBegin,
            isActive: isAnimationActive,
            duration: animationDuration,
            easing: animationEasing,
            shouldReAnimate: true,
            key: 'aniamte-' + i,
            onAnimationStart: _this2.handleAnimationStart,
            onAnimationEnd: _this2.handleAnimationEnd
          }, function (_ref2) {
            var angle = _ref2.angle;
  
            var props = _extends({}, baseProps, entry, (0, _ReactUtils.filterEventsOfChild)(_this2.props, entry, i), {
              endAngle: angle,
              key: 'sector-' + i,
              className: 'recharts-radial-bar-sector'
            });
  
            return _this2.renderSectorShape(i === activeIndex ? activeShape : shape, props);
          });
        });
      }
    }, {
      key: 'renderBackground',
      value: function renderBackground(sectors) {
        var _this3 = this;
  
        var _props5 = this.props;
        var startAngle = _props5.startAngle;
        var endAngle = _props5.endAngle;
        var background = _props5.background;
  
        var backgroundProps = (0, _ReactUtils.getPresentationAttributes)(background);
  
        return sectors.map(function (entry, i) {
          var value = entry.value;
  
          var rest = _objectWithoutProperties(entry, ['value']);
  
          var props = _extends({}, rest, {
            fill: '#eee'
          }, backgroundProps, {
            startAngle: startAngle,
            endAngle: endAngle,
            index: i,
            key: 'sector-' + i,
            className: 'recharts-radial-bar-background-sector'
          });
  
          return _this3.renderSectorShape(background, props);
        });
      }
    }, {
      key: 'renderLabels',
      value: function renderLabels(sectors) {
        var _this4 = this;
  
        var isAnimationActive = this.props.isAnimationActive;
  
        if (isAnimationActive && !this.state.isAnimationFinished) {
          return null;
        }
  
        var label = this.props.label;
  
        var isElement = _react2.default.isValidElement(label);
        var formatter = isElement ? label.props.formatter : label.formatter;
        var hasFormatter = (0, _isFunction3.default)(formatter);
  
        return sectors.map(function (entry, i) {
          var content = hasFormatter ? formatter(entry.value) : entry.value;
          var id = (0, _uniqueId3.default)('recharts-defs-');
  
          var style = (0, _ReactUtils.getPresentationAttributes)(label) || { fontSize: 10, fill: '#000' };
          var path = _this4.getLabelPathArc(entry, content, style);
  
          return _react2.default.createElement(_Text2.default, _extends({}, style, { key: 'label-' + i, className: 'recharts-radial-bar-label' }), _react2.default.createElement('defs', null, _react2.default.createElement('path', { id: id, d: path })), _react2.default.createElement('textPath', { xlinkHref: '#' + id }, content));
        });
      }
    }, {
      key: 'render',
      value: function render() {
        var _props6 = this.props;
        var data = _props6.data;
        var className = _props6.className;
        var background = _props6.background;
        var label = _props6.label;
  
        if (!data || !data.length) {
          return null;
        }
  
        var sectors = this.getSectors();
        var layerClass = (0, _classnames2.default)('recharts-area', className);
  
        return _react2.default.createElement(_Layer2.default, { className: layerClass }, background && _react2.default.createElement(_Layer2.default, { className: 'recharts-radial-bar-background' }, this.renderBackground(sectors)), _react2.default.createElement(_Layer2.default, { className: 'recharts-radial-bar-sectors' }, this.renderSectors(sectors)), label && _react2.default.createElement(_Layer2.default, { className: 'recharts-radial-bar-labels' }, this.renderLabels(sectors)));
      }
    }]);
  
    return RadialBar;
  }(_react.Component), _class2.displayName = 'RadialBar', _class2.propTypes = _extends({}, _ReactUtils.PRESENTATION_ATTRIBUTES, {
    className: _react.PropTypes.string,
    shape: _react.PropTypes.oneOfType([_react.PropTypes.func, _react.PropTypes.element]),
    activeShape: _react.PropTypes.oneOfType([_react.PropTypes.object, _react.PropTypes.func, _react.PropTypes.element]),
    activeIndex: _react.PropTypes.number,
  
    cx: _react.PropTypes.number,
    cy: _react.PropTypes.number,
    startAngle: _react.PropTypes.number,
    endAngle: _react.PropTypes.number,
    maxAngle: _react.PropTypes.number,
    minAngle: _react.PropTypes.number,
    data: _react.PropTypes.arrayOf(_react.PropTypes.shape({
      cx: _react.PropTypes.number,
      cy: _react.PropTypes.number,
      innerRadius: _react.PropTypes.number,
      outerRadius: _react.PropTypes.number,
      value: _react.PropTypes.value
    })),
    legendType: _react.PropTypes.oneOf(['line', 'square', 'rect', 'circle', 'cross', 'diamond', 'square', 'star', 'triangle', 'wye']),
    label: _react.PropTypes.oneOfType([_react.PropTypes.bool, _react.PropTypes.func, _react.PropTypes.element, _react.PropTypes.object]),
    background: _react.PropTypes.oneOfType([_react.PropTypes.bool, _react.PropTypes.func, _react.PropTypes.object, _react.PropTypes.element]),
  
    onMouseEnter: _react.PropTypes.func,
    onMouseLeave: _react.PropTypes.func,
    onClick: _react.PropTypes.func,
  
    isAnimationActive: _react.PropTypes.bool,
    animationBegin: _react.PropTypes.number,
    animationDuration: _react.PropTypes.number,
    animationEasing: _react.PropTypes.oneOf(['ease', 'ease-in', 'ease-out', 'ease-in-out', 'linear', 'spring'])
  }), _class2.defaultProps = {
    startAngle: 180,
    endAngle: 0,
    maxAngle: 135,
    minAngle: 0,
    stroke: '#fff',
    fill: '#808080',
    legendType: 'rect',
    data: [],
    isAnimationActive: true,
    animationBegin: 0,
    animationDuration: 1500,
    animationEasing: 'ease'
  }, _temp2)) || _class;
  
  exports.default = RadialBar;

/***/ }),
/* 114 */
/***/ (function(module, exports) {

  module.exports = require("lodash/uniqueId");

/***/ }),
/* 115 */
/***/ (function(module, exports, __webpack_require__) {

  'use strict';
  
  var _getPrototypeOf = __webpack_require__(29);
  
  var _getPrototypeOf2 = _interopRequireDefault2(_getPrototypeOf);
  
  var _setPrototypeOf = __webpack_require__(59);
  
  var _setPrototypeOf2 = _interopRequireDefault2(_setPrototypeOf);
  
  var _create = __webpack_require__(60);
  
  var _create2 = _interopRequireDefault2(_create);
  
  var _typeof2 = __webpack_require__(61);
  
  var _typeof3 = _interopRequireDefault2(_typeof2);
  
  var _defineProperty2 = __webpack_require__(62);
  
  var _defineProperty3 = _interopRequireDefault2(_defineProperty2);
  
  function _interopRequireDefault2(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  
  var _range2 = __webpack_require__(116);
  
  var _range3 = _interopRequireDefault(_range2);
  
  var _isFunction2 = __webpack_require__(69);
  
  var _isFunction3 = _interopRequireDefault(_isFunction2);
  
  var _createClass = function () {
    function defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;(0, _defineProperty3.default)(target, descriptor.key, descriptor);
      }
    }return function (Constructor, protoProps, staticProps) {
      if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
    };
  }();
  
  var _class, _class2, _temp; /**
                               * @fileOverview Brush
                               */
  
  var _react = __webpack_require__(11);
  
  var _react2 = _interopRequireDefault(_react);
  
  var _classnames = __webpack_require__(46);
  
  var _classnames2 = _interopRequireDefault(_classnames);
  
  var _d3Scale = __webpack_require__(117);
  
  var _PureRender = __webpack_require__(72);
  
  var _PureRender2 = _interopRequireDefault(_PureRender);
  
  var _Layer = __webpack_require__(87);
  
  var _Layer2 = _interopRequireDefault(_Layer);
  
  var _Text = __webpack_require__(91);
  
  var _Text2 = _interopRequireDefault(_Text);
  
  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
  }
  
  function _defineProperty(obj, key, value) {
    if (key in obj) {
      (0, _defineProperty3.default)(obj, key, { value: value, enumerable: true, configurable: true, writable: true });
    } else {
      obj[key] = value;
    }return obj;
  }
  
  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }
  
  function _possibleConstructorReturn(self, call) {
    if (!self) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }return call && ((typeof call === 'undefined' ? 'undefined' : (0, _typeof3.default)(call)) === "object" || typeof call === "function") ? call : self;
  }
  
  function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === 'undefined' ? 'undefined' : (0, _typeof3.default)(superClass)));
    }subClass.prototype = (0, _create2.default)(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) _setPrototypeOf2.default ? (0, _setPrototypeOf2.default)(subClass, superClass) : subClass.__proto__ = superClass;
  }
  
  var Brush = (0, _PureRender2.default)(_class = (_temp = _class2 = function (_Component) {
    _inherits(Brush, _Component);
  
    function Brush(props) {
      _classCallCheck(this, Brush);
  
      var _this = _possibleConstructorReturn(this, (Brush.__proto__ || (0, _getPrototypeOf2.default)(Brush)).call(this, props));
  
      _this.handleMove = function (e) {
        if (_this.leaveTimer) {
          clearTimeout(_this.leaveTimer);
          _this.leaveTimer = null;
        }
  
        if (_this.state.isTravellerMoving) {
          _this.handleTravellerMove(e);
        } else if (_this.state.isSlideMoving) {
          _this.handleSlideMove(e);
        }
      };
  
      _this.handleUp = function () {
        _this.setState({
          isTravellerMoving: false,
          isSlideMoving: false
        });
      };
  
      _this.handleLeaveWrapper = function () {
        if (_this.state.isTravellerMoving || _this.state.isSlideMoving) {
          _this.leaveTimer = setTimeout(_this.handleUp, 1000);
        }
      };
  
      _this.handleEnterSlideOrTraveller = function () {
        _this.setState({
          isTextActive: true
        });
      };
  
      _this.handleLeaveSlideOrTraveller = function () {
        _this.setState({
          isTextActive: false
        });
      };
  
      _this.handleSlideDown = function (e) {
        _this.setState({
          isTravellerMoving: false,
          isSlideMoving: true,
          slideMoveStartX: e.pageX
        });
      };
  
      _this.travellerDownHandlers = {
        startX: _this.handleTravellerDown.bind(_this, 'startX'),
        endX: _this.handleTravellerDown.bind(_this, 'endX')
      };
  
      if (props.data && props.data.length) {
        _this.updateScale(props);
      } else {
        _this.state = {};
      }
      return _this;
    }
  
    _createClass(Brush, [{
      key: 'componentWillReceiveProps',
      value: function componentWillReceiveProps(nextProps) {
        var _this2 = this;
  
        var _props = this.props;
        var data = _props.data;
        var width = _props.width;
        var x = _props.x;
        var travellerWidth = _props.travellerWidth;
  
        if (nextProps.data !== data) {
          this.updateScale(nextProps);
        } else if (nextProps.width !== width || nextProps.x !== x || nextProps.travellerWidth !== travellerWidth) {
          this.scale.range([nextProps.x, nextProps.x + nextProps.width - nextProps.travellerWidth]);
          this.scaleValues = this.scale.domain().map(function (entry) {
            return _this2.scale(entry);
          });
  
          this.setState({
            startX: this.scale(nextProps.startIndex),
            endX: this.scale(nextProps.endIndex)
          });
        }
      }
    }, {
      key: 'componentWillUnmount',
      value: function componentWillUnmount() {
        this.scale = null;
        this.scaleValues = null;
  
        if (this.leaveTimer) {
          clearTimeout(this.leaveTimer);
          this.leaveTimer = null;
        }
      }
    }, {
      key: 'getIndexInRange',
      value: function getIndexInRange(range, x) {
        var len = range.length;
        var start = 0;
        var end = len - 1;
  
        while (end - start > 1) {
          var middle = Math.floor((start + end) / 2);
  
          if (range[middle] > x) {
            end = middle;
          } else {
            start = middle;
          }
        }
  
        return x >= range[end] ? end : start;
      }
    }, {
      key: 'getIndex',
      value: function getIndex(_ref) {
        var startX = _ref.startX;
        var endX = _ref.endX;
  
        var min = Math.min(startX, endX);
        var max = Math.max(startX, endX);
        var minIndex = this.getIndexInRange(this.scaleValues, min);
        var maxIndex = this.getIndexInRange(this.scaleValues, max);
  
        return {
          startIndex: minIndex,
          endIndex: maxIndex
        };
      }
    }, {
      key: 'getTextOfTick',
      value: function getTextOfTick(index) {
        var _props2 = this.props;
        var data = _props2.data;
        var tickFormatter = _props2.tickFormatter;
        var dataKey = _props2.dataKey;
  
        var text = data[index] && dataKey ? data[index][dataKey] : index;
  
        return (0, _isFunction3.default)(tickFormatter) ? tickFormatter(text) : text;
      }
    }, {
      key: 'handleSlideMove',
      value: function handleSlideMove(e) {
        var _state = this.state;
        var slideMoveStartX = _state.slideMoveStartX;
        var startX = _state.startX;
        var endX = _state.endX;
        var _props3 = this.props;
        var x = _props3.x;
        var width = _props3.width;
        var travellerWidth = _props3.travellerWidth;
        var onChange = _props3.onChange;
  
        var delta = e.pageX - slideMoveStartX;
  
        if (delta > 0) {
          delta = Math.min(delta, x + width - travellerWidth - endX, x + width - travellerWidth - startX);
        } else if (delta < 0) {
          delta = Math.max(delta, x - startX, x - endX);
        }
        var newIndex = this.getIndex({
          startX: startX + delta,
          endX: endX + delta
        });
  
        this.setState({
          startX: startX + delta,
          endX: endX + delta,
          slideMoveStartX: e.pageX
        }, function () {
          if (onChange) {
            onChange(newIndex);
          }
        });
      }
    }, {
      key: 'handleTravellerDown',
      value: function handleTravellerDown(id, e) {
        this.setState({
          isSlideMoving: false,
          isTravellerMoving: true,
          movingTravellerId: id,
          brushMoveStartX: e.pageX
        });
      }
    }, {
      key: 'handleTravellerMove',
      value: function handleTravellerMove(e) {
        var _setState;
  
        var _state2 = this.state;
        var brushMoveStartX = _state2.brushMoveStartX;
        var movingTravellerId = _state2.movingTravellerId;
  
        var prevValue = this.state[movingTravellerId];
        var _props4 = this.props;
        var x = _props4.x;
        var width = _props4.width;
        var travellerWidth = _props4.travellerWidth;
        var onChange = _props4.onChange;
  
        var params = { startX: this.state.startX, endX: this.state.endX };
        var delta = e.pageX - brushMoveStartX;
  
        if (delta > 0) {
          delta = Math.min(delta, x + width - travellerWidth - prevValue);
        } else if (delta < 0) {
          delta = Math.max(delta, x - prevValue);
        }
  
        params[movingTravellerId] = prevValue + delta;
        var newIndex = this.getIndex(params);
  
        this.setState((_setState = {}, _defineProperty(_setState, movingTravellerId, prevValue + delta), _defineProperty(_setState, 'brushMoveStartX', e.pageX), _setState), function () {
          if (onChange) {
            onChange(newIndex);
          }
        });
      }
    }, {
      key: 'updateScale',
      value: function updateScale(props) {
        var _this3 = this;
  
        var data = props.data;
        var startIndex = props.startIndex;
        var endIndex = props.endIndex;
        var x = props.x;
        var width = props.width;
        var travellerWidth = props.travellerWidth;
  
        if (data && data.length) {
          var len = data.length;
          this.scale = (0, _d3Scale.scalePoint)().domain((0, _range3.default)(0, len)).range([x, x + width - travellerWidth]);
          this.scaleValues = this.scale.domain().map(function (entry) {
            return _this3.scale(entry);
          });
          this.state = {
            isTextActive: false,
            isSlideMoving: false,
            isTravellerMoving: false,
            startX: this.scale(startIndex),
            endX: this.scale(endIndex)
          };
        }
      }
    }, {
      key: 'renderBackground',
      value: function renderBackground() {
        var _props5 = this.props;
        var x = _props5.x;
        var y = _props5.y;
        var width = _props5.width;
        var height = _props5.height;
        var fill = _props5.fill;
        var stroke = _props5.stroke;
  
        return _react2.default.createElement('rect', {
          stroke: stroke,
          fill: fill,
          x: x,
          y: y,
          width: width,
          height: height
        });
      }
    }, {
      key: 'renderTraveller',
      value: function renderTraveller(startX, id) {
        var _props6 = this.props;
        var y = _props6.y;
        var travellerWidth = _props6.travellerWidth;
        var height = _props6.height;
        var stroke = _props6.stroke;
  
        var lineY = Math.floor(y + height / 2) - 1;
        var x = Math.max(startX, this.props.x);
  
        return _react2.default.createElement(_Layer2.default, {
          className: 'recharts-brush-traveller',
          onMouseEnter: this.handleEnterSlideOrTraveller,
          onMouseLeave: this.handleLeaveSlideOrTraveller,
          onMouseDown: this.travellerDownHandlers[id],
          style: { cursor: 'col-resize' }
        }, _react2.default.createElement('rect', {
          x: x,
          y: y,
          width: travellerWidth,
          height: height,
          fill: stroke,
          stroke: 'none'
        }), _react2.default.createElement('line', {
          x1: x + 1,
          y1: lineY,
          x2: x + travellerWidth - 1,
          y2: lineY,
          fill: 'none',
          stroke: '#fff'
        }), _react2.default.createElement('line', {
          x1: x + 1,
          y1: lineY + 2,
          x2: x + travellerWidth - 1,
          y2: lineY + 2,
          fill: 'none',
          stroke: '#fff'
        }));
      }
    }, {
      key: 'renderSlide',
      value: function renderSlide(startX, endX) {
        var _props7 = this.props;
        var y = _props7.y;
        var height = _props7.height;
        var stroke = _props7.stroke;
  
        return _react2.default.createElement('rect', {
          className: 'recharts-brush-slide',
          onMouseEnter: this.handleEnterSlideOrTraveller,
          onMouseLeave: this.handleLeaveSlideOrTraveller,
          onMouseDown: this.handleSlideDown,
          style: { cursor: 'move' },
          stroke: 'none',
          fill: stroke,
          fillOpacity: 0.2,
          x: Math.min(startX, endX),
          y: y,
          width: Math.abs(endX - startX),
          height: height
        });
      }
    }, {
      key: 'renderText',
      value: function renderText() {
        var _props8 = this.props;
        var startIndex = _props8.startIndex;
        var endIndex = _props8.endIndex;
        var data = _props8.data;
        var y = _props8.y;
        var height = _props8.height;
        var travellerWidth = _props8.travellerWidth;
        var stroke = _props8.stroke;
        var tickFormatter = _props8.tickFormatter;
        var _state3 = this.state;
        var startX = _state3.startX;
        var endX = _state3.endX;
  
        var offset = 5;
        var style = {
          pointerEvents: 'none',
          fill: stroke
        };
  
        return _react2.default.createElement(_Layer2.default, { className: 'recharts-brush-texts' }, _react2.default.createElement(_Text2.default, {
          textAnchor: 'end',
          verticalAnchor: 'middle',
          style: style,
          x: Math.min(startX, endX) - offset,
          y: y + height / 2
        }, this.getTextOfTick(startIndex)), _react2.default.createElement(_Text2.default, {
          textAnchor: 'start',
          verticalAnchor: 'middle',
          style: style,
          x: Math.max(startX, endX) + travellerWidth + offset,
          y: y + height / 2
        }, this.getTextOfTick(endIndex)));
      }
    }, {
      key: 'render',
      value: function render() {
        var _props9 = this.props;
        var x = _props9.x;
        var width = _props9.width;
        var travellerWidth = _props9.travellerWidth;
        var data = _props9.data;
        var className = _props9.className;
        var _state4 = this.state;
        var startX = _state4.startX;
        var endX = _state4.endX;
        var isTextActive = _state4.isTextActive;
        var isSlideMoving = _state4.isSlideMoving;
        var isTravellerMoving = _state4.isTravellerMoving;
  
        if (!data || !data.length) {
          return null;
        }
  
        var layerClass = (0, _classnames2.default)('recharts-brush', className);
  
        return _react2.default.createElement(_Layer2.default, {
          className: layerClass,
          onMouseUp: this.handleUp,
          onMouseMove: this.handleMove,
          onMouseLeave: this.handleLeaveWrapper
        }, this.renderBackground(), this.renderSlide(startX, endX), this.renderTraveller(startX, 'startX'), this.renderTraveller(endX, 'endX'), (isTextActive || isSlideMoving || isTravellerMoving) && this.renderText());
      }
    }]);
  
    return Brush;
  }(_react.Component), _class2.displayName = 'Brush', _class2.propTypes = {
    className: _react.PropTypes.string,
  
    fill: _react.PropTypes.string,
    stroke: _react.PropTypes.string,
    x: _react.PropTypes.number.isRequired,
    y: _react.PropTypes.number.isRequired,
    width: _react.PropTypes.number.isRequired,
    height: _react.PropTypes.number.isRequired,
    travellerWidth: _react.PropTypes.number,
  
    dataKey: _react.PropTypes.oneOfType([_react.PropTypes.string, _react.PropTypes.number]),
    data: _react.PropTypes.array,
    startIndex: _react.PropTypes.number,
    endIndex: _react.PropTypes.number,
    tickFormatter: _react.PropTypes.func,
  
    onChange: _react.PropTypes.func
  }, _class2.defaultProps = {
    x: 0,
    y: 0,
    width: 0,
    height: 40,
    travellerWidth: 5,
    fill: '#fff',
    stroke: '#666'
  }, _temp)) || _class;
  
  exports.default = Brush;

/***/ }),
/* 116 */
/***/ (function(module, exports) {

  module.exports = require("lodash/range");

/***/ }),
/* 117 */
/***/ (function(module, exports) {

  module.exports = require("d3-scale");

/***/ }),
/* 118 */
/***/ (function(module, exports, __webpack_require__) {

  'use strict';
  
  var _getPrototypeOf = __webpack_require__(29);
  
  var _getPrototypeOf2 = _interopRequireDefault2(_getPrototypeOf);
  
  var _setPrototypeOf = __webpack_require__(59);
  
  var _setPrototypeOf2 = _interopRequireDefault2(_setPrototypeOf);
  
  var _create = __webpack_require__(60);
  
  var _create2 = _interopRequireDefault2(_create);
  
  var _typeof2 = __webpack_require__(61);
  
  var _typeof3 = _interopRequireDefault2(_typeof2);
  
  var _defineProperty = __webpack_require__(62);
  
  var _defineProperty2 = _interopRequireDefault2(_defineProperty);
  
  var _assign = __webpack_require__(23);
  
  var _assign2 = _interopRequireDefault2(_assign);
  
  var _isIterable2 = __webpack_require__(119);
  
  var _isIterable3 = _interopRequireDefault2(_isIterable2);
  
  var _getIterator2 = __webpack_require__(26);
  
  var _getIterator3 = _interopRequireDefault2(_getIterator2);
  
  function _interopRequireDefault2(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  
  var _isNumber2 = __webpack_require__(67);
  
  var _isNumber3 = _interopRequireDefault(_isNumber2);
  
  var _isString2 = __webpack_require__(66);
  
  var _isString3 = _interopRequireDefault(_isString2);
  
  var _isFunction2 = __webpack_require__(69);
  
  var _isFunction3 = _interopRequireDefault(_isFunction2);
  
  var _slicedToArray = function () {
    function sliceIterator(arr, i) {
      var _arr = [];var _n = true;var _d = false;var _e = undefined;try {
        for (var _i = (0, _getIterator3.default)(arr), _s; !(_n = (_s = _i.next()).done); _n = true) {
          _arr.push(_s.value);if (i && _arr.length === i) break;
        }
      } catch (err) {
        _d = true;_e = err;
      } finally {
        try {
          if (!_n && _i["return"]) _i["return"]();
        } finally {
          if (_d) throw _e;
        }
      }return _arr;
    }return function (arr, i) {
      if (Array.isArray(arr)) {
        return arr;
      } else if ((0, _isIterable3.default)(Object(arr))) {
        return sliceIterator(arr, i);
      } else {
        throw new TypeError("Invalid attempt to destructure non-iterable instance");
      }
    };
  }();
  
  var _extends = _assign2.default || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }return target;
  };
  
  var _createClass = function () {
    function defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;(0, _defineProperty2.default)(target, descriptor.key, descriptor);
      }
    }return function (Constructor, protoProps, staticProps) {
      if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
    };
  }();
  
  var _class, _class2, _temp; /**
                               * @fileOverview Reference Line
                               */
  
  var _react = __webpack_require__(11);
  
  var _react2 = _interopRequireDefault(_react);
  
  var _PureRender = __webpack_require__(72);
  
  var _PureRender2 = _interopRequireDefault(_PureRender);
  
  var _Layer = __webpack_require__(87);
  
  var _Layer2 = _interopRequireDefault(_Layer);
  
  var _Text = __webpack_require__(91);
  
  var _Text2 = _interopRequireDefault(_Text);
  
  var _ReactUtils = __webpack_require__(64);
  
  var _DataUtils = __webpack_require__(96);
  
  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
  }
  
  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }
  
  function _possibleConstructorReturn(self, call) {
    if (!self) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }return call && ((typeof call === 'undefined' ? 'undefined' : (0, _typeof3.default)(call)) === "object" || typeof call === "function") ? call : self;
  }
  
  function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === 'undefined' ? 'undefined' : (0, _typeof3.default)(superClass)));
    }subClass.prototype = (0, _create2.default)(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) _setPrototypeOf2.default ? (0, _setPrototypeOf2.default)(subClass, superClass) : subClass.__proto__ = superClass;
  }
  
  var ReferenceLine = (0, _PureRender2.default)(_class = (_temp = _class2 = function (_Component) {
    _inherits(ReferenceLine, _Component);
  
    function ReferenceLine() {
      _classCallCheck(this, ReferenceLine);
  
      return _possibleConstructorReturn(this, (ReferenceLine.__proto__ || (0, _getPrototypeOf2.default)(ReferenceLine)).apply(this, arguments));
    }
  
    _createClass(ReferenceLine, [{
      key: 'getEndPoints',
      value: function getEndPoints(isX, isY) {
        var _props = this.props;
        var xAxis = _props.xAxis;
        var yAxis = _props.yAxis;
        var viewBox = _props.viewBox;
        var x = viewBox.x;
        var y = viewBox.y;
        var width = viewBox.width;
        var height = viewBox.height;
  
        if (isY) {
          var value = this.props.y;
          var scale = yAxis.scale;
  
          var offset = scale.bandwidth ? scale.bandwidth() / 2 : 0;
          var coord = scale(value) + offset;
  
          if ((0, _DataUtils.validateCoordinateInRange)(coord, scale)) {
            return yAxis.orientation === 'left' ? [{ x: x, y: coord }, { x: x + width, y: coord }] : [{ x: x + width, y: coord }, { x: x, y: coord }];
          }
        } else if (isX) {
          var _value = this.props.x;
          var _scale = xAxis.scale;
  
          var _offset = _scale.bandwidth ? _scale.bandwidth() / 2 : 0;
          var _coord = _scale(_value) + _offset;
  
          if ((0, _DataUtils.validateCoordinateInRange)(_coord, _scale)) {
            return xAxis.orientation === 'top' ? [{ x: _coord, y: y }, { x: _coord, y: y + height }] : [{ x: _coord, y: y + height }, { x: _coord, y: y }];
          }
        }
  
        return null;
      }
    }, {
      key: 'getLabelProps',
      value: function getLabelProps(isX, isY) {
        var _props2 = this.props;
        var xAxis = _props2.xAxis;
        var yAxis = _props2.yAxis;
        var labelPosition = _props2.labelPosition;
  
        if (isY) {
          var axis = yAxis;
  
          if (axis.orientation === 'left' && labelPosition === 'end') {
            return { dx: 6, dy: 6, textAnchor: 'start' };
          }
          if (axis.orientation === 'right' && labelPosition === 'start') {
            return { dx: 6, dy: 6, textAnchor: 'start' };
          }
          return { dx: -6, dy: 6, textAnchor: 'end' };
        } else if (isX) {
          var _axis = xAxis;
  
          if (_axis.orientation === 'top') {
            return { dy: 6, textAnchor: 'middle' };
          }
          return { dy: -6, textAnchor: 'middle' };
        }
  
        return null;
      }
    }, {
      key: 'renderLabel',
      value: function renderLabel(isX, isY, end) {
        var _props3 = this.props;
        var label = _props3.label;
        var stroke = _props3.stroke;
  
        var props = _extends({}, (0, _ReactUtils.getPresentationAttributes)(label), {
          stroke: 'none',
          fill: stroke
        }, end, this.getLabelProps(isX, isY));
  
        if (_react2.default.isValidElement(label)) {
          return _react2.default.cloneElement(label, props);
        } else if ((0, _isFunction3.default)(label)) {
          return label(props);
        } else if ((0, _isString3.default)(label) || (0, _isNumber3.default)(label)) {
          return _react2.default.createElement('g', { className: 'recharts-reference-line-label' }, _react2.default.createElement(_Text2.default, props, label));
        }
  
        return null;
      }
    }, {
      key: 'render',
      value: function render() {
        var _props4 = this.props;
        var x = _props4.x;
        var y = _props4.y;
        var labelPosition = _props4.labelPosition;
  
        var isX = (0, _isNumber3.default)(x) || (0, _isString3.default)(x);
        var isY = (0, _isNumber3.default)(y) || (0, _isString3.default)(y);
  
        if (!isX && !isY) {
          return null;
        }
  
        var endPoints = this.getEndPoints(isX, isY);
  
        if (!endPoints) {
          return null;
        }
  
        var _endPoints = _slicedToArray(endPoints, 2);
  
        var start = _endPoints[0];
        var end = _endPoints[1];
  
        var props = (0, _ReactUtils.getPresentationAttributes)(this.props);
  
        return _react2.default.createElement(_Layer2.default, { className: 'recharts-reference-line' }, _react2.default.createElement('line', _extends({}, props, {
          className: 'recharts-reference-line-line',
          x1: start.x,
          y1: start.y,
          x2: end.x,
          y2: end.y
        })), this.renderLabel(isX, isY, labelPosition === 'start' ? start : end));
      }
    }]);
  
    return ReferenceLine;
  }(_react.Component), _class2.displayName = 'ReferenceLine', _class2.propTypes = _extends({}, _ReactUtils.PRESENTATION_ATTRIBUTES, {
    viewBox: _react.PropTypes.shape({
      x: _react.PropTypes.number,
      y: _react.PropTypes.number,
      width: _react.PropTypes.number,
      height: _react.PropTypes.number
    }),
  
    label: _react.PropTypes.oneOfType([_react.PropTypes.number, _react.PropTypes.string, _react.PropTypes.element, _react.PropTypes.func]),
  
    xAxis: _react.PropTypes.object,
    yAxis: _react.PropTypes.object,
  
    isFront: _react.PropTypes.bool,
    alwaysShow: _react.PropTypes.bool,
    x: _react.PropTypes.oneOfType([_react.PropTypes.number, _react.PropTypes.string]),
    y: _react.PropTypes.oneOfType([_react.PropTypes.number, _react.PropTypes.string]),
  
    yAxisId: _react.PropTypes.oneOfType([_react.PropTypes.string, _react.PropTypes.number]),
    xAxisId: _react.PropTypes.oneOfType([_react.PropTypes.string, _react.PropTypes.number]),
  
    labelPosition: _react.PropTypes.oneOf(['start', 'end'])
  }), _class2.defaultProps = {
    isFront: false,
    alwaysShow: false,
    xAxisId: 0,
    yAxisId: 0,
    fill: 'none',
    stroke: '#ccc',
    fillOpacity: 1,
    strokeWidth: 1,
    labelPosition: 'end'
  }, _temp)) || _class;
  
  exports.default = ReferenceLine;

/***/ }),
/* 119 */
/***/ (function(module, exports) {

  module.exports = require("babel-runtime/core-js/is-iterable");

/***/ }),
/* 120 */
/***/ (function(module, exports, __webpack_require__) {

  'use strict';
  
  var _getPrototypeOf = __webpack_require__(29);
  
  var _getPrototypeOf2 = _interopRequireDefault2(_getPrototypeOf);
  
  var _setPrototypeOf = __webpack_require__(59);
  
  var _setPrototypeOf2 = _interopRequireDefault2(_setPrototypeOf);
  
  var _create = __webpack_require__(60);
  
  var _create2 = _interopRequireDefault2(_create);
  
  var _typeof2 = __webpack_require__(61);
  
  var _typeof3 = _interopRequireDefault2(_typeof2);
  
  var _defineProperty = __webpack_require__(62);
  
  var _defineProperty2 = _interopRequireDefault2(_defineProperty);
  
  var _assign = __webpack_require__(23);
  
  var _assign2 = _interopRequireDefault2(_assign);
  
  function _interopRequireDefault2(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  
  var _isNumber2 = __webpack_require__(67);
  
  var _isNumber3 = _interopRequireDefault(_isNumber2);
  
  var _isString2 = __webpack_require__(66);
  
  var _isString3 = _interopRequireDefault(_isString2);
  
  var _isFunction2 = __webpack_require__(69);
  
  var _isFunction3 = _interopRequireDefault(_isFunction2);
  
  var _extends = _assign2.default || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }return target;
  };
  
  var _createClass = function () {
    function defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;(0, _defineProperty2.default)(target, descriptor.key, descriptor);
      }
    }return function (Constructor, protoProps, staticProps) {
      if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
    };
  }();
  
  var _class, _class2, _temp; /**
                               * @fileOverview Reference Line
                               */
  
  var _react = __webpack_require__(11);
  
  var _react2 = _interopRequireDefault(_react);
  
  var _PureRender = __webpack_require__(72);
  
  var _PureRender2 = _interopRequireDefault(_PureRender);
  
  var _Layer = __webpack_require__(87);
  
  var _Layer2 = _interopRequireDefault(_Layer);
  
  var _Dot = __webpack_require__(106);
  
  var _Dot2 = _interopRequireDefault(_Dot);
  
  var _Text = __webpack_require__(91);
  
  var _Text2 = _interopRequireDefault(_Text);
  
  var _ReactUtils = __webpack_require__(64);
  
  var _DataUtils = __webpack_require__(96);
  
  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
  }
  
  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }
  
  function _possibleConstructorReturn(self, call) {
    if (!self) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }return call && ((typeof call === 'undefined' ? 'undefined' : (0, _typeof3.default)(call)) === "object" || typeof call === "function") ? call : self;
  }
  
  function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === 'undefined' ? 'undefined' : (0, _typeof3.default)(superClass)));
    }subClass.prototype = (0, _create2.default)(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) _setPrototypeOf2.default ? (0, _setPrototypeOf2.default)(subClass, superClass) : subClass.__proto__ = superClass;
  }
  
  var ReferenceDot = (0, _PureRender2.default)(_class = (_temp = _class2 = function (_Component) {
    _inherits(ReferenceDot, _Component);
  
    function ReferenceDot() {
      _classCallCheck(this, ReferenceDot);
  
      return _possibleConstructorReturn(this, (ReferenceDot.__proto__ || (0, _getPrototypeOf2.default)(ReferenceDot)).apply(this, arguments));
    }
  
    _createClass(ReferenceDot, [{
      key: 'getCoordinate',
      value: function getCoordinate() {
        var _props = this.props;
        var x = _props.x;
        var y = _props.y;
        var xAxis = _props.xAxis;
        var yAxis = _props.yAxis;
  
        var xScale = xAxis.scale;
        var yScale = yAxis.scale;
        var result = {
          cx: xScale(x) + (xScale.bandwidth ? xScale.bandwidth() / 2 : 0),
          cy: yScale(y) + (yScale.bandwidth ? yScale.bandwidth() / 2 : 0)
        };
  
        if ((0, _DataUtils.validateCoordinateInRange)(result.cx, xScale) && (0, _DataUtils.validateCoordinateInRange)(result.cy, yScale)) {
          return result;
        }
  
        return null;
      }
    }, {
      key: 'renderLabel',
      value: function renderLabel(coordinate) {
        var _props2 = this.props;
        var label = _props2.label;
        var stroke = _props2.stroke;
  
        var props = _extends({}, (0, _ReactUtils.getPresentationAttributes)(label), {
          stroke: 'none',
          fill: stroke,
          x: coordinate.cx,
          y: coordinate.cy,
          textAnchor: 'middle'
        });
  
        if (_react2.default.isValidElement(label)) {
          return _react2.default.cloneElement(label, props);
        } else if ((0, _isFunction3.default)(label)) {
          return label(props);
        } else if ((0, _isString3.default)(label) || (0, _isNumber3.default)(label)) {
          return _react2.default.createElement('g', { className: 'recharts-reference-dot-label' }, _react2.default.createElement(_Text2.default, props, label));
        }
  
        return null;
      }
    }, {
      key: 'renderDot',
      value: function renderDot(option, props) {
        var dot = void 0;
  
        if (_react2.default.isValidElement(option)) {
          dot = _react2.default.cloneElement(option, props);
        } else if ((0, _isFunction3.default)(option)) {
          dot = option(props);
        } else {
          dot = _react2.default.createElement(_Dot2.default, _extends({}, props, {
            cx: props.cx,
            cy: props.cy,
            className: 'recharts-reference-dot-dot'
          }));
        }
  
        return dot;
      }
    }, {
      key: 'render',
      value: function render() {
        var _props3 = this.props;
        var x = _props3.x;
        var y = _props3.y;
  
        var isX = (0, _isNumber3.default)(x) || (0, _isString3.default)(x);
        var isY = (0, _isNumber3.default)(y) || (0, _isString3.default)(y);
  
        if (!isX || !isY) {
          return null;
        }
  
        var coordinate = this.getCoordinate();
  
        if (!coordinate) {
          return null;
        }
  
        var shape = this.props.shape;
  
        return _react2.default.createElement(_Layer2.default, { className: 'recharts-reference-dot' }, this.renderDot(shape, _extends({}, (0, _ReactUtils.getPresentationAttributes)(this.props), coordinate)), this.renderLabel(coordinate));
      }
    }]);
  
    return ReferenceDot;
  }(_react.Component), _class2.displayName = 'ReferenceDot', _class2.propTypes = _extends({}, _ReactUtils.PRESENTATION_ATTRIBUTES, {
    r: _react.PropTypes.number,
  
    label: _react.PropTypes.oneOfType([_react.PropTypes.number, _react.PropTypes.string, _react.PropTypes.func, _react.PropTypes.element]),
  
    xAxis: _react.PropTypes.object,
    yAxis: _react.PropTypes.object,
  
    isFront: _react.PropTypes.bool,
    alwaysShow: _react.PropTypes.bool,
    x: _react.PropTypes.oneOfType([_react.PropTypes.number, _react.PropTypes.string]),
    y: _react.PropTypes.oneOfType([_react.PropTypes.number, _react.PropTypes.string]),
  
    yAxisId: _react.PropTypes.oneOfType([_react.PropTypes.string, _react.PropTypes.number]),
    xAxisId: _react.PropTypes.oneOfType([_react.PropTypes.string, _react.PropTypes.number]),
    shape: _react.PropTypes.oneOfType([_react.PropTypes.func, _react.PropTypes.element])
  }), _class2.defaultProps = {
    isFront: false,
    alwaysShow: false,
    xAxisId: 0,
    yAxisId: 0,
    r: 10,
    fill: '#fff',
    stroke: '#ccc',
    fillOpacity: 1,
    strokeWidth: 1
  }, _temp)) || _class;
  
  exports.default = ReferenceDot;

/***/ }),
/* 121 */
/***/ (function(module, exports, __webpack_require__) {

  'use strict';
  
  var _getPrototypeOf = __webpack_require__(29);
  
  var _getPrototypeOf2 = _interopRequireDefault2(_getPrototypeOf);
  
  var _setPrototypeOf = __webpack_require__(59);
  
  var _setPrototypeOf2 = _interopRequireDefault2(_setPrototypeOf);
  
  var _create = __webpack_require__(60);
  
  var _create2 = _interopRequireDefault2(_create);
  
  var _typeof2 = __webpack_require__(61);
  
  var _typeof3 = _interopRequireDefault2(_typeof2);
  
  var _defineProperty = __webpack_require__(62);
  
  var _defineProperty2 = _interopRequireDefault2(_defineProperty);
  
  var _assign = __webpack_require__(23);
  
  var _assign2 = _interopRequireDefault2(_assign);
  
  function _interopRequireDefault2(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  
  var _isFunction2 = __webpack_require__(69);
  
  var _isFunction3 = _interopRequireDefault(_isFunction2);
  
  var _isString2 = __webpack_require__(66);
  
  var _isString3 = _interopRequireDefault(_isString2);
  
  var _isNumber2 = __webpack_require__(67);
  
  var _isNumber3 = _interopRequireDefault(_isNumber2);
  
  var _extends = _assign2.default || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }return target;
  };
  
  var _createClass = function () {
    function defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;(0, _defineProperty2.default)(target, descriptor.key, descriptor);
      }
    }return function (Constructor, protoProps, staticProps) {
      if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
    };
  }();
  
  var _class, _class2, _temp; /**
                               * @fileOverview Reference Line
                               */
  
  var _react = __webpack_require__(11);
  
  var _react2 = _interopRequireDefault(_react);
  
  var _PureRender = __webpack_require__(72);
  
  var _PureRender2 = _interopRequireDefault(_PureRender);
  
  var _Layer = __webpack_require__(87);
  
  var _Layer2 = _interopRequireDefault(_Layer);
  
  var _Dot = __webpack_require__(106);
  
  var _Dot2 = _interopRequireDefault(_Dot);
  
  var _Text = __webpack_require__(91);
  
  var _Text2 = _interopRequireDefault(_Text);
  
  var _ReactUtils = __webpack_require__(64);
  
  var _DataUtils = __webpack_require__(96);
  
  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
  }
  
  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }
  
  function _possibleConstructorReturn(self, call) {
    if (!self) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }return call && ((typeof call === 'undefined' ? 'undefined' : (0, _typeof3.default)(call)) === "object" || typeof call === "function") ? call : self;
  }
  
  function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === 'undefined' ? 'undefined' : (0, _typeof3.default)(superClass)));
    }subClass.prototype = (0, _create2.default)(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) _setPrototypeOf2.default ? (0, _setPrototypeOf2.default)(subClass, superClass) : subClass.__proto__ = superClass;
  }
  
  var isValidateValue = function isValidateValue(v) {
    return (0, _isNumber3.default)(v) || (0, _isString3.default)(v);
  };
  
  var ReferenceArea = (0, _PureRender2.default)(_class = (_temp = _class2 = function (_Component) {
    _inherits(ReferenceArea, _Component);
  
    function ReferenceArea() {
      _classCallCheck(this, ReferenceArea);
  
      return _possibleConstructorReturn(this, (ReferenceArea.__proto__ || (0, _getPrototypeOf2.default)(ReferenceArea)).apply(this, arguments));
    }
  
    _createClass(ReferenceArea, [{
      key: 'getRect',
      value: function getRect(hasX, hasY) {
        var _props = this.props;
        var xValue1 = _props.x1;
        var xValue2 = _props.x2;
        var yValue1 = _props.y1;
        var yValue2 = _props.y2;
        var xAxis = _props.xAxis;
        var yAxis = _props.yAxis;
  
        var xScale = xAxis.scale;
        var yScale = yAxis.scale;
        var xOffset = xScale.bandwidth ? xScale.bandwidth() / 2 : 0;
        var yOffset = yScale.bandwidth ? yScale.bandwidth() / 2 : 0;
        var xRange = xScale.range();
        var yRange = yScale.range();
        var x1 = void 0;
        var x2 = void 0;
        var y1 = void 0;
        var y2 = void 0;
  
        if (hasX && isValidateValue(xValue1)) {
          x1 = xScale(xValue1) + xOffset;
        } else if (hasY) {
          x1 = xRange[0];
        }
        if (hasX && isValidateValue(xValue2)) {
          x2 = xScale(xValue2) + xOffset;
        } else if (hasY) {
          x2 = xRange[1];
        }
        if (hasY && isValidateValue(yValue1)) {
          y1 = yScale(yValue1) + yOffset;
        } else if (hasX) {
          y1 = yRange[0];
        }
        if (hasY && isValidateValue(yValue2)) {
          y2 = yScale(yValue2) + yOffset;
        } else if (hasX) {
          y2 = yRange[1];
        }
  
        if ((0, _DataUtils.validateCoordinateInRange)(x1, xScale) && (0, _DataUtils.validateCoordinateInRange)(x2, xScale) && (0, _DataUtils.validateCoordinateInRange)(y1, yScale) && (0, _DataUtils.validateCoordinateInRange)(y2, yScale)) {
          return {
            x: Math.min(x1, x2),
            y: Math.min(y1, y2),
            width: Math.abs(x2 - x1),
            height: Math.abs(y2 - y1)
          };
        }
  
        return null;
      }
    }, {
      key: 'renderLabel',
      value: function renderLabel(_ref) {
        var x = _ref.x;
        var y = _ref.y;
        var width = _ref.width;
        var height = _ref.height;
        var _props2 = this.props;
        var label = _props2.label;
        var stroke = _props2.stroke;
  
        var props = _extends({}, label, {
          stroke: 'none',
          fill: stroke,
          x: x + width / 2,
          y: y + height / 2,
          textAnchor: 'middle'
        });
  
        if (_react2.default.isValidElement(label)) {
          return _react2.default.cloneElement(label, props);
        } else if ((0, _isFunction3.default)(label)) {
          return label(props);
        } else if ((0, _isString3.default)(label) || (0, _isNumber3.default)(label)) {
          return _react2.default.createElement('g', { className: 'recharts-reference-area-label' }, _react2.default.createElement(_Text2.default, props, label));
        }
  
        return null;
      }
    }, {
      key: 'renderRect',
      value: function renderRect(option, props) {
        var rect = void 0;
  
        if (_react2.default.isValidElement(option)) {
          rect = _react2.default.cloneElement(option, props);
        } else if ((0, _isFunction3.default)(option)) {
          rect = option(props);
        } else {
          rect = _react2.default.createElement('rect', _extends({}, props, {
            className: 'recharts-reference-area-rect'
          }));
        }
  
        return rect;
      }
    }, {
      key: 'render',
      value: function render() {
        var _props3 = this.props;
        var x1 = _props3.x1;
        var x2 = _props3.x2;
        var y1 = _props3.y1;
        var y2 = _props3.y2;
  
        var hasX = isValidateValue(x1) && isValidateValue(x2);
        var hasY = isValidateValue(y1) && isValidateValue(y2);
  
        if (!hasX && !hasY) {
          return null;
        }
  
        var rect = this.getRect(hasX, hasY);
  
        if (!rect) {
          return null;
        }
  
        var shape = this.props.shape;
  
        return _react2.default.createElement(_Layer2.default, { className: 'recharts-reference-area' }, this.renderRect(shape, _extends({}, (0, _ReactUtils.getPresentationAttributes)(this.props), rect)), this.renderLabel(rect));
      }
    }]);
  
    return ReferenceArea;
  }(_react.Component), _class2.displayName = 'ReferenceArea', _class2.propTypes = _extends({}, _ReactUtils.PRESENTATION_ATTRIBUTES, {
    viewBox: _react.PropTypes.shape({
      x: _react.PropTypes.number,
      y: _react.PropTypes.number,
      width: _react.PropTypes.number,
      height: _react.PropTypes.number
    }),
  
    label: _react.PropTypes.oneOfType([_react.PropTypes.number, _react.PropTypes.string, _react.PropTypes.func, _react.PropTypes.element]),
  
    xAxis: _react.PropTypes.object,
    yAxis: _react.PropTypes.object,
  
    isFront: _react.PropTypes.bool,
    alwaysShow: _react.PropTypes.bool,
    x1: _react.PropTypes.oneOfType([_react.PropTypes.number, _react.PropTypes.string]),
    x2: _react.PropTypes.oneOfType([_react.PropTypes.number, _react.PropTypes.string]),
    y1: _react.PropTypes.oneOfType([_react.PropTypes.number, _react.PropTypes.string]),
    y2: _react.PropTypes.oneOfType([_react.PropTypes.number, _react.PropTypes.string]),
  
    yAxisId: _react.PropTypes.oneOfType([_react.PropTypes.string, _react.PropTypes.number]),
    xAxisId: _react.PropTypes.oneOfType([_react.PropTypes.string, _react.PropTypes.number]),
    shape: _react.PropTypes.oneOfType([_react.PropTypes.func, _react.PropTypes.element])
  }), _class2.defaultProps = {
    isFront: false,
    alwaysShow: false,
    xAxisId: 0,
    yAxisId: 0,
    r: 10,
    fill: '#ccc',
    fillOpacity: 0.5,
    stroke: 'none',
    strokeWidth: 1
  }, _temp)) || _class;
  
  exports.default = ReferenceArea;

/***/ }),
/* 122 */
/***/ (function(module, exports, __webpack_require__) {

  'use strict';
  
  var _sign = __webpack_require__(86);
  
  var _sign2 = _interopRequireDefault2(_sign);
  
  var _getPrototypeOf = __webpack_require__(29);
  
  var _getPrototypeOf2 = _interopRequireDefault2(_getPrototypeOf);
  
  var _setPrototypeOf = __webpack_require__(59);
  
  var _setPrototypeOf2 = _interopRequireDefault2(_setPrototypeOf);
  
  var _create = __webpack_require__(60);
  
  var _create2 = _interopRequireDefault2(_create);
  
  var _typeof2 = __webpack_require__(61);
  
  var _typeof3 = _interopRequireDefault2(_typeof2);
  
  var _defineProperty = __webpack_require__(62);
  
  var _defineProperty2 = _interopRequireDefault2(_defineProperty);
  
  var _assign = __webpack_require__(23);
  
  var _assign2 = _interopRequireDefault2(_assign);
  
  function _interopRequireDefault2(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  
  var _isString2 = __webpack_require__(66);
  
  var _isString3 = _interopRequireDefault(_isString2);
  
  var _isFunction2 = __webpack_require__(69);
  
  var _isFunction3 = _interopRequireDefault(_isFunction2);
  
  var _isNumber2 = __webpack_require__(67);
  
  var _isNumber3 = _interopRequireDefault(_isNumber2);
  
  var _extends = _assign2.default || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }return target;
  };
  
  var _createClass = function () {
    function defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;(0, _defineProperty2.default)(target, descriptor.key, descriptor);
      }
    }return function (Constructor, protoProps, staticProps) {
      if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
    };
  }();
  
  var _class, _class2, _temp; /**
                               * @fileOverview Cartesian Axis
                               */
  
  var _react = __webpack_require__(11);
  
  var _react2 = _interopRequireDefault(_react);
  
  var _PureRender = __webpack_require__(72);
  
  var _PureRender2 = _interopRequireDefault(_PureRender);
  
  var _DOMUtils = __webpack_require__(80);
  
  var _Layer = __webpack_require__(87);
  
  var _Layer2 = _interopRequireDefault(_Layer);
  
  var _Text = __webpack_require__(91);
  
  var _Text2 = _interopRequireDefault(_Text);
  
  var _ReactUtils = __webpack_require__(64);
  
  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
  }
  
  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }
  
  function _possibleConstructorReturn(self, call) {
    if (!self) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }return call && ((typeof call === 'undefined' ? 'undefined' : (0, _typeof3.default)(call)) === "object" || typeof call === "function") ? call : self;
  }
  
  function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === 'undefined' ? 'undefined' : (0, _typeof3.default)(superClass)));
    }subClass.prototype = (0, _create2.default)(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) _setPrototypeOf2.default ? (0, _setPrototypeOf2.default)(subClass, superClass) : subClass.__proto__ = superClass;
  }
  
  var CartesianAxis = (0, _PureRender2.default)(_class = (_temp = _class2 = function (_Component) {
    _inherits(CartesianAxis, _Component);
  
    function CartesianAxis() {
      _classCallCheck(this, CartesianAxis);
  
      return _possibleConstructorReturn(this, (CartesianAxis.__proto__ || (0, _getPrototypeOf2.default)(CartesianAxis)).apply(this, arguments));
    }
  
    _createClass(CartesianAxis, [{
      key: 'getTickLineCoord',
  
      /**
       * Calculate the coordinates of endpoints in ticks
       * @param  {Object} data The data of a simple tick
       * @return {Object} (x1, y1): The coordinate of endpoint close to tick text
       *  (x2, y2): The coordinate of endpoint close to axis
       */
      value: function getTickLineCoord(data) {
        var _props = this.props;
        var x = _props.x;
        var y = _props.y;
        var width = _props.width;
        var height = _props.height;
        var orientation = _props.orientation;
        var tickSize = _props.tickSize;
  
        var x1 = void 0;
        var x2 = void 0;
        var y1 = void 0;
        var y2 = void 0;
  
        var finalTickSize = data.tickSize || tickSize;
  
        switch (orientation) {
          case 'top':
            x1 = x2 = data.coordinate;
            y1 = y + height - finalTickSize;
            y2 = y + height;
            break;
          case 'left':
            y1 = y2 = data.coordinate;
            x1 = x + width - finalTickSize;
            x2 = x + width;
            break;
          case 'right':
            y1 = y2 = data.coordinate;
            x1 = x + finalTickSize;
            x2 = x;
            break;
          default:
            x1 = x2 = data.coordinate;
            y1 = y + finalTickSize;
            y2 = y;
            break;
        }
  
        return { x1: x1, y1: y1, x2: x2, y2: y2 };
      }
    }, {
      key: 'getBaseline',
      value: function getBaseline() {
        var orientation = this.props.orientation;
  
        var baseline = void 0;
  
        switch (orientation) {
          case 'top':
            baseline = 'auto';
            break;
          case 'bottom':
            baseline = 'text-before-edge';
            break;
          default:
            baseline = 'central';
            break;
        }
  
        return baseline;
      }
    }, {
      key: 'getTickTextAnchor',
      value: function getTickTextAnchor() {
        var orientation = this.props.orientation;
  
        var textAnchor = void 0;
  
        switch (orientation) {
          case 'left':
            textAnchor = 'end';
            break;
          case 'right':
            textAnchor = 'start';
            break;
          default:
            textAnchor = 'middle';
            break;
        }
  
        return textAnchor;
      }
    }, {
      key: 'getTickVerticalAnchor',
      value: function getTickVerticalAnchor() {
        var orientation = this.props.orientation;
  
        var verticalAnchor = 'end';
  
        switch (orientation) {
          case 'left':
          case 'right':
            verticalAnchor = 'middle';
            break;
          case 'top':
            verticalAnchor = 'end';
            break;
          default:
            verticalAnchor = 'start';
            break;
        }
  
        return verticalAnchor;
      }
    }, {
      key: 'getLabelProps',
      value: function getLabelProps() {
        var _props2 = this.props;
        var x = _props2.x;
        var y = _props2.y;
        var width = _props2.width;
        var height = _props2.height;
        var orientation = _props2.orientation;
  
        switch (orientation) {
          case 'left':
            return { x: x + width, y: y - 6, textAnchor: 'middle' };
          case 'right':
            return { x: x, y: y - 6, textAnchor: 'middle' };
          case 'top':
            return { x: x + width + 6, y: y + height + 6, textAnchor: 'start' };
          default:
            return { x: x + width + 6, y: y + 6, textAnchor: 'start' };
        }
      }
    }, {
      key: 'renderAxisLine',
      value: function renderAxisLine() {
        var _props3 = this.props;
        var x = _props3.x;
        var y = _props3.y;
        var width = _props3.width;
        var height = _props3.height;
        var orientation = _props3.orientation;
        var axisLine = _props3.axisLine;
  
        var props = _extends({}, (0, _ReactUtils.getPresentationAttributes)(this.props), {
          fill: 'none'
        }, (0, _ReactUtils.getPresentationAttributes)(axisLine));
  
        switch (orientation) {
          case 'top':
            props = _extends({}, props, { x1: x, y1: y + height, x2: x + width, y2: y + height });
            break;
          case 'left':
            props = _extends({}, props, { x1: x + width, y1: y, x2: x + width, y2: y + height });
            break;
          case 'right':
            props = _extends({}, props, { x1: x, y1: y, x2: x, y2: y + height });
            break;
          default:
            props = _extends({}, props, { x1: x, y1: y, x2: x + width, y2: y });
            break;
        }
  
        return _react2.default.createElement('line', _extends({ className: 'recharts-cartesian-axis-line' }, props));
      }
    }, {
      key: 'renderTickItem',
      value: function renderTickItem(option, props, value) {
        var tickItem = void 0;
  
        if (_react2.default.isValidElement(option)) {
          tickItem = _react2.default.cloneElement(option, props);
        } else if ((0, _isFunction3.default)(option)) {
          tickItem = option(props);
        } else {
          tickItem = _react2.default.createElement(_Text2.default, _extends({}, props, {
            className: 'recharts-cartesian-axis-tick-value'
          }), value);
        }
  
        return tickItem;
      }
    }, {
      key: 'renderTicks',
      value: function renderTicks() {
        var _this2 = this;
  
        var _props4 = this.props;
        var ticks = _props4.ticks;
        var tickLine = _props4.tickLine;
        var stroke = _props4.stroke;
        var tick = _props4.tick;
        var tickFormatter = _props4.tickFormatter;
  
        var finalTicks = CartesianAxis.getTicks(this.props);
        var textAnchor = this.getTickTextAnchor();
        var verticalAnchor = this.getTickVerticalAnchor();
        var axisProps = (0, _ReactUtils.getPresentationAttributes)(this.props);
        var customTickProps = (0, _ReactUtils.getPresentationAttributes)(tick);
        var tickLineProps = _extends({}, axisProps, { fill: 'none' }, (0, _ReactUtils.getPresentationAttributes)(tickLine));
        var items = finalTicks.map(function (entry, i) {
          var lineCoord = _this2.getTickLineCoord(entry);
          var tickProps = _extends({
            textAnchor: textAnchor,
            verticalAnchor: verticalAnchor
          }, axisProps, {
            stroke: 'none', fill: stroke
          }, customTickProps, {
            index: i, x: lineCoord.x1, y: lineCoord.y1, payload: entry
          });
  
          return _react2.default.createElement('g', { className: 'recharts-cartesian-axis-tick', key: 'tick-' + i }, tickLine && _react2.default.createElement('line', _extends({
            className: 'recharts-cartesian-axis-tick-line'
          }, tickLineProps, lineCoord)), tick && _this2.renderTickItem(tick, tickProps, (0, _isFunction3.default)(tickFormatter) ? tickFormatter(entry.value) : entry.value));
        });
  
        return _react2.default.createElement('g', { className: 'recharts-cartesian-axis-ticks' }, items);
      }
    }, {
      key: 'renderLabel',
      value: function renderLabel() {
        var _props5 = this.props;
        var label = _props5.label;
        var stroke = _props5.stroke;
        var orientation = _props5.orientation;
        var viewBox = _props5.viewBox;
  
        var presentation = (0, _ReactUtils.getPresentationAttributes)(this.props);
  
        if (_react2.default.isValidElement(label)) {
          return _react2.default.cloneElement(label, _extends({}, presentation, { orientation: orientation, viewBox: viewBox }));
        } else if ((0, _isFunction3.default)(label)) {
          return label(this.props);
        } else if ((0, _isString3.default)(label) || (0, _isNumber3.default)(label)) {
          var props = _extends({}, presentation, {
            stroke: 'none',
            fill: stroke
          }, this.getLabelProps());
  
          return _react2.default.createElement('g', { className: 'recharts-cartesian-axis-label' }, _react2.default.createElement(_Text2.default, props, label));
        }
  
        return null;
      }
    }, {
      key: 'render',
      value: function render() {
        var _props6 = this.props;
        var axisLine = _props6.axisLine;
        var width = _props6.width;
        var height = _props6.height;
        var ticks = _props6.ticks;
        var label = _props6.label;
  
        if (width <= 0 || height <= 0 || !ticks || !ticks.length) {
          return null;
        }
  
        return _react2.default.createElement(_Layer2.default, { className: 'recharts-cartesian-axis' }, axisLine && this.renderAxisLine(), this.renderTicks(), this.renderLabel());
      }
    }], [{
      key: 'getTicks',
      value: function getTicks(props) {
        var ticks = props.ticks;
        var viewBox = props.viewBox;
        var minTickGap = props.minTickGap;
        var orientation = props.orientation;
        var interval = props.interval;
        var tickFormatter = props.tickFormatter;
  
        if (!ticks || !ticks.length) {
          return [];
        }
  
        return (0, _isNumber3.default)(interval) || (0, _ReactUtils.isSsr)() ? CartesianAxis.getNumberIntervalTicks(ticks, (0, _isNumber3.default)(interval) ? interval : 0) : CartesianAxis.getAutoIntervalTicks(ticks, tickFormatter, viewBox, orientation, minTickGap);
      }
    }, {
      key: 'getNumberIntervalTicks',
      value: function getNumberIntervalTicks(ticks, interval) {
        return ticks.filter(function (entry, i) {
          return i % (interval + 1) === 0;
        });
      }
    }, {
      key: 'getAutoIntervalTicks',
      value: function getAutoIntervalTicks(ticks, tickFormatter, viewBox, orientation, minTickGap) {
        var x = viewBox.x;
        var y = viewBox.y;
        var width = viewBox.width;
        var height = viewBox.height;
  
        var sizeKey = orientation === 'top' || orientation === 'bottom' ? 'width' : 'height';
        var sign = ticks.length >= 2 ? (0, _sign2.default)(ticks[1].coordinate - ticks[0].coordinate) : 1;
  
        var pointer = void 0;
  
        if (sign === 1) {
          pointer = sizeKey === 'width' ? x : y;
        } else {
          pointer = sizeKey === 'width' ? x + width : y + height;
        }
  
        return ticks.filter(function (entry) {
          var tickContent = (0, _isFunction3.default)(tickFormatter) ? tickFormatter(entry.value) : entry.value;
          var tickSize = (0, _DOMUtils.getStringSize)(tickContent)[sizeKey];
          var isShow = sign === 1 ? entry.coordinate - tickSize / 2 >= pointer : entry.coordinate + tickSize / 2 <= pointer;
  
          if (isShow) {
            pointer = entry.coordinate + sign * tickSize / 2 + minTickGap;
          }
  
          return isShow;
        });
      }
    }]);
  
    return CartesianAxis;
  }(_react.Component), _class2.displayName = 'CartesianAxis', _class2.propTypes = _extends({}, _ReactUtils.PRESENTATION_ATTRIBUTES, {
    x: _react.PropTypes.number,
    y: _react.PropTypes.number,
    width: _react.PropTypes.number,
    height: _react.PropTypes.number,
    orientation: _react.PropTypes.oneOf(['top', 'bottom', 'left', 'right']),
    viewBox: _react.PropTypes.shape({
      x: _react.PropTypes.number,
      y: _react.PropTypes.number,
      width: _react.PropTypes.number,
      height: _react.PropTypes.number
    }),
    label: _react.PropTypes.oneOfType([_react.PropTypes.number, _react.PropTypes.string, _react.PropTypes.func, _react.PropTypes.element]),
    tick: _react.PropTypes.oneOfType([_react.PropTypes.bool, _react.PropTypes.func, _react.PropTypes.object, _react.PropTypes.element]),
    axisLine: _react.PropTypes.oneOfType([_react.PropTypes.bool, _react.PropTypes.object]),
    tickLine: _react.PropTypes.oneOfType([_react.PropTypes.bool, _react.PropTypes.object]),
  
    minLabelGap: _react.PropTypes.number,
    ticks: _react.PropTypes.arrayOf(_react.PropTypes.shape({
      value: _react.PropTypes.any,
      coordinate: _react.PropTypes.value
    })),
    tickSize: _react.PropTypes.number,
    stroke: _react.PropTypes.string,
    tickFormatter: _react.PropTypes.func,
    interval: _react.PropTypes.oneOfType([_react.PropTypes.number, _react.PropTypes.string])
  }), _class2.defaultProps = {
    x: 0,
    y: 0,
    width: 0,
    height: 0,
    viewBox: { x: 0, y: 0, width: 0, height: 0 },
    // The orientation of axis
    orientation: 'bottom',
    // The ticks
    ticks: [],
  
    stroke: '#666',
    tickLine: true,
    axisLine: true,
    tick: true,
  
    minTickGap: 5,
    // The width or height of tick
    tickSize: 6,
    interval: 'auto'
  }, _temp)) || _class;
  
  exports.default = CartesianAxis;

/***/ }),
/* 123 */
/***/ (function(module, exports, __webpack_require__) {

  'use strict';
  
  var _getPrototypeOf = __webpack_require__(29);
  
  var _getPrototypeOf2 = _interopRequireDefault2(_getPrototypeOf);
  
  var _setPrototypeOf = __webpack_require__(59);
  
  var _setPrototypeOf2 = _interopRequireDefault2(_setPrototypeOf);
  
  var _create = __webpack_require__(60);
  
  var _create2 = _interopRequireDefault2(_create);
  
  var _typeof2 = __webpack_require__(61);
  
  var _typeof3 = _interopRequireDefault2(_typeof2);
  
  var _defineProperty = __webpack_require__(62);
  
  var _defineProperty2 = _interopRequireDefault2(_defineProperty);
  
  var _assign = __webpack_require__(23);
  
  var _assign2 = _interopRequireDefault2(_assign);
  
  function _interopRequireDefault2(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  
  var _extends = _assign2.default || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }return target;
  };
  
  var _createClass = function () {
    function defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;(0, _defineProperty2.default)(target, descriptor.key, descriptor);
      }
    }return function (Constructor, protoProps, staticProps) {
      if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
    };
  }();
  
  var _class, _class2, _temp; /**
                               * @fileOverview Cartesian Grid
                               */
  
  var _react = __webpack_require__(11);
  
  var _react2 = _interopRequireDefault(_react);
  
  var _PureRender = __webpack_require__(72);
  
  var _PureRender2 = _interopRequireDefault(_PureRender);
  
  var _ReactUtils = __webpack_require__(64);
  
  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
  }
  
  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }
  
  function _possibleConstructorReturn(self, call) {
    if (!self) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }return call && ((typeof call === "undefined" ? "undefined" : (0, _typeof3.default)(call)) === "object" || typeof call === "function") ? call : self;
  }
  
  function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : (0, _typeof3.default)(superClass)));
    }subClass.prototype = (0, _create2.default)(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) _setPrototypeOf2.default ? (0, _setPrototypeOf2.default)(subClass, superClass) : subClass.__proto__ = superClass;
  }
  
  var CartesianGrid = (0, _PureRender2.default)(_class = (_temp = _class2 = function (_Component) {
    _inherits(CartesianGrid, _Component);
  
    function CartesianGrid() {
      _classCallCheck(this, CartesianGrid);
  
      return _possibleConstructorReturn(this, (CartesianGrid.__proto__ || (0, _getPrototypeOf2.default)(CartesianGrid)).apply(this, arguments));
    }
  
    _createClass(CartesianGrid, [{
      key: 'renderHorizontal',
  
      /**
       * Draw the horizontal grid lines
       * @return {Group} Horizontal lines
       */
      value: function renderHorizontal() {
        var _props = this.props;
        var x = _props.x;
        var width = _props.width;
        var horizontalPoints = _props.horizontalPoints;
  
        if (!horizontalPoints || !horizontalPoints.length) {
          return null;
        }
  
        var props = (0, _ReactUtils.getPresentationAttributes)(this.props);
        var items = horizontalPoints.map(function (entry, i) {
          return _react2.default.createElement('line', _extends({}, props, { key: 'line-' + i, x1: x, y1: entry, x2: x + width, y2: entry }));
        });
  
        return _react2.default.createElement('g', { className: 'recharts-cartesian-grid-horizontal' }, items);
      }
  
      /**
       * Draw vertical grid lines
       * @return {Group} Vertical lines
       */
  
    }, {
      key: 'renderVertical',
      value: function renderVertical() {
        var _props2 = this.props;
        var y = _props2.y;
        var height = _props2.height;
        var verticalPoints = _props2.verticalPoints;
  
        if (!verticalPoints || !verticalPoints.length) {
          return null;
        }
  
        var props = (0, _ReactUtils.getPresentationAttributes)(this.props);
  
        var items = verticalPoints.map(function (entry, i) {
          return _react2.default.createElement('line', _extends({}, props, { key: 'line-' + i, x1: entry, y1: y, x2: entry, y2: y + height }));
        });
  
        return _react2.default.createElement('g', { className: 'recharts-cartesian-grid-vertical' }, items);
      }
    }, {
      key: 'render',
      value: function render() {
        var _props3 = this.props;
        var width = _props3.width;
        var height = _props3.height;
        var horizontal = _props3.horizontal;
        var vertical = _props3.vertical;
  
        if (width <= 0 || height <= 0) {
          return null;
        }
  
        return _react2.default.createElement('g', { className: 'recharts-cartesian-grid' }, horizontal && this.renderHorizontal(), vertical && this.renderVertical());
      }
    }]);
  
    return CartesianGrid;
  }(_react.Component), _class2.displayName = 'CartesianGrid', _class2.propTypes = _extends({}, _ReactUtils.PRESENTATION_ATTRIBUTES, {
    x: _react.PropTypes.number,
    y: _react.PropTypes.number,
    width: _react.PropTypes.number,
    height: _react.PropTypes.number,
    horizontal: _react.PropTypes.bool,
    vertical: _react.PropTypes.bool,
    horizontalPoints: _react.PropTypes.arrayOf(_react.PropTypes.number),
    verticalPoints: _react.PropTypes.arrayOf(_react.PropTypes.number)
  }), _class2.defaultProps = {
    x: 0,
    y: 0,
    width: 0,
    height: 0,
    horizontal: true,
    vertical: true,
    // The ordinates of horizontal grid lines
    horizontalPoints: [],
    // The abscissas of vertical grid lines
    verticalPoints: [],
  
    stroke: '#ccc',
    fill: 'none'
  }, _temp)) || _class;
  
  exports.default = CartesianGrid;

/***/ }),
/* 124 */
/***/ (function(module, exports, __webpack_require__) {

  'use strict';
  
  var _getPrototypeOf = __webpack_require__(29);
  
  var _getPrototypeOf2 = _interopRequireDefault2(_getPrototypeOf);
  
  var _setPrototypeOf = __webpack_require__(59);
  
  var _setPrototypeOf2 = _interopRequireDefault2(_setPrototypeOf);
  
  var _create = __webpack_require__(60);
  
  var _create2 = _interopRequireDefault2(_create);
  
  var _from = __webpack_require__(81);
  
  var _from2 = _interopRequireDefault2(_from);
  
  var _defineProperty = __webpack_require__(62);
  
  var _defineProperty2 = _interopRequireDefault2(_defineProperty);
  
  var _assign = __webpack_require__(23);
  
  var _assign2 = _interopRequireDefault2(_assign);
  
  var _iterator = __webpack_require__(73);
  
  var _iterator2 = _interopRequireDefault2(_iterator);
  
  var _typeof3 = __webpack_require__(61);
  
  var _typeof4 = _interopRequireDefault2(_typeof3);
  
  var _symbol = __webpack_require__(74);
  
  var _symbol2 = _interopRequireDefault2(_symbol);
  
  function _interopRequireDefault2(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  
  var _isFunction2 = __webpack_require__(69);
  
  var _isFunction3 = _interopRequireDefault(_isFunction2);
  
  var _typeof = typeof _symbol2.default === "function" && (0, _typeof4.default)(_iterator2.default) === "symbol" ? function (obj) {
    return typeof obj === 'undefined' ? 'undefined' : (0, _typeof4.default)(obj);
  } : function (obj) {
    return obj && typeof _symbol2.default === "function" && obj.constructor === _symbol2.default ? "symbol" : typeof obj === 'undefined' ? 'undefined' : (0, _typeof4.default)(obj);
  };
  
  var _extends = _assign2.default || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }return target;
  };
  
  var _createClass = function () {
    function defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;(0, _defineProperty2.default)(target, descriptor.key, descriptor);
      }
    }return function (Constructor, protoProps, staticProps) {
      if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
    };
  }();
  
  var _class, _class2, _temp; /**
                               * @fileOverview Line
                               */
  
  var _react = __webpack_require__(11);
  
  var _react2 = _interopRequireDefault(_react);
  
  var _reactDom = __webpack_require__(104);
  
  var _reactSmooth = __webpack_require__(84);
  
  var _reactSmooth2 = _interopRequireDefault(_reactSmooth);
  
  var _classnames = __webpack_require__(46);
  
  var _classnames2 = _interopRequireDefault(_classnames);
  
  var _PureRender = __webpack_require__(72);
  
  var _PureRender2 = _interopRequireDefault(_PureRender);
  
  var _Curve = __webpack_require__(90);
  
  var _Curve2 = _interopRequireDefault(_Curve);
  
  var _Dot = __webpack_require__(106);
  
  var _Dot2 = _interopRequireDefault(_Dot);
  
  var _Layer = __webpack_require__(87);
  
  var _Layer2 = _interopRequireDefault(_Layer);
  
  var _Text = __webpack_require__(91);
  
  var _Text2 = _interopRequireDefault(_Text);
  
  var _ReactUtils = __webpack_require__(64);
  
  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
  }
  
  function _objectWithoutProperties(obj, keys) {
    var target = {};for (var i in obj) {
      if (keys.indexOf(i) >= 0) continue;if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;target[i] = obj[i];
    }return target;
  }
  
  function _toConsumableArray(arr) {
    if (Array.isArray(arr)) {
      for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) {
        arr2[i] = arr[i];
      }return arr2;
    } else {
      return (0, _from2.default)(arr);
    }
  }
  
  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }
  
  function _possibleConstructorReturn(self, call) {
    if (!self) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }return call && ((typeof call === 'undefined' ? 'undefined' : (0, _typeof4.default)(call)) === "object" || typeof call === "function") ? call : self;
  }
  
  function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === 'undefined' ? 'undefined' : (0, _typeof4.default)(superClass)));
    }subClass.prototype = (0, _create2.default)(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) _setPrototypeOf2.default ? (0, _setPrototypeOf2.default)(subClass, superClass) : subClass.__proto__ = superClass;
  }
  
  var FACTOR = 1.0000001;
  
  var Line = (0, _PureRender2.default)(_class = (_temp = _class2 = function (_Component) {
    _inherits(Line, _Component);
  
    function Line(props, ctx) {
      _classCallCheck(this, Line);
  
      var _this = _possibleConstructorReturn(this, (Line.__proto__ || (0, _getPrototypeOf2.default)(Line)).call(this, props, ctx));
  
      _this.handleAnimationEnd = function () {
        _this.setState({ isAnimationFinished: true });
      };
  
      _this.handleAnimationStart = function () {
        _this.setState({ isAnimationFinished: false });
      };
  
      var points = props.points;
  
      _this.state = {
        isAnimationFinished: true,
        totalLength: 0
      };
      return _this;
    }
    /* eslint-disable  react/no-did-mount-set-state */
  
    _createClass(Line, [{
      key: 'componentDidMount',
      value: function componentDidMount() {
        var isAnimationActive = this.props.isAnimationActive;
  
        if (!isAnimationActive) {
          return;
        }
  
        var totalLength = this.getTotalLength();
  
        this.setState({ totalLength: totalLength });
      }
      /* eslint-disable  react/no-did-update-set-state */
  
    }, {
      key: 'componentDidUpdate',
      value: function componentDidUpdate(prevProps, prevState) {
        var _props = this.props;
        var animationId = _props.animationId;
        var points = _props.points;
  
        if (animationId !== prevProps.animationId || points !== prevProps.points) {
          var cur = this.getTotalLength();
          var totalLength = prevState.totalLength;
          // A hack method to trigger animation
  
          this.setState({
            totalLength: cur === totalLength ? cur * FACTOR : cur
          });
        }
      }
    }, {
      key: 'getTotalLength',
      value: function getTotalLength() {
        var curveDom = (0, _reactDom.findDOMNode)(this.refs.animate);
        var totalLength = curveDom && curveDom.getTotalLength && curveDom.getTotalLength() || 0;
  
        return totalLength;
      }
    }, {
      key: 'getStrokeDasharray',
      value: function getStrokeDasharray(length, totalLength, lines) {
        var lineLength = lines.reduce(function (pre, next) {
          return pre + next;
        });
  
        var count = parseInt(length / lineLength, 10);
        var remainLength = length % lineLength;
        var restLength = totalLength - length;
  
        var remainLines = [];
        for (var i = 0, sum = 0;; sum += lines[i], ++i) {
          if (sum + lines[i] > remainLength) {
            remainLines = [].concat(_toConsumableArray(lines.slice(0, i)), [remainLength - sum]);
            break;
          }
        }
  
        var emptyLines = remainLines.length % 2 === 0 ? [0, restLength] : [restLength];
  
        return [].concat(_toConsumableArray(this.repeat(lines, count)), _toConsumableArray(remainLines), emptyLines).map(function (line) {
          return line + 'px';
        }).join(', ');
      }
    }, {
      key: 'repeat',
      value: function repeat(lines, count) {
        var linesUnit = lines.length % 2 !== 0 ? [].concat(_toConsumableArray(lines), [0]) : lines;
        var result = [];
  
        for (var i = 0; i < count; ++i) {
          result = [].concat(_toConsumableArray(result), _toConsumableArray(linesUnit));
        }
  
        return result;
      }
    }, {
      key: 'renderLabelItem',
      value: function renderLabelItem(option, props, value) {
        var labelItem = void 0;
  
        if (_react2.default.isValidElement(option)) {
          labelItem = _react2.default.cloneElement(option, props);
        } else if ((0, _isFunction3.default)(option)) {
          labelItem = option(props);
        } else {
          labelItem = _react2.default.createElement(_Text2.default, _extends({
            key: props.key
          }, props, {
            className: 'recharts-line-label'
          }), value);
        }
  
        return labelItem;
      }
    }, {
      key: 'renderLabels',
      value: function renderLabels() {
        var _this2 = this;
  
        var isAnimationActive = this.props.isAnimationActive;
  
        if (isAnimationActive && !this.state.isAnimationFinished) {
          return null;
        }
  
        var _props2 = this.props;
        var points = _props2.points;
        var label = _props2.label;
  
        var lineProps = (0, _ReactUtils.getPresentationAttributes)(this.props);
        var customLabelProps = (0, _ReactUtils.getPresentationAttributes)(label);
  
        var labels = points.map(function (entry, i) {
          var x = entry.x + entry.width / 2;
          var y = entry.y;
          var labelProps = _extends({
            textAnchor: 'middle'
          }, entry, lineProps, customLabelProps, {
            index: i,
            key: 'label-' + i,
            payload: entry
          });
  
          return _this2.renderLabelItem(label, labelProps, entry.value);
        });
  
        return _react2.default.createElement(_Layer2.default, { className: 'recharts-line-labels' }, labels);
      }
    }, {
      key: 'renderDotItem',
      value: function renderDotItem(option, props) {
        var dotItem = void 0;
  
        if (_react2.default.isValidElement(option)) {
          dotItem = _react2.default.cloneElement(option, props);
        } else if ((0, _isFunction3.default)(option)) {
          dotItem = option(props);
        } else {
          dotItem = _react2.default.createElement(_Dot2.default, _extends({}, props, { className: 'recharts-line-dot' }));
        }
  
        return dotItem;
      }
    }, {
      key: 'renderDots',
      value: function renderDots() {
        var _this3 = this;
  
        var isAnimationActive = this.props.isAnimationActive;
  
        if (isAnimationActive && !this.state.isAnimationFinished) {
          return null;
        }
        var _props3 = this.props;
        var dot = _props3.dot;
        var points = _props3.points;
  
        var lineProps = (0, _ReactUtils.getPresentationAttributes)(this.props);
        var customDotProps = (0, _ReactUtils.getPresentationAttributes)(dot);
        var dots = points.map(function (entry, i) {
          var dotProps = _extends({
            key: 'dot-' + i,
            r: 3
          }, lineProps, customDotProps, {
            cx: entry.x, cy: entry.y, index: i, payload: entry
          });
  
          return _this3.renderDotItem(dot, dotProps);
        });
  
        return _react2.default.createElement(_Layer2.default, { className: 'recharts-line-dots', key: 'dots' }, dots);
      }
    }, {
      key: 'renderCurve',
      value: function renderCurve() {
        var _this4 = this;
  
        var _props4 = this.props;
        var points = _props4.points;
        var className = _props4.className;
        var strokeDasharray = _props4.strokeDasharray;
        var isAnimationActive = _props4.isAnimationActive;
        var animationBegin = _props4.animationBegin;
        var animationDuration = _props4.animationDuration;
        var animationEasing = _props4.animationEasing;
        var onClick = _props4.onClick;
        var onMouseEnter = _props4.onMouseEnter;
        var onMouseLeave = _props4.onMouseLeave;
  
        var other = _objectWithoutProperties(_props4, ['points', 'className', 'strokeDasharray', 'isAnimationActive', 'animationBegin', 'animationDuration', 'animationEasing', 'onClick', 'onMouseEnter', 'onMouseLeave']);
  
        var totalLength = this.state.totalLength;
  
        var animationProps = {
          isActive: isAnimationActive,
          begin: animationBegin,
          canBegin: totalLength > 0,
          easing: animationEasing,
          duration: animationDuration,
          onAnimationEnd: this.handleAnimationEnd,
          onAnimationStart: this.handleAnimationStart,
          ref: 'animate',
          shouldReAnimate: true
        };
        var curveProps = _extends({}, other, { className: 'recharts-line-curve', fill: 'none',
          onClick: onClick, onMouseEnter: onMouseEnter, onMouseLeave: onMouseLeave, points: points });
  
        if (strokeDasharray) {
          var _ret = function () {
            var lines = strokeDasharray.split(/[,\s]+/gim).map(function (num) {
              return parseFloat(num);
            });
  
            return {
              v: _react2.default.createElement(_reactSmooth2.default, _extends({}, animationProps, {
                from: { length: 0 },
                to: { length: totalLength }
              }), function (_ref) {
                var length = _ref.length;
                return _react2.default.createElement(_Curve2.default, _extends({}, curveProps, {
                  strokeDasharray: _this4.getStrokeDasharray(length, totalLength, lines)
                }));
              })
            };
          }();
  
          if ((typeof _ret === 'undefined' ? 'undefined' : _typeof(_ret)) === "object") return _ret.v;
        }
  
        return _react2.default.createElement(_reactSmooth2.default, _extends({}, animationProps, {
          from: '0px ' + (totalLength === 0 ? 1 : totalLength) + 'px',
          to: totalLength + 'px 0px',
          attributeName: 'strokeDasharray'
        }), _react2.default.createElement(_Curve2.default, curveProps));
      }
    }, {
      key: 'render',
      value: function render() {
        var _props5 = this.props;
        var dot = _props5.dot;
        var points = _props5.points;
        var label = _props5.label;
        var className = _props5.className;
  
        if (!points || !points.length) {
          return null;
        }
  
        var hasSinglePoint = points.length === 1;
        var layerClass = (0, _classnames2.default)('recharts-line', className);
  
        return _react2.default.createElement(_Layer2.default, { className: layerClass }, !hasSinglePoint && this.renderCurve(), (hasSinglePoint || dot) && this.renderDots(), label && this.renderLabels());
      }
    }]);
  
    return Line;
  }(_react.Component), _class2.displayName = 'Line', _class2.propTypes = _extends({}, _ReactUtils.PRESENTATION_ATTRIBUTES, {
    className: _react.PropTypes.string,
    type: _react.PropTypes.oneOfType([_react.PropTypes.oneOf(['basis', 'basisClosed', 'basisOpen', 'linear', 'linearClosed', 'natural', 'monotoneX', 'monotoneY', 'monotone', 'step', 'stepBefore', 'stepAfter']), _react.PropTypes.func]),
    unit: _react.PropTypes.oneOfType([_react.PropTypes.string, _react.PropTypes.number]),
    name: _react.PropTypes.oneOfType([_react.PropTypes.string, _react.PropTypes.number]),
    dataKey: _react.PropTypes.oneOfType([_react.PropTypes.string, _react.PropTypes.number]).isRequired,
    yAxisId: _react.PropTypes.oneOfType([_react.PropTypes.string, _react.PropTypes.number]),
    xAxisId: _react.PropTypes.oneOfType([_react.PropTypes.string, _react.PropTypes.number]),
    legendType: _react.PropTypes.oneOf(['line', 'square', 'rect', 'circle', 'cross', 'diamond', 'square', 'star', 'triangle', 'wye']),
    layout: _react.PropTypes.oneOf(['horizontal', 'vertical']),
    connectNulls: _react.PropTypes.bool,
  
    // whether have dot in line
    activeDot: _react.PropTypes.oneOfType([_react.PropTypes.object, _react.PropTypes.element, _react.PropTypes.func, _react.PropTypes.bool]),
    dot: _react.PropTypes.oneOfType([_react.PropTypes.object, _react.PropTypes.element, _react.PropTypes.func, _react.PropTypes.bool]),
    label: _react.PropTypes.oneOfType([_react.PropTypes.object, _react.PropTypes.element, _react.PropTypes.func, _react.PropTypes.bool]),
  
    points: _react.PropTypes.arrayOf(_react.PropTypes.shape({
      x: _react.PropTypes.number,
      y: _react.PropTypes.number,
      value: _react.PropTypes.value
    })),
    onMouseEnter: _react.PropTypes.func,
    onMouseLeave: _react.PropTypes.func,
    onClick: _react.PropTypes.func,
    isAnimationActive: _react.PropTypes.bool,
    animationBegin: _react.PropTypes.number,
    animationDuration: _react.PropTypes.number,
    animationEasing: _react.PropTypes.oneOf(['ease', 'ease-in', 'ease-out', 'ease-in-out', 'linear']),
    animationId: _react.PropTypes.number
  }), _class2.defaultProps = {
    xAxisId: 0,
    yAxisId: 0,
    connectNulls: false,
    activeDot: true,
    dot: true,
    legendType: 'line',
    stroke: '#3182bd',
    strokeWidth: 1,
    fill: '#fff',
    points: [],
    isAnimationActive: true,
    animationBegin: 0,
    animationDuration: 1500,
    animationEasing: 'ease'
  }, _temp)) || _class;
  
  exports.default = Line;

/***/ }),
/* 125 */
/***/ (function(module, exports, __webpack_require__) {

  'use strict';
  
  var _getPrototypeOf = __webpack_require__(29);
  
  var _getPrototypeOf2 = _interopRequireDefault2(_getPrototypeOf);
  
  var _setPrototypeOf = __webpack_require__(59);
  
  var _setPrototypeOf2 = _interopRequireDefault2(_setPrototypeOf);
  
  var _create = __webpack_require__(60);
  
  var _create2 = _interopRequireDefault2(_create);
  
  var _typeof2 = __webpack_require__(61);
  
  var _typeof3 = _interopRequireDefault2(_typeof2);
  
  var _defineProperty = __webpack_require__(62);
  
  var _defineProperty2 = _interopRequireDefault2(_defineProperty);
  
  var _assign = __webpack_require__(23);
  
  var _assign2 = _interopRequireDefault2(_assign);
  
  function _interopRequireDefault2(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  
  var _isArray2 = __webpack_require__(70);
  
  var _isArray3 = _interopRequireDefault(_isArray2);
  
  var _isFunction2 = __webpack_require__(69);
  
  var _isFunction3 = _interopRequireDefault(_isFunction2);
  
  var _isNumber2 = __webpack_require__(67);
  
  var _isNumber3 = _interopRequireDefault(_isNumber2);
  
  var _extends = _assign2.default || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }return target;
  };
  
  var _createClass = function () {
    function defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;(0, _defineProperty2.default)(target, descriptor.key, descriptor);
      }
    }return function (Constructor, protoProps, staticProps) {
      if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
    };
  }();
  
  var _class, _class2, _temp; /**
                               * @fileOverview Area
                               */
  
  var _react = __webpack_require__(11);
  
  var _react2 = _interopRequireDefault(_react);
  
  var _classnames = __webpack_require__(46);
  
  var _classnames2 = _interopRequireDefault(_classnames);
  
  var _Curve = __webpack_require__(90);
  
  var _Curve2 = _interopRequireDefault(_Curve);
  
  var _Dot = __webpack_require__(106);
  
  var _Dot2 = _interopRequireDefault(_Dot);
  
  var _Layer = __webpack_require__(87);
  
  var _Layer2 = _interopRequireDefault(_Layer);
  
  var _Text = __webpack_require__(91);
  
  var _Text2 = _interopRequireDefault(_Text);
  
  var _reactSmooth = __webpack_require__(84);
  
  var _reactSmooth2 = _interopRequireDefault(_reactSmooth);
  
  var _PureRender = __webpack_require__(72);
  
  var _PureRender2 = _interopRequireDefault(_PureRender);
  
  var _ReactUtils = __webpack_require__(64);
  
  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
  }
  
  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }
  
  function _possibleConstructorReturn(self, call) {
    if (!self) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }return call && ((typeof call === 'undefined' ? 'undefined' : (0, _typeof3.default)(call)) === "object" || typeof call === "function") ? call : self;
  }
  
  function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === 'undefined' ? 'undefined' : (0, _typeof3.default)(superClass)));
    }subClass.prototype = (0, _create2.default)(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) _setPrototypeOf2.default ? (0, _setPrototypeOf2.default)(subClass, superClass) : subClass.__proto__ = superClass;
  }
  
  var Area = (0, _PureRender2.default)(_class = (_temp = _class2 = function (_Component) {
    _inherits(Area, _Component);
  
    function Area(props, ctx) {
      _classCallCheck(this, Area);
  
      var _this = _possibleConstructorReturn(this, (Area.__proto__ || (0, _getPrototypeOf2.default)(Area)).call(this, props, ctx));
  
      _this.handleAnimationEnd = function () {
        _this.setState({ isAnimationFinished: true });
      };
  
      _this.handleAnimationStart = function () {
        _this.setState({ isAnimationFinished: false });
      };
  
      var points = props.points;
  
      _this.state = { isAnimationFinished: true };
      if (!_this.id) {
        _this.id = 'clipPath' + Date.now();
      }
      return _this;
    }
  
    _createClass(Area, [{
      key: 'renderCurve',
      value: function renderCurve() {
        var _props = this.props;
        var layout = _props.layout;
        var type = _props.type;
        var curve = _props.curve;
        var points = _props.points;
        var connectNulls = _props.connectNulls;
  
        return _react2.default.createElement('g', null, curve && _react2.default.createElement(_Curve2.default, _extends({}, (0, _ReactUtils.getPresentationAttributes)(this.props), {
          className: 'recharts-area-curve',
          layout: layout,
          type: type,
          connectNulls: connectNulls,
          fill: 'none',
          points: points
        })), _react2.default.createElement(_Curve2.default, _extends({}, this.props, {
          stroke: 'none',
          className: 'recharts-area-area'
        })));
      }
    }, {
      key: 'renderHorizontalRect',
      value: function renderHorizontalRect(alpha) {
        var _props2 = this.props;
        var baseLine = _props2.baseLine;
        var layout = _props2.layout;
        var points = _props2.points;
        var strokeWidth = _props2.strokeWidth;
  
        var startX = points[0].x;
        var endX = points[points.length - 1].x;
        var width = alpha * Math.abs(startX - endX);
        var maxY = Math.max.apply(null, points.map(function (entry) {
          return entry.y || 0;
        }));
  
        if ((0, _isNumber3.default)(baseLine)) {
          maxY = Math.max(baseLine, maxY);
        } else {
          maxY = Math.max(Math.max.apply(null, baseLine.map(function (entry) {
            return entry.y || 0;
          })), maxY);
        }
  
        return _react2.default.createElement('rect', {
          x: startX < endX ? startX : startX - width,
          y: 0,
          width: width,
          height: maxY + (strokeWidth || 1)
        });
      }
    }, {
      key: 'renderVerticalRect',
      value: function renderVerticalRect(alpha) {
        var _props3 = this.props;
        var baseLine = _props3.baseLine;
        var layout = _props3.layout;
        var points = _props3.points;
        var strokeWidth = _props3.strokeWidth;
  
        var startY = points[0].y;
        var endY = points[points.length - 1].y;
        var height = alpha * Math.abs(startY - endY);
        var maxX = Math.max.apply(null, points.map(function (entry) {
          return entry.x || 0;
        }));
  
        if ((0, _isNumber3.default)(baseLine)) {
          maxX = Math.max(baseLine, maxX);
        } else {
          maxX = Math.max(Math.max.apply(null, baseLine.map(function (entry) {
            return entry.x || 0;
          })), maxX);
        }
  
        return _react2.default.createElement('rect', {
          x: 0,
          y: startY < endY ? startY : startY - height,
          width: maxX + (strokeWidth || 1),
          height: height
        });
      }
    }, {
      key: 'renderClipRect',
      value: function renderClipRect(alpha) {
        var layout = this.props.layout;
  
        if (layout === 'vertical') {
          return this.renderVerticalRect(alpha);
        }
  
        return this.renderHorizontalRect(alpha);
      }
    }, {
      key: 'renderClipPath',
      value: function renderClipPath() {
        var _this2 = this;
  
        var _props4 = this.props;
        var isAnimationActive = _props4.isAnimationActive;
        var animationDuration = _props4.animationDuration;
        var animationEasing = _props4.animationEasing;
        var animationBegin = _props4.animationBegin;
        var animationId = _props4.animationId;
  
        return _react2.default.createElement('defs', null, _react2.default.createElement('clipPath', { id: this.id }, _react2.default.createElement(_reactSmooth2.default, {
          easing: animationEasing,
          isActive: isAnimationActive,
          duration: animationDuration,
          key: animationId,
          animationBegin: animationBegin,
          onAnimationStart: this.handleAnimationStart,
          onAnimationEnd: this.handleAnimationEnd,
          from: { alpha: 0 },
          to: { alpha: 1 }
        }, function (_ref) {
          var alpha = _ref.alpha;
          return _this2.renderClipRect(alpha);
        })));
      }
    }, {
      key: 'renderDotItem',
      value: function renderDotItem(option, props) {
        var dotItem = void 0;
  
        if (_react2.default.isValidElement(option)) {
          dotItem = _react2.default.cloneElement(option, props);
        } else if ((0, _isFunction3.default)(option)) {
          dotItem = option(props);
        } else {
          dotItem = _react2.default.createElement(_Dot2.default, _extends({}, props, { className: 'recharts-area-dot' }));
        }
  
        return dotItem;
      }
    }, {
      key: 'renderDots',
      value: function renderDots() {
        var _this3 = this;
  
        var isAnimationActive = this.props.isAnimationActive;
  
        if (isAnimationActive && !this.state.isAnimationFinished) {
          return null;
        }
  
        var _props5 = this.props;
        var dot = _props5.dot;
        var points = _props5.points;
  
        var areaProps = (0, _ReactUtils.getPresentationAttributes)(this.props);
        var customDotProps = (0, _ReactUtils.getPresentationAttributes)(dot);
  
        var dots = points.map(function (entry, i) {
          var dotProps = _extends({
            key: 'dot-' + i,
            r: 3
          }, areaProps, customDotProps, {
            cx: entry.x,
            cy: entry.y,
            index: i,
            playload: entry
          });
  
          return _this3.renderDotItem(dot, dotProps);
        });
  
        return _react2.default.createElement(_Layer2.default, { className: 'recharts-area-dots' }, dots);
      }
    }, {
      key: 'renderLabelItem',
      value: function renderLabelItem(option, props, value) {
        var labelItem = void 0;
  
        if (_react2.default.isValidElement(option)) {
          labelItem = _react2.default.cloneElement(option, props);
        } else if ((0, _isFunction3.default)(option)) {
          labelItem = option(props);
        } else {
          labelItem = _react2.default.createElement(_Text2.default, _extends({
            key: props.key
          }, props, {
            className: 'recharts-area-label'
          }), (0, _isArray3.default)(value) ? value[1] : value);
        }
  
        return labelItem;
      }
    }, {
      key: 'renderLabels',
      value: function renderLabels() {
        var _this4 = this;
  
        var isAnimationActive = this.props.isAnimationActive;
  
        if (isAnimationActive && !this.state.isAnimationFinished) {
          return null;
        }
  
        var _props6 = this.props;
        var points = _props6.points;
        var label = _props6.label;
  
        var areaProps = (0, _ReactUtils.getPresentationAttributes)(this.props);
        var customLabelProps = (0, _ReactUtils.getPresentationAttributes)(label);
  
        var labels = points.map(function (entry, i) {
          var labelProps = _extends({
            textAnchor: 'middle'
          }, entry, areaProps, customLabelProps, {
            index: i,
            key: 'label-' + i,
            payload: entry
          });
  
          return _this4.renderLabelItem(label, labelProps, entry.value);
        });
  
        return _react2.default.createElement(_Layer2.default, { className: 'recharts-area-labels' }, labels);
      }
    }, {
      key: 'render',
      value: function render() {
        var _props7 = this.props;
        var dot = _props7.dot;
        var label = _props7.label;
        var points = _props7.points;
        var className = _props7.className;
  
        if (!points || !points.length) {
          return null;
        }
  
        var hasSinglePoint = points.length === 1;
        var layerClass = (0, _classnames2.default)('recharts-area', className);
  
        return _react2.default.createElement(_Layer2.default, { className: layerClass }, !hasSinglePoint ? this.renderClipPath() : null, !hasSinglePoint ? _react2.default.createElement('g', { clipPath: 'url(#' + this.id + ')' }, this.renderCurve()) : null, (dot || hasSinglePoint) && this.renderDots(), label && this.renderLabels());
      }
    }]);
  
    return Area;
  }(_react.Component), _class2.displayName = 'Area', _class2.propTypes = _extends({}, _ReactUtils.PRESENTATION_ATTRIBUTES, {
    className: _react.PropTypes.string,
    dataKey: _react.PropTypes.oneOfType([_react.PropTypes.string, _react.PropTypes.number]).isRequired,
    type: _react.PropTypes.oneOfType([_react.PropTypes.oneOf(['basis', 'basisClosed', 'basisOpen', 'linear', 'linearClosed', 'natural', 'monotoneX', 'monotoneY', 'monotone', 'step', 'stepBefore', 'stepAfter']), _react.PropTypes.func]),
    unit: _react.PropTypes.oneOfType([_react.PropTypes.string, _react.PropTypes.number]),
    name: _react.PropTypes.oneOfType([_react.PropTypes.string, _react.PropTypes.number]),
    yAxisId: _react.PropTypes.oneOfType([_react.PropTypes.string, _react.PropTypes.number]),
    xAxisId: _react.PropTypes.oneOfType([_react.PropTypes.string, _react.PropTypes.number]),
    stackId: _react.PropTypes.oneOfType([_react.PropTypes.number, _react.PropTypes.string]),
    legendType: _react.PropTypes.oneOf(['line', 'square', 'rect', 'circle', 'cross', 'diamond', 'square', 'star', 'triangle', 'wye']),
    connectNulls: _react.PropTypes.bool,
  
    activeDot: _react.PropTypes.oneOfType([_react.PropTypes.object, _react.PropTypes.element, _react.PropTypes.func, _react.PropTypes.bool]),
    // dot configuration
    dot: _react.PropTypes.oneOfType([_react.PropTypes.func, _react.PropTypes.element, _react.PropTypes.object, _react.PropTypes.bool]),
    label: _react.PropTypes.oneOfType([_react.PropTypes.func, _react.PropTypes.element, _react.PropTypes.object, _react.PropTypes.bool]),
    // have curve configuration
    curve: _react.PropTypes.bool,
    layout: _react.PropTypes.oneOf(['horizontal', 'vertical']),
    baseLine: _react.PropTypes.oneOfType([_react.PropTypes.number, _react.PropTypes.array]),
    points: _react.PropTypes.arrayOf(_react.PropTypes.shape({
      x: _react.PropTypes.number,
      y: _react.PropTypes.number,
      value: _react.PropTypes.oneOfType([_react.PropTypes.number, _react.PropTypes.array])
    })),
    onMouseEnter: _react.PropTypes.func,
    onMouseLeave: _react.PropTypes.func,
    onClick: _react.PropTypes.func,
  
    animationId: _react.PropTypes.number,
    isAnimationActive: _react.PropTypes.bool,
    animationBegin: _react.PropTypes.number,
    animationDuration: _react.PropTypes.number,
    animationEasing: _react.PropTypes.oneOf(['ease', 'ease-in', 'ease-out', 'ease-in-out', 'linear'])
  }), _class2.defaultProps = {
    strokeWidth: 1,
    stroke: '#3182bd',
    fill: '#3182bd',
    fillOpacity: 0.6,
    xAxisId: 0,
    yAxisId: 0,
    legendType: 'line',
    connectNulls: false,
    // points of area
    points: [],
    dot: false,
    label: false,
    curve: true,
    activeDot: true,
  
    isAnimationActive: true,
    animationBegin: 0,
    animationDuration: 1500,
    animationEasing: 'ease'
  }, _temp)) || _class;
  
  exports.default = Area;

/***/ }),
/* 126 */
/***/ (function(module, exports, __webpack_require__) {

  'use strict';
  
  var _getPrototypeOf = __webpack_require__(29);
  
  var _getPrototypeOf2 = _interopRequireDefault2(_getPrototypeOf);
  
  var _setPrototypeOf = __webpack_require__(59);
  
  var _setPrototypeOf2 = _interopRequireDefault2(_setPrototypeOf);
  
  var _create = __webpack_require__(60);
  
  var _create2 = _interopRequireDefault2(_create);
  
  var _typeof2 = __webpack_require__(61);
  
  var _typeof3 = _interopRequireDefault2(_typeof2);
  
  var _defineProperty = __webpack_require__(62);
  
  var _defineProperty2 = _interopRequireDefault2(_defineProperty);
  
  var _assign = __webpack_require__(23);
  
  var _assign2 = _interopRequireDefault2(_assign);
  
  function _interopRequireDefault2(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  
  var _isArray2 = __webpack_require__(70);
  
  var _isArray3 = _interopRequireDefault(_isArray2);
  
  var _isFunction2 = __webpack_require__(69);
  
  var _isFunction3 = _interopRequireDefault(_isFunction2);
  
  var _extends = _assign2.default || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }return target;
  };
  
  var _createClass = function () {
    function defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;(0, _defineProperty2.default)(target, descriptor.key, descriptor);
      }
    }return function (Constructor, protoProps, staticProps) {
      if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
    };
  }();
  
  var _class, _class2, _temp2; /**
                                * @fileOverview Render a group of bar
                                */
  
  var _react = __webpack_require__(11);
  
  var _react2 = _interopRequireDefault(_react);
  
  var _classnames = __webpack_require__(46);
  
  var _classnames2 = _interopRequireDefault(_classnames);
  
  var _reactSmooth = __webpack_require__(84);
  
  var _reactSmooth2 = _interopRequireDefault(_reactSmooth);
  
  var _Rectangle = __webpack_require__(103);
  
  var _Rectangle2 = _interopRequireDefault(_Rectangle);
  
  var _Layer = __webpack_require__(87);
  
  var _Layer2 = _interopRequireDefault(_Layer);
  
  var _Text = __webpack_require__(91);
  
  var _Text2 = _interopRequireDefault(_Text);
  
  var _PureRender = __webpack_require__(72);
  
  var _PureRender2 = _interopRequireDefault(_PureRender);
  
  var _ReactUtils = __webpack_require__(64);
  
  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
  }
  
  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }
  
  function _possibleConstructorReturn(self, call) {
    if (!self) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }return call && ((typeof call === 'undefined' ? 'undefined' : (0, _typeof3.default)(call)) === "object" || typeof call === "function") ? call : self;
  }
  
  function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === 'undefined' ? 'undefined' : (0, _typeof3.default)(superClass)));
    }subClass.prototype = (0, _create2.default)(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) _setPrototypeOf2.default ? (0, _setPrototypeOf2.default)(subClass, superClass) : subClass.__proto__ = superClass;
  }
  
  var Bar = (0, _PureRender2.default)(_class = (_temp2 = _class2 = function (_Component) {
    _inherits(Bar, _Component);
  
    function Bar() {
      var _ref;
  
      var _temp, _this, _ret;
  
      _classCallCheck(this, Bar);
  
      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }
  
      return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Bar.__proto__ || (0, _getPrototypeOf2.default)(Bar)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
        isAnimationFinished: false
      }, _this.handleAnimationEnd = function () {
        _this.setState({ isAnimationFinished: true });
      }, _this.handleAnimationStart = function () {
        _this.setState({ isAnimationFinished: false });
      }, _temp), _possibleConstructorReturn(_this, _ret);
    }
  
    _createClass(Bar, [{
      key: 'renderRectangle',
      value: function renderRectangle(option, props) {
        var rectangle = void 0;
  
        if (_react2.default.isValidElement(option)) {
          rectangle = _react2.default.cloneElement(option, props);
        } else if ((0, _isFunction3.default)(option)) {
          rectangle = option(props);
        } else {
          rectangle = _react2.default.createElement(_Rectangle2.default, _extends({}, props, { className: 'recharts-bar-rectangle' }));
        }
  
        return rectangle;
      }
    }, {
      key: 'renderRectangles',
      value: function renderRectangles() {
        var _this2 = this;
  
        var _props = this.props;
        var data = _props.data;
        var shape = _props.shape;
        var layout = _props.layout;
        var isAnimationActive = _props.isAnimationActive;
        var animationBegin = _props.animationBegin;
        var animationDuration = _props.animationDuration;
        var animationEasing = _props.animationEasing;
        var animationId = _props.animationId;
  
        var baseProps = (0, _ReactUtils.getPresentationAttributes)(this.props);
        var getStyle = function getStyle(isBegin) {
          return {
            transform: 'scale' + (layout === 'vertical' ? 'X' : 'Y') + '(' + (isBegin ? 0 : 1) + ')'
          };
        };
  
        return data.map(function (entry, index) {
          var width = entry.width;
          var height = entry.height;
  
          var props = _extends({}, baseProps, entry, { index: index }, (0, _ReactUtils.filterEventsOfChild)(_this2.props, entry, index));
          var transformOrigin = '';
  
          if (layout === 'vertical') {
            transformOrigin = width > 0 ? 'left center' : 'right center';
          } else {
            transformOrigin = height > 0 ? 'center bottom' : 'center top';
          }
  
          return _react2.default.createElement(_reactSmooth2.default, {
            begin: animationBegin,
            duration: animationDuration,
            isActive: isAnimationActive,
            easing: animationEasing,
            from: getStyle(true),
            to: getStyle(false),
            key: 'rectangle-' + index + '-' + animationId,
            onAnimationEnd: _this2.handleAnimationEnd,
            onAnimationStart: _this2.handleAnimationStart
          }, _react2.default.createElement('g', { style: { transformOrigin: transformOrigin } }, _this2.renderRectangle(shape, props)));
        });
      }
    }, {
      key: 'renderLabelItem',
      value: function renderLabelItem(option, props, value) {
        var labelItem = void 0;
  
        if (_react2.default.isValidElement(option)) {
          labelItem = _react2.default.cloneElement(option, props);
        } else if ((0, _isFunction3.default)(option)) {
          labelItem = option(props);
        } else {
          labelItem = _react2.default.createElement(_Text2.default, _extends({}, props, {
            key: props.key,
            className: 'recharts-bar-label'
          }), (0, _isArray3.default)(value) ? value[1] : value);
        }
  
        return labelItem;
      }
    }, {
      key: 'renderLabels',
      value: function renderLabels() {
        var _this3 = this;
  
        var isAnimationActive = this.props.isAnimationActive;
  
        if (isAnimationActive && !this.state.isAnimationFinished) {
          return null;
        }
  
        var _props2 = this.props;
        var data = _props2.data;
        var label = _props2.label;
        var layout = _props2.layout;
  
        var barProps = (0, _ReactUtils.getPresentationAttributes)(this.props);
        var customLabelProps = (0, _ReactUtils.getPresentationAttributes)(label);
        var textAnchor = layout === 'vertical' ? 'start' : 'middle';
        var labels = data.map(function (entry, i) {
          var x = 0;
          var y = 0;
  
          if (layout === 'vertical') {
            x = 5 + entry.x + entry.width;
            y = 5 + entry.y + entry.height / 2;
          } else {
            x = entry.x + entry.width / 2;
            y = entry.y - 5;
          }
  
          var labelProps = _extends({
            textAnchor: textAnchor
          }, barProps, entry, customLabelProps, {
            x: x,
            y: y,
            index: i,
            key: 'label-' + i,
            payload: entry
          });
  
          var labelValue = entry.value;
          if (label === true && entry.value && labelProps.label) {
            labelValue = labelProps.label;
          }
          return _this3.renderLabelItem(label, labelProps, labelValue);
        });
  
        return _react2.default.createElement(_Layer2.default, { className: 'recharts-bar-labels' }, labels);
      }
    }, {
      key: 'render',
      value: function render() {
        var _props3 = this.props;
        var data = _props3.data;
        var className = _props3.className;
        var label = _props3.label;
  
        if (!data || !data.length) {
          return null;
        }
  
        var layerClass = (0, _classnames2.default)('recharts-bar', className);
  
        return _react2.default.createElement(_Layer2.default, { className: layerClass }, _react2.default.createElement(_Layer2.default, { className: 'recharts-bar-rectangles' }, this.renderRectangles()), label && _react2.default.createElement(_Layer2.default, { className: 'recharts-bar-rectangle-labels' }, this.renderLabels()));
      }
    }]);
  
    return Bar;
  }(_react.Component), _class2.displayName = 'Bar', _class2.propTypes = _extends({}, _ReactUtils.PRESENTATION_ATTRIBUTES, {
    className: _react.PropTypes.string,
    layout: _react.PropTypes.oneOf(['vertical', 'horizontal']),
    xAxisId: _react.PropTypes.oneOfType([_react.PropTypes.number, _react.PropTypes.string]),
    yAxisId: _react.PropTypes.oneOfType([_react.PropTypes.number, _react.PropTypes.string]),
    stackId: _react.PropTypes.oneOfType([_react.PropTypes.number, _react.PropTypes.string]),
    barSize: _react.PropTypes.number,
    unit: _react.PropTypes.oneOfType([_react.PropTypes.string, _react.PropTypes.number]),
    name: _react.PropTypes.oneOfType([_react.PropTypes.string, _react.PropTypes.number]),
    dataKey: _react.PropTypes.oneOfType([_react.PropTypes.string, _react.PropTypes.number]).isRequired,
    legendType: _react.PropTypes.oneOf(['line', 'square', 'rect', 'circle', 'cross', 'diamond', 'square', 'star', 'triangle', 'wye']),
    minPointSize: _react.PropTypes.number,
  
    shape: _react.PropTypes.oneOfType([_react.PropTypes.func, _react.PropTypes.element]),
    label: _react.PropTypes.oneOfType([_react.PropTypes.bool, _react.PropTypes.func, _react.PropTypes.object, _react.PropTypes.element]),
    data: _react.PropTypes.arrayOf(_react.PropTypes.shape({
      x: _react.PropTypes.number,
      y: _react.PropTypes.number,
      width: _react.PropTypes.number,
      height: _react.PropTypes.number,
      radius: _react.PropTypes.oneOfType([_react.PropTypes.number, _react.PropTypes.array]),
      value: _react.PropTypes.oneOfType([_react.PropTypes.number, _react.PropTypes.array])
    })),
    onMouseEnter: _react.PropTypes.func,
    onMouseLeave: _react.PropTypes.func,
    onClick: _react.PropTypes.func,
  
    animationId: _react.PropTypes.number,
    isAnimationActive: _react.PropTypes.bool,
    animationBegin: _react.PropTypes.number,
    animationDuration: _react.PropTypes.number,
    animationEasing: _react.PropTypes.oneOf(['ease', 'ease-in', 'ease-out', 'ease-in-out', 'linear'])
  }), _class2.defaultProps = {
    fill: '#000',
    xAxisId: 0,
    yAxisId: 0,
    legendType: 'rect',
    minPointSize: 0,
    // data of bar
    data: [],
    layout: 'vertical',
    isAnimationActive: true,
    animationBegin: 0,
    animationDuration: 1500,
    animationEasing: 'ease'
  }, _temp2)) || _class;
  
  exports.default = Bar;

/***/ }),
/* 127 */
/***/ (function(module, exports, __webpack_require__) {

  'use strict';
  
  var _getPrototypeOf = __webpack_require__(29);
  
  var _getPrototypeOf2 = _interopRequireDefault2(_getPrototypeOf);
  
  var _setPrototypeOf = __webpack_require__(59);
  
  var _setPrototypeOf2 = _interopRequireDefault2(_setPrototypeOf);
  
  var _create = __webpack_require__(60);
  
  var _create2 = _interopRequireDefault2(_create);
  
  var _typeof2 = __webpack_require__(61);
  
  var _typeof3 = _interopRequireDefault2(_typeof2);
  
  var _defineProperty = __webpack_require__(62);
  
  var _defineProperty2 = _interopRequireDefault2(_defineProperty);
  
  var _assign = __webpack_require__(23);
  
  var _assign2 = _interopRequireDefault2(_assign);
  
  function _interopRequireDefault2(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  
  var _isFunction2 = __webpack_require__(69);
  
  var _isFunction3 = _interopRequireDefault(_isFunction2);
  
  var _extends = _assign2.default || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }return target;
  };
  
  var _createClass = function () {
    function defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;(0, _defineProperty2.default)(target, descriptor.key, descriptor);
      }
    }return function (Constructor, protoProps, staticProps) {
      if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
    };
  }();
  
  var _class, _class2, _temp2; /**
                                * @fileOverview Render a group of scatters
                                */
  
  var _react = __webpack_require__(11);
  
  var _react2 = _interopRequireDefault(_react);
  
  var _classnames = __webpack_require__(46);
  
  var _classnames2 = _interopRequireDefault(_classnames);
  
  var _PureRender = __webpack_require__(72);
  
  var _PureRender2 = _interopRequireDefault(_PureRender);
  
  var _Layer = __webpack_require__(87);
  
  var _Layer2 = _interopRequireDefault(_Layer);
  
  var _ReactUtils = __webpack_require__(64);
  
  var _Curve = __webpack_require__(90);
  
  var _Curve2 = _interopRequireDefault(_Curve);
  
  var _Symbols = __webpack_require__(78);
  
  var _Symbols2 = _interopRequireDefault(_Symbols);
  
  var _reactSmooth = __webpack_require__(84);
  
  var _reactSmooth2 = _interopRequireDefault(_reactSmooth);
  
  var _AnimationDecorator = __webpack_require__(94);
  
  var _AnimationDecorator2 = _interopRequireDefault(_AnimationDecorator);
  
  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
  }
  
  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }
  
  function _possibleConstructorReturn(self, call) {
    if (!self) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }return call && ((typeof call === 'undefined' ? 'undefined' : (0, _typeof3.default)(call)) === "object" || typeof call === "function") ? call : self;
  }
  
  function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === 'undefined' ? 'undefined' : (0, _typeof3.default)(superClass)));
    }subClass.prototype = (0, _create2.default)(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) _setPrototypeOf2.default ? (0, _setPrototypeOf2.default)(subClass, superClass) : subClass.__proto__ = superClass;
  }
  
  var PI = Math.PI;
  var SYMBOL_STYLE = { transformOrigin: 'center center' };
  
  var Scatter = (0, _AnimationDecorator2.default)(_class = (0, _PureRender2.default)(_class = (_temp2 = _class2 = function (_Component) {
    _inherits(Scatter, _Component);
  
    function Scatter() {
      var _ref;
  
      var _temp, _this, _ret;
  
      _classCallCheck(this, Scatter);
  
      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }
  
      return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Scatter.__proto__ || (0, _getPrototypeOf2.default)(Scatter)).call.apply(_ref, [this].concat(args))), _this), _this.state = { activeIndex: -1 }, _temp), _possibleConstructorReturn(_this, _ret);
    }
  
    _createClass(Scatter, [{
      key: 'renderSymbolItem',
      value: function renderSymbolItem(option, props) {
        var symbol = void 0;
  
        if (_react2.default.isValidElement(option)) {
          symbol = _react2.default.cloneElement(option, props);
        } else if ((0, _isFunction3.default)(option)) {
          symbol = option(props);
        } else {
          symbol = _react2.default.createElement(_Symbols2.default, _extends({}, props, { type: option }));
        }
  
        return symbol;
      }
    }, {
      key: 'renderSymbols',
      value: function renderSymbols() {
        var _this2 = this;
  
        var _props = this.props;
        var points = _props.points;
        var shape = _props.shape;
        var activeShape = _props.activeShape;
        var activeIndex = _props.activeIndex;
        var animationBegin = _props.animationBegin;
        var animationDuration = _props.animationDuration;
        var isAnimationActive = _props.isAnimationActive;
        var animationEasing = _props.animationEasing;
        var animationId = _props.animationId;
  
        var baseProps = (0, _ReactUtils.getPresentationAttributes)(this.props);
  
        return points.map(function (entry, i) {
          var props = _extends({
            key: 'symbol-' + i
          }, baseProps, entry);
          return _react2.default.createElement(_Layer2.default, _extends({
            className: 'recharts-scatter-symbol'
          }, (0, _ReactUtils.filterEventsOfChild)(_this2.props, entry, i), {
            key: 'symbol-' + i
          }), _react2.default.createElement(_reactSmooth2.default, {
            from: { size: 0 },
            to: { size: props.size },
            duration: animationDuration,
            begin: animationBegin,
            isActive: isAnimationActive,
            key: animationId,
            easing: animationEasing
          }, function (_ref2) {
            var size = _ref2.size;
  
            var finalProps = _extends({}, props, { size: size });
  
            return _this2.renderSymbolItem(activeIndex === i ? activeShape : shape, finalProps);
          }));
        });
      }
    }, {
      key: 'renderLine',
      value: function renderLine() {
        var _props2 = this.props;
        var points = _props2.points;
        var line = _props2.line;
        var lineType = _props2.lineType;
        var lineJointType = _props2.lineJointType;
  
        var scatterProps = (0, _ReactUtils.getPresentationAttributes)(this.props);
        var customLineProps = (0, _ReactUtils.getPresentationAttributes)(line);
        var linePoints = void 0;
  
        if (lineType === 'joint') {
          linePoints = points.map(function (entry) {
            return { x: entry.cx, y: entry.cy };
          });
        }
        var lineProps = _extends({}, scatterProps, {
          fill: 'none',
          stroke: scatterProps.fill
        }, customLineProps, {
          points: linePoints
        });
        var lineItem = void 0;
        if (_react2.default.isValidElement(line)) {
          lineItem = _react2.default.cloneElement(line, lineProps);
        } else if ((0, _isFunction3.default)(line)) {
          lineItem = line(lineProps);
        } else {
          lineItem = _react2.default.createElement(_Curve2.default, _extends({}, lineProps, { type: lineJointType }));
        }
  
        return _react2.default.createElement(_Layer2.default, { className: 'recharts-scatter-line', key: 'recharts-scatter-line' }, lineItem);
      }
    }, {
      key: 'render',
      value: function render() {
        var _props3 = this.props;
        var points = _props3.points;
        var line = _props3.line;
        var className = _props3.className;
  
        if (!points || !points.length) {
          return null;
        }
  
        var layerClass = (0, _classnames2.default)('recharts-scatter', className);
  
        return _react2.default.createElement(_Layer2.default, { className: layerClass }, line && this.renderLine(), _react2.default.createElement(_Layer2.default, { key: 'recharts-scatter-symbols' }, this.renderSymbols()));
      }
    }]);
  
    return Scatter;
  }(_react.Component), _class2.displayName = 'Scatter', _class2.propTypes = _extends({}, _ReactUtils.PRESENTATION_ATTRIBUTES, {
  
    xAxisId: _react.PropTypes.oneOfType([_react.PropTypes.string, _react.PropTypes.number]),
    yAxisId: _react.PropTypes.oneOfType([_react.PropTypes.string, _react.PropTypes.number]),
    zAxisId: _react.PropTypes.oneOfType([_react.PropTypes.string, _react.PropTypes.number]),
    line: _react.PropTypes.oneOfType([_react.PropTypes.bool, _react.PropTypes.object, _react.PropTypes.func, _react.PropTypes.element]),
    lineType: _react.PropTypes.oneOf(['fitting', 'joint']),
    lineJointType: _react.PropTypes.oneOfType([_react.PropTypes.oneOf(['basis', 'basisClosed', 'basisOpen', 'linear', 'linearClosed', 'natural', 'monotoneX', 'monotoneY', 'monotone', 'step', 'stepBefore', 'stepAfter']), _react.PropTypes.func]),
    legendType: _react.PropTypes.oneOf(['line', 'square', 'rect', 'circle', 'cross', 'diamond', 'square', 'star', 'triangle', 'wye']),
    className: _react.PropTypes.string,
  
    activeIndex: _react.PropTypes.number,
    activeShape: _react.PropTypes.oneOfType([_react.PropTypes.object, _react.PropTypes.func, _react.PropTypes.element]),
    shape: _react.PropTypes.oneOfType([_react.PropTypes.oneOf(['circle', 'cross', 'diamond', 'square', 'star', 'triangle', 'wye']), _react.PropTypes.element, _react.PropTypes.func]),
    points: _react.PropTypes.arrayOf(_react.PropTypes.shape({
      cx: _react.PropTypes.number,
      cy: _react.PropTypes.number,
      size: _react.PropTypes.number,
      payload: _react.PropTypes.shape({
        x: _react.PropTypes.number,
        y: _react.PropTypes.number,
        z: _react.PropTypes.oneOfType([_react.PropTypes.number, _react.PropTypes.string])
      })
    })),
    onMouseEnter: _react.PropTypes.func,
    onMouseLeave: _react.PropTypes.func,
    onClick: _react.PropTypes.func,
  
    isAnimationActive: _react.PropTypes.bool,
    animationId: _react.PropTypes.number,
    animationBegin: _react.PropTypes.number,
    animationDuration: _react.PropTypes.number,
    animationEasing: _react.PropTypes.oneOf(['ease', 'ease-in', 'ease-out', 'ease-in-out', 'linear'])
  }), _class2.defaultProps = {
    fill: '#fff',
    xAxisId: 0,
    yAxisId: 0,
    zAxisId: 0,
    legendType: 'circle',
    lineType: 'joint',
    lineJointType: 'linear',
    data: [],
    shape: 'circle',
  
    isAnimationActive: true,
    animationBegin: 0,
    animationDuration: 400,
    animationEasing: 'linear'
  }, _temp2)) || _class) || _class;
  
  exports.default = Scatter;

/***/ }),
/* 128 */
/***/ (function(module, exports, __webpack_require__) {

  'use strict';
  
  var _getPrototypeOf = __webpack_require__(29);
  
  var _getPrototypeOf2 = _interopRequireDefault2(_getPrototypeOf);
  
  var _setPrototypeOf = __webpack_require__(59);
  
  var _setPrototypeOf2 = _interopRequireDefault2(_setPrototypeOf);
  
  var _create = __webpack_require__(60);
  
  var _create2 = _interopRequireDefault2(_create);
  
  var _typeof2 = __webpack_require__(61);
  
  var _typeof3 = _interopRequireDefault2(_typeof2);
  
  var _defineProperty = __webpack_require__(62);
  
  var _defineProperty2 = _interopRequireDefault2(_defineProperty);
  
  function _interopRequireDefault2(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  
  var _createClass = function () {
    function defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;(0, _defineProperty2.default)(target, descriptor.key, descriptor);
      }
    }return function (Constructor, protoProps, staticProps) {
      if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
    };
  }();
  
  var _class, _class2, _temp; /**
                               * @fileOverview X Axis
                               */
  
  var _react = __webpack_require__(11);
  
  var _react2 = _interopRequireDefault(_react);
  
  var _PureRender = __webpack_require__(72);
  
  var _PureRender2 = _interopRequireDefault(_PureRender);
  
  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
  }
  
  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }
  
  function _possibleConstructorReturn(self, call) {
    if (!self) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }return call && ((typeof call === "undefined" ? "undefined" : (0, _typeof3.default)(call)) === "object" || typeof call === "function") ? call : self;
  }
  
  function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : (0, _typeof3.default)(superClass)));
    }subClass.prototype = (0, _create2.default)(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) _setPrototypeOf2.default ? (0, _setPrototypeOf2.default)(subClass, superClass) : subClass.__proto__ = superClass;
  }
  
  var XAxis = (0, _PureRender2.default)(_class = (_temp = _class2 = function (_Component) {
    _inherits(XAxis, _Component);
  
    function XAxis() {
      _classCallCheck(this, XAxis);
  
      return _possibleConstructorReturn(this, (XAxis.__proto__ || (0, _getPrototypeOf2.default)(XAxis)).apply(this, arguments));
    }
  
    _createClass(XAxis, [{
      key: 'render',
      value: function render() {
        return null;
      }
    }]);
  
    return XAxis;
  }(_react.Component), _class2.displayName = 'XAxis', _class2.propTypes = {
    allowDecimals: _react.PropTypes.bool,
    hide: _react.PropTypes.bool,
    // The name of data displayed in the axis
    name: _react.PropTypes.oneOfType([_react.PropTypes.string, _react.PropTypes.number]),
    // The unit of data displayed in the axis
    unit: _react.PropTypes.oneOfType([_react.PropTypes.string, _react.PropTypes.number]),
    // The unique id of x-axis
    xAxisId: _react.PropTypes.oneOfType([_react.PropTypes.string, _react.PropTypes.number]),
    domain: _react.PropTypes.arrayOf(_react.PropTypes.oneOfType([_react.PropTypes.string, _react.PropTypes.number, _react.PropTypes.oneOf(['auto', 'dataMin', 'dataMax'])])),
    // The key of data displayed in the axis
    dataKey: _react.PropTypes.oneOfType([_react.PropTypes.string, _react.PropTypes.number]),
    // The width of axis which is usually calculated internally
    width: _react.PropTypes.number,
    // The height of axis, which need to be setted by user
    height: _react.PropTypes.number,
    // The orientation of axis
    orientation: _react.PropTypes.oneOf(['top', 'bottom']),
    type: _react.PropTypes.oneOf(['number', 'category']),
    // Ticks can be any type when the axis is the type of category
    // Ticks must be numbers when the axis is the type of number
    ticks: _react.PropTypes.array,
    // The count of ticks
    tickCount: _react.PropTypes.number,
    // The formatter function of tick
    tickFormatter: _react.PropTypes.func,
    padding: _react.PropTypes.shape({
      left: _react.PropTypes.number,
      right: _react.PropTypes.number
    }),
    allowDataOverflow: _react.PropTypes.bool
  }, _class2.defaultProps = {
    allowDecimals: true,
    hide: false,
    orientation: 'bottom',
    width: 0,
    height: 30,
    xAxisId: 0,
    tickCount: 5,
    type: 'category',
    domain: [0, 'auto'],
    padding: { left: 0, right: 0 },
    allowDataOverflow: false
  }, _temp)) || _class;
  
  exports.default = XAxis;

/***/ }),
/* 129 */
/***/ (function(module, exports, __webpack_require__) {

  'use strict';
  
  var _getPrototypeOf = __webpack_require__(29);
  
  var _getPrototypeOf2 = _interopRequireDefault2(_getPrototypeOf);
  
  var _setPrototypeOf = __webpack_require__(59);
  
  var _setPrototypeOf2 = _interopRequireDefault2(_setPrototypeOf);
  
  var _create = __webpack_require__(60);
  
  var _create2 = _interopRequireDefault2(_create);
  
  var _typeof2 = __webpack_require__(61);
  
  var _typeof3 = _interopRequireDefault2(_typeof2);
  
  var _defineProperty = __webpack_require__(62);
  
  var _defineProperty2 = _interopRequireDefault2(_defineProperty);
  
  function _interopRequireDefault2(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  
  var _createClass = function () {
    function defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;(0, _defineProperty2.default)(target, descriptor.key, descriptor);
      }
    }return function (Constructor, protoProps, staticProps) {
      if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
    };
  }();
  
  var _class, _class2, _temp; /**
                               * @fileOverview Y Axis
                               */
  
  var _react = __webpack_require__(11);
  
  var _react2 = _interopRequireDefault(_react);
  
  var _PureRender = __webpack_require__(72);
  
  var _PureRender2 = _interopRequireDefault(_PureRender);
  
  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
  }
  
  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }
  
  function _possibleConstructorReturn(self, call) {
    if (!self) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }return call && ((typeof call === "undefined" ? "undefined" : (0, _typeof3.default)(call)) === "object" || typeof call === "function") ? call : self;
  }
  
  function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : (0, _typeof3.default)(superClass)));
    }subClass.prototype = (0, _create2.default)(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) _setPrototypeOf2.default ? (0, _setPrototypeOf2.default)(subClass, superClass) : subClass.__proto__ = superClass;
  }
  
  var YAxis = (0, _PureRender2.default)(_class = (_temp = _class2 = function (_Component) {
    _inherits(YAxis, _Component);
  
    function YAxis() {
      _classCallCheck(this, YAxis);
  
      return _possibleConstructorReturn(this, (YAxis.__proto__ || (0, _getPrototypeOf2.default)(YAxis)).apply(this, arguments));
    }
  
    _createClass(YAxis, [{
      key: 'render',
      value: function render() {
        return null;
      }
    }]);
  
    return YAxis;
  }(_react.Component), _class2.displayName = 'YAxis', _class2.propTypes = {
    allowDecimals: _react.PropTypes.bool,
    hide: _react.PropTypes.bool,
    // The name of data displayed in the axis
    name: _react.PropTypes.oneOfType([_react.PropTypes.string, _react.PropTypes.number]),
    // The unit of data displayed in the axis
    unit: _react.PropTypes.oneOfType([_react.PropTypes.string, _react.PropTypes.number]),
    // The unique id of y-axis
    yAxisId: _react.PropTypes.oneOfType([_react.PropTypes.string, _react.PropTypes.number]),
    domain: _react.PropTypes.arrayOf(_react.PropTypes.oneOfType([_react.PropTypes.string, _react.PropTypes.number, _react.PropTypes.oneOf(['auto', 'dataMin', 'dataMax'])])),
    // The key of data displayed in the axis
    dataKey: _react.PropTypes.oneOfType([_react.PropTypes.string, _react.PropTypes.number]),
    // Ticks can be any type when the axis is the type of category
    // Ticks must be numbers when the axis is the type of number
    ticks: _react.PropTypes.array,
    // The count of ticks
    tickCount: _react.PropTypes.number,
    // The formatter function of tick
    tickFormatter: _react.PropTypes.func,
    // The width of axis, which need to be setted by user
    width: _react.PropTypes.number,
    // The height of axis which is usually calculated in Chart
    height: _react.PropTypes.number,
    // The orientation of axis
    orientation: _react.PropTypes.oneOf(['left', 'right']),
    type: _react.PropTypes.oneOf(['number', 'category']),
    padding: _react.PropTypes.shape({
      top: _react.PropTypes.number,
      bottom: _react.PropTypes.number
    }),
    allowDataOverflow: _react.PropTypes.bool
  }, _class2.defaultProps = {
    allowDecimals: true,
    hide: false,
    orientation: 'left',
    width: 60,
    height: 0,
    yAxisId: 0,
    tickCount: 5,
    type: 'number',
    domain: [0, 'auto'],
    padding: { top: 0, bottom: 0 },
    allowDataOverflow: false
  }, _temp)) || _class;
  
  exports.default = YAxis;

/***/ }),
/* 130 */
/***/ (function(module, exports, __webpack_require__) {

  'use strict';
  
  var _getPrototypeOf = __webpack_require__(29);
  
  var _getPrototypeOf2 = _interopRequireDefault2(_getPrototypeOf);
  
  var _setPrototypeOf = __webpack_require__(59);
  
  var _setPrototypeOf2 = _interopRequireDefault2(_setPrototypeOf);
  
  var _create = __webpack_require__(60);
  
  var _create2 = _interopRequireDefault2(_create);
  
  var _typeof2 = __webpack_require__(61);
  
  var _typeof3 = _interopRequireDefault2(_typeof2);
  
  var _defineProperty = __webpack_require__(62);
  
  var _defineProperty2 = _interopRequireDefault2(_defineProperty);
  
  function _interopRequireDefault2(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  
  var _createClass = function () {
    function defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;(0, _defineProperty2.default)(target, descriptor.key, descriptor);
      }
    }return function (Constructor, protoProps, staticProps) {
      if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
    };
  }();
  
  var _class, _class2, _temp; /**
                               * @fileOverview Z Axis
                               */
  
  var _react = __webpack_require__(11);
  
  var _react2 = _interopRequireDefault(_react);
  
  var _PureRender = __webpack_require__(72);
  
  var _PureRender2 = _interopRequireDefault(_PureRender);
  
  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
  }
  
  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }
  
  function _possibleConstructorReturn(self, call) {
    if (!self) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }return call && ((typeof call === "undefined" ? "undefined" : (0, _typeof3.default)(call)) === "object" || typeof call === "function") ? call : self;
  }
  
  function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : (0, _typeof3.default)(superClass)));
    }subClass.prototype = (0, _create2.default)(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) _setPrototypeOf2.default ? (0, _setPrototypeOf2.default)(subClass, superClass) : subClass.__proto__ = superClass;
  }
  
  var ZAxis = (0, _PureRender2.default)(_class = (_temp = _class2 = function (_Component) {
    _inherits(ZAxis, _Component);
  
    function ZAxis() {
      _classCallCheck(this, ZAxis);
  
      return _possibleConstructorReturn(this, (ZAxis.__proto__ || (0, _getPrototypeOf2.default)(ZAxis)).apply(this, arguments));
    }
  
    _createClass(ZAxis, [{
      key: 'render',
      value: function render() {
        return null;
      }
    }]);
  
    return ZAxis;
  }(_react.Component), _class2.displayName = 'ZAxis', _class2.propTypes = {
    // The name of data displayed in the axis
    name: _react.PropTypes.oneOfType([_react.PropTypes.string, _react.PropTypes.number]),
    // The unit of data displayed in the axis
    unit: _react.PropTypes.oneOfType([_react.PropTypes.string, _react.PropTypes.number]),
    // The unique id of z-axis
    zAxisId: _react.PropTypes.oneOfType([_react.PropTypes.string, _react.PropTypes.number]),
    // The key of data displayed in the axis
    dataKey: _react.PropTypes.oneOfType([_react.PropTypes.string, _react.PropTypes.number]),
    // The range of axis
    range: _react.PropTypes.arrayOf(_react.PropTypes.number)
  }, _class2.defaultProps = {
    zAxisId: 0,
    range: [64, 64]
  }, _temp)) || _class;
  
  exports.default = ZAxis;

/***/ }),
/* 131 */
/***/ (function(module, exports, __webpack_require__) {

  'use strict';
  
  var _getPrototypeOf = __webpack_require__(29);
  
  var _getPrototypeOf2 = _interopRequireDefault2(_getPrototypeOf);
  
  var _setPrototypeOf = __webpack_require__(59);
  
  var _setPrototypeOf2 = _interopRequireDefault2(_setPrototypeOf);
  
  var _create = __webpack_require__(60);
  
  var _create2 = _interopRequireDefault2(_create);
  
  var _typeof2 = __webpack_require__(61);
  
  var _typeof3 = _interopRequireDefault2(_typeof2);
  
  var _defineProperty = __webpack_require__(62);
  
  var _defineProperty2 = _interopRequireDefault2(_defineProperty);
  
  var _assign = __webpack_require__(23);
  
  var _assign2 = _interopRequireDefault2(_assign);
  
  function _interopRequireDefault2(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.LineChart = undefined;
  
  var _isFunction2 = __webpack_require__(69);
  
  var _isFunction3 = _interopRequireDefault(_isFunction2);
  
  var _isNil2 = __webpack_require__(132);
  
  var _isNil3 = _interopRequireDefault(_isNil2);
  
  var _extends = _assign2.default || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }return target;
  };
  
  var _createClass = function () {
    function defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;(0, _defineProperty2.default)(target, descriptor.key, descriptor);
      }
    }return function (Constructor, protoProps, staticProps) {
      if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
    };
  }();
  
  var _class, _class2, _temp; /**
                               * @fileOverview Line Chart
                               */
  
  var _react = __webpack_require__(11);
  
  var _react2 = _interopRequireDefault(_react);
  
  var _Layer = __webpack_require__(87);
  
  var _Layer2 = _interopRequireDefault(_Layer);
  
  var _Tooltip = __webpack_require__(82);
  
  var _Tooltip2 = _interopRequireDefault(_Tooltip);
  
  var _Curve = __webpack_require__(90);
  
  var _Curve2 = _interopRequireDefault(_Curve);
  
  var _Dot = __webpack_require__(106);
  
  var _Dot2 = _interopRequireDefault(_Dot);
  
  var _generateCategoricalChart = __webpack_require__(133);
  
  var _generateCategoricalChart2 = _interopRequireDefault(_generateCategoricalChart);
  
  var _Line = __webpack_require__(124);
  
  var _Line2 = _interopRequireDefault(_Line);
  
  var _ReactUtils = __webpack_require__(64);
  
  var _PureRender = __webpack_require__(72);
  
  var _PureRender2 = _interopRequireDefault(_PureRender);
  
  var _CartesianUtils = __webpack_require__(134);
  
  var _DataUtils = __webpack_require__(96);
  
  var _reactSmooth = __webpack_require__(84);
  
  var _reactSmooth2 = _interopRequireDefault(_reactSmooth);
  
  var _AnimationDecorator = __webpack_require__(94);
  
  var _AnimationDecorator2 = _interopRequireDefault(_AnimationDecorator);
  
  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
  }
  
  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }
  
  function _possibleConstructorReturn(self, call) {
    if (!self) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }return call && ((typeof call === 'undefined' ? 'undefined' : (0, _typeof3.default)(call)) === "object" || typeof call === "function") ? call : self;
  }
  
  function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === 'undefined' ? 'undefined' : (0, _typeof3.default)(superClass)));
    }subClass.prototype = (0, _create2.default)(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) _setPrototypeOf2.default ? (0, _setPrototypeOf2.default)(subClass, superClass) : subClass.__proto__ = superClass;
  }
  
  var LineChart = (0, _AnimationDecorator2.default)(_class = (0, _PureRender2.default)(_class = (_temp = _class2 = function (_Component) {
    _inherits(LineChart, _Component);
  
    function LineChart() {
      _classCallCheck(this, LineChart);
  
      return _possibleConstructorReturn(this, (LineChart.__proto__ || (0, _getPrototypeOf2.default)(LineChart)).apply(this, arguments));
    }
  
    _createClass(LineChart, [{
      key: 'getComposedData',
  
      /**
       * Compose the data of each group
       * @param  {Object} xAxis   The configuration of x-axis
       * @param  {Object} yAxis   The configuration of y-axis
       * @param  {String} dataKey The unique key of a group
       * @return {Array}  Composed data
       */
      value: function getComposedData(xAxis, yAxis, dataKey) {
        var _props = this.props;
        var layout = _props.layout;
        var dataStartIndex = _props.dataStartIndex;
        var dataEndIndex = _props.dataEndIndex;
        var isComposed = _props.isComposed;
  
        var data = this.props.data.slice(dataStartIndex, dataEndIndex + 1);
        var bandSize = (0, _DataUtils.getBandSizeOfScale)(layout === 'horizontal' ? xAxis.scale : yAxis.scale);
        var xTicks = (0, _CartesianUtils.getTicksOfAxis)(xAxis);
        var yTicks = (0, _CartesianUtils.getTicksOfAxis)(yAxis);
  
        return data.map(function (entry, index) {
          var value = entry[dataKey];
  
          if (layout === 'horizontal') {
            return {
              x: xTicks[index].coordinate + bandSize / 2,
              y: (0, _isNil3.default)(value) ? null : yAxis.scale(value),
              value: value
            };
          }
  
          return {
            x: (0, _isNil3.default)(value) ? null : xAxis.scale(value),
            y: yTicks[index].coordinate + bandSize / 2,
            value: value
          };
        });
      }
    }, {
      key: 'renderCursor',
      value: function renderCursor(xAxisMap, yAxisMap, offset) {
        var _props2 = this.props;
        var children = _props2.children;
        var isTooltipActive = _props2.isTooltipActive;
        var layout = _props2.layout;
        var activeTooltipIndex = _props2.activeTooltipIndex;
  
        var tooltipItem = (0, _ReactUtils.findChildByType)(children, _Tooltip2.default);
  
        if (!tooltipItem || !tooltipItem.props.cursor || !isTooltipActive || activeTooltipIndex < 0) {
          return null;
        }
  
        var axisMap = layout === 'horizontal' ? xAxisMap : yAxisMap;
        var axis = (0, _DataUtils.getAnyElementOfObject)(axisMap);
        var ticks = (0, _CartesianUtils.getTicksOfAxis)(axis);
  
        if (!ticks || !ticks[activeTooltipIndex]) {
          return null;
        }
  
        var start = ticks[activeTooltipIndex].coordinate;
        var x1 = layout === 'horizontal' ? start : offset.left;
        var y1 = layout === 'horizontal' ? offset.top : start;
        var x2 = layout === 'horizontal' ? start : offset.left + offset.width;
        var y2 = layout === 'horizontal' ? offset.top + offset.height : start;
        var cursorProps = _extends({
          stroke: '#ccc'
        }, (0, _ReactUtils.getPresentationAttributes)(tooltipItem.props.cursor), {
          points: [{ x: x1, y: y1 }, { x: x2, y: y2 }]
        });
  
        return _react2.default.isValidElement(tooltipItem.props.cursor) ? _react2.default.cloneElement(tooltipItem.props.cursor, cursorProps) : _react2.default.createElement(_Curve2.default, _extends({}, cursorProps, { type: 'linear', className: 'recharts-tooltip-cursor' }));
      }
    }, {
      key: 'renderActiveDot',
      value: function renderActiveDot(option, props, index) {
        var dot = void 0;
  
        if (_react2.default.isValidElement(option)) {
          dot = _react2.default.cloneElement(option, props);
        } else if ((0, _isFunction3.default)(option)) {
          dot = option(props);
        } else {
          dot = _react2.default.createElement(_Dot2.default, _extends({}, props, { className: 'recharts-line-active-dot' }));
        }
  
        return _react2.default.createElement(_reactSmooth2.default, {
          from: 'scale(0)',
          to: 'scale(1)',
          duration: 400,
          key: 'dot-' + props.dataKey,
          attributeName: 'transform'
        }, _react2.default.createElement(_Layer2.default, { style: { transformOrigin: 'center center' } }, dot));
      }
      /**
       * Draw the main part of line chart
       * @param  {Array} items     All the instance of Line
       * @param  {Object} xAxisMap The configuration of all x-axes
       * @param  {Object} yAxisMap The configuration of all y-axes
       * @param  {Object} offset   The offset of main part in the svg element
       * @return {ReactComponent}  All the instances of Line
       */
  
    }, {
      key: 'renderItems',
      value: function renderItems(items, xAxisMap, yAxisMap, offset) {
        var _this2 = this;
  
        var _props3 = this.props;
        var children = _props3.children;
        var layout = _props3.layout;
        var isTooltipActive = _props3.isTooltipActive;
        var activeTooltipIndex = _props3.activeTooltipIndex;
        var animationId = _props3.animationId;
  
        var tooltipItem = (0, _ReactUtils.findChildByType)(children, _Tooltip2.default);
        var hasDot = tooltipItem && isTooltipActive;
        var dotItems = [];
  
        var lineItems = items.map(function (child, i) {
          var _child$props = child.props;
          var xAxisId = _child$props.xAxisId;
          var yAxisId = _child$props.yAxisId;
          var dataKey = _child$props.dataKey;
          var stroke = _child$props.stroke;
          var activeDot = _child$props.activeDot;
  
          var points = _this2.getComposedData(xAxisMap[xAxisId], yAxisMap[yAxisId], dataKey);
          var activePoint = points[activeTooltipIndex];
  
          if (hasDot && activeDot && activePoint) {
            var dotProps = _extends({
              index: i,
              dataKey: dataKey,
              cx: activePoint.x, cy: activePoint.y, r: 4,
              fill: stroke, strokeWidth: 2, stroke: '#fff'
            }, (0, _ReactUtils.getPresentationAttributes)(activeDot));
            dotItems.push(_this2.renderActiveDot(activeDot, dotProps, i));
          }
  
          return _react2.default.cloneElement(child, _extends({
            key: 'line-' + i
          }, offset, {
            layout: layout,
            points: points,
            animationId: animationId
          }));
        }, this);
  
        return _react2.default.createElement('g', { key: 'recharts-line-wrapper' }, _react2.default.createElement('g', { key: 'recharts-line' }, lineItems), _react2.default.createElement('g', { key: 'recharts-line-dot' }, dotItems));
      }
    }, {
      key: 'render',
      value: function render() {
        var _props4 = this.props;
        var isComposed = _props4.isComposed;
        var xAxisMap = _props4.xAxisMap;
        var yAxisMap = _props4.yAxisMap;
        var offset = _props4.offset;
        var graphicalItems = _props4.graphicalItems;
  
        return _react2.default.createElement(_Layer2.default, { className: 'recharts-line-graphical' }, !isComposed && this.renderCursor(xAxisMap, yAxisMap, offset), this.renderItems(graphicalItems, xAxisMap, yAxisMap, offset));
      }
    }]);
  
    return LineChart;
  }(_react.Component), _class2.displayName = 'LineChart', _class2.propTypes = {
    layout: _react.PropTypes.oneOf(['horizontal', 'vertical']),
    dataStartIndex: _react.PropTypes.number,
    dataEndIndex: _react.PropTypes.number,
    data: _react.PropTypes.array,
    isTooltipActive: _react.PropTypes.bool,
    activeTooltipIndex: _react.PropTypes.number,
    xAxisMap: _react.PropTypes.object,
    yAxisMap: _react.PropTypes.object,
    offset: _react.PropTypes.object,
    graphicalItems: _react.PropTypes.array,
    children: _react.PropTypes.oneOfType([_react.PropTypes.arrayOf(_react.PropTypes.node), _react.PropTypes.node]),
    // used internally
    isComposed: _react.PropTypes.bool,
    animationId: _react.PropTypes.number
  }, _temp)) || _class) || _class;
  
  exports.default = (0, _generateCategoricalChart2.default)(LineChart, _Line2.default);
  exports.LineChart = LineChart;

/***/ }),
/* 132 */
/***/ (function(module, exports) {

  module.exports = require("lodash/isNil");

/***/ }),
/* 133 */
/***/ (function(module, exports, __webpack_require__) {

  'use strict';
  
  var _keys = __webpack_require__(65);
  
  var _keys2 = _interopRequireDefault2(_keys);
  
  var _getPrototypeOf = __webpack_require__(29);
  
  var _getPrototypeOf2 = _interopRequireDefault2(_getPrototypeOf);
  
  var _setPrototypeOf = __webpack_require__(59);
  
  var _setPrototypeOf2 = _interopRequireDefault2(_setPrototypeOf);
  
  var _create = __webpack_require__(60);
  
  var _create2 = _interopRequireDefault2(_create);
  
  var _typeof2 = __webpack_require__(61);
  
  var _typeof3 = _interopRequireDefault2(_typeof2);
  
  var _defineProperty2 = __webpack_require__(62);
  
  var _defineProperty3 = _interopRequireDefault2(_defineProperty2);
  
  var _assign = __webpack_require__(23);
  
  var _assign2 = _interopRequireDefault2(_assign);
  
  function _interopRequireDefault2(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  
  var _isNumber2 = __webpack_require__(67);
  
  var _isNumber3 = _interopRequireDefault(_isNumber2);
  
  var _range2 = __webpack_require__(116);
  
  var _range3 = _interopRequireDefault(_range2);
  
  var _isNil2 = __webpack_require__(132);
  
  var _isNil3 = _interopRequireDefault(_isNil2);
  
  var _uniqueId2 = __webpack_require__(114);
  
  var _uniqueId3 = _interopRequireDefault(_uniqueId2);
  
  var _extends = _assign2.default || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }return target;
  };
  
  var _createClass = function () {
    function defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;(0, _defineProperty3.default)(target, descriptor.key, descriptor);
      }
    }return function (Constructor, protoProps, staticProps) {
      if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
    };
  }();
  
  var _react = __webpack_require__(11);
  
  var _react2 = _interopRequireDefault(_react);
  
  var _reactDom = __webpack_require__(104);
  
  var _reactDom2 = _interopRequireDefault(_reactDom);
  
  var _d3Scale = __webpack_require__(117);
  
  var _classnames = __webpack_require__(46);
  
  var _classnames2 = _interopRequireDefault(_classnames);
  
  var _Surface = __webpack_require__(63);
  
  var _Surface2 = _interopRequireDefault(_Surface);
  
  var _Layer = __webpack_require__(87);
  
  var _Layer2 = _interopRequireDefault(_Layer);
  
  var _Tooltip = __webpack_require__(82);
  
  var _Tooltip2 = _interopRequireDefault(_Tooltip);
  
  var _Legend = __webpack_require__(71);
  
  var _Legend2 = _interopRequireDefault(_Legend);
  
  var _LogUtils = __webpack_require__(99);
  
  var _ReactUtils = __webpack_require__(64);
  
  var _CartesianAxis = __webpack_require__(122);
  
  var _CartesianAxis2 = _interopRequireDefault(_CartesianAxis);
  
  var _CartesianGrid = __webpack_require__(123);
  
  var _CartesianGrid2 = _interopRequireDefault(_CartesianGrid);
  
  var _ReferenceLine = __webpack_require__(118);
  
  var _ReferenceLine2 = _interopRequireDefault(_ReferenceLine);
  
  var _ReferenceDot = __webpack_require__(120);
  
  var _ReferenceDot2 = _interopRequireDefault(_ReferenceDot);
  
  var _ReferenceArea = __webpack_require__(121);
  
  var _ReferenceArea2 = _interopRequireDefault(_ReferenceArea);
  
  var _XAxis = __webpack_require__(128);
  
  var _XAxis2 = _interopRequireDefault(_XAxis);
  
  var _YAxis = __webpack_require__(129);
  
  var _YAxis2 = _interopRequireDefault(_YAxis);
  
  var _Brush = __webpack_require__(115);
  
  var _Brush2 = _interopRequireDefault(_Brush);
  
  var _PureRender = __webpack_require__(72);
  
  var _PureRender2 = _interopRequireDefault(_PureRender);
  
  var _DOMUtils = __webpack_require__(80);
  
  var _DataUtils = __webpack_require__(96);
  
  var _CartesianUtils = __webpack_require__(134);
  
  var _Events = __webpack_require__(136);
  
  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
  }
  
  function _objectWithoutProperties(obj, keys) {
    var target = {};for (var i in obj) {
      if (keys.indexOf(i) >= 0) continue;if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;target[i] = obj[i];
    }return target;
  }
  
  function _defineProperty(obj, key, value) {
    if (key in obj) {
      (0, _defineProperty3.default)(obj, key, { value: value, enumerable: true, configurable: true, writable: true });
    } else {
      obj[key] = value;
    }return obj;
  }
  
  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }
  
  function _possibleConstructorReturn(self, call) {
    if (!self) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }return call && ((typeof call === 'undefined' ? 'undefined' : (0, _typeof3.default)(call)) === "object" || typeof call === "function") ? call : self;
  }
  
  function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === 'undefined' ? 'undefined' : (0, _typeof3.default)(superClass)));
    }subClass.prototype = (0, _create2.default)(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) _setPrototypeOf2.default ? (0, _setPrototypeOf2.default)(subClass, superClass) : subClass.__proto__ = superClass;
  }
  
  var ORIENT_MAP = {
    xAxis: ['bottom', 'top'],
    yAxis: ['left', 'right']
  };
  
  var generateCategoricalChart = function generateCategoricalChart(ChartComponent, GraphicalChild) {
    var _class, _temp;
  
    var CategoricalChartWrapper = (_temp = _class = function (_Component) {
      _inherits(CategoricalChartWrapper, _Component);
  
      function CategoricalChartWrapper(props) {
        _classCallCheck(this, CategoricalChartWrapper);
  
        var _this = _possibleConstructorReturn(this, (CategoricalChartWrapper.__proto__ || (0, _getPrototypeOf2.default)(CategoricalChartWrapper)).call(this, props));
  
        _this.handleReceiveSyncEvent = function (cId, chartId, data) {
          var syncId = _this.props.syncId;
  
          if (syncId === cId && chartId !== _this.chartId) {
            _this.setState(data);
          }
        };
  
        _this.handleBrushChange = function (_ref) {
          var startIndex = _ref.startIndex;
          var endIndex = _ref.endIndex;
  
          _this.setState({
            dataStartIndex: startIndex,
            dataEndIndex: endIndex
          });
  
          _this.triggerSyncEvent({
            dataStartIndex: startIndex,
            dataEndIndex: endIndex
          });
        };
  
        _this.handleMouseLeave = function () {
          var nextState = { isTooltipActive: false };
  
          _this.setState(nextState);
          _this.triggerSyncEvent(nextState);
        };
  
        _this.state = _this.createDefaultState(_this.props);
        _this.validateAxes();
        _this.uniqueChartId = (0, _uniqueId3.default)('recharts');
        return _this;
      }
  
      _createClass(CategoricalChartWrapper, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
          if (!(0, _isNil3.default)(this.props.syncId)) {
            this.addListener();
          }
        }
      }, {
        key: 'componentWillReceiveProps',
        value: function componentWillReceiveProps(nextProps) {
          if (nextProps.data !== this.props.data) {
            this.setState(this.createDefaultState(nextProps));
          }
          // add syncId
          if ((0, _isNil3.default)(this.props.syncId) && !(0, _isNil3.default)(nextProps.syncId)) {
            this.addListener();
          }
          // remove syncId
          if (!(0, _isNil3.default)(this.props.syncId) && (0, _isNil3.default)(nextProps.syncId)) {
            this.removeListener();
          }
        }
      }, {
        key: 'componentWillUnmount',
        value: function componentWillUnmount() {
          if (!(0, _isNil3.default)(this.props.syncId)) {
            this.removeListener();
          }
        }
        /**
        * Get the configuration of all x-axis or y-axis
        * @param  {String} axisType    The type of axis
        * @param  {Array} items        The instances of item
        * @param  {Object} stackGroups The items grouped by axisId and stackId
        * @return {Object}          Configuration
        */
  
      }, {
        key: 'getAxisMap',
        value: function getAxisMap() {
          var axisType = arguments.length <= 0 || arguments[0] === undefined ? 'xAxis' : arguments[0];
          var items = arguments[1];
          var stackGroups = arguments[2];
          var children = this.props.children;
  
          var Axis = axisType === 'xAxis' ? _XAxis2.default : _YAxis2.default;
          var axisIdKey = axisType === 'xAxis' ? 'xAxisId' : 'yAxisId';
          // Get all the instance of Axis
          var axes = (0, _ReactUtils.findAllByType)(children, Axis);
  
          var axisMap = {};
  
          if (axes && axes.length) {
            axisMap = this.getAxisMapByAxes(axes, items, axisType, axisIdKey, stackGroups);
          } else if (items && items.length) {
            axisMap = this.getAxisMapByItems(items, Axis, axisType, axisIdKey, stackGroups);
          }
  
          return axisMap;
        }
  
        /**
         * Get the configuration of axis by the options of axis instance
         * @param {Array}  axes  The instance of axes
         * @param  {Array} items The instances of item
         * @param  {String} axisType The type of axis, xAxis - x-axis, yAxis - y-axis
         * @param  {String} axisIdKey The unique id of an axis
         * @param  {Object} stackGroups The items grouped by axisId and stackId
         * @return {Object}      Configuration
         */
  
      }, {
        key: 'getAxisMapByAxes',
        value: function getAxisMapByAxes(axes, items, axisType, axisIdKey, stackGroups) {
          var _props = this.props;
          var layout = _props.layout;
          var children = _props.children;
          var data = _props.data;
          var _state = this.state;
          var dataEndIndex = _state.dataEndIndex;
          var dataStartIndex = _state.dataStartIndex;
  
          var displayedData = data.slice(dataStartIndex, dataEndIndex + 1);
          var len = displayedData.length;
          var isCategorial = (0, _CartesianUtils.isCategorialAxis)(layout, axisType);
  
          // Eliminate duplicated axes
          var axisMap = axes.reduce(function (result, child) {
            var _child$props = child.props;
            var type = _child$props.type;
            var dataKey = _child$props.dataKey;
            var allowDataOverflow = _child$props.allowDataOverflow;
  
            var axisId = child.props[axisIdKey];
  
            if (!result[axisId]) {
              var domain = void 0;
              var duplicateDomain = void 0;
  
              if (dataKey) {
                domain = (0, _CartesianUtils.getDomainOfDataByKey)(displayedData, dataKey, type);
                var duplicate = (0, _DataUtils.hasDuplicate)(domain);
  
                duplicateDomain = duplicate ? domain : null;
                // When axis has duplicated text, serial numbers are used to generate scale
                domain = duplicate ? (0, _range3.default)(0, len) : domain;
              } else if (stackGroups && stackGroups[axisId] && stackGroups[axisId].hasStack && type === 'number') {
                domain = (0, _CartesianUtils.getDomainOfStackGroups)(stackGroups[axisId].stackGroups, dataStartIndex, dataEndIndex);
              } else if (isCategorial) {
                domain = (0, _range3.default)(0, len);
              } else {
                domain = (0, _CartesianUtils.getDomainOfItemsWithSameAxis)(displayedData, items.filter(function (entry) {
                  return entry.props[axisIdKey] === axisId;
                }), type);
              }
              if (type === 'number') {
                // To detect wether there is any reference lines whose props alwaysShow is true
                domain = (0, _CartesianUtils.detectReferenceElementsDomain)(children, domain, axisId, axisType);
  
                if (child.props.domain) {
                  domain = (0, _DataUtils.parseSpecifiedDomain)(child.props.domain, domain, allowDataOverflow);
                }
              }
  
              return _extends({}, result, _defineProperty({}, axisId, _extends({}, child.props, {
                axisType: axisType,
                domain: domain,
                duplicateDomain: duplicateDomain,
                originalDomain: child.props.domain
              })));
            }
  
            return result;
          }, {});
          return axisMap;
        }
  
        /**
         * Get the configuration of axis by the options of item,
         * this kind of axis does not display in chart
         * @param  {Array} items       The instances of item
         * @param  {ReactElement} Axis Axis Component
         * @param  {String} axisType   The type of axis, xAxis - x-axis, yAxis - y-axis
         * @param  {String} axisIdKey  The unique id of an axis
         * @param  {Object} stackGroups The items grouped by axisId and stackId
         * @return {Object}            Configuration
         */
  
      }, {
        key: 'getAxisMapByItems',
        value: function getAxisMapByItems(items, Axis, axisType, axisIdKey, stackGroups) {
          var _props2 = this.props;
          var layout = _props2.layout;
          var children = _props2.children;
          var data = _props2.data;
          var _state2 = this.state;
          var dataEndIndex = _state2.dataEndIndex;
          var dataStartIndex = _state2.dataStartIndex;
  
          var displayedData = data.slice(dataStartIndex, dataEndIndex + 1);
          var len = displayedData.length;
          var isCategorial = (0, _CartesianUtils.isCategorialAxis)(layout, axisType);
          var index = -1;
  
          // The default type of x-axis is category axis,
          // The default contents of x-axis is the serial numbers of data
          // The default type of y-axis is number axis
          // The default contents of y-axis is the domain of data
          var axisMap = items.reduce(function (result, child) {
            var axisId = child.props[axisIdKey];
  
            if (!result[axisId]) {
              index++;
              var domain = void 0;
  
              if (isCategorial) {
                domain = (0, _range3.default)(0, len);
              } else if (stackGroups && stackGroups[axisId] && stackGroups[axisId].hasStack) {
                domain = (0, _CartesianUtils.getDomainOfStackGroups)(stackGroups[axisId].stackGroups, dataStartIndex, dataEndIndex);
                domain = (0, _CartesianUtils.detectReferenceElementsDomain)(children, domain, axisId, axisType);
              } else {
                domain = (0, _DataUtils.parseSpecifiedDomain)(Axis.defaultProps.domain, (0, _CartesianUtils.getDomainOfItemsWithSameAxis)(displayedData, items.filter(function (entry) {
                  return entry.props[axisIdKey] === axisId;
                }), 'number'), Axis.defaultProps.allowDataOverflow);
                domain = (0, _CartesianUtils.detectReferenceElementsDomain)(children, domain, axisId, axisType);
              }
  
              return _extends({}, result, _defineProperty({}, axisId, _extends({
                axisType: axisType
              }, Axis.defaultProps, {
                hide: true,
                orientation: ORIENT_MAP[axisType][index % 2],
                domain: domain,
                originalDomain: Axis.defaultProps.domain
              })));
            }
  
            return result;
          }, {});
  
          return axisMap;
        }
        /**
         * Calculate the scale function, position, width, height of axes
         * @param  {Object} axisMap  The configuration of axes
         * @param  {Object} offset   The offset of main part in the svg element
         * @param  {Object} axisType The type of axes, x-axis or y-axis
         * @return {Object} Configuration
         */
  
      }, {
        key: 'getFormatAxisMap',
        value: function getFormatAxisMap(axisMap, offset, axisType) {
          var _props3 = this.props;
          var width = _props3.width;
          var height = _props3.height;
          var layout = _props3.layout;
  
          var displayName = this.constructor.displayName;
          var ids = (0, _keys2.default)(axisMap);
          var steps = {
            left: offset.left,
            right: width - offset.right,
            top: offset.top,
            bottom: height - offset.bottom
          };
  
          return ids.reduce(function (result, id) {
            var axis = axisMap[id];
            var orientation = axis.orientation;
            var type = axis.type;
            var domain = axis.domain;
            var _axis$padding = axis.padding;
            var padding = _axis$padding === undefined ? {} : _axis$padding;
  
            var range = void 0;
  
            if (axisType === 'xAxis') {
              range = [offset.left + (padding.left || 0), offset.left + offset.width - (padding.right || 0)];
            } else {
              range = layout === 'horizontal' ? [offset.top + offset.height - (padding.bottom || 0), offset.top + (padding.top || 0)] : [offset.top + (padding.top || 0), offset.top + offset.height - (padding.bottom || 0)];
            }
            var scale = void 0;
  
            if (type === 'number') {
              scale = (0, _d3Scale.scaleLinear)().domain(domain).range(range);
            } else if (displayName.indexOf('LineChart') >= 0 || displayName.indexOf('AreaChart') >= 0) {
              scale = (0, _d3Scale.scalePoint)().domain(domain).range(range);
            } else {
              scale = (0, _d3Scale.scaleBand)().domain(domain).range(range);
            }
  
            var ticks = (0, _CartesianUtils.getTicksOfScale)(scale, axis);
  
            var x = void 0;
            var y = void 0;
  
            if (axisType === 'xAxis') {
              x = offset.left;
              y = orientation === 'top' ? steps[orientation] - axis.height : steps[orientation];
            } else {
              x = orientation === 'left' ? steps[orientation] - axis.width : steps[orientation];
              y = offset.top;
            }
  
            var finalAxis = _extends({}, axis, ticks, {
              x: x, y: y, scale: scale,
              width: axisType === 'xAxis' ? offset.width : axis.width,
              height: axisType === 'yAxis' ? offset.height : axis.height
            });
  
            if (!axis.hide && axisType === 'xAxis') {
              steps[orientation] += (orientation === 'top' ? -1 : 1) * finalAxis.height;
            } else if (!axis.hide) {
              steps[orientation] += (orientation === 'left' ? -1 : 1) * finalAxis.width;
            }
  
            return _extends({}, result, _defineProperty({}, id, finalAxis));
          }, {});
        }
        /**
         * Get the information of mouse in chart, return null when the mouse is not in the chart
         * @param  {Object}  xAxisMap The configuration of all x-axes
         * @param  {Object}  yAxisMap The configuration of all y-axes
         * @param  {Object}  offset   The offset of main part in the svg element
         * @param  {Object}  e        The event object
         * @return {Object}           Mouse data
         */
  
      }, {
        key: 'getMouseInfo',
        value: function getMouseInfo(xAxisMap, yAxisMap, offset, e) {
          var isIn = e.chartX >= offset.left && e.chartX <= offset.left + offset.width && e.chartY >= offset.top && e.chartY <= offset.top + offset.height;
  
          if (!isIn) {
            return null;
          }
  
          var layout = this.props.layout;
  
          var axisMap = layout === 'horizontal' ? xAxisMap : yAxisMap;
          var pos = layout === 'horizontal' ? e.chartX : e.chartY;
          var axis = (0, _DataUtils.getAnyElementOfObject)(axisMap);
          var ticks = (0, _CartesianUtils.getTicksOfAxis)(axis, false, true);
          var activeIndex = (0, _CartesianUtils.calculateActiveTickIndex)(pos, ticks);
  
          if (activeIndex >= 0) {
            return _extends({}, e, {
              activeTooltipIndex: activeIndex
            });
          }
  
          return null;
        }
        /**
         * Get the content to be displayed in the tooltip
         * @param  {Array} items The instances of item
         * @return {Array}       The content of tooltip
         */
  
      }, {
        key: 'getTooltipContent',
        value: function getTooltipContent(items) {
          var _state3 = this.state;
          var activeTooltipIndex = _state3.activeTooltipIndex;
          var dataStartIndex = _state3.dataStartIndex;
          var dataEndIndex = _state3.dataEndIndex;
  
          var data = this.props.data.slice(dataStartIndex, dataEndIndex + 1);
  
          if (activeTooltipIndex < 0 || !items || !items.length || activeTooltipIndex >= data.length) {
            return null;
          }
  
          return items.map(function (child) {
            var _child$props2 = child.props;
            var dataKey = _child$props2.dataKey;
            var name = _child$props2.name;
            var unit = _child$props2.unit;
            var formatter = _child$props2.formatter;
  
            return _extends({}, (0, _ReactUtils.getPresentationAttributes)(child), {
              dataKey: dataKey, unit: unit, formatter: formatter,
              name: name || dataKey,
              color: (0, _CartesianUtils.getMainColorOfGraphicItem)(child),
              value: data[activeTooltipIndex][dataKey],
              payload: data[activeTooltipIndex]
            });
          });
        }
        /* eslint-disable  no-underscore-dangle */
  
      }, {
        key: 'addListener',
        value: function addListener() {
          _Events.eventCenter.on(_Events.SYNC_EVENT, this.handleReceiveSyncEvent);
  
          if (_Events.eventCenter.setMaxListeners && _Events.eventCenter._maxListeners) {
            _Events.eventCenter.setMaxListeners(_Events.eventCenter._maxListeners + 1);
          }
        }
      }, {
        key: 'removeListener',
        value: function removeListener() {
          _Events.eventCenter.removeListener(_Events.SYNC_EVENT, this.handleReceiveSyncEvent);
  
          if (_Events.eventCenter.setMaxListeners && _Events.eventCenter._maxListeners) {
            _Events.eventCenter.setMaxListeners(_Events.eventCenter._maxListeners - 1);
          }
        }
        /**
         * Returns default, reset state for the categorical chart.
         * @param {Object} props Props object to use when creating the default state
         * @return {Object} Whole new state
         */
  
      }, {
        key: 'createDefaultState',
        value: function createDefaultState(props) {
          return {
            chartX: 0,
            chartY: 0,
            dataStartIndex: 0,
            dataEndIndex: props.data && props.data.length - 1 || 0,
            activeTooltipIndex: -1,
            isTooltipActive: false
          };
        }
        /**
         * Calculate the offset of main part in the svg element
         * @param  {Array} items       The instances of item
         * @param  {Object} xAxisMap  The configuration of x-axis
         * @param  {Object} yAxisMap  The configuration of y-axis
         * @return {Object} The offset of main part in the svg element
         */
  
      }, {
        key: 'calculateOffset',
        value: function calculateOffset(items, xAxisMap, yAxisMap) {
          var _props4 = this.props;
          var width = _props4.width;
          var height = _props4.height;
          var margin = _props4.margin;
          var children = _props4.children;
  
          var brushItem = (0, _ReactUtils.findChildByType)(children, _Brush2.default);
  
          var offsetH = (0, _keys2.default)(yAxisMap).reduce(function (result, id) {
            var entry = yAxisMap[id];
            var orientation = entry.orientation;
  
            return _extends({}, result, _defineProperty({}, orientation, result[orientation] + (entry.hide ? 0 : entry.width)));
          }, { left: margin.left || 0, right: margin.right || 0 });
  
          var offsetV = (0, _keys2.default)(xAxisMap).reduce(function (result, id) {
            var entry = xAxisMap[id];
            var orientation = entry.orientation;
  
            return _extends({}, result, _defineProperty({}, orientation, result[orientation] + (entry.hide ? 0 : entry.height)));
          }, { top: margin.top || 0, bottom: margin.bottom || 0 });
  
          var brushBottom = offsetV.bottom;
  
          if (brushItem) {
            offsetV.bottom += brushItem.props.height || _Brush2.default.defaultProps.height;
          }
  
          var legendProps = (0, _CartesianUtils.getLegendProps)(children, items, width, height);
          if (legendProps) {
            var box = _Legend2.default.getLegendBBox(legendProps, width, height) || {};
            if (legendProps.layout === 'horizontal' && (0, _isNumber3.default)(offsetV[legendProps.verticalAlign])) {
              offsetV[legendProps.verticalAlign] += box.height || 0;
            } else if (legendProps.layout === 'vertical' && (0, _isNumber3.default)(offsetH[legendProps.align])) {
              offsetH[legendProps.align] += box.width || 0;
            }
          }
  
          return _extends({
            brushBottom: brushBottom
          }, offsetH, offsetV, {
            width: width - offsetH.left - offsetH.right,
            height: height - offsetV.top - offsetV.bottom
          });
        }
      }, {
        key: 'handleMouseEnter',
  
        /**
         * The handler of mouse entering chart
         * @param  {Object} offset   The offset of main part in the svg element
         * @param  {Object} xAxisMap The configuration of all x-axes
         * @param  {Object} yAxisMap The configuration of all y-axes
         * @param  {Object} e        Event object
         * @return {Null}            null
         */
        value: function handleMouseEnter(offset, xAxisMap, yAxisMap, e) {
          var container = _reactDom2.default.findDOMNode(this);
          var containerOffset = (0, _DOMUtils.getOffset)(container);
          var ne = (0, _DOMUtils.calculateChartCoordinate)(e, containerOffset);
          var mouse = this.getMouseInfo(xAxisMap, yAxisMap, offset, ne);
  
          if (mouse) {
            var nextState = _extends({}, mouse, { isTooltipActive: true });
            this.setState(nextState);
            this.triggerSyncEvent(nextState);
          }
        }
  
        /**
         * The handler of mouse moving in chart
         * @param  {Object} offset   The offset of main part in the svg element
         * @param  {Object} xAxisMap The configuration of all x-axes
         * @param  {Object} yAxisMap The configuration of all y-axes
         * @param  {Object} e        Event object
         * @return {Null} no return
         */
  
      }, {
        key: 'handleMouseMove',
        value: function handleMouseMove(offset, xAxisMap, yAxisMap, e) {
          var container = _reactDom2.default.findDOMNode(this);
          var containerOffset = (0, _DOMUtils.getOffset)(container);
          var ne = (0, _DOMUtils.calculateChartCoordinate)(e, containerOffset);
          var mouse = this.getMouseInfo(xAxisMap, yAxisMap, offset, ne);
          var nextState = mouse ? _extends({}, mouse, { isTooltipActive: true }) : { isTooltipActive: false };
  
          this.setState(nextState);
          this.triggerSyncEvent(nextState);
        }
        /**
         * The handler if mouse leaving chart
         * @return {Null} no return
         */
  
      }, {
        key: 'validateAxes',
        value: function validateAxes() {
          var _props5 = this.props;
          var layout = _props5.layout;
          var children = _props5.children;
  
          var xAxes = (0, _ReactUtils.findAllByType)(children, _XAxis2.default);
          var yAxes = (0, _ReactUtils.findAllByType)(children, _YAxis2.default);
  
          if (layout === 'horizontal' && xAxes && xAxes.length) {
            xAxes.forEach(function (axis) {
              (0, _LogUtils.warn)(axis.props.type === 'category', 'x-axis should be category axis when the layout is horizontal');
            });
          } else if (layout === 'vertical') {
            var displayName = this.constructor.displayName;
  
            (0, _LogUtils.warn)(yAxes && yAxes.length, 'You should add <YAxis type="number" /> in ' + displayName + '.\n           The layout is vertical now, y-axis should be category axis,\n           but y-axis is number axis when no YAxis is added.');
            (0, _LogUtils.warn)(xAxes && xAxes.length, 'You should add <XAxis /> in ' + displayName + '.\n          The layout is vertical now, x-axis is category when no XAxis is added.');
  
            if (yAxes && yAxes.length) {
              yAxes.forEach(function (axis) {
                (0, _LogUtils.warn)(axis.props.type === 'category', 'y-axis should be category axis when the layout is vertical');
              });
            }
          }
  
          return null;
        }
      }, {
        key: 'triggerSyncEvent',
        value: function triggerSyncEvent(data) {
          var syncId = this.props.syncId;
  
          if (!(0, _isNil3.default)(syncId)) {
            _Events.eventCenter.emit(_Events.SYNC_EVENT, syncId, this.uniqueChartId, data);
          }
        }
        /**
         * Draw axes
         * @param {Object} axisMap The configuration of all x-axes or y-axes
         * @param {String} name    The name of axes
         * @return {ReactElement}  The instance of x-axes
         */
  
      }, {
        key: 'renderAxes',
        value: function renderAxes(axisMap, name) {
          var _props6 = this.props;
          var width = _props6.width;
          var height = _props6.height;
  
          var ids = axisMap && (0, _keys2.default)(axisMap);
  
          if (ids && ids.length) {
            var axes = [];
  
            for (var i = 0, len = ids.length; i < len; i++) {
              var axis = axisMap[ids[i]];
  
              if (!axis.hide) {
                axes.push(_react2.default.createElement(_CartesianAxis2.default, _extends({}, axis, {
                  key: name + '-' + ids[i],
                  viewBox: { x: 0, y: 0, width: width, height: height },
                  ticks: (0, _CartesianUtils.getTicksOfAxis)(axis, true)
                })));
              }
            }
  
            return axes.length ? _react2.default.createElement(_Layer2.default, { key: name + '-layer', className: 'recharts-' + name }, axes) : null;
          }
  
          return null;
        }
        /**
         * Draw grid
         * @param  {Object} xAxisMap The configuration of all x-axes
         * @param  {Object} yAxisMap The configuration of all y-axes
         * @param  {Object} offset   The offset of main part in the svg element
         * @return {ReactElement} The instance of grid
         */
  
      }, {
        key: 'renderGrid',
        value: function renderGrid(xAxisMap, yAxisMap, offset) {
          var _props7 = this.props;
          var children = _props7.children;
          var width = _props7.width;
          var height = _props7.height;
  
          var gridItem = (0, _ReactUtils.findChildByType)(children, _CartesianGrid2.default);
  
          if (!gridItem) {
            return null;
          }
  
          var xAxis = (0, _DataUtils.getAnyElementOfObject)(xAxisMap);
          var yAxis = (0, _DataUtils.getAnyElementOfObject)(yAxisMap);
  
          var verticalPoints = (0, _CartesianUtils.getCoordinatesOfGrid)(_CartesianAxis2.default.getTicks(_extends({}, _CartesianAxis2.default.defaultProps, xAxis, {
            ticks: (0, _CartesianUtils.getTicksOfAxis)(xAxis, true),
            viewBox: { x: 0, y: 0, width: width, height: height }
          })), offset.left, offset.left + offset.width);
  
          var horizontalPoints = (0, _CartesianUtils.getCoordinatesOfGrid)(_CartesianAxis2.default.getTicks(_extends({}, _CartesianAxis2.default.defaultProps, yAxis, {
            ticks: (0, _CartesianUtils.getTicksOfAxis)(yAxis, true),
            viewBox: { x: 0, y: 0, width: width, height: height }
          })), offset.top, offset.top + offset.height);
  
          return _react2.default.cloneElement(gridItem, {
            key: 'grid',
            x: offset.left,
            y: offset.top,
            width: offset.width,
            height: offset.height,
            verticalPoints: verticalPoints, horizontalPoints: horizontalPoints
          });
        }
        /**
         * Draw legend
         * @param  {Array} items             The instances of item
         * @return {ReactElement}            The instance of Legend
         */
  
      }, {
        key: 'renderLegend',
        value: function renderLegend(items) {
          var _props8 = this.props;
          var children = _props8.children;
          var width = _props8.width;
          var height = _props8.height;
          var margin = _props8.margin;
  
          var legendWidth = width - margin.left - margin.right;
          var legendHeight = height - margin.top - margin.bottom;
          var props = (0, _CartesianUtils.getLegendProps)(children, items, legendWidth, legendHeight);
  
          if (!props) {
            return null;
          }
  
          return _react2.default.createElement(_Legend2.default, _extends({}, props, {
            chartWidth: width,
            chartHeight: height,
            margin: margin
          }));
        }
  
        /**
         * Draw Tooltip
         * @param  {Object} xAxisMap The configuration of all x-axes
         * @param  {Object} yAxisMap The configuration of all y-axes
         * @param  {ReactElement} tooltipItem  The instance of Tooltip
         * @param  {Array}  items  The instances of GraphicalChild
         * @param  {Object} offset The offset of main part in the svg element
         * @return {ReactElement}  The instance of Tooltip
         */
  
      }, {
        key: 'renderTooltip',
        value: function renderTooltip(xAxisMap, yAxisMap, tooltipItem, items, offset) {
          var layout = this.props.layout;
          var _state4 = this.state;
          var isTooltipActive = _state4.isTooltipActive;
          var activeTooltipIndex = _state4.activeTooltipIndex;
          var chartX = _state4.chartX;
          var chartY = _state4.chartY;
  
          var axisMap = layout === 'horizontal' ? xAxisMap : yAxisMap;
          var pos = layout === 'horizontal' ? chartX : chartY;
          var axis = (0, _DataUtils.getAnyElementOfObject)(axisMap);
          var ticks = (0, _CartesianUtils.getTicksOfAxis)(axis, false, true);
          var viewBox = _extends({}, offset, { x: offset.left, y: offset.top });
          // When a categotical chart is combined with another chart, the value of chartX
          // and chartY may beyond the boundaries.
          var validateChartX = Math.min(chartX, viewBox.x + viewBox.width);
          var validateChartY = Math.min(chartY, viewBox.y + viewBox.height);
  
          return _react2.default.cloneElement(tooltipItem, {
            viewBox: viewBox,
            active: isTooltipActive,
            label: ticks[activeTooltipIndex] && ticks[activeTooltipIndex].value,
            payload: isTooltipActive ? this.getTooltipContent(items) : [],
            coordinate: ticks[activeTooltipIndex] ? {
              x: layout === 'horizontal' ? ticks[activeTooltipIndex].coordinate : validateChartX,
              y: layout === 'horizontal' ? validateChartY : ticks[activeTooltipIndex].coordinate
            } : { x: 0, y: 0 }
          });
        }
      }, {
        key: 'renderBrush',
        value: function renderBrush(xAxisMap, yAxisMap, offset) {
          var _props9 = this.props;
          var children = _props9.children;
          var margin = _props9.margin;
          var data = _props9.data;
          var _state5 = this.state;
          var dataStartIndex = _state5.dataStartIndex;
          var dataEndIndex = _state5.dataEndIndex;
  
          var brushItem = (0, _ReactUtils.findChildByType)(children, _Brush2.default);
  
          if (!brushItem) {
            return null;
          }
  
          return _react2.default.cloneElement(brushItem, {
            onChange: this.handleBrushChange,
            data: data,
            x: offset.left,
            y: offset.top + offset.height + offset.brushBottom - (margin.bottom || 0),
            width: offset.width,
            startIndex: dataStartIndex,
            endIndex: dataEndIndex
          });
        }
      }, {
        key: 'renderReferenceElements',
        value: function renderReferenceElements(xAxisMap, yAxisMap, offset, isFront, Compt) {
          var children = this.props.children;
  
          var elements = (0, _ReactUtils.findAllByType)(children, Compt);
  
          if (!elements || !elements.length) {
            return null;
          }
  
          var keyPrefix = (0, _ReactUtils.getDisplayName)(Compt) + '-' + (isFront ? 'front' : 'back');
  
          return elements.filter(function (entry) {
            return isFront === entry.props.isFront;
          }).map(function (entry, i) {
            var _entry$props = entry.props;
            var xAxisId = _entry$props.xAxisId;
            var yAxisId = _entry$props.yAxisId;
  
            return _react2.default.cloneElement(entry, {
              key: keyPrefix + '-' + i,
              xAxis: xAxisMap[xAxisId],
              yAxis: yAxisMap[yAxisId],
              viewBox: {
                x: offset.left,
                y: offset.top,
                width: offset.width,
                height: offset.height
              }
            });
          });
        }
      }, {
        key: 'render',
        value: function render() {
          var data = this.props.data;
  
          if (!(0, _ReactUtils.validateWidthHeight)(this) || !data || !data.length) {
            return null;
          }
  
          var _props10 = this.props;
          var children = _props10.children;
          var layout = _props10.layout;
          var className = _props10.className;
          var width = _props10.width;
          var height = _props10.height;
          var stackOffset = _props10.stackOffset;
          var style = _props10.style;
  
          var others = _objectWithoutProperties(_props10, ['children', 'layout', 'className', 'width', 'height', 'stackOffset', 'style']);
  
          var numericIdName = layout === 'horizontal' ? 'yAxis' : 'xAxis';
          var cateIdName = layout === 'horizontal' ? 'xAxis' : 'yAxis';
          var items = (0, _ReactUtils.findAllByType)(children, GraphicalChild);
          var stackGroups = (0, _CartesianUtils.getStackGroupsByAxisId)(data, items, numericIdName + 'Id', cateIdName + 'Id', stackOffset);
  
          var xAxisMap = this.getAxisMap('xAxis', items, numericIdName === 'xAxis' && stackGroups);
          var yAxisMap = this.getAxisMap('yAxis', items, numericIdName === 'yAxis' && stackGroups);
  
          var offset = this.calculateOffset(items, xAxisMap, yAxisMap);
  
          xAxisMap = this.getFormatAxisMap(xAxisMap, offset, 'xAxis');
          yAxisMap = this.getFormatAxisMap(yAxisMap, offset, 'yAxis');
  
          var tooltipItem = (0, _ReactUtils.findChildByType)(children, _Tooltip2.default);
          var events = tooltipItem ? {
            onMouseEnter: this.handleMouseEnter.bind(this, offset, xAxisMap, yAxisMap),
            onMouseMove: this.handleMouseMove.bind(this, offset, xAxisMap, yAxisMap),
            onMouseLeave: this.handleMouseLeave
          } : null;
          var attrs = (0, _ReactUtils.getPresentationAttributes)(others);
  
          return _react2.default.createElement('div', _extends({
            className: (0, _classnames2.default)('recharts-wrapper', className),
            style: _extends({}, style, { position: 'relative', cursor: 'default', width: width, height: height })
          }, events), _react2.default.createElement(_Surface2.default, _extends({}, attrs, { width: width, height: height }), this.renderGrid(xAxisMap, yAxisMap, offset), this.renderReferenceElements(xAxisMap, yAxisMap, offset, false, _ReferenceArea2.default), this.renderReferenceElements(xAxisMap, yAxisMap, offset, false, _ReferenceLine2.default), this.renderReferenceElements(xAxisMap, yAxisMap, offset, false, _ReferenceDot2.default), this.renderAxes(xAxisMap, 'x-axis'), this.renderAxes(yAxisMap, 'y-axis'), _react2.default.createElement(ChartComponent, _extends({}, this.props, this.state, {
            graphicalItems: items,
            xAxisMap: xAxisMap,
            yAxisMap: yAxisMap,
            offset: offset,
            stackGroups: stackGroups
          })), this.renderReferenceElements(xAxisMap, yAxisMap, offset, true, _ReferenceArea2.default), this.renderReferenceElements(xAxisMap, yAxisMap, offset, true, _ReferenceLine2.default), this.renderReferenceElements(xAxisMap, yAxisMap, offset, true, _ReferenceDot2.default), this.renderBrush(xAxisMap, yAxisMap, offset), (0, _ReactUtils.filterSvgElements)(children)), this.renderLegend(items), tooltipItem && this.renderTooltip(xAxisMap, yAxisMap, tooltipItem, items, offset));
        }
      }]);
  
      return CategoricalChartWrapper;
    }(_react.Component), _class.displayName = (0, _ReactUtils.getDisplayName)(ChartComponent), _class.propTypes = {
      syncId: _react.PropTypes.oneOfType([_react.PropTypes.string, _react.PropTypes.number]),
      width: _react.PropTypes.number,
      height: _react.PropTypes.number,
      data: _react.PropTypes.arrayOf(_react.PropTypes.object),
      layout: _react.PropTypes.oneOf(['horizontal', 'vertical']),
      stackOffset: _react.PropTypes.oneOf(['sign', 'expand', 'none', 'wiggle', 'silhouette']),
      margin: _react.PropTypes.shape({
        top: _react.PropTypes.number,
        right: _react.PropTypes.number,
        bottom: _react.PropTypes.number,
        left: _react.PropTypes.number
      }),
      style: _react.PropTypes.object,
      className: _react.PropTypes.string,
      children: _react.PropTypes.oneOfType([_react.PropTypes.arrayOf(_react.PropTypes.node), _react.PropTypes.node])
    }, _class.defaultProps = {
      layout: 'horizontal',
      stackOffset: 'none',
      margin: { top: 5, right: 5, bottom: 5, left: 5 }
    }, _temp);
  
    return CategoricalChartWrapper;
  };
  
  exports.default = generateCategoricalChart;

/***/ }),
/* 134 */
/***/ (function(module, exports, __webpack_require__) {

  'use strict';
  
  var _keys = __webpack_require__(65);
  
  var _keys2 = _interopRequireDefault2(_keys);
  
  var _defineProperty2 = __webpack_require__(62);
  
  var _defineProperty3 = _interopRequireDefault2(_defineProperty2);
  
  var _assign = __webpack_require__(23);
  
  var _assign2 = _interopRequireDefault2(_assign);
  
  function _interopRequireDefault2(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.getTicksOfScale = exports.getLegendProps = exports.getMainColorOfGraphicItem = exports.calculateActiveTickIndex = exports.getTicksOfAxis = exports.getCoordinatesOfGrid = exports.isCategorialAxis = exports.getDomainOfItemsWithSameAxis = exports.getDomainOfStackGroups = exports.getDomainOfDataByKey = exports.calculateDomainOfTicks = exports.getStackedDataOfItem = exports.getStackGroupsByAxisId = exports.getStackedData = exports.detectReferenceElementsDomain = undefined;
  
  var _uniqueId2 = __webpack_require__(114);
  
  var _uniqueId3 = _interopRequireDefault(_uniqueId2);
  
  var _isString2 = __webpack_require__(66);
  
  var _isString3 = _interopRequireDefault(_isString2);
  
  var _isNumber2 = __webpack_require__(67);
  
  var _isNumber3 = _interopRequireDefault(_isNumber2);
  
  var _extends = _assign2.default || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }return target;
  };
  
  var _ReactUtils = __webpack_require__(64);
  
  var _ReferenceDot = __webpack_require__(120);
  
  var _ReferenceDot2 = _interopRequireDefault(_ReferenceDot);
  
  var _ReferenceLine = __webpack_require__(118);
  
  var _ReferenceLine2 = _interopRequireDefault(_ReferenceLine);
  
  var _ReferenceArea = __webpack_require__(121);
  
  var _ReferenceArea2 = _interopRequireDefault(_ReferenceArea);
  
  var _Legend = __webpack_require__(71);
  
  var _Legend2 = _interopRequireDefault(_Legend);
  
  var _rechartsScale = __webpack_require__(135);
  
  var _d3Shape = __webpack_require__(79);
  
  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
  }
  
  function _defineProperty(obj, key, value) {
    if (key in obj) {
      (0, _defineProperty3.default)(obj, key, { value: value, enumerable: true, configurable: true, writable: true });
    } else {
      obj[key] = value;
    }return obj;
  }
  
  /* eslint no-param-reassign: 0 */
  var offsetSign = function offsetSign(series, order) {
    var n = series.length;
    if (n <= 0) {
      return;
    }
  
    for (var j = 0, m = series[0].length; j < m; ++j) {
      var positive = 0;
      var negative = 0;
  
      for (var i = 0; i < n; ++i) {
        var value = isNaN(series[i][j][1]) ? series[i][j][0] : series[i][j][1];
  
        if (value >= 0) {
          series[i][j][0] = positive;
          series[i][j][1] = positive + value;
          positive = series[i][j][1];
        } else {
          series[i][j][0] = negative;
          series[i][j][1] = negative + value;
          negative = series[i][j][1];
        }
      }
    }
  };
  
  var STACK_OFFSET_MAP = {
    sign: offsetSign,
    expand: _d3Shape.stackOffsetExpand,
    none: _d3Shape.stackOffsetNone,
    silhouette: _d3Shape.stackOffsetSilhouette,
    wiggle: _d3Shape.stackOffsetWiggle
  };
  
  var detectReferenceElementsDomain = exports.detectReferenceElementsDomain = function detectReferenceElementsDomain(children, domain, axisId, axisType) {
    var lines = (0, _ReactUtils.findAllByType)(children, _ReferenceLine2.default);
    var dots = (0, _ReactUtils.findAllByType)(children, _ReferenceDot2.default);
    var elements = lines.concat(dots);
    var areas = (0, _ReactUtils.findAllByType)(children, _ReferenceArea2.default);
    var idKey = axisType + 'Id';
    var valueKey = axisType[0];
    var finalDomain = domain;
  
    if (elements.length) {
      finalDomain = elements.reduce(function (result, el) {
        if (el.props[idKey] === axisId && el.props.alwaysShow && (0, _isNumber3.default)(el.props[valueKey])) {
          var value = el.props[valueKey];
  
          return [Math.min(result[0], value), Math.max(result[1], value)];
        }
        return result;
      }, finalDomain);
    }
  
    if (areas.length) {
      (function () {
        var key1 = valueKey + '1';
        var key2 = valueKey + '2';
  
        finalDomain = areas.reduce(function (result, el) {
          if (el.props[idKey] === axisId && el.props.alwaysShow && (0, _isNumber3.default)(el.props[key1]) && (0, _isNumber3.default)(el.props[key2])) {
            var value1 = el.props[key1];
            var value2 = el.props[key2];
  
            return [Math.min(result[0], value1, value2), Math.max(result[1], value1, value2)];
          }
          return result;
        }, finalDomain);
      })();
    }
  
    return finalDomain;
  };
  
  var getStackedData = exports.getStackedData = function getStackedData(data, stackItems, offsetType) {
    var dataKeys = stackItems.map(function (item) {
      return item.props.dataKey;
    });
    var stack = (0, _d3Shape.stack)().keys(dataKeys).value(function (d, key) {
      return +d[key] || 0;
    }).order(_d3Shape.stackOrderNone).offset(STACK_OFFSET_MAP[offsetType]);
  
    return stack(data);
  };
  
  var getStackGroupsByAxisId = exports.getStackGroupsByAxisId = function getStackGroupsByAxisId(data, items, numericAxisId, cateAxisId, offsetType) {
    var stackGroups = items.reduce(function (result, item) {
      var _item$props = item.props;
      var stackId = _item$props.stackId;
      var dataKey = _item$props.dataKey;
  
      var axisId = item.props[numericAxisId];
      var parentGroup = result[axisId] || { hasStack: false, stackGroups: {} };
  
      if ((0, _isNumber3.default)(stackId) || (0, _isString3.default)(stackId)) {
        var childGroup = parentGroup.stackGroups[stackId] || { items: [] };
  
        childGroup.items.push(item);
  
        if (childGroup.items.length >= 2) {
          parentGroup.hasStack = true;
        }
  
        parentGroup.stackGroups[stackId] = childGroup;
      } else {
        parentGroup.stackGroups[(0, _uniqueId3.default)('_stackId_')] = {
          numericAxisId: numericAxisId, cateAxisId: cateAxisId, items: [item]
        };
      }
  
      return _extends({}, result, _defineProperty({}, axisId, parentGroup));
    }, {});
  
    return (0, _keys2.default)(stackGroups).reduce(function (result, axisId) {
      var group = stackGroups[axisId];
  
      if (group.hasStack) {
        group.stackGroups = (0, _keys2.default)(group.stackGroups).reduce(function (res, stackId) {
          var g = group.stackGroups[stackId];
  
          return _extends({}, res, _defineProperty({}, stackId, {
            numericAxisId: numericAxisId,
            cateAxisId: cateAxisId,
            items: g.items,
            stackedData: getStackedData(data, g.items, offsetType)
          }));
        }, {});
      }
  
      return _extends({}, result, _defineProperty({}, axisId, group));
    }, {});
  };
  
  var getStackedDataOfItem = exports.getStackedDataOfItem = function getStackedDataOfItem(item, stackGroups) {
    var stackId = item.props.stackId;
  
    if ((0, _isNumber3.default)(stackId) || (0, _isString3.default)(stackId)) {
      var group = stackGroups[stackId];
  
      if (group && group.items.length) {
        var itemIndex = -1;
  
        for (var i = 0, len = group.items.length; i < len; i++) {
          if (group.items[i] === item) {
            itemIndex = i;
            break;
          }
        }
        return itemIndex >= 0 ? group.stackedData[itemIndex] : null;
      }
    }
  
    return null;
  };
  /**
   * get domain of ticks
   * @param  {Array} ticks Ticks of axis
   * @param  {String} type  The type of axis
   * @return {Array} domain
   */
  var calculateDomainOfTicks = exports.calculateDomainOfTicks = function calculateDomainOfTicks(ticks, type) {
    if (type === 'number') {
      return [Math.min.apply(null, ticks), Math.max.apply(null, ticks)];
    }
  
    return ticks;
  };
  
  /**
   * Get domain of data by key
   * @param  {Array} data   The data displayed in the chart
   * @param  {String} key  The unique key of a group of data
   * @param  {String} type The type of axis
   * @return {Array} Domain of data
   */
  var getDomainOfDataByKey = exports.getDomainOfDataByKey = function getDomainOfDataByKey(data, key, type) {
    if (type === 'number') {
      var domain = data.map(function (entry) {
        return entry[key];
      }).filter(_isNumber3.default);
  
      return [Math.min.apply(null, domain), Math.max.apply(null, domain)];
    }
  
    return data.map(function (entry) {
      var value = entry[key];
  
      return (0, _isNumber3.default)(value) || (0, _isString3.default)(value) ? value : '';
    });
  };
  
  var getDomainOfSingle = function getDomainOfSingle(data) {
    return data.reduce(function (result, entry) {
      return [Math.min.apply(null, entry.concat([result[0]]).filter(_isNumber3.default)), Math.max.apply(null, entry.concat([result[1]]).filter(_isNumber3.default))];
    }, [Infinity, -Infinity]);
  };
  
  var getDomainOfStackGroups = exports.getDomainOfStackGroups = function getDomainOfStackGroups(stackGroups, startIndex, endIndex) {
    return (0, _keys2.default)(stackGroups).reduce(function (result, stackId) {
      var group = stackGroups[stackId];
      var stackedData = group.stackedData;
  
      var domain = stackedData.reduce(function (res, entry) {
        var s = getDomainOfSingle(entry.slice(startIndex, endIndex + 1));
  
        return [Math.min(res[0], s[0]), Math.max(res[1], s[1])];
      }, [Infinity, -Infinity]);
  
      return [Math.min(domain[0], result[0]), Math.max(domain[1], result[1])];
    }, [Infinity, -Infinity]).map(function (result) {
      return result === Infinity || result === -Infinity ? 0 : result;
    });
  };
  
  /**
   * Get domain of data by the configuration of item element
   * @param  {Array} data   The data displayed in the chart
   * @param  {Array} items  The instances of item
   * @param  {String} type  The type of axis, number - Number Axis, category - Category Axis
   * @return {Array}        Domain
   */
  var getDomainOfItemsWithSameAxis = exports.getDomainOfItemsWithSameAxis = function getDomainOfItemsWithSameAxis(data, items, type) {
    var domains = items.map(function (item) {
      return getDomainOfDataByKey(data, item.props.dataKey, type);
    });
  
    if (type === 'number') {
      // Calculate the domain of number axis
      return domains.reduce(function (result, entry) {
        return [Math.min(result[0], entry[0]), Math.max(result[1], entry[1])];
      }, [Infinity, -Infinity]);
    }
  
    var tag = {};
    // Get the union set of category axis
    return domains.reduce(function (result, entry) {
      for (var i = 0, len = entry.length; i < len; i++) {
        if (!tag[entry[i]]) {
          tag[entry[i]] = true;
  
          result.push(entry[i]);
        }
      }
      return result;
    }, []);
  };
  
  var isCategorialAxis = exports.isCategorialAxis = function isCategorialAxis(layout, axisType) {
    return layout === 'horizontal' && axisType === 'xAxis' || layout === 'vertical' && axisType === 'yAxis';
  };
  /**
  * Calculate the Coordinates of grid
  * @param  {Array} ticks The ticks in axis
  * @param {Number} min   The minimun value of axis
  * @param {Number} max   The maximun value of axis
  * @return {Array}       Coordinates
  */
  var getCoordinatesOfGrid = exports.getCoordinatesOfGrid = function getCoordinatesOfGrid(ticks, min, max) {
    var hasMin = void 0;
    var hasMax = void 0;
  
    var values = ticks.map(function (entry) {
      if (entry.coordinate === min) {
        hasMin = true;
      }
      if (entry.coordinate === max) {
        hasMax = true;
      }
  
      return entry.coordinate;
    });
  
    if (!hasMin) {
      values.push(min);
    }
    if (!hasMax) {
      values.push(max);
    }
  
    return values;
  };
  
  /**
   * Get the ticks of an axis
   * @param  {Object}  axis The configuration of an axis
   * @param {Boolean} isGrid Whether or not are the ticks in grid
   * @param {Boolean} isAll Return the ticks of all the points or not
   * @return {Array}  Ticks
   */
  var getTicksOfAxis = exports.getTicksOfAxis = function getTicksOfAxis(axis, isGrid, isAll) {
    var scale = axis.scale;
    var duplicateDomain = axis.duplicateDomain;
    var type = axis.type;
  
    var offset = (isGrid || isAll) && type === 'category' ? scale.bandwidth() / 2 : 0;
  
    // The ticks setted by user should only affect the ticks adjacent to axis line
    if (isGrid && (axis.ticks || axis.niceTicks)) {
      return (axis.ticks || axis.niceTicks).map(function (entry) {
        var scaleContent = duplicateDomain ? duplicateDomain.indexOf(entry) : entry;
  
        return {
          coordinate: scale(scaleContent) + offset,
          value: entry
        };
      });
    }
  
    if (scale.ticks && !isAll) {
      return scale.ticks(axis.tickCount).map(function (entry) {
        return { coordinate: scale(entry) + offset, value: entry };
      });
    }
  
    // When axis has duplicated text, serial numbers are used to generate scale
    return scale.domain().map(function (entry) {
      return {
        coordinate: scale(entry) + offset,
        value: duplicateDomain ? duplicateDomain[entry] : entry
      };
    });
  };
  
  var calculateActiveTickIndex = exports.calculateActiveTickIndex = function calculateActiveTickIndex(coordinate, ticks) {
    var index = -1;
    var len = ticks.length;
  
    if (len > 1) {
      for (var i = 0; i < len; i++) {
        if (i === 0 && coordinate <= (ticks[i].coordinate + ticks[i + 1].coordinate) / 2 || i > 0 && i < len - 1 && coordinate > (ticks[i].coordinate + ticks[i - 1].coordinate) / 2 && coordinate <= (ticks[i].coordinate + ticks[i + 1].coordinate) / 2 || i === len - 1 && coordinate > (ticks[i].coordinate + ticks[i - 1].coordinate) / 2) {
          index = i;
          break;
        }
      }
    } else {
      index = 0;
    }
  
    return index;
  };
  
  /**
   * Get the main color of each graphic item
   * @param  {ReactElement} item A graphic item
   * @return {String}            Color
   */
  var getMainColorOfGraphicItem = exports.getMainColorOfGraphicItem = function getMainColorOfGraphicItem(item) {
    var displayName = item.type.displayName;
    var result = void 0;
  
    switch (displayName) {
      case 'Line':
      case 'Area':
        result = item.props.stroke;
        break;
      default:
        result = item.props.fill;
        break;
    }
  
    return result;
  };
  
  var getLegendProps = exports.getLegendProps = function getLegendProps(children, graphicItems, width, height) {
    var legendItem = (0, _ReactUtils.findChildByType)(children, _Legend2.default);
  
    if (!legendItem) {
      return null;
    }
  
    var legendData = legendItem.props && legendItem.props.payload || graphicItems.map(function (child) {
      var _child$props = child.props;
      var dataKey = _child$props.dataKey;
      var name = _child$props.name;
      var legendType = _child$props.legendType;
  
      return {
        dataKey: dataKey,
        type: legendType || 'square',
        color: getMainColorOfGraphicItem(child),
        value: name || dataKey
      };
    }, undefined);
  
    return _extends({}, legendItem.props, _Legend2.default.getWithHeight(legendItem, width, height), {
      payload: legendData
    });
  };
  /**
   * Configure the scale function of axis
   * @param {Object} scale The scale function
   * @param {Object} opts  The configuration of axis
   * @return {Object}      null
   */
  var getTicksOfScale = exports.getTicksOfScale = function getTicksOfScale(scale, opts) {
    var type = opts.type;
    var tickCount = opts.tickCount;
    var ticks = opts.ticks;
    var originalDomain = opts.originalDomain;
    var allowDecimals = opts.allowDecimals;
  
    if (tickCount && type === 'number' && originalDomain && (originalDomain[0] === 'auto' || originalDomain[1] === 'auto')) {
      // Calculate the ticks by the number of grid when the axis is a number axis
      var domain = scale.domain();
      var tickValues = (0, _rechartsScale.getNiceTickValues)(domain, tickCount, allowDecimals);
  
      scale.domain(calculateDomainOfTicks(tickValues, type));
  
      return { niceTicks: tickValues };
    } else if (tickCount && type === 'number') {
      var _domain = scale.domain();
      var _tickValues = (0, _rechartsScale.getTickValues)(_domain, tickCount, allowDecimals);
  
      return { niceTicks: _tickValues };
    }
  
    return null;
  };

/***/ }),
/* 135 */
/***/ (function(module, exports) {

  module.exports = require("recharts-scale");

/***/ }),
/* 136 */
/***/ (function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.SYNC_EVENT = exports.eventCenter = undefined;
  
  var _events = __webpack_require__(137);
  
  var _events2 = _interopRequireDefault(_events);
  
  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
  }
  
  var eventCenter = new _events2.default();
  
  if (eventCenter.setMaxListeners) {
    eventCenter.setMaxListeners(10);
  }
  
  exports.eventCenter = eventCenter;
  var SYNC_EVENT = exports.SYNC_EVENT = 'recharts.syncMouseEvents';

/***/ }),
/* 137 */
/***/ (function(module, exports) {

  module.exports = require("events");

/***/ }),
/* 138 */
/***/ (function(module, exports, __webpack_require__) {

  'use strict';
  
  var _keys = __webpack_require__(65);
  
  var _keys2 = _interopRequireDefault2(_keys);
  
  var _sign = __webpack_require__(86);
  
  var _sign2 = _interopRequireDefault2(_sign);
  
  var _getPrototypeOf = __webpack_require__(29);
  
  var _getPrototypeOf2 = _interopRequireDefault2(_getPrototypeOf);
  
  var _setPrototypeOf = __webpack_require__(59);
  
  var _setPrototypeOf2 = _interopRequireDefault2(_setPrototypeOf);
  
  var _create = __webpack_require__(60);
  
  var _create2 = _interopRequireDefault2(_create);
  
  var _typeof2 = __webpack_require__(61);
  
  var _typeof3 = _interopRequireDefault2(_typeof2);
  
  var _defineProperty2 = __webpack_require__(62);
  
  var _defineProperty3 = _interopRequireDefault2(_defineProperty2);
  
  var _assign = __webpack_require__(23);
  
  var _assign2 = _interopRequireDefault2(_assign);
  
  function _interopRequireDefault2(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.BarChart = undefined;
  
  var _extends = _assign2.default || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }return target;
  };
  
  var _createClass = function () {
    function defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;(0, _defineProperty3.default)(target, descriptor.key, descriptor);
      }
    }return function (Constructor, protoProps, staticProps) {
      if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
    };
  }();
  
  var _class, _class2, _temp; /**
                               * @fileOverview Bar Chart
                               */
  
  var _react = __webpack_require__(11);
  
  var _react2 = _interopRequireDefault(_react);
  
  var _Layer = __webpack_require__(87);
  
  var _Layer2 = _interopRequireDefault(_Layer);
  
  var _Tooltip = __webpack_require__(82);
  
  var _Tooltip2 = _interopRequireDefault(_Tooltip);
  
  var _Rectangle = __webpack_require__(103);
  
  var _Rectangle2 = _interopRequireDefault(_Rectangle);
  
  var _DataUtils = __webpack_require__(96);
  
  var _ReactUtils = __webpack_require__(64);
  
  var _generateCategoricalChart = __webpack_require__(133);
  
  var _generateCategoricalChart2 = _interopRequireDefault(_generateCategoricalChart);
  
  var _Cell = __webpack_require__(95);
  
  var _Cell2 = _interopRequireDefault(_Cell);
  
  var _Bar = __webpack_require__(126);
  
  var _Bar2 = _interopRequireDefault(_Bar);
  
  var _PureRender = __webpack_require__(72);
  
  var _PureRender2 = _interopRequireDefault(_PureRender);
  
  var _CartesianUtils = __webpack_require__(134);
  
  var _AnimationDecorator = __webpack_require__(94);
  
  var _AnimationDecorator2 = _interopRequireDefault(_AnimationDecorator);
  
  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
  }
  
  function _defineProperty(obj, key, value) {
    if (key in obj) {
      (0, _defineProperty3.default)(obj, key, { value: value, enumerable: true, configurable: true, writable: true });
    } else {
      obj[key] = value;
    }return obj;
  }
  
  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }
  
  function _possibleConstructorReturn(self, call) {
    if (!self) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }return call && ((typeof call === "undefined" ? "undefined" : (0, _typeof3.default)(call)) === "object" || typeof call === "function") ? call : self;
  }
  
  function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : (0, _typeof3.default)(superClass)));
    }subClass.prototype = (0, _create2.default)(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) _setPrototypeOf2.default ? (0, _setPrototypeOf2.default)(subClass, superClass) : subClass.__proto__ = superClass;
  }
  
  var BarChart = (0, _AnimationDecorator2.default)(_class = (0, _PureRender2.default)(_class = (_temp = _class2 = function (_Component) {
    _inherits(BarChart, _Component);
  
    function BarChart() {
      _classCallCheck(this, BarChart);
  
      return _possibleConstructorReturn(this, (BarChart.__proto__ || (0, _getPrototypeOf2.default)(BarChart)).apply(this, arguments));
    }
  
    _createClass(BarChart, [{
      key: 'getComposedData',
  
      /**
       * Compose the data of each group
       * @param  {Object} item        An instance of Bar
       * @param  {Array}  barPosition The offset and size of each bar
       * @param  {Object} xAxis       The configuration of x-axis
       * @param  {Object} yAxis       The configuration of y-axis
       * @param  {Object} offset      The offset of main part in the svg element
       * @param  {Array} stackedData  The stacked data of a bar item
       * @return {Array} Composed data
       */
      value: function getComposedData(item, barPosition, xAxis, yAxis, offset, stackedData) {
        var _props = this.props;
        var layout = _props.layout;
        var dataStartIndex = _props.dataStartIndex;
        var dataEndIndex = _props.dataEndIndex;
        var _item$props = item.props;
        var dataKey = _item$props.dataKey;
        var children = _item$props.children;
        var minPointSize = _item$props.minPointSize;
  
        var pos = barPosition[dataKey];
        var data = this.props.data.slice(dataStartIndex, dataEndIndex + 1);
        var xTicks = (0, _CartesianUtils.getTicksOfAxis)(xAxis);
        var yTicks = (0, _CartesianUtils.getTicksOfAxis)(yAxis);
        var baseValue = this.getBaseValue(xAxis, yAxis);
        var hasStack = stackedData && stackedData.length;
        var cells = (0, _ReactUtils.findAllByType)(children, _Cell2.default);
  
        return data.map(function (entry, index) {
          var value = stackedData ? stackedData[dataStartIndex + index] : [baseValue, entry[dataKey]];
          var x = void 0;
          var y = void 0;
          var width = void 0;
          var height = void 0;
  
          if (layout === 'horizontal') {
            x = xTicks[index].coordinate + pos.offset;
            y = yAxis.scale(xAxis.orientation === 'top' ? value[0] : value[1]);
            width = pos.size;
            height = xAxis.orientation === 'top' ? yAxis.scale(value[1]) - yAxis.scale(value[0]) : yAxis.scale(value[0]) - yAxis.scale(value[1]);
            if (Math.abs(minPointSize) > 0 && Math.abs(height) < Math.abs(minPointSize)) {
              var delta = (0, _sign2.default)(height || minPointSize) * (Math.abs(minPointSize) - Math.abs(height));
  
              y -= delta;
              height += delta;
            }
          } else {
            x = xAxis.scale(yAxis.orientation === 'left' ? value[0] : value[1]);
            y = yTicks[index].coordinate + pos.offset;
            width = yAxis.orientation === 'left' ? xAxis.scale(value[1]) - xAxis.scale(value[0]) : xAxis.scale(value[0]) - xAxis.scale(value[1]);
            height = pos.size;
  
            if (Math.abs(minPointSize) > 0 && Math.abs(width) < Math.abs(minPointSize)) {
              var _delta = (0, _sign2.default)(width || minPointSize) * (Math.abs(minPointSize) - Math.abs(width));
              width += _delta;
            }
          }
  
          return _extends({}, entry, {
            x: x, y: y, width: width, height: height, value: stackedData ? value : value[1]
          }, cells && cells[index] && cells[index].props);
        });
      }
    }, {
      key: 'getBaseValue',
      value: function getBaseValue(xAxis, yAxis) {
        var layout = this.props.layout;
  
        var numberAxis = layout === 'horizontal' ? yAxis : xAxis;
        var domain = numberAxis.scale.domain();
  
        if (numberAxis.type === 'number') {
          return Math.max(Math.min(domain[0], domain[1]), 0);
        }
  
        return domain[0];
      }
  
      /**
       * Calculate the size of each bar and the gap between two bars
       * @param  {Number}   bandSize  The size of each category
       * @param  {sizeList} sizeList  The size of all groups
       * @return {Number} The size of each bar and the gap between two bars
       */
  
    }, {
      key: 'getBarPosition',
      value: function getBarPosition(bandSize, sizeList) {
        var _props2 = this.props;
        var barGap = _props2.barGap;
        var barCategoryGap = _props2.barCategoryGap;
  
        var len = sizeList.length;
        var result = void 0;
  
        // whether or not is barSize setted by user
        if (sizeList[0].barSize === +sizeList[0].barSize) {
          (function () {
            var sum = sizeList.reduce(function (res, entry) {
              return res + entry.barSize || 0;
            }, 0);
            sum += (len - 1) * barGap;
            var offset = (bandSize - sum) / 2 >> 0;
            var prev = { offset: offset - barGap, size: 0 };
  
            result = sizeList.reduce(function (res, entry) {
              var newRes = _extends({}, res, _defineProperty({}, entry.dataKey, {
                offset: prev.offset + prev.size + barGap,
                size: entry.barSize
              }));
  
              prev = newRes[entry.dataKey];
  
              if (entry.stackList && entry.stackList.length) {
                entry.stackList.forEach(function (key) {
                  newRes[key] = newRes[entry.dataKey];
                });
              }
              return newRes;
            }, {});
          })();
        } else {
          (function () {
            var offset = (0, _DataUtils.getPercentValue)(barCategoryGap, bandSize, 0, true);
            var size = (bandSize - 2 * offset - (len - 1) * barGap) / len >> 0;
  
            result = sizeList.reduce(function (res, entry, i) {
              var newRes = _extends({}, res, _defineProperty({}, entry.dataKey, {
                offset: offset + (size + barGap) * i,
                size: size
              }));
  
              if (entry.stackList && entry.stackList.length) {
                entry.stackList.forEach(function (key) {
                  newRes[key] = newRes[entry.dataKey];
                });
              }
              return newRes;
            }, {});
          })();
        }
  
        return result;
      }
  
      /**
       * Calculate the size of all groups
       * @param  {Object} stackGroups The items grouped by axisId and stackId
       * @return {Object} The size of all groups
       */
  
    }, {
      key: 'getSizeList',
      value: function getSizeList(stackGroups) {
        var _props3 = this.props;
        var layout = _props3.layout;
        var barSize = _props3.barSize;
  
        var result = {};
        var numericAxisIds = (0, _keys2.default)(stackGroups);
  
        for (var i = 0, len = numericAxisIds.length; i < len; i++) {
          var sgs = stackGroups[numericAxisIds[i]].stackGroups;
          var stackIds = (0, _keys2.default)(sgs);
  
          for (var j = 0, sLen = stackIds.length; j < sLen; j++) {
            var _sgs$stackIds$j = sgs[stackIds[j]];
            var items = _sgs$stackIds$j.items;
            var numericAxisId = _sgs$stackIds$j.numericAxisId;
            var cateAxisId = _sgs$stackIds$j.cateAxisId;
  
            var barItems = items.filter(function (item) {
              return item.type.displayName === 'Bar';
            });
  
            if (barItems && barItems.length) {
              var dataKey = barItems[0].props.dataKey;
  
              var cateId = barItems[0].props[cateAxisId];
  
              if (!result[cateId]) {
                result[cateId] = [];
              }
  
              result[cateId].push({
                dataKey: dataKey,
                stackList: barItems.slice(1).map(function (item) {
                  return item.props.dataKey;
                }),
                barSize: barItems[0].props.barSize || barSize
              });
            }
          }
        }
  
        return result;
      }
    }, {
      key: 'renderCursor',
      value: function renderCursor(xAxisMap, yAxisMap, offset) {
        var _props4 = this.props;
        var children = _props4.children;
        var isTooltipActive = _props4.isTooltipActive;
        var layout = _props4.layout;
        var activeTooltipIndex = _props4.activeTooltipIndex;
  
        var tooltipItem = (0, _ReactUtils.findChildByType)(children, _Tooltip2.default);
  
        if (!tooltipItem || !tooltipItem.props.cursor || !isTooltipActive || activeTooltipIndex < 0) {
          return null;
        }
  
        var axisMap = layout === 'horizontal' ? xAxisMap : yAxisMap;
        var axis = (0, _DataUtils.getAnyElementOfObject)(axisMap);
        var ticks = (0, _CartesianUtils.getTicksOfAxis)(axis);
  
        if (!ticks || !ticks[activeTooltipIndex]) {
          return null;
        }
  
        var start = ticks[activeTooltipIndex].coordinate;
        var bandSize = axis.scale.bandwidth();
        var cursorProps = _extends({
          fill: '#f1f1f1'
        }, (0, _ReactUtils.getPresentationAttributes)(tooltipItem.props.cursor), {
          x: layout === 'horizontal' ? start : offset.left + 0.5,
          y: layout === 'horizontal' ? offset.top + 0.5 : start,
          width: layout === 'horizontal' ? bandSize : offset.width - 1,
          height: layout === 'horizontal' ? offset.height - 1 : bandSize
        });
  
        return _react2.default.isValidElement(tooltipItem.props.cursor) ? _react2.default.cloneElement(tooltipItem.props.cursor, cursorProps) : _react2.default.createElement(_Rectangle2.default, _extends({}, cursorProps, { className: 'recharts-bar-cursor' }));
      }
  
      /**
       * Draw the main part of bar chart
       * @param  {Array} items     All the instance of Bar
       * @param  {Object} xAxisMap The configuration of all x-axis
       * @param  {Object} yAxisMap The configuration of all y-axis
       * @param  {Object} offset   The offset of main part in the svg element
       * @param  {Object} stackGroups The items grouped by axisId and stackId
       * @return {ReactComponent}  All the instances of Bar
       */
  
    }, {
      key: 'renderItems',
      value: function renderItems(items, xAxisMap, yAxisMap, offset, stackGroups) {
        var _this2 = this;
  
        if (!items || !items.length) {
          return null;
        }
  
        var layout = this.props.layout;
  
        var sizeList = this.getSizeList(stackGroups);
        var animationId = this.props.animationId;
  
        var barPositionMap = {};
  
        return items.map(function (child, i) {
          var _child$props = child.props;
          var xAxisId = _child$props.xAxisId;
          var yAxisId = _child$props.yAxisId;
  
          var numericAxisId = layout === 'horizontal' ? yAxisId : xAxisId;
          var cateAxisId = layout === 'horizontal' ? xAxisId : yAxisId;
          var cateAxis = layout === 'horizontal' ? xAxisMap[xAxisId] : yAxisMap[yAxisId];
          var bandSize = (0, _DataUtils.getBandSizeOfScale)(cateAxis.scale);
          var barPosition = barPositionMap[cateAxisId] || _this2.getBarPosition(bandSize, sizeList[cateAxisId]);
          var stackedData = stackGroups && stackGroups[numericAxisId] && stackGroups[numericAxisId].hasStack && (0, _CartesianUtils.getStackedDataOfItem)(child, stackGroups[numericAxisId].stackGroups);
  
          return _react2.default.cloneElement(child, _extends({
            key: 'bar-' + i
          }, (0, _ReactUtils.filterEventAttributes)(_this2.props), {
            layout: layout,
            animationId: animationId,
            data: _this2.getComposedData(child, barPosition, xAxisMap[xAxisId], yAxisMap[yAxisId], offset, stackedData)
          }));
        }, this);
      }
    }, {
      key: 'render',
      value: function render() {
        var _props5 = this.props;
        var isComposed = _props5.isComposed;
        var graphicalItems = _props5.graphicalItems;
        var xAxisMap = _props5.xAxisMap;
        var yAxisMap = _props5.yAxisMap;
        var offset = _props5.offset;
        var stackGroups = _props5.stackGroups;
  
        return _react2.default.createElement(_Layer2.default, { className: 'recharts-bar-graphical' }, !isComposed && this.renderCursor(xAxisMap, yAxisMap, offset), this.renderItems(graphicalItems, xAxisMap, yAxisMap, offset, stackGroups));
      }
    }]);
  
    return BarChart;
  }(_react.Component), _class2.displayName = 'BarChart', _class2.propTypes = {
    layout: _react.PropTypes.oneOf(['horizontal', 'vertical']),
    dataStartIndex: _react.PropTypes.number,
    dataEndIndex: _react.PropTypes.number,
    data: _react.PropTypes.array,
    isTooltipActive: _react.PropTypes.bool,
    activeTooltipIndex: _react.PropTypes.number,
    xAxisMap: _react.PropTypes.object,
    yAxisMap: _react.PropTypes.object,
    offset: _react.PropTypes.object,
    graphicalItems: _react.PropTypes.array,
    children: _react.PropTypes.oneOfType([_react.PropTypes.arrayOf(_react.PropTypes.node), _react.PropTypes.node]),
    stackGroups: _react.PropTypes.object,
    barCategoryGap: _react.PropTypes.oneOfType([_react.PropTypes.number, _react.PropTypes.string]),
    barGap: _react.PropTypes.number,
    barSize: _react.PropTypes.oneOfType([_react.PropTypes.number, _react.PropTypes.string]),
    // used internally
    isComposed: _react.PropTypes.bool,
    animationId: _react.PropTypes.number
  }, _class2.defaultProps = {
    barCategoryGap: '10%',
    barGap: 4
  }, _temp)) || _class) || _class;
  
  exports.default = (0, _generateCategoricalChart2.default)(BarChart, _Bar2.default);
  exports.BarChart = BarChart;

/***/ }),
/* 139 */
/***/ (function(module, exports, __webpack_require__) {

  'use strict';
  
  var _getPrototypeOf = __webpack_require__(29);
  
  var _getPrototypeOf2 = _interopRequireDefault2(_getPrototypeOf);
  
  var _setPrototypeOf = __webpack_require__(59);
  
  var _setPrototypeOf2 = _interopRequireDefault2(_setPrototypeOf);
  
  var _create = __webpack_require__(60);
  
  var _create2 = _interopRequireDefault2(_create);
  
  var _typeof2 = __webpack_require__(61);
  
  var _typeof3 = _interopRequireDefault2(_typeof2);
  
  var _assign = __webpack_require__(23);
  
  var _assign2 = _interopRequireDefault2(_assign);
  
  var _defineProperty = __webpack_require__(62);
  
  var _defineProperty2 = _interopRequireDefault2(_defineProperty);
  
  function _interopRequireDefault2(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  
  var _isFunction2 = __webpack_require__(69);
  
  var _isFunction3 = _interopRequireDefault(_isFunction2);
  
  var _createClass = function () {
    function defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;(0, _defineProperty2.default)(target, descriptor.key, descriptor);
      }
    }return function (Constructor, protoProps, staticProps) {
      if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
    };
  }();
  
  var _class, _class2, _temp2;
  
  var _extends = _assign2.default || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }return target;
  }; /**
      * @fileOverview TreemapChart
      */
  
  var _react = __webpack_require__(11);
  
  var _react2 = _interopRequireDefault(_react);
  
  var _Surface = __webpack_require__(63);
  
  var _Surface2 = _interopRequireDefault(_Surface);
  
  var _Layer = __webpack_require__(87);
  
  var _Layer2 = _interopRequireDefault(_Layer);
  
  var _Rectangle = __webpack_require__(103);
  
  var _Rectangle2 = _interopRequireDefault(_Rectangle);
  
  var _ReactUtils = __webpack_require__(64);
  
  var _classnames = __webpack_require__(46);
  
  var _classnames2 = _interopRequireDefault(_classnames);
  
  var _reactSmooth = __webpack_require__(84);
  
  var _reactSmooth2 = _interopRequireDefault(_reactSmooth);
  
  var _Tooltip = __webpack_require__(82);
  
  var _Tooltip2 = _interopRequireDefault(_Tooltip);
  
  var _PureRender = __webpack_require__(72);
  
  var _PureRender2 = _interopRequireDefault(_PureRender);
  
  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
  }
  
  function _objectWithoutProperties(obj, keys) {
    var target = {};for (var i in obj) {
      if (keys.indexOf(i) >= 0) continue;if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;target[i] = obj[i];
    }return target;
  }
  
  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }
  
  function _possibleConstructorReturn(self, call) {
    if (!self) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }return call && ((typeof call === 'undefined' ? 'undefined' : (0, _typeof3.default)(call)) === "object" || typeof call === "function") ? call : self;
  }
  
  function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === 'undefined' ? 'undefined' : (0, _typeof3.default)(superClass)));
    }subClass.prototype = (0, _create2.default)(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) _setPrototypeOf2.default ? (0, _setPrototypeOf2.default)(subClass, superClass) : subClass.__proto__ = superClass;
  }
  
  var computeNode = function computeNode(_ref) {
    var depth = _ref.depth;
    var node = _ref.node;
    var index = _ref.index;
    var valueKey = _ref.valueKey;
    var children = node.children;
  
    var childDepth = depth + 1;
    var computedChildren = children && children.length ? children.map(function (child, i) {
      return computeNode({ depth: childDepth, node: child, index: i, valueKey: valueKey });
    }) : null;
    var value = void 0;
  
    if (children && children.length) {
      value = computedChildren.reduce(function (result, child) {
        return result + child.value;
      }, 0);
    } else {
      value = isNaN(node[valueKey]) || node[valueKey] <= 0 ? 0 : node[valueKey];
    }
  
    return _extends({}, node, {
      children: computedChildren,
      value: value, depth: depth, index: index
    });
  };
  
  var filterRect = function filterRect(node) {
    return { x: node.x, y: node.y, width: node.width, height: node.height };
  };
  
  // Compute the area for each child based on value & scale.
  var getAreaOfChildren = function getAreaOfChildren(children, areaValueRatio) {
    var ratio = areaValueRatio < 0 ? 0 : areaValueRatio;
  
    return children.map(function (child) {
      var area = child.value * ratio;
  
      return _extends({}, child, {
        area: isNaN(area) || area <= 0 ? 0 : area
      });
    });
  };
  
  // Computes the score for the specified row, as the worst aspect ratio.
  var getWorstScore = function getWorstScore(row, parentSize, aspectRatio) {
    var parentArea = parentSize * parentSize;
    var rowArea = row.area * row.area;
  
    var _row$reduce = row.reduce(function (result, child) {
      return {
        min: Math.min(result.min, child.area),
        max: Math.max(result.max, child.area)
      };
    }, { min: Infinity, max: 0 });
  
    var min = _row$reduce.min;
    var max = _row$reduce.max;
  
    return rowArea ? Math.max(parentArea * max * aspectRatio / rowArea, rowArea / (parentArea * min * aspectRatio)) : Infinity;
  };
  
  var horizontalPosition = function horizontalPosition(row, parentSize, parentRect, isFlush) {
    var rowHeight = parentSize ? Math.round(row.area / parentSize) : 0;
  
    if (isFlush || rowHeight > parentRect.height) {
      rowHeight = parentRect.height;
    }
  
    var curX = parentRect.x;
    var child = void 0;
    for (var i = 0, len = row.length; i < len; i++) {
      child = row[i];
      child.x = curX;
      child.y = parentRect.y;
      child.height = rowHeight;
      child.width = Math.min(rowHeight ? Math.round(child.area / rowHeight) : 0, parentRect.x + parentRect.width - curX);
      curX += child.width;
    }
    // what's z
    child.z = true;
    // add the remain x to the last one of row
    child.width += parentRect.x + parentRect.width - curX;
  
    return _extends({}, parentRect, {
      y: parentRect.y + rowHeight,
      height: parentRect.height - rowHeight
    });
  };
  
  var verticalPosition = function verticalPosition(row, parentSize, parentRect, isFlush) {
    var rowWidth = parentSize ? Math.round(row.area / parentSize) : 0;
  
    if (isFlush || rowWidth > parentRect.width) {
      rowWidth = parentRect.width;
    }
  
    var curY = parentRect.y;
    var child = void 0;
    for (var i = 0, len = row.length; i < len; i++) {
      child = row[i];
      child.x = parentRect.x;
      child.y = curY;
      child.width = rowWidth;
      child.height = Math.min(rowWidth ? Math.round(child.area / rowWidth) : 0, parentRect.y + parentRect.height - curY);
      curY += child.height;
    }
    child.z = false;
    child.height += parentRect.y + parentRect.height - curY;
  
    return _extends({}, parentRect, {
      x: parentRect.x + rowWidth,
      width: parentRect.width - rowWidth
    });
  };
  
  var position = function position(row, parentSize, parentRect, isFlush) {
    if (parentSize === parentRect.width) {
      return horizontalPosition(row, parentSize, parentRect, isFlush);
    }
  
    return verticalPosition(row, parentSize, parentRect, isFlush);
  };
  
  // Recursively arranges the specified node's children into squarified rows.
  var squarify = function squarify(node, aspectRatio) {
    var children = node.children;
  
    if (children && children.length) {
      var rect = filterRect(node);
      var row = [];
      var best = Infinity; // the best row score so far
      var score = void 0; // the current row score
      var size = Math.min(rect.width, rect.height); // initial orientation
      var scaleChildren = getAreaOfChildren(children, rect.width * rect.height / node.value);
      var tempChildren = scaleChildren.slice();
  
      row.area = 0;
  
      var child = void 0;
  
      while (tempChildren.length > 0) {
        // row first
        row.push(child = tempChildren[0]);
        row.area += child.area;
  
        score = getWorstScore(row, size, aspectRatio);
        if (score <= best) {
          // continue with this orientation
          tempChildren.shift();
          best = score;
        } else {
          // abort, and try a different orientation
          row.area -= row.pop().area;
          rect = position(row, size, rect, false);
          size = Math.min(rect.width, rect.height);
          row.length = row.area = 0;
          best = Infinity;
        }
      }
  
      if (row.length) {
        rect = position(row, size, rect, true);
        row.length = row.area = 0;
      }
  
      return _extends({}, node, { children: scaleChildren.map(function (c) {
          return squarify(c, aspectRatio);
        }) });
    }
  
    return node;
  };
  
  var Treemap = (0, _PureRender2.default)(_class = (_temp2 = _class2 = function (_Component) {
    _inherits(Treemap, _Component);
  
    function Treemap() {
      var _ref2;
  
      var _temp, _this, _ret;
  
      _classCallCheck(this, Treemap);
  
      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }
  
      return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref2 = Treemap.__proto__ || (0, _getPrototypeOf2.default)(Treemap)).call.apply(_ref2, [this].concat(args))), _this), _this.state = _this.createDefaultState(), _temp), _possibleConstructorReturn(_this, _ret);
    }
  
    _createClass(Treemap, [{
      key: 'componentWillReceiveProps',
      value: function componentWillReceiveProps(nextProps) {
        if (nextProps.data !== this.props.data) {
          this.setState(this.createDefaultState());
        }
      }
      /**
       * Returns default, reset state for the treemap chart.
       * @return {Object} Whole new state
       */
  
    }, {
      key: 'createDefaultState',
      value: function createDefaultState() {
        return {
          isTooltipActive: false,
          activeNode: null
        };
      }
    }, {
      key: 'handleMouseEnter',
      value: function handleMouseEnter(node, e) {
        var _props = this.props;
        var onMouseEnter = _props.onMouseEnter;
        var children = _props.children;
  
        var tooltipItem = (0, _ReactUtils.findChildByType)(children, _Tooltip2.default);
  
        if (tooltipItem) {
          this.setState({
            isTooltipActive: true,
            activeNode: node
          }, function () {
            if (onMouseEnter) {
              onMouseEnter(node, e);
            }
          });
        } else if (onMouseEnter) {
          onMouseEnter(node, e);
        }
      }
    }, {
      key: 'handleMouseLeave',
      value: function handleMouseLeave(node, e) {
        var _props2 = this.props;
        var onMouseLeave = _props2.onMouseLeave;
        var children = _props2.children;
  
        var tooltipItem = (0, _ReactUtils.findChildByType)(children, _Tooltip2.default);
  
        if (tooltipItem) {
          this.setState({
            isTooltipActive: false,
            activeNode: null
          }, function () {
            if (onMouseLeave) {
              onMouseLeave(node, e);
            }
          });
        } else if (onMouseLeave) {
          onMouseLeave(node, e);
        }
      }
    }, {
      key: 'handleClick',
      value: function handleClick(node) {
        var onClick = this.props.onClick;
  
        if (onClick) {
          onClick(node);
        }
      }
    }, {
      key: 'renderAnimatedItem',
      value: function renderAnimatedItem(content, nodeProps, isLeaf) {
        var _this2 = this;
  
        var _props3 = this.props;
        var isAnimationActive = _props3.isAnimationActive;
        var animationBegin = _props3.animationBegin;
        var animationDuration = _props3.animationDuration;
        var animationEasing = _props3.animationEasing;
        var isUpdateAnimationActive = _props3.isUpdateAnimationActive;
        var width = nodeProps.width;
        var height = nodeProps.height;
        var x = nodeProps.x;
        var y = nodeProps.y;
  
        var translateX = parseInt((Math.random() * 2 - 1) * width, 10);
        var translateY = parseInt((Math.random() * 2 - 1) * height, 10);
        var event = {};
  
        if (isLeaf) {
          event = {
            onMouseEnter: this.handleMouseEnter.bind(this, nodeProps),
            onMouseLeave: this.handleMouseLeave.bind(this, nodeProps),
            onClick: this.handleClick.bind(this, nodeProps)
          };
        }
  
        return _react2.default.createElement(_reactSmooth2.default, {
          from: { x: x, y: y, width: width, height: height },
          to: { x: x, y: y, width: width, height: height },
          duration: animationDuration,
          easing: animationEasing,
          isActive: isUpdateAnimationActive
        }, function (_ref3) {
          var currX = _ref3.x;
          var currY = _ref3.y;
          var currWidth = _ref3.width;
          var currHeight = _ref3.height;
          return _react2.default.createElement(_reactSmooth2.default, {
            from: 'translate(' + translateX + 'px, ' + translateX + 'px)',
            to: 'translate(0, 0)',
            attributeName: 'transform',
            begin: animationBegin,
            easing: animationEasing,
            isActive: isAnimationActive,
            duration: animationDuration
          }, _react2.default.createElement(_Layer2.default, event, _this2.renderContentItem(content, _extends({}, nodeProps, {
            isAnimationActive: isAnimationActive,
            isUpdateAnimationActive: !isUpdateAnimationActive,
            width: currWidth,
            height: currHeight,
            x: currX,
            y: currY
          }))));
        });
      }
    }, {
      key: 'renderContentItem',
      value: function renderContentItem(content, nodeProps) {
        if (_react2.default.isValidElement(content)) {
          return _react2.default.cloneElement(content, nodeProps);
        } else if ((0, _isFunction3.default)(content)) {
          return content(nodeProps);
        }
  
        return _react2.default.createElement(_Rectangle2.default, nodeProps);
      }
    }, {
      key: 'renderNode',
      value: function renderNode(root, node, i) {
        var _this3 = this;
  
        var content = this.props.content;
  
        var nodeProps = _extends({}, (0, _ReactUtils.getPresentationAttributes)(this.props), node, { root: root });
        var isLeaf = !node.children || !node.children.length;
  
        return _react2.default.createElement(_Layer2.default, { key: 'recharts-treemap-node-' + i }, this.renderAnimatedItem(content, nodeProps, isLeaf), node.children && node.children.length ? node.children.map(function (child, index) {
          return _this3.renderNode(node, child, index);
        }) : null);
      }
    }, {
      key: 'renderAllNodes',
      value: function renderAllNodes() {
        var _props4 = this.props;
        var width = _props4.width;
        var height = _props4.height;
        var data = _props4.data;
        var dataKey = _props4.dataKey;
        var aspectRatio = _props4.aspectRatio;
  
        var root = computeNode({
          depth: 0,
          node: { children: data, x: 0, y: 0, width: width, height: height },
          index: 0,
          valueKey: dataKey
        });
  
        var formatRoot = squarify(root, aspectRatio);
  
        return this.renderNode(formatRoot, formatRoot, 0);
      }
    }, {
      key: 'renderTooltip',
      value: function renderTooltip(items, offset) {
        var children = this.props.children;
  
        var tooltipItem = (0, _ReactUtils.findChildByType)(children, _Tooltip2.default);
  
        if (!tooltipItem) {
          return null;
        }
  
        var _props5 = this.props;
        var width = _props5.width;
        var height = _props5.height;
        var dataKey = _props5.dataKey;
        var _state = this.state;
        var isTooltipActive = _state.isTooltipActive;
        var activeNode = _state.activeNode;
  
        var viewBox = { x: 0, y: 0, width: width, height: height };
        var coordinate = activeNode ? {
          x: activeNode.x + activeNode.width / 2,
          y: activeNode.y + activeNode.height / 2
        } : null;
        var payload = isTooltipActive && activeNode ? [{
          name: '', value: activeNode[dataKey]
        }] : [];
  
        return _react2.default.cloneElement(tooltipItem, {
          viewBox: viewBox,
          active: isTooltipActive,
          coordinate: coordinate,
          label: '',
          payload: payload,
          separator: ''
        });
      }
    }, {
      key: 'render',
      value: function render() {
        if (!(0, _ReactUtils.validateWidthHeight)(this)) {
          return null;
        }
  
        var _props6 = this.props;
        var width = _props6.width;
        var height = _props6.height;
        var className = _props6.className;
        var style = _props6.style;
        var children = _props6.children;
  
        var others = _objectWithoutProperties(_props6, ['width', 'height', 'className', 'style', 'children']);
  
        var attrs = (0, _ReactUtils.getPresentationAttributes)(others);
  
        return _react2.default.createElement('div', {
          className: (0, _classnames2.default)('recharts-wrapper', className),
          style: _extends({}, style, { position: 'relative', cursor: 'default', width: width, height: height })
        }, _react2.default.createElement(_Surface2.default, _extends({}, attrs, { width: width, height: height }), this.renderAllNodes(), (0, _ReactUtils.filterSvgElements)(children)), this.renderTooltip());
      }
    }]);
  
    return Treemap;
  }(_react.Component), _class2.displayName = 'Treemap', _class2.propTypes = {
    width: _react.PropTypes.number,
    height: _react.PropTypes.number,
    data: _react.PropTypes.array,
    style: _react.PropTypes.object,
    aspectRatio: _react.PropTypes.number,
    content: _react.PropTypes.oneOfType([_react.PropTypes.element, _react.PropTypes.func]),
    fill: _react.PropTypes.string,
    stroke: _react.PropTypes.string,
    className: _react.PropTypes.string,
    dataKey: _react.PropTypes.string,
    children: _react.PropTypes.oneOfType([_react.PropTypes.arrayOf(_react.PropTypes.node), _react.PropTypes.node]),
  
    onMouseEnter: _react.PropTypes.func,
    onMouseLeave: _react.PropTypes.func,
    onClick: _react.PropTypes.func,
  
    isAnimationActive: _react.PropTypes.bool,
    isUpdateAnimationActive: _react.PropTypes.bool,
    animationBegin: _react.PropTypes.number,
    animationDuration: _react.PropTypes.number,
    animationEasing: _react.PropTypes.oneOf(['ease', 'ease-in', 'ease-out', 'ease-in-out', 'linear'])
  }, _class2.defaultProps = {
    fill: '#fff',
    stroke: '#000',
    dataKey: 'value',
    aspectRatio: 0.5 * (1 + Math.sqrt(5)),
    isAnimationActive: true,
    isUpdateAnimationActive: true,
    animationBegin: 0,
    animationDuration: 1500,
    animationEasing: 'linear'
  }, _temp2)) || _class;
  
  exports.default = Treemap;

/***/ }),
/* 140 */
/***/ (function(module, exports, __webpack_require__) {

  'use strict';
  
  var _getPrototypeOf = __webpack_require__(29);
  
  var _getPrototypeOf2 = _interopRequireDefault2(_getPrototypeOf);
  
  var _setPrototypeOf = __webpack_require__(59);
  
  var _setPrototypeOf2 = _interopRequireDefault2(_setPrototypeOf);
  
  var _create = __webpack_require__(60);
  
  var _create2 = _interopRequireDefault2(_create);
  
  var _typeof2 = __webpack_require__(61);
  
  var _typeof3 = _interopRequireDefault2(_typeof2);
  
  var _assign = __webpack_require__(23);
  
  var _assign2 = _interopRequireDefault2(_assign);
  
  var _defineProperty = __webpack_require__(62);
  
  var _defineProperty2 = _interopRequireDefault2(_defineProperty);
  
  function _interopRequireDefault2(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  
  var _isObject2 = __webpack_require__(68);
  
  var _isObject3 = _interopRequireDefault(_isObject2);
  
  var _isFunction2 = __webpack_require__(69);
  
  var _isFunction3 = _interopRequireDefault(_isFunction2);
  
  var _sumBy2 = __webpack_require__(141);
  
  var _sumBy3 = _interopRequireDefault(_sumBy2);
  
  var _min2 = __webpack_require__(142);
  
  var _min3 = _interopRequireDefault(_min2);
  
  var _maxBy2 = __webpack_require__(110);
  
  var _maxBy3 = _interopRequireDefault(_maxBy2);
  
  var _createClass = function () {
    function defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;(0, _defineProperty2.default)(target, descriptor.key, descriptor);
      }
    }return function (Constructor, protoProps, staticProps) {
      if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
    };
  }();
  
  var _class, _class2, _temp2;
  
  var _extends = _assign2.default || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }return target;
  }; /**
      * @file TreemapChart
      */
  
  var _react = __webpack_require__(11);
  
  var _react2 = _interopRequireDefault(_react);
  
  var _Surface = __webpack_require__(63);
  
  var _Surface2 = _interopRequireDefault(_Surface);
  
  var _Layer = __webpack_require__(87);
  
  var _Layer2 = _interopRequireDefault(_Layer);
  
  var _Tooltip = __webpack_require__(82);
  
  var _Tooltip2 = _interopRequireDefault(_Tooltip);
  
  var _Rectangle = __webpack_require__(103);
  
  var _Rectangle2 = _interopRequireDefault(_Rectangle);
  
  var _classnames = __webpack_require__(46);
  
  var _classnames2 = _interopRequireDefault(_classnames);
  
  var _PureRender = __webpack_require__(72);
  
  var _PureRender2 = _interopRequireDefault(_PureRender);
  
  var _ReactUtils = __webpack_require__(64);
  
  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
  }
  
  function _objectWithoutProperties(obj, keys) {
    var target = {};for (var i in obj) {
      if (keys.indexOf(i) >= 0) continue;if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;target[i] = obj[i];
    }return target;
  }
  
  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }
  
  function _possibleConstructorReturn(self, call) {
    if (!self) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }return call && ((typeof call === 'undefined' ? 'undefined' : (0, _typeof3.default)(call)) === "object" || typeof call === "function") ? call : self;
  }
  
  function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === 'undefined' ? 'undefined' : (0, _typeof3.default)(superClass)));
    }subClass.prototype = (0, _create2.default)(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) _setPrototypeOf2.default ? (0, _setPrototypeOf2.default)(subClass, superClass) : subClass.__proto__ = superClass;
  }
  
  var interpolationGenerator = function interpolationGenerator(a, b) {
    var ka = +a;
    var kb = b - ka;
    return function (t) {
      return ka + kb * t;
    };
  };
  var centerY = function centerY(node) {
    return node.y + node.dy / 2;
  };
  var getValue = function getValue(entry) {
    return entry && entry.value || 0;
  };
  var getSumOfIds = function getSumOfIds(links, ids) {
    return ids.reduce(function (result, id) {
      return result + getValue(links[id]);
    }, 0);
  };
  var getSumWithWeightedSource = function getSumWithWeightedSource(tree, links, ids) {
    return ids.reduce(function (result, id) {
      var link = links[id];
      var sourceNode = tree[link.source];
  
      return result + centerY(sourceNode) * getValue(links[id]);
    }, 0);
  };
  var getSumWithWeightedTarget = function getSumWithWeightedTarget(tree, links, ids) {
    return ids.reduce(function (result, id) {
      var link = links[id];
      var targetNode = tree[link.target];
  
      return result + centerY(targetNode) * getValue(links[id]);
    }, 0);
  };
  var ascendingY = function ascendingY(a, b) {
    return a.y - b.y;
  };
  
  var searchTargetsAndSources = function searchTargetsAndSources(links, id) {
    var sourceNodes = [];
    var sourceLinks = [];
    var targetNodes = [];
    var targetLinks = [];
  
    for (var i = 0, len = links.length; i < len; i++) {
      var link = links[i];
  
      if (link.source === id) {
        targetNodes.push(link.target);
        targetLinks.push(i);
      }
  
      if (link.target === id) {
        sourceNodes.push(link.source);
        sourceLinks.push(i);
      }
    }
  
    return { sourceNodes: sourceNodes, sourceLinks: sourceLinks, targetLinks: targetLinks, targetNodes: targetNodes };
  };
  
  var updateDepthOfTargets = function updateDepthOfTargets(tree, curNode) {
    var targetNodes = curNode.targetNodes;
  
    for (var i = 0, len = targetNodes.length; i < len; i++) {
      var target = tree[targetNodes[i]];
  
      if (target) {
        target.depth = Math.max(curNode.depth + 1, target.depth);
  
        updateDepthOfTargets(tree, target);
      }
    }
  };
  
  var getNodesTree = function getNodesTree(_ref, width, nodeWidth) {
    var nodes = _ref.nodes;
    var links = _ref.links;
  
    var tree = nodes.map(function (entry, index) {
      var result = searchTargetsAndSources(links, index);
  
      return _extends({}, entry, result, {
        value: Math.max(getSumOfIds(links, result.sourceLinks), getSumOfIds(links, result.targetLinks)),
        depth: 0
      });
    });
  
    for (var i = 0, len = tree.length; i < len; i++) {
      var node = tree[i];
  
      if (!node.sourceNodes.length) {
        updateDepthOfTargets(tree, node);
      }
    }
    var maxDepth = (0, _maxBy3.default)(tree, function (entry) {
      return entry.depth;
    }).depth;
  
    if (maxDepth >= 1) {
      var childWidth = (width - nodeWidth) / maxDepth;
      for (var _i = 0, _len = tree.length; _i < _len; _i++) {
        var _node = tree[_i];
  
        if (!_node.targetNodes.length) {
          _node.depth = maxDepth;
        }
        _node.x = _node.depth * childWidth;
        _node.dx = nodeWidth;
      }
    }
  
    return { tree: tree, maxDepth: maxDepth };
  };
  
  var getDepthTree = function getDepthTree(tree, maxDepth) {
    var result = [];
  
    for (var i = 0, len = tree.length; i < len; i++) {
      var node = tree[i];
  
      if (!result[node.depth]) {
        result[node.depth] = [];
      }
  
      result[node.depth].push(node);
    }
  
    return result;
  };
  
  var updateYOfTree = function updateYOfTree(depthTree, height, nodePadding, links) {
    var yRatio = (0, _min3.default)(depthTree.map(function (nodes) {
      return (height - (nodes.length - 1) * nodePadding) / (0, _sumBy3.default)(nodes, getValue);
    }));
  
    for (var d = 0, maxDepth = depthTree.length; d < maxDepth; d++) {
      for (var i = 0, len = depthTree[d].length; i < len; i++) {
        var node = depthTree[d][i];
  
        node.y = i;
        node.dy = node.value * yRatio;
      }
    }
  
    return links.map(function (link) {
      return _extends({}, link, { dy: getValue(link) * yRatio });
    });
  };
  
  var resolveCollisions = function resolveCollisions(depthTree, height, nodePadding) {
    for (var i = 0, len = depthTree.length; i < len; i++) {
      var nodes = depthTree[i];
      var n = nodes.length;
  
      // Sort by the value of y
      nodes.sort(ascendingY);
  
      var y0 = 0;
      for (var j = 0; j < n; j++) {
        var node = nodes[j];
        var dy = y0 - node.y;
  
        if (dy > 0) {
          node.y += dy;
        }
  
        y0 = node.y + node.dy + nodePadding;
      }
  
      y0 = height + nodePadding;
      for (var _j = n - 1; _j >= 0; _j--) {
        var _node2 = nodes[_j];
        var _dy = _node2.y + _node2.dy + nodePadding - y0;
  
        if (_dy > 0) {
          _node2.y -= _dy;
          y0 = _node2.y;
        } else {
          break;
        }
      }
    }
  };
  
  var relaxLeftToRight = function relaxLeftToRight(tree, depthTree, links, alpha) {
    for (var i = 0, maxDepth = depthTree.length; i < maxDepth; i++) {
      var nodes = depthTree[i];
  
      for (var j = 0, len = nodes.length; j < len; j++) {
        var node = nodes[j];
  
        if (node.sourceLinks.length) {
          var sourceSum = getSumOfIds(links, node.sourceLinks);
          var weightedSum = getSumWithWeightedSource(tree, links, node.sourceLinks);
          var y = weightedSum / sourceSum;
  
          node.y += (y - centerY(node)) * alpha;
        }
      }
    }
  };
  var relaxRightToLeft = function relaxRightToLeft(tree, depthTree, links, alpha) {
    for (var i = depthTree.length - 1; i >= 0; i--) {
      var nodes = depthTree[i];
  
      for (var j = 0, len = nodes.length; j < len; j++) {
        var node = nodes[j];
  
        if (node.targetLinks.length) {
          var targetSum = getSumOfIds(links, node.targetLinks);
          var weightedSum = getSumWithWeightedTarget(tree, links, node.targetLinks);
          var y = weightedSum / targetSum;
  
          node.y += (y - centerY(node)) * alpha;
        }
      }
    }
  };
  var updateYOfLinks = function updateYOfLinks(tree, links) {
    for (var i = 0, len = tree.length; i < len; i++) {
      var node = tree[i];
      var sy = 0;
      var ty = 0;
  
      node.targetLinks.sort(function (a, b) {
        return tree[links[a].target].y - tree[links[b].target].y;
      });
      node.sourceLinks.sort(function (a, b) {
        return tree[links[a].source].y - tree[links[b].source].y;
      });
  
      for (var j = 0, tLen = node.targetLinks.length; j < tLen; j++) {
        var link = links[node.targetLinks[j]];
  
        if (link) {
          link.sy = sy;
          sy += link.dy;
        }
      }
  
      for (var _j2 = 0, sLen = node.sourceLinks.length; _j2 < sLen; _j2++) {
        var _link = links[node.sourceLinks[_j2]];
  
        if (_link) {
          _link.ty = ty;
          ty += _link.dy;
        }
      }
    }
  };
  
  var computeData = function computeData(_ref2) {
    var data = _ref2.data;
    var width = _ref2.width;
    var height = _ref2.height;
    var iterations = _ref2.iterations;
    var nodeWidth = _ref2.nodeWidth;
    var nodePadding = _ref2.nodePadding;
    var nodes = data.nodes;
    var links = data.links;
  
    var _getNodesTree = getNodesTree(data, width, nodeWidth);
  
    var tree = _getNodesTree.tree;
    var maxDepth = _getNodesTree.maxDepth;
  
    var depthTree = getDepthTree(tree, maxDepth);
    var newLinks = updateYOfTree(depthTree, height, nodePadding, links);
  
    resolveCollisions(depthTree, height, nodePadding);
  
    var alpha = 1;
    for (var i = 1; i <= iterations; i++) {
      relaxRightToLeft(tree, depthTree, newLinks, alpha *= 0.99);
  
      resolveCollisions(depthTree, height, nodePadding);
  
      relaxLeftToRight(tree, depthTree, newLinks, alpha);
  
      resolveCollisions(depthTree, height, nodePadding);
    }
  
    updateYOfLinks(tree, newLinks);
  
    return { nodes: tree, links: newLinks };
  };
  
  var Sankey = (0, _PureRender2.default)(_class = (_temp2 = _class2 = function (_Component) {
    _inherits(Sankey, _Component);
  
    function Sankey() {
      var _ref3;
  
      var _temp, _this, _ret;
  
      _classCallCheck(this, Sankey);
  
      for (var _len2 = arguments.length, args = Array(_len2), _key = 0; _key < _len2; _key++) {
        args[_key] = arguments[_key];
      }
  
      return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref3 = Sankey.__proto__ || (0, _getPrototypeOf2.default)(Sankey)).call.apply(_ref3, [this].concat(args))), _this), _this.state = _this.createDefaultState(), _temp), _possibleConstructorReturn(_this, _ret);
    }
  
    _createClass(Sankey, [{
      key: 'componentWillReceiveProps',
      value: function componentWillReceiveProps(nextProps) {
        if (nextProps.data !== this.props.data) {
          this.setState(this.createDefaultState());
        }
      }
      /**
       * Returns default, reset state for the sankey chart.
       * @return {Object} Whole new state
       */
  
    }, {
      key: 'createDefaultState',
      value: function createDefaultState() {
        return {
          isTooltipActive: false
        };
      }
    }, {
      key: 'handleMouseEnter',
      value: function handleMouseEnter(el, index, e) {
        var _props = this.props;
        var onMouseEnter = _props.onMouseEnter;
        var children = _props.children;
  
        var tooltipItem = (0, _ReactUtils.findChildByType)(children, _Tooltip2.default);
  
        if (tooltipItem) {
          this.setState({
            activeLink: el,
            isTooltipActive: true
          }, function () {
            if (onMouseEnter) {
              onMouseEnter(el, index, e);
            }
          });
        } else if (onMouseEnter) {
          onMouseEnter(el, index, e);
        }
      }
    }, {
      key: 'handleMouseLeave',
      value: function handleMouseLeave(el, index, e) {
        var _props2 = this.props;
        var onMouseLeave = _props2.onMouseLeave;
        var children = _props2.children;
  
        var tooltipItem = (0, _ReactUtils.findChildByType)(children, _Tooltip2.default);
  
        if (tooltipItem) {
          this.setState({
  
            isTooltipActive: false
          }, function () {
            if (onMouseLeave) {
              onMouseLeave(el, index, e);
            }
          });
        } else if (onMouseLeave) {
          onMouseLeave(el, index, e);
        }
      }
    }, {
      key: 'handleClick',
      value: function handleClick(el, index, e) {
        var onClick = this.props.onClick;
  
        if (onClick) {
          onClick(el, index, e);
        }
      }
    }, {
      key: 'renderLinks',
      value: function renderLinks(links, nodes) {
        var _props3 = this.props;
        var linkCurvature = _props3.linkCurvature;
        var linkContent = _props3.link;
        var margin = _props3.margin;
  
        var top = margin.top || 0;
        var left = margin.left || 0;
  
        return _react2.default.createElement(_Layer2.default, { className: 'recharts-sankey-links', key: 'recharts-sankey-links' }, links.map(function (link, i) {
          var sourceRelativeY = link.sy;
          var targetRelativeY = link.ty;
          var linkWidth = link.dy;
  
          var source = nodes[link.source];
          var target = nodes[link.target];
          var sourceX = source.x + source.dx + left;
          var targetX = target.x + left;
          var interpolationFunc = interpolationGenerator(sourceX, targetX);
          var sourceControlX = interpolationFunc(linkCurvature);
          var targetControlX = interpolationFunc(1 - linkCurvature);
  
          var sourceY = source.y + sourceRelativeY + linkWidth / 2 + top;
          var targetY = target.y + targetRelativeY + linkWidth / 2 + top;
  
          var linkProps = {
            sourceX: sourceX, targetX: targetX,
            sourceY: sourceY, targetY: targetY,
            sourceControlX: sourceControlX, targetControlX: targetControlX,
            sourceRelativeY: sourceRelativeY, targetRelativeY: targetRelativeY,
            linkWidth: linkWidth,
            index: i,
            payload: link
          };
          var linkPresentationAttributes = {};
  
          if (_react2.default.isValidElement(linkContent)) {
            return _react2.default.createElement(_Layer2.default, { key: 'link' + i }, _react2.default.cloneElement(linkContent, linkProps));
          } else if ((0, _isFunction3.default)(linkContent)) {
            return _react2.default.createElement(_Layer2.default, { key: 'link' + i }, linkContent(linkProps));
          } else if ((0, _isObject3.default)(linkContent)) {
            linkPresentationAttributes = (0, _ReactUtils.getPresentationAttributes)(linkContent);
          }
  
          return _react2.default.createElement(_Layer2.default, { key: 'link' + i }, _react2.default.createElement('path', _extends({
            className: 'recharts-sankey-link',
            d: '\n                    M' + sourceX + ',' + sourceY + '\n                    C' + sourceControlX + ',' + sourceY + ' ' + targetControlX + ',' + targetY + ' ' + targetX + ',' + targetY + '\n                  ',
            fill: 'none',
            stroke: '#333',
            strokeWidth: linkWidth,
            strokeOpacity: '0.2'
          }, linkPresentationAttributes)));
        }));
      }
    }, {
      key: 'renderNodes',
      value: function renderNodes(nodes) {
        var _props4 = this.props;
        var nodeContent = _props4.node;
        var margin = _props4.margin;
  
        var top = margin.top || 0;
        var left = margin.left || 0;
  
        return _react2.default.createElement(_Layer2.default, { className: 'recharts-sankey-nodes', key: 'recharts-sankey-nodes' }, nodes.map(function (node, i) {
          var x = node.x;
          var y = node.y;
          var dx = node.dx;
          var dy = node.dy;
  
          var nodeProps = {
            x: x + left,
            y: y + top,
            width: dx,
            height: dy,
            index: i,
            payload: node
          };
          var nodePresentationAttributes = {};
  
          if (_react2.default.isValidElement(nodeContent)) {
            return _react2.default.createElement(_Layer2.default, { key: 'node' + i }, _react2.default.cloneElement(nodeContent, nodeProps));
          } else if ((0, _isFunction3.default)(nodeContent)) {
            return _react2.default.createElement(_Layer2.default, { key: 'node' + i }, nodeContent(nodeProps));
          } else if ((0, _isObject3.default)(nodeContent)) {
            nodePresentationAttributes = (0, _ReactUtils.getPresentationAttributes)(nodeContent);
          }
  
          return _react2.default.createElement(_Layer2.default, { key: 'node' + i }, _react2.default.createElement(_Rectangle2.default, _extends({
            className: 'recharts-sankey-node',
            fill: '#0088fe',
            fillOpacity: '0.8'
          }, nodeProps, nodePresentationAttributes)));
        }));
      }
    }, {
      key: 'renderTooltip',
      value: function renderTooltip(links, nodes) {
        var children = this.props.children;
  
        var tooltipItem = (0, _ReactUtils.findChildByType)(children, _Tooltip2.default);
  
        if (!tooltipItem) {
          return null;
        }
  
        var _state = this.state;
        var isTooltipActive = _state.isTooltipActive;
        var activeLink = _state.activeLink;
  
        var viewBox = { x: 0, y: 0, width: 100, height: 100 };
        var coordinate = {
          x: 0,
          y: 0
        };
        var payload = isTooltipActive ? [{
          name: 'hh', value: 'aa'
        }] : [];
  
        return _react2.default.cloneElement(tooltipItem, {
          viewBox: viewBox,
          active: isTooltipActive,
          coordinate: coordinate,
          label: 'bb',
          payload: payload,
          separator: 'cc'
        });
      }
    }, {
      key: 'render',
      value: function render() {
        if (!(0, _ReactUtils.validateWidthHeight)(this)) {
          return null;
        }
  
        var _props5 = this.props;
        var data = _props5.data;
        var iterations = _props5.iterations;
        var nodeWidth = _props5.nodeWidth;
        var nodePadding = _props5.nodePadding;
        var width = _props5.width;
        var height = _props5.height;
        var className = _props5.className;
        var style = _props5.style;
        var children = _props5.children;
        var margin = _props5.margin;
  
        var others = _objectWithoutProperties(_props5, ['data', 'iterations', 'nodeWidth', 'nodePadding', 'width', 'height', 'className', 'style', 'children', 'margin']);
  
        var contentWidth = width - (margin.left || 0) - (margin.right || 0);
        var contentHeight = height - (margin.top || 0) - (margin.bottom || 0);
  
        var _computeData = computeData({
          data: data,
          width: contentWidth,
          height: contentHeight,
          iterations: iterations, nodeWidth: nodeWidth, nodePadding: nodePadding
        });
  
        var links = _computeData.links;
        var nodes = _computeData.nodes;
  
        var attrs = (0, _ReactUtils.getPresentationAttributes)(others);
  
        return _react2.default.createElement('div', {
          className: (0, _classnames2.default)('recharts-wrapper', className),
          style: _extends({}, style, { position: 'relative', cursor: 'default', width: width, height: height })
        }, _react2.default.createElement(_Surface2.default, _extends({}, attrs, { width: width, height: height }), (0, _ReactUtils.filterSvgElements)(children), this.renderLinks(links, nodes), this.renderNodes(nodes)), this.renderTooltip(links, nodes));
      }
    }]);
  
    return Sankey;
  }(_react.Component), _class2.displayName = 'Sankey', _class2.propTypes = _extends({}, _ReactUtils.PRESENTATION_ATTRIBUTES, _ReactUtils.EVENT_ATTRIBUTES, {
  
    width: _react.PropTypes.number,
    height: _react.PropTypes.number,
    data: _react.PropTypes.shape({
      nodes: _react.PropTypes.array,
      links: _react.PropTypes.arrayOf(_react.PropTypes.shape({
        target: _react.PropTypes.number,
        source: _react.PropTypes.number,
        value: _react.PropTypes.number
      }))
    }),
  
    nodePadding: _react.PropTypes.number,
    nodeWidth: _react.PropTypes.number,
    linkCurvature: _react.PropTypes.number,
    iterations: _react.PropTypes.number,
  
    node: _react.PropTypes.oneOfType([_react.PropTypes.object, _react.PropTypes.element, _react.PropTypes.func]),
    link: _react.PropTypes.oneOfType([_react.PropTypes.object, _react.PropTypes.element, _react.PropTypes.func]),
  
    style: _react.PropTypes.object,
    className: _react.PropTypes.string,
    children: _react.PropTypes.oneOfType([_react.PropTypes.arrayOf(_react.PropTypes.node), _react.PropTypes.node]),
    margin: _react.PropTypes.shape({
      top: _react.PropTypes.number,
      right: _react.PropTypes.number,
      bottom: _react.PropTypes.number,
      left: _react.PropTypes.number
    })
  }), _class2.defaultProps = {
    nodePadding: 10,
    nodeWidth: 10,
    linkCurvature: 0.5,
    iterations: 32,
    margin: { top: 5, right: 5, bottom: 5, left: 5 }
  }, _temp2)) || _class;
  
  exports.default = Sankey;

/***/ }),
/* 141 */
/***/ (function(module, exports) {

  module.exports = require("lodash/sumBy");

/***/ }),
/* 142 */
/***/ (function(module, exports) {

  module.exports = require("lodash/min");

/***/ }),
/* 143 */
/***/ (function(module, exports, __webpack_require__) {

  'use strict';
  
  var _getPrototypeOf = __webpack_require__(29);
  
  var _getPrototypeOf2 = _interopRequireDefault2(_getPrototypeOf);
  
  var _setPrototypeOf = __webpack_require__(59);
  
  var _setPrototypeOf2 = _interopRequireDefault2(_setPrototypeOf);
  
  var _create = __webpack_require__(60);
  
  var _create2 = _interopRequireDefault2(_create);
  
  var _typeof2 = __webpack_require__(61);
  
  var _typeof3 = _interopRequireDefault2(_typeof2);
  
  var _defineProperty = __webpack_require__(62);
  
  var _defineProperty2 = _interopRequireDefault2(_defineProperty);
  
  var _assign = __webpack_require__(23);
  
  var _assign2 = _interopRequireDefault2(_assign);
  
  function _interopRequireDefault2(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  
  var _range2 = __webpack_require__(116);
  
  var _range3 = _interopRequireDefault(_range2);
  
  var _extends = _assign2.default || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }return target;
  };
  
  var _createClass = function () {
    function defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;(0, _defineProperty2.default)(target, descriptor.key, descriptor);
      }
    }return function (Constructor, protoProps, staticProps) {
      if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
    };
  }();
  
  var _class, _class2, _temp2; /**
                                * @fileOverview Radar Chart
                                */
  
  var _react = __webpack_require__(11);
  
  var _react2 = _interopRequireDefault(_react);
  
  var _reactDom = __webpack_require__(104);
  
  var _reactDom2 = _interopRequireDefault(_reactDom);
  
  var _classnames = __webpack_require__(46);
  
  var _classnames2 = _interopRequireDefault(_classnames);
  
  var _d3Scale = __webpack_require__(117);
  
  var _rechartsScale = __webpack_require__(135);
  
  var _Surface = __webpack_require__(63);
  
  var _Surface2 = _interopRequireDefault(_Surface);
  
  var _Layer = __webpack_require__(87);
  
  var _Layer2 = _interopRequireDefault(_Layer);
  
  var _Legend = __webpack_require__(71);
  
  var _Legend2 = _interopRequireDefault(_Legend);
  
  var _Tooltip = __webpack_require__(82);
  
  var _Tooltip2 = _interopRequireDefault(_Tooltip);
  
  var _Radar = __webpack_require__(112);
  
  var _Radar2 = _interopRequireDefault(_Radar);
  
  var _PolarGrid = __webpack_require__(108);
  
  var _PolarGrid2 = _interopRequireDefault(_PolarGrid);
  
  var _PolarAngleAxis = __webpack_require__(111);
  
  var _PolarAngleAxis2 = _interopRequireDefault(_PolarAngleAxis);
  
  var _PolarRadiusAxis = __webpack_require__(109);
  
  var _PolarRadiusAxis2 = _interopRequireDefault(_PolarRadiusAxis);
  
  var _ReactUtils = __webpack_require__(64);
  
  var _DOMUtils = __webpack_require__(80);
  
  var _PolarUtils = __webpack_require__(89);
  
  var _DataUtils = __webpack_require__(96);
  
  var _PureRender = __webpack_require__(72);
  
  var _PureRender2 = _interopRequireDefault(_PureRender);
  
  var _AnimationDecorator = __webpack_require__(94);
  
  var _AnimationDecorator2 = _interopRequireDefault(_AnimationDecorator);
  
  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
  }
  
  function _objectWithoutProperties(obj, keys) {
    var target = {};for (var i in obj) {
      if (keys.indexOf(i) >= 0) continue;if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;target[i] = obj[i];
    }return target;
  }
  
  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }
  
  function _possibleConstructorReturn(self, call) {
    if (!self) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }return call && ((typeof call === 'undefined' ? 'undefined' : (0, _typeof3.default)(call)) === "object" || typeof call === "function") ? call : self;
  }
  
  function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === 'undefined' ? 'undefined' : (0, _typeof3.default)(superClass)));
    }subClass.prototype = (0, _create2.default)(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) _setPrototypeOf2.default ? (0, _setPrototypeOf2.default)(subClass, superClass) : subClass.__proto__ = superClass;
  }
  
  var RadarChart = (0, _AnimationDecorator2.default)(_class = (0, _PureRender2.default)(_class = (_temp2 = _class2 = function (_Component) {
    _inherits(RadarChart, _Component);
  
    function RadarChart() {
      var _ref;
  
      var _temp, _this, _ret;
  
      _classCallCheck(this, RadarChart);
  
      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }
  
      return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = RadarChart.__proto__ || (0, _getPrototypeOf2.default)(RadarChart)).call.apply(_ref, [this].concat(args))), _this), _this.state = _this.createDefaultState(), _this.handleMouseEnter = function (itemProps, e) {
        var _this$props = _this.props;
        var children = _this$props.children;
        var onMouseEnter = _this$props.onMouseEnter;
        var points = itemProps.points;
  
        var tooltipItem = (0, _ReactUtils.findChildByType)(children, _Tooltip2.default);
  
        if (tooltipItem && points.length) {
          var container = _reactDom2.default.findDOMNode(_this);
          var containerOffset = (0, _DOMUtils.getOffset)(container);
          var ne = (0, _DOMUtils.calculateChartCoordinate)(e, containerOffset);
  
          _this.setState({
            isTooltipActive: true,
            activeTooltipLabel: itemProps.name || itemProps.dataKey,
            activeTooltipCoord: { x: ne.chartX, y: ne.chartY },
            activeTooltipPayload: _this.getTooltipContent(itemProps)
          }, function () {
            if (onMouseEnter) {
              onMouseEnter(points, e);
            }
          });
        } else if (onMouseEnter) {
          onMouseEnter(points, e);
        }
      }, _this.handleMouseLeave = function (itemProps, e) {
        var _this$props2 = _this.props;
        var children = _this$props2.children;
        var onMouseLeave = _this$props2.onMouseLeave;
  
        var tooltipItem = (0, _ReactUtils.findChildByType)(children, _Tooltip2.default);
  
        if (tooltipItem) {
          _this.setState({
            isTooltipActive: false
          }, function () {
            if (onMouseLeave) {
              onMouseLeave(itemProps, e);
            }
          });
        } else if (onMouseLeave) {
          onMouseLeave(itemProps, e);
        }
      }, _temp), _possibleConstructorReturn(_this, _ret);
    }
  
    _createClass(RadarChart, [{
      key: 'componentWillReceiveProps',
      value: function componentWillReceiveProps(nextProps) {
        if (nextProps.data !== this.props.data) {
          this.setState(this.createDefaultState());
        }
      }
    }, {
      key: 'getTooltipContent',
      value: function getTooltipContent(itemProps) {
        var points = itemProps.points;
        var dataKey = itemProps.dataKey;
        var unit = itemProps.unit;
  
        return points.map(function (entry) {
          var name = entry.name;
          var value = entry.value;
          var payload = entry.payload;
  
          return _extends({}, (0, _ReactUtils.getPresentationAttributes)(itemProps), {
            dataKey: dataKey, unit: unit, name: name, value: value, payload: payload
          });
        });
      }
    }, {
      key: 'getRadiusAxisCfg',
      value: function getRadiusAxisCfg(radiusAxis, innerRadius, outerRadius) {
        var children = this.props.children;
  
        var domain = void 0;
        var tickCount = void 0;
        var ticks = void 0;
  
        if (radiusAxis && radiusAxis.props.ticks) {
          ticks = radiusAxis.props.ticks;
  
          tickCount = ticks.length;
          domain = [Math.min.apply(null, ticks), Math.max.apply(null, ticks)];
        } else {
          tickCount = Math.max(radiusAxis && radiusAxis.props.tickCount || _PolarRadiusAxis2.default.defaultProps.tickCount, 2);
          ticks = this.getTicksByItems(radiusAxis, tickCount);
  
          domain = [Math.min.apply(null, ticks), Math.max.apply(null, ticks)];
        }
  
        return {
          tickCount: tickCount,
          ticks: ticks,
          scale: (0, _d3Scale.scaleLinear)().domain(domain).range([innerRadius, outerRadius])
        };
      }
    }, {
      key: 'getTicksByItems',
      value: function getTicksByItems(axisItem, tickCount) {
        var _props = this.props;
        var data = _props.data;
        var children = _props.children;
  
        var _ref2 = axisItem ? axisItem.props : _PolarRadiusAxis2.default.defaultProps;
  
        var domain = _ref2.domain;
        var allowDataOverflow = _ref2.allowDataOverflow;
  
        var radarItems = (0, _ReactUtils.findAllByType)(children, _Radar2.default);
        var dataKeys = radarItems.map(function (item) {
          return item.props.dataKey;
        });
        var extent = data.reduce(function (prev, current) {
          var values = dataKeys.map(function (v) {
            return current[v] || 0;
          });
          var currentMax = Math.max.apply(null, values);
          var currentMin = Math.min.apply(null, values);
  
          return [Math.min(prev[0], currentMin), Math.max(prev[1], currentMax)];
        }, [Infinity, -Infinity]);
        var finalDomain = (0, _DataUtils.parseSpecifiedDomain)(domain, extent, allowDataOverflow);
  
        if (domain && (domain[0] === 'auto' || domain[1] === 'auto')) {
          return (0, _rechartsScale.getNiceTickValues)(finalDomain, tickCount);
        }
  
        return finalDomain;
      }
    }, {
      key: 'getGridRadius',
      value: function getGridRadius(gridCount, innerRadius, outerRadius) {
        var domain = (0, _range3.default)(0, gridCount);
        var scale = (0, _d3Scale.scalePoint)().domain(domain).range([innerRadius, outerRadius]);
  
        return domain.map(function (v) {
          return scale(v);
        });
      }
    }, {
      key: 'getAngle',
      value: function getAngle(index, dataLength, startAngle, clockWise) {
        var sign = clockWise ? -1 : 1;
        var angleInterval = 360 / dataLength;
  
        return startAngle + index * sign * angleInterval;
      }
    }, {
      key: 'getAngleTicks',
      value: function getAngleTicks(dataLength, startAngle, clockWise) {
        var angles = [];
  
        for (var i = 0; i < dataLength; i++) {
          angles.push(this.getAngle(i, dataLength, startAngle, clockWise));
        }
  
        return angles;
      }
    }, {
      key: 'getRadiusTicks',
      value: function getRadiusTicks(axisCfg) {
        var ticks = axisCfg.ticks;
        var scale = axisCfg.scale;
  
        if (ticks && ticks.length) {
          return ticks.map(function (entry) {
            return {
              radius: scale(entry),
              value: entry
            };
          });
        }
        var tickCount = axisCfg.tickCount;
  
        var domain = scale.domain();
  
        return (0, _range3.default)(0, tickCount).map(function (v, i) {
          var value = domain[0] + i * (domain[1] - domain[0]) / (tickCount - 1);
          return {
            value: value,
            radius: scale(value)
          };
        });
      }
    }, {
      key: 'getComposedData',
      value: function getComposedData(item, scale, cx, cy, innerRadius, outerRadius) {
        var _this2 = this;
  
        var dataKey = item.props.dataKey;
        var _props2 = this.props;
        var data = _props2.data;
        var startAngle = _props2.startAngle;
        var clockWise = _props2.clockWise;
        var children = _props2.children;
  
        var angleAxis = (0, _ReactUtils.findChildByType)(children, _PolarAngleAxis2.default);
        var nameKey = angleAxis && angleAxis.props.dataKey;
        var len = data.length;
  
        return data.map(function (entry, i) {
          var value = entry[dataKey] || 0;
          var angle = _this2.getAngle(i, len, startAngle, clockWise);
          var radius = scale(value);
  
          return _extends({}, (0, _PolarUtils.polarToCartesian)(cx, cy, radius, angle), {
            value: value,
            name: nameKey ? entry[nameKey] || i : i,
            cx: cx, cy: cy, radius: radius, angle: angle,
            payload: entry
          });
        });
      }
      /**
       * Returns default, reset state for the radar chart.
       * @return {Object} Whole new state
       */
  
    }, {
      key: 'createDefaultState',
      value: function createDefaultState() {
        return {
          activeTooltipLabel: '',
          activeTooltipCoord: { x: 0, y: 0 },
          isTooltipActive: false
        };
      }
    }, {
      key: 'renderRadars',
      value: function renderRadars(items, scale, cx, cy, innerRadius, outerRadius) {
        var _this3 = this;
  
        if (!items || !items.length) {
          return null;
        }
  
        var baseProps = (0, _ReactUtils.getPresentationAttributes)(this.props);
        return items.map(function (el, index) {
          return _react2.default.cloneElement(el, _extends({}, baseProps, (0, _ReactUtils.getPresentationAttributes)(el), {
            animationId: _this3.props.animationId,
            points: _this3.getComposedData(el, scale, cx, cy, innerRadius, outerRadius),
            key: 'radar-' + index,
            onMouseEnter: _this3.handleMouseEnter,
            onMouseLeave: _this3.handleMouseLeave
          }));
        });
      }
    }, {
      key: 'renderGrid',
      value: function renderGrid(radiusAxisCfg, cx, cy, innerRadius, outerRadius) {
        var children = this.props.children;
  
        var grid = (0, _ReactUtils.findChildByType)(children, _PolarGrid2.default);
  
        if (!grid) {
          return null;
        }
  
        var _props3 = this.props;
        var startAngle = _props3.startAngle;
        var clockWise = _props3.clockWise;
        var data = _props3.data;
  
        var len = data.length;
        var gridCount = radiusAxisCfg.tickCount;
  
        return _react2.default.cloneElement(grid, {
          polarAngles: this.getAngleTicks(len, startAngle, clockWise),
          polarRadius: this.getGridRadius(gridCount, innerRadius, outerRadius),
          cx: cx, cy: cy, innerRadius: innerRadius, outerRadius: outerRadius,
          key: 'layer-grid'
        });
      }
    }, {
      key: 'renderAngleAxis',
      value: function renderAngleAxis(cx, cy, outerRadius, maxRadius) {
        var _this4 = this;
  
        var children = this.props.children;
  
        var angleAxis = (0, _ReactUtils.findChildByType)(children, _PolarAngleAxis2.default);
  
        if (!angleAxis || angleAxis.props.hide) {
          return null;
        }
  
        var _props4 = this.props;
        var data = _props4.data;
        var width = _props4.width;
        var height = _props4.height;
        var startAngle = _props4.startAngle;
        var clockWise = _props4.clockWise;
  
        var len = data.length;
        var grid = (0, _ReactUtils.findChildByType)(children, _PolarGrid2.default);
        var radius = (0, _DataUtils.getPercentValue)(angleAxis.props.radius, maxRadius, outerRadius);
        var dataKey = angleAxis.props.dataKey;
  
        return _react2.default.cloneElement(angleAxis, {
          ticks: data.map(function (v, i) {
            return {
              value: dataKey ? v[dataKey] : i,
              angle: _this4.getAngle(i, len, startAngle, clockWise)
            };
          }),
          cx: cx, cy: cy, radius: radius,
          axisLineType: grid && grid.props && grid.props.gridType || _PolarGrid2.default.defaultProps.gridType,
          key: 'layer-angle-axis'
        });
      }
    }, {
      key: 'renderRadiusAxis',
      value: function renderRadiusAxis(radiusAxis, radiusAxisCfg, cx, cy) {
        if (!radiusAxis || radiusAxis.props.hide) {
          return null;
        }
  
        var startAngle = this.props.startAngle;
  
        return _react2.default.cloneElement(radiusAxis, {
          angle: radiusAxis.props.angle || startAngle,
          ticks: this.getRadiusTicks(radiusAxisCfg),
          cx: cx, cy: cy
        });
      }
    }, {
      key: 'renderTooltip',
      value: function renderTooltip() {
        var children = this.props.children;
  
        var tooltipItem = (0, _ReactUtils.findChildByType)(children, _Tooltip2.default);
  
        if (!tooltipItem) {
          return null;
        }
  
        var _props5 = this.props;
        var width = _props5.width;
        var height = _props5.height;
        var _state = this.state;
        var isTooltipActive = _state.isTooltipActive;
        var activeTooltipLabel = _state.activeTooltipLabel;
        var activeTooltipCoord = _state.activeTooltipCoord;
        var activeTooltipPayload = _state.activeTooltipPayload;
  
        var viewBox = { x: 0, y: 0, width: width, height: height };
  
        return _react2.default.cloneElement(tooltipItem, {
          viewBox: viewBox,
          active: isTooltipActive,
          label: activeTooltipLabel,
          payload: activeTooltipPayload,
          coordinate: activeTooltipCoord
        });
      }
  
      /**
       * Draw legend
       * @param  {Array} items             The instances of item
       * @return {ReactElement}            The instance of Legend
       */
  
    }, {
      key: 'renderLegend',
      value: function renderLegend(items) {
        var children = this.props.children;
  
        var legendItem = (0, _ReactUtils.findChildByType)(children, _Legend2.default);
        if (!legendItem) {
          return null;
        }
  
        var _props6 = this.props;
        var width = _props6.width;
        var height = _props6.height;
        var margin = _props6.margin;
  
        var legendData = legendItem.props && legendItem.props.payload || items.map(function (child) {
          var _child$props = child.props;
          var dataKey = _child$props.dataKey;
          var name = _child$props.name;
          var legendType = _child$props.legendType;
  
          return {
            dataKey: dataKey,
            type: legendType || 'square',
            color: child.props.stroke || child.props.fill,
            value: name || dataKey
          };
        }, this);
  
        return _react2.default.cloneElement(legendItem, _extends({}, _Legend2.default.getWithHeight(legendItem, width, height), {
          payload: legendData,
          chartWidth: width,
          chartHeight: height,
          margin: margin
        }));
      }
    }, {
      key: 'render',
      value: function render() {
        if (!(0, _ReactUtils.validateWidthHeight)(this)) {
          return null;
        }
        var _props7 = this.props;
        var className = _props7.className;
        var data = _props7.data;
        var width = _props7.width;
        var height = _props7.height;
        var margin = _props7.margin;
        var children = _props7.children;
        var style = _props7.style;
  
        var others = _objectWithoutProperties(_props7, ['className', 'data', 'width', 'height', 'margin', 'children', 'style']);
  
        var cx = (0, _DataUtils.getPercentValue)(this.props.cx, width, width / 2);
        var cy = (0, _DataUtils.getPercentValue)(this.props.cy, height, height / 2);
        var maxRadius = (0, _PolarUtils.getMaxRadius)(width, height, margin);
        var innerRadius = (0, _DataUtils.getPercentValue)(this.props.innerRadius, maxRadius, 0);
        var outerRadius = (0, _DataUtils.getPercentValue)(this.props.outerRadius, maxRadius, maxRadius * 0.8);
  
        if (outerRadius <= 0 || !data || !data.length) {
          return null;
        }
  
        var items = (0, _ReactUtils.findAllByType)(children, _Radar2.default);
        var radiusAxis = (0, _ReactUtils.findChildByType)(children, _PolarRadiusAxis2.default);
        var radiusAxisCfg = this.getRadiusAxisCfg(radiusAxis, innerRadius, outerRadius);
        var attrs = (0, _ReactUtils.getPresentationAttributes)(others);
  
        return _react2.default.createElement('div', {
          className: (0, _classnames2.default)('recharts-wrapper', className),
          style: _extends({}, style, { position: 'relative', cursor: 'default', width: width, height: height })
        }, _react2.default.createElement(_Surface2.default, _extends({}, attrs, { width: width, height: height }), this.renderGrid(radiusAxisCfg, cx, cy, innerRadius, outerRadius), this.renderRadiusAxis(radiusAxis, radiusAxisCfg, cx, cy), this.renderAngleAxis(cx, cy, outerRadius, maxRadius), this.renderRadars(items, radiusAxisCfg.scale, cx, cy, innerRadius, outerRadius), (0, _ReactUtils.filterSvgElements)(children)), this.renderLegend(items), this.renderTooltip());
      }
    }]);
  
    return RadarChart;
  }(_react.Component), _class2.displayName = 'RadarChart', _class2.propTypes = {
    width: _react.PropTypes.number,
    height: _react.PropTypes.number,
    margin: _react.PropTypes.shape({
      top: _react.PropTypes.number,
      right: _react.PropTypes.number,
      bottom: _react.PropTypes.number,
      left: _react.PropTypes.number
    }),
  
    cx: _react.PropTypes.oneOfType([_react.PropTypes.number, _react.PropTypes.string]),
    cy: _react.PropTypes.oneOfType([_react.PropTypes.number, _react.PropTypes.string]),
    startAngle: _react.PropTypes.number,
    innerRadius: _react.PropTypes.oneOfType([_react.PropTypes.number, _react.PropTypes.string]),
    outerRadius: _react.PropTypes.oneOfType([_react.PropTypes.number, _react.PropTypes.string]),
    clockWise: _react.PropTypes.bool,
  
    data: _react.PropTypes.array,
    style: _react.PropTypes.object,
    children: _react.PropTypes.oneOfType([_react.PropTypes.arrayOf(_react.PropTypes.node), _react.PropTypes.node]),
    className: _react.PropTypes.string,
    animationId: _react.PropTypes.number,
  
    onMouseEnter: _react.PropTypes.func,
    onMouseLeave: _react.PropTypes.func
  }, _class2.defaultProps = {
    width: 0,
    height: 0,
    cx: '50%',
    cy: '50%',
    innerRadius: 0,
    outerRadius: '80%',
  
    startAngle: 90,
    clockWise: true,
    data: [],
    margin: { top: 0, right: 0, bottom: 0, left: 0 }
  }, _temp2)) || _class) || _class;
  
  exports.default = RadarChart;

/***/ }),
/* 144 */
/***/ (function(module, exports, __webpack_require__) {

  'use strict';
  
  var _getPrototypeOf = __webpack_require__(29);
  
  var _getPrototypeOf2 = _interopRequireDefault2(_getPrototypeOf);
  
  var _setPrototypeOf = __webpack_require__(59);
  
  var _setPrototypeOf2 = _interopRequireDefault2(_setPrototypeOf);
  
  var _create = __webpack_require__(60);
  
  var _create2 = _interopRequireDefault2(_create);
  
  var _typeof2 = __webpack_require__(61);
  
  var _typeof3 = _interopRequireDefault2(_typeof2);
  
  var _defineProperty = __webpack_require__(62);
  
  var _defineProperty2 = _interopRequireDefault2(_defineProperty);
  
  var _assign = __webpack_require__(23);
  
  var _assign2 = _interopRequireDefault2(_assign);
  
  function _interopRequireDefault2(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  
  var _isNumber2 = __webpack_require__(67);
  
  var _isNumber3 = _interopRequireDefault(_isNumber2);
  
  var _extends = _assign2.default || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }return target;
  };
  
  var _createClass = function () {
    function defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;(0, _defineProperty2.default)(target, descriptor.key, descriptor);
      }
    }return function (Constructor, protoProps, staticProps) {
      if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
    };
  }();
  
  var _class, _class2, _temp2; /**
                                * @fileOverview Scatter Chart
                                */
  
  var _react = __webpack_require__(11);
  
  var _react2 = _interopRequireDefault(_react);
  
  var _classnames = __webpack_require__(46);
  
  var _classnames2 = _interopRequireDefault(_classnames);
  
  var _d3Scale = __webpack_require__(117);
  
  var _Surface = __webpack_require__(63);
  
  var _Surface2 = _interopRequireDefault(_Surface);
  
  var _Layer = __webpack_require__(87);
  
  var _Layer2 = _interopRequireDefault(_Layer);
  
  var _Cell = __webpack_require__(95);
  
  var _Cell2 = _interopRequireDefault(_Cell);
  
  var _Legend = __webpack_require__(71);
  
  var _Legend2 = _interopRequireDefault(_Legend);
  
  var _Tooltip = __webpack_require__(82);
  
  var _Tooltip2 = _interopRequireDefault(_Tooltip);
  
  var _Cross = __webpack_require__(107);
  
  var _Cross2 = _interopRequireDefault(_Cross);
  
  var _CartesianAxis = __webpack_require__(122);
  
  var _CartesianAxis2 = _interopRequireDefault(_CartesianAxis);
  
  var _CartesianGrid = __webpack_require__(123);
  
  var _CartesianGrid2 = _interopRequireDefault(_CartesianGrid);
  
  var _Scatter = __webpack_require__(127);
  
  var _Scatter2 = _interopRequireDefault(_Scatter);
  
  var _XAxis = __webpack_require__(128);
  
  var _XAxis2 = _interopRequireDefault(_XAxis);
  
  var _YAxis = __webpack_require__(129);
  
  var _YAxis2 = _interopRequireDefault(_YAxis);
  
  var _ZAxis = __webpack_require__(130);
  
  var _ZAxis2 = _interopRequireDefault(_ZAxis);
  
  var _ReferenceLine = __webpack_require__(118);
  
  var _ReferenceLine2 = _interopRequireDefault(_ReferenceLine);
  
  var _ReferenceDot = __webpack_require__(120);
  
  var _ReferenceDot2 = _interopRequireDefault(_ReferenceDot);
  
  var _ReferenceArea = __webpack_require__(121);
  
  var _ReferenceArea2 = _interopRequireDefault(_ReferenceArea);
  
  var _ReactUtils = __webpack_require__(64);
  
  var _PureRender = __webpack_require__(72);
  
  var _PureRender2 = _interopRequireDefault(_PureRender);
  
  var _DataUtils = __webpack_require__(96);
  
  var _LogUtils = __webpack_require__(99);
  
  var _CartesianUtils = __webpack_require__(134);
  
  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
  }
  
  function _objectWithoutProperties(obj, keys) {
    var target = {};for (var i in obj) {
      if (keys.indexOf(i) >= 0) continue;if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;target[i] = obj[i];
    }return target;
  }
  
  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }
  
  function _possibleConstructorReturn(self, call) {
    if (!self) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }return call && ((typeof call === 'undefined' ? 'undefined' : (0, _typeof3.default)(call)) === "object" || typeof call === "function") ? call : self;
  }
  
  function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === 'undefined' ? 'undefined' : (0, _typeof3.default)(superClass)));
    }subClass.prototype = (0, _create2.default)(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) _setPrototypeOf2.default ? (0, _setPrototypeOf2.default)(subClass, superClass) : subClass.__proto__ = superClass;
  }
  
  var ScatterChart = (0, _PureRender2.default)(_class = (_temp2 = _class2 = function (_Component) {
    _inherits(ScatterChart, _Component);
  
    function ScatterChart() {
      var _ref;
  
      var _temp, _this, _ret;
  
      _classCallCheck(this, ScatterChart);
  
      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }
  
      return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = ScatterChart.__proto__ || (0, _getPrototypeOf2.default)(ScatterChart)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
        activeTooltipCoord: { x: 0, y: 0 },
        isTooltipActive: false,
        activeItem: null
      }, _this.handleScatterMouseEnter = function (el, e) {
        _this.setState({
          isTooltipActive: true,
          activeItem: el,
          activeTooltipCoord: { x: el.cx, y: el.cy }
        });
      }, _this.handleScatterMouseLeave = function () {
        _this.setState({
          isTooltipActive: false
        });
      }, _temp), _possibleConstructorReturn(_this, _ret);
    }
  
    _createClass(ScatterChart, [{
      key: 'getComposedData',
  
      /**
       * Compose the data of each group
       * @param  {Object} item        An instance of Scatter
       * @param  {Array}  data        The original data
       * @param  {Object} xAxis       The configuration of x-axis
       * @param  {Object} yAxis       The configuration of y-axis
       * @param  {Object} zAxis       The configuration of z-axis
       * @return {Array} Composed data
       */
      value: function getComposedData(item, data, xAxis, yAxis, zAxis) {
        var children = item.props.children;
  
        var xAxisDataKey = xAxis.dataKey;
        var yAxisDataKey = yAxis.dataKey;
        var zAxisDataKey = zAxis.dataKey;
        var cells = (0, _ReactUtils.findAllByType)(children, _Cell2.default);
  
        return data.map(function (entry, index) {
          return _extends({}, entry, {
            cx: (0, _isNumber3.default)(entry[xAxisDataKey]) ? xAxis.scale(entry[xAxisDataKey]) : null,
            cy: (0, _isNumber3.default)(entry[yAxisDataKey]) ? yAxis.scale(entry[yAxisDataKey]) : null,
            size: zAxisDataKey !== undefined && (0, _isNumber3.default)(entry[zAxisDataKey]) ? zAxis.scale(entry[zAxisDataKey]) : zAxis.range[0],
            payload: {
              x: entry[xAxisDataKey],
              y: entry[yAxisDataKey],
              z: zAxisDataKey !== undefined && entry[zAxisDataKey] || '-'
            }
          }, cells && cells[index] && cells[index].props);
        });
      }
    }, {
      key: 'getDomain',
      value: function getDomain(items, dataKey, axisId, axisType) {
        var domain = items.reduce(function (result, item) {
          return result.concat(item.props.data.map(function (entry) {
            return entry[dataKey];
          }));
        }, []);
  
        if (axisType === 'xAxis' || axisType === 'yAxis') {
          domain = (0, _CartesianUtils.detectReferenceElementsDomain)(this.props.children, domain, axisId, axisType);
        }
  
        return [Math.min.apply(null, domain), Math.max.apply(null, domain)];
      }
  
      /**
       * Get the configuration of x-axis or y-axis
       * @param  {String} axisType The type of axis
       * @param  {Array} items     The instances of item
       * @return {Object}          Configuration
       */
  
    }, {
      key: 'getAxis',
      value: function getAxis() {
        var axisType = arguments.length <= 0 || arguments[0] === undefined ? 'xAxis' : arguments[0];
        var items = arguments[1];
        var children = this.props.children;
  
        var Axis = axisType === 'xAxis' ? _XAxis2.default : _YAxis2.default;
        var axis = (0, _ReactUtils.findChildByType)(children, Axis);
  
        (0, _LogUtils.warn)(axis, 'recharts: ScatterChart must has %s', Axis.displayName);
  
        if (axis) {
          var domain = (0, _DataUtils.parseSpecifiedDomain)(axis.props.domain, this.getDomain(items, axis.props.dataKey, axis.props[axisType + 'Id'], axisType), axis.props.allowDataOverflow);
  
          return _extends({}, axis.props, {
            axisType: axisType,
            domain: domain,
            type: 'number',
            originalDomain: axis.props.domain
          });
        }
  
        return null;
      }
  
      /**
       * Get the configuration of z-axis
       * @param  {Array} items The instances of item
       * @return {Object}      Configuration
       */
  
    }, {
      key: 'getZAxis',
      value: function getZAxis(items) {
        var children = this.props.children;
  
        var axisItem = (0, _ReactUtils.findChildByType)(children, _ZAxis2.default);
        var axisProps = axisItem && axisItem.props || _ZAxis2.default.defaultProps;
        var domain = axisProps.dataKey ? this.getDomain(items, axisProps.dataKey) : [-1, 1];
  
        return _extends({}, axisProps, {
          domain: domain,
          scale: (0, _d3Scale.scaleLinear)().domain(domain).range(axisProps.range)
        });
      }
    }, {
      key: 'getOffset',
      value: function getOffset(items, xAxis, yAxis) {
        var _props = this.props;
        var children = _props.children;
        var width = _props.width;
        var height = _props.height;
        var margin = _props.margin;
  
        var offset = _extends({}, margin);
        var legendProps = (0, _CartesianUtils.getLegendProps)(children, items, width, height);
  
        offset[xAxis.orientation] += xAxis.height;
        offset[yAxis.orientation] += yAxis.width;
  
        if (legendProps) {
          var box = _Legend2.default.getLegendBBox(legendProps, width, height) || {};
          if (legendProps.layout === 'horizontal' && (0, _isNumber3.default)(offset[legendProps.verticalAlign])) {
            offset[legendProps.verticalAlign] += box.height || 0;
          } else if (legendProps.layout === 'vertical' && (0, _isNumber3.default)(offset[legendProps.align])) {
            offset[legendProps.align] += box.width || 0;
          }
        }
  
        return _extends({}, offset, {
          width: width - offset.left - offset.right,
          height: height - offset.top - offset.bottom
        });
      }
      /**
       * Calculate the scale function, position, width, height of axes
       * @param  {Object} axis     The configuration of axis
       * @param  {Object} offset   The offset of main part in the svg element
       * @param  {Object} axisType The type of axis, x-axis or y-axis
       * @return {Object} Configuration
       */
  
    }, {
      key: 'getFormatAxis',
      value: function getFormatAxis(axis, offset, axisType) {
        var orientation = axis.orientation;
        var domain = axis.domain;
        var tickFormat = axis.tickFormat;
        var _axis$padding = axis.padding;
        var padding = _axis$padding === undefined ? {} : _axis$padding;
  
        var range = axisType === 'xAxis' ? [offset.left + (padding.left || 0), offset.left + offset.width - (padding.right || 0)] : [offset.top + offset.height - (padding.bottom || 0), offset.top + (padding.top || 0)];
  
        var scale = (0, _d3Scale.scaleLinear)().domain(domain).range(range);
  
        var ticks = (0, _CartesianUtils.getTicksOfScale)(scale, axis);
  
        if (tickFormat) {
          scale.tickFormat(tickFormat);
        }
  
        var x = void 0;
        var y = void 0;
  
        if (axisType === 'xAxis') {
          x = offset.left;
          y = orientation === 'top' ? offset.top - axis.height : offset.top + offset.height;
        } else {
          x = orientation === 'left' ? offset.left - axis.width : offset.right;
          y = offset.top;
        }
  
        return _extends({}, axis, ticks, {
          scale: scale,
          width: axisType === 'xAxis' ? offset.width : axis.width,
          height: axisType === 'yAxis' ? offset.height : axis.height,
          x: x, y: y
        });
      }
  
      /**
       * Get the content to be displayed in the tooltip
       * @param  {Object} data  The data of active item
       * @param  {Object} xAxis The configuration of x-axis
       * @param  {Object} yAxis The configuration of y-axis
       * @param  {Object} zAxis The configuration of z-axis
       * @return {Array}        The content of tooltip
       */
  
    }, {
      key: 'getTooltipContent',
      value: function getTooltipContent(data, xAxis, yAxis, zAxis) {
        if (!data) {
          return null;
        }
  
        var content = [{
          name: xAxis.name || xAxis.dataKey,
          unit: xAxis.unit || '',
          value: data.x
        }, {
          name: yAxis.name || yAxis.dataKey,
          unit: yAxis.unit || '',
          value: data.y
        }];
  
        if (data.z && data.z !== '-') {
          content.push({
            name: zAxis.name || zAxis.dataKey,
            unit: zAxis.unit || '',
            value: data.z
          });
        }
  
        return content;
      }
      /**
       * The handler of mouse entering a scatter
       * @param {Object} el The active scatter
       * @param {Object} e  Event object
       * @return {Object} no return
       */
  
      /**
       * The handler of mouse leaving a scatter
       * @return {Object} no return
       */
  
    }, {
      key: 'renderTooltip',
  
      /**
       * Draw Tooltip
       * @param  {Array} items   The instances of Scatter
       * @param  {Object} xAxis  The configuration of x-axis
       * @param  {Object} yAxis  The configuration of y-axis
       * @param  {Object} zAxis  The configuration of z-axis
       * @param  {Object} offset The offset of main part in the svg element
       * @return {ReactElement}  The instance of Tooltip
       */
      value: function renderTooltip(items, xAxis, yAxis, zAxis, offset) {
        var children = this.props.children;
  
        var tooltipItem = (0, _ReactUtils.findChildByType)(children, _Tooltip2.default);
  
        if (!tooltipItem || !tooltipItem.props.cursor || !this.state.isTooltipActive) {
          return null;
        }
  
        var _state = this.state;
        var isTooltipActive = _state.isTooltipActive;
        var activeItem = _state.activeItem;
        var activeTooltipCoord = _state.activeTooltipCoord;
  
        var viewBox = {
          x: offset.left,
          y: offset.top,
          width: offset.width,
          height: offset.height
        };
  
        return _react2.default.cloneElement(tooltipItem, {
          viewBox: viewBox,
          active: isTooltipActive,
          label: '',
          payload: this.getTooltipContent(activeItem && activeItem.payload, xAxis, yAxis, zAxis),
          coordinate: activeTooltipCoord
        });
      }
  
      /**
       * Draw grid
       * @param  {Object} xAxis  The configuration of x-axis
       * @param  {Object} yAxis  The configuration of y-axis
       * @param  {Object} offset The offset of main part in the svg element
       * @return {ReactElement} The instance of grid
       */
  
    }, {
      key: 'renderGrid',
      value: function renderGrid(xAxis, yAxis, offset) {
        var _props2 = this.props;
        var children = _props2.children;
        var width = _props2.width;
        var height = _props2.height;
  
        var gridItem = (0, _ReactUtils.findChildByType)(children, _CartesianGrid2.default);
  
        if (!gridItem) {
          return null;
        }
  
        var verticalPoints = (0, _CartesianUtils.getCoordinatesOfGrid)(_CartesianAxis2.default.getTicks(_extends({}, _CartesianAxis2.default.defaultProps, xAxis, {
          ticks: (0, _CartesianUtils.getTicksOfAxis)(xAxis, true),
          viewBox: { x: 0, y: 0, width: width, height: height }
        })), offset.left, offset.left + offset.width);
  
        var horizontalPoints = (0, _CartesianUtils.getCoordinatesOfGrid)(_CartesianAxis2.default.getTicks(_extends({}, _CartesianAxis2.default.defaultProps, yAxis, {
          ticks: (0, _CartesianUtils.getTicksOfAxis)(yAxis, true),
          viewBox: { x: 0, y: 0, width: width, height: height }
        })), offset.top, offset.top + offset.height);
  
        return _react2.default.cloneElement(gridItem, {
          key: 'grid',
          x: offset.left,
          y: offset.top,
          width: offset.width,
          height: offset.height,
          verticalPoints: verticalPoints,
          horizontalPoints: horizontalPoints
        });
      }
      /**
       * Draw legend
       * @param  {Array} items     The instances of Scatters
       * @return {ReactElement}    The instance of Legend
       */
  
    }, {
      key: 'renderLegend',
      value: function renderLegend(items) {
        var _props3 = this.props;
        var children = _props3.children;
        var width = _props3.width;
        var height = _props3.height;
        var margin = _props3.margin;
  
        var legendWidth = width - margin.left - margin.right;
        var legendHeight = height - margin.top - margin.bottom;
        var props = (0, _CartesianUtils.getLegendProps)(children, items, legendWidth, legendHeight);
  
        if (!props) {
          return null;
        }
  
        return _react2.default.createElement(_Legend2.default, _extends({}, props, {
          chartWidth: width,
          chartHeight: height,
          margin: margin
        }));
      }
  
      /**
       * Draw axis
       * @param {Object} axis     The configuration of axis
       * @param {String} layerKey The key of layer
       * @return {ReactElement}   The instance of axis
       */
  
    }, {
      key: 'renderAxis',
      value: function renderAxis(axis, layerKey) {
        var _props4 = this.props;
        var width = _props4.width;
        var height = _props4.height;
  
        if (axis && !axis.hide) {
          return _react2.default.createElement(_Layer2.default, { key: layerKey, className: layerKey }, _react2.default.createElement(_CartesianAxis2.default, _extends({}, axis, {
            viewBox: { x: 0, y: 0, width: width, height: height },
            ticks: (0, _CartesianUtils.getTicksOfAxis)(axis, true)
          })));
        }
  
        return null;
      }
    }, {
      key: 'renderCursor',
      value: function renderCursor(xAxis, yAxis, offset) {
        var children = this.props.children;
  
        var tooltipItem = (0, _ReactUtils.findChildByType)(children, _Tooltip2.default);
  
        if (!tooltipItem || !this.state.isTooltipActive) {
          return null;
        }
        var activeItem = this.state.activeItem;
  
        var cursorProps = _extends({
          fill: '#f1f1f1'
        }, (0, _ReactUtils.getPresentationAttributes)(tooltipItem.props.cursor), offset, {
          x: activeItem.cx,
          y: activeItem.cy,
          payload: activeItem
        });
  
        return _react2.default.isValidElement(tooltipItem.props.cursor) ? _react2.default.cloneElement(tooltipItem.props.cursor, cursorProps) : _react2.default.createElement(_Cross2.default, cursorProps);
      }
  
      /**
       * Draw the main part of scatter chart
       * @param  {Array} items   All the instance of Scatter
       * @param  {Object} xAxis  The configuration of all x-axis
       * @param  {Object} yAxis  The configuration of all y-axis
       * @param  {Object} zAxis  The configuration of all z-axis
       * @return {ReactComponent}  All the instances of Scatter
       */
  
    }, {
      key: 'renderItems',
      value: function renderItems(items, xAxis, yAxis, zAxis) {
        var _this2 = this;
  
        var activeGroupId = this.state.activeGroupId;
  
        return items.map(function (child, i) {
          var _child$props = child.props;
          var strokeWidth = _child$props.strokeWidth;
          var data = _child$props.data;
  
          var finalStrokeWidth = strokeWidth === +strokeWidth ? strokeWidth : 1;
          finalStrokeWidth = activeGroupId === 'scatter-' + i ? finalStrokeWidth + 2 : finalStrokeWidth;
  
          return _react2.default.cloneElement(child, {
            key: 'scatter-' + i,
            groupId: 'scatter-' + i,
            strokeWidth: finalStrokeWidth,
            onMouseLeave: _this2.handleScatterMouseLeave,
            onMouseEnter: _this2.handleScatterMouseEnter,
            points: _this2.getComposedData(child, data, xAxis, yAxis, zAxis)
          });
        }, this);
      }
    }, {
      key: 'renderReferenceElements',
      value: function renderReferenceElements(xAxis, yAxis, offset, isFront, Compt) {
        var children = this.props.children;
  
        var elements = (0, _ReactUtils.findAllByType)(children, Compt);
  
        if (!elements || !elements.length) {
          return null;
        }
  
        var keyPrefix = (0, _ReactUtils.getDisplayName)(Compt) + '-' + (isFront ? 'front' : 'back');
  
        return elements.filter(function (entry) {
          return isFront === entry.props.isFront;
        }).map(function (entry, i) {
          return _react2.default.cloneElement(entry, {
            key: keyPrefix + '-' + i,
            xAxis: xAxis, yAxis: yAxis,
            viewBox: {
              x: offset.left,
              y: offset.top,
              width: offset.width,
              height: offset.height
            }
          });
        });
      }
    }, {
      key: 'render',
      value: function render() {
        if (!(0, _ReactUtils.validateWidthHeight)(this)) {
          return null;
        }
  
        var _props5 = this.props;
        var style = _props5.style;
        var children = _props5.children;
        var className = _props5.className;
        var width = _props5.width;
        var height = _props5.height;
  
        var others = _objectWithoutProperties(_props5, ['style', 'children', 'className', 'width', 'height']);
  
        var items = (0, _ReactUtils.findAllByType)(children, _Scatter2.default);
        var zAxis = this.getZAxis(items);
        var xAxis = this.getAxis('xAxis', items);
        var yAxis = this.getAxis('yAxis', items);
  
        var offset = this.getOffset(items, xAxis, yAxis);
        xAxis = this.getFormatAxis(xAxis, offset, 'xAxis');
        yAxis = this.getFormatAxis(yAxis, offset, 'yAxis');
        var events = (0, _ReactUtils.filterEventAttributes)(this.props);
        var attrs = (0, _ReactUtils.getPresentationAttributes)(others);
  
        return _react2.default.createElement('div', _extends({
          className: (0, _classnames2.default)('recharts-wrapper', className),
          style: { position: 'relative', cursor: 'default', width: width, height: height }
        }, events), _react2.default.createElement(_Surface2.default, _extends({}, attrs, { width: width, height: height }), this.renderGrid(xAxis, yAxis, offset), this.renderReferenceElements(xAxis, yAxis, offset, false, _ReferenceArea2.default), this.renderReferenceElements(xAxis, yAxis, offset, false, _ReferenceLine2.default), this.renderReferenceElements(xAxis, yAxis, offset, false, _ReferenceDot2.default), this.renderAxis(xAxis, 'recharts-x-axis'), this.renderAxis(yAxis, 'recharts-y-axis'), this.renderCursor(xAxis, yAxis, offset), this.renderItems(items, xAxis, yAxis, zAxis, offset), this.renderReferenceElements(xAxis, yAxis, offset, true, _ReferenceArea2.default), this.renderReferenceElements(xAxis, yAxis, offset, true, _ReferenceLine2.default), this.renderReferenceElements(xAxis, yAxis, offset, true, _ReferenceDot2.default), (0, _ReactUtils.filterSvgElements)(children)), this.renderLegend(items), this.renderTooltip(items, xAxis, yAxis, zAxis, offset));
      }
    }]);
  
    return ScatterChart;
  }(_react.Component), _class2.displayName = 'ScatterChart', _class2.propTypes = {
    width: _react.PropTypes.number,
    height: _react.PropTypes.number,
    margin: _react.PropTypes.shape({
      top: _react.PropTypes.number,
      right: _react.PropTypes.number,
      bottom: _react.PropTypes.number,
      left: _react.PropTypes.number
    }),
    title: _react.PropTypes.string,
    style: _react.PropTypes.object,
    children: _react.PropTypes.oneOfType([_react.PropTypes.arrayOf(_react.PropTypes.node), _react.PropTypes.node]),
    className: _react.PropTypes.string
  }, _class2.defaultProps = {
    style: {},
    margin: { top: 5, right: 5, bottom: 5, left: 5 }
  }, _temp2)) || _class;
  
  exports.default = ScatterChart;

/***/ }),
/* 145 */
/***/ (function(module, exports, __webpack_require__) {

  'use strict';
  
  var _getPrototypeOf = __webpack_require__(29);
  
  var _getPrototypeOf2 = _interopRequireDefault2(_getPrototypeOf);
  
  var _setPrototypeOf = __webpack_require__(59);
  
  var _setPrototypeOf2 = _interopRequireDefault2(_setPrototypeOf);
  
  var _create = __webpack_require__(60);
  
  var _create2 = _interopRequireDefault2(_create);
  
  var _typeof2 = __webpack_require__(61);
  
  var _typeof3 = _interopRequireDefault2(_typeof2);
  
  var _from = __webpack_require__(81);
  
  var _from2 = _interopRequireDefault2(_from);
  
  var _defineProperty = __webpack_require__(62);
  
  var _defineProperty2 = _interopRequireDefault2(_defineProperty);
  
  var _assign = __webpack_require__(23);
  
  var _assign2 = _interopRequireDefault2(_assign);
  
  function _interopRequireDefault2(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.AreaChart = undefined;
  
  var _isFunction2 = __webpack_require__(69);
  
  var _isFunction3 = _interopRequireDefault(_isFunction2);
  
  var _isNil2 = __webpack_require__(132);
  
  var _isNil3 = _interopRequireDefault(_isNil2);
  
  var _extends = _assign2.default || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }return target;
  };
  
  var _createClass = function () {
    function defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;(0, _defineProperty2.default)(target, descriptor.key, descriptor);
      }
    }return function (Constructor, protoProps, staticProps) {
      if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
    };
  }();
  
  var _class, _class2, _temp; /**
                               * @fileOverview Area Chart
                               */
  
  var _react = __webpack_require__(11);
  
  var _react2 = _interopRequireDefault(_react);
  
  var _Layer = __webpack_require__(87);
  
  var _Layer2 = _interopRequireDefault(_Layer);
  
  var _Tooltip = __webpack_require__(82);
  
  var _Tooltip2 = _interopRequireDefault(_Tooltip);
  
  var _Dot = __webpack_require__(106);
  
  var _Dot2 = _interopRequireDefault(_Dot);
  
  var _Curve = __webpack_require__(90);
  
  var _Curve2 = _interopRequireDefault(_Curve);
  
  var _ReactUtils = __webpack_require__(64);
  
  var _CartesianUtils = __webpack_require__(134);
  
  var _generateCategoricalChart = __webpack_require__(133);
  
  var _generateCategoricalChart2 = _interopRequireDefault(_generateCategoricalChart);
  
  var _Area = __webpack_require__(125);
  
  var _Area2 = _interopRequireDefault(_Area);
  
  var _PureRender = __webpack_require__(72);
  
  var _PureRender2 = _interopRequireDefault(_PureRender);
  
  var _DataUtils = __webpack_require__(96);
  
  var _reactSmooth = __webpack_require__(84);
  
  var _reactSmooth2 = _interopRequireDefault(_reactSmooth);
  
  var _AnimationDecorator = __webpack_require__(94);
  
  var _AnimationDecorator2 = _interopRequireDefault(_AnimationDecorator);
  
  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
  }
  
  function _toConsumableArray(arr) {
    if (Array.isArray(arr)) {
      for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) {
        arr2[i] = arr[i];
      }return arr2;
    } else {
      return (0, _from2.default)(arr);
    }
  }
  
  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }
  
  function _possibleConstructorReturn(self, call) {
    if (!self) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }return call && ((typeof call === 'undefined' ? 'undefined' : (0, _typeof3.default)(call)) === "object" || typeof call === "function") ? call : self;
  }
  
  function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === 'undefined' ? 'undefined' : (0, _typeof3.default)(superClass)));
    }subClass.prototype = (0, _create2.default)(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) _setPrototypeOf2.default ? (0, _setPrototypeOf2.default)(subClass, superClass) : subClass.__proto__ = superClass;
  }
  
  var AreaChart = (0, _AnimationDecorator2.default)(_class = (0, _PureRender2.default)(_class = (_temp = _class2 = function (_Component) {
    _inherits(AreaChart, _Component);
  
    function AreaChart() {
      _classCallCheck(this, AreaChart);
  
      return _possibleConstructorReturn(this, (AreaChart.__proto__ || (0, _getPrototypeOf2.default)(AreaChart)).apply(this, arguments));
    }
  
    _createClass(AreaChart, [{
      key: 'getComposedData',
  
      /**
       * Compose the data of each area
       * @param  {Object} xAxis       The configuration of x-axis
       * @param  {Object} yAxis       The configuration of y-axis
       * @param  {String} dataKey     The unique key of a group
       * @param  {Array}  stackedData If the area is stacked,
       * the stackedData is an array of min value and max value
       * @return {Array} Composed data
       */
      value: function getComposedData(xAxis, yAxis, dataKey, stackedData) {
        var _props = this.props;
        var layout = _props.layout;
        var dataStartIndex = _props.dataStartIndex;
        var dataEndIndex = _props.dataEndIndex;
  
        var data = this.props.data.slice(dataStartIndex, dataEndIndex + 1);
        var xTicks = (0, _CartesianUtils.getTicksOfAxis)(xAxis);
        var yTicks = (0, _CartesianUtils.getTicksOfAxis)(yAxis);
        var bandSize = (0, _DataUtils.getBandSizeOfScale)(layout === 'horizontal' ? xAxis.scale : yAxis.scale);
        var hasStack = stackedData && stackedData.length;
        var baseValue = this.getBaseValue(xAxis, yAxis);
  
        var points = data.map(function (entry, index) {
          var value = hasStack ? stackedData[dataStartIndex + index] : [baseValue, entry[dataKey]];
  
          if (layout === 'horizontal') {
            return {
              x: xTicks[index].coordinate + bandSize / 2,
              y: (0, _isNil3.default)(value[1]) ? null : yAxis.scale(value[1]),
              value: value
            };
          }
  
          return {
            x: (0, _isNil3.default)(value[1]) ? null : xAxis.scale(value[1]),
            y: yTicks[index].coordinate + bandSize / 2,
            value: value
          };
        });
  
        var baseLine = void 0;
        if (hasStack) {
          baseLine = stackedData.slice(dataStartIndex, dataEndIndex + 1).map(function (entry, index) {
            return {
              x: layout === 'horizontal' ? xTicks[index].coordinate + bandSize / 2 : xAxis.scale(entry[0]),
              y: layout === 'horizontal' ? yAxis.scale(entry[0]) : yTicks[index].coordinate + bandSize / 2
            };
          });
        } else if (layout === 'horizontal') {
          baseLine = yAxis.scale(baseValue);
        } else {
          baseLine = xAxis.scale(baseValue);
        }
  
        return { points: points, baseLine: baseLine, layout: layout };
      }
    }, {
      key: 'getBaseValue',
      value: function getBaseValue(xAxis, yAxis) {
        var layout = this.props.layout;
  
        var numberAxis = layout === 'horizontal' ? yAxis : xAxis;
        var domain = numberAxis.scale.domain();
  
        if (numberAxis.type === 'number') {
          var max = Math.max(domain[0], domain[1]);
          return max < 0 ? max : Math.max(Math.min(domain[0], domain[1]), 0);
        }
  
        return domain[0];
      }
    }, {
      key: 'renderCursor',
      value: function renderCursor(xAxisMap, yAxisMap, offset) {
        var _props2 = this.props;
        var children = _props2.children;
        var isTooltipActive = _props2.isTooltipActive;
        var layout = _props2.layout;
        var activeTooltipIndex = _props2.activeTooltipIndex;
  
        var tooltipItem = (0, _ReactUtils.findChildByType)(children, _Tooltip2.default);
  
        if (!tooltipItem || !tooltipItem.props.cursor || !isTooltipActive || activeTooltipIndex < 0) {
          return null;
        }
  
        var axisMap = layout === 'horizontal' ? xAxisMap : yAxisMap;
        var axis = (0, _DataUtils.getAnyElementOfObject)(axisMap);
        var ticks = (0, _CartesianUtils.getTicksOfAxis)(axis);
  
        if (!ticks || !ticks[activeTooltipIndex]) {
          return null;
        }
  
        var start = ticks[activeTooltipIndex].coordinate;
        var x1 = layout === 'horizontal' ? start : offset.left;
        var y1 = layout === 'horizontal' ? offset.top : start;
        var x2 = layout === 'horizontal' ? start : offset.left + offset.width;
        var y2 = layout === 'horizontal' ? offset.top + offset.height : start;
        var cursorProps = _extends({
          stroke: '#ccc'
        }, (0, _ReactUtils.getPresentationAttributes)(tooltipItem.props.cursor), {
          points: [{ x: x1, y: y1 }, { x: x2, y: y2 }]
        });
  
        return _react2.default.isValidElement(tooltipItem.props.cursor) ? _react2.default.cloneElement(tooltipItem.props.cursor, cursorProps) : _react2.default.createElement(_Curve2.default, _extends({}, cursorProps, { type: 'linear', className: 'recharts-tooltip-cursor' }));
      }
    }, {
      key: 'renderActiveDot',
      value: function renderActiveDot(option, props) {
        var dot = void 0;
  
        if (_react2.default.isValidElement(option)) {
          dot = _react2.default.cloneElement(option, props);
        } else if ((0, _isFunction3.default)(option)) {
          dot = option(props);
        } else {
          dot = _react2.default.createElement(_Dot2.default, props);
        }
  
        return _react2.default.createElement(_reactSmooth2.default, {
          from: 'scale(0)',
          to: 'scale(1)',
          duration: 400,
          key: 'dot-' + props.dataKey,
          attributeName: 'transform'
        }, _react2.default.createElement(_Layer2.default, { style: { transformOrigin: 'center center' } }, dot));
      }
  
      /**
       * Draw the main part of area chart
       * @param  {Array} items     React elements of Area
       * @param  {Object} xAxisMap The configuration of all x-axis
       * @param  {Object} yAxisMap The configuration of all y-axis
       * @param  {Object} offset   The offset of main part in the svg element
       * @param  {Object} stackGroups The items grouped by axisId and stackId
       * @return {ReactComponent} The instances of Area
       */
  
    }, {
      key: 'renderItems',
      value: function renderItems(items, xAxisMap, yAxisMap, offset, stackGroups) {
        var _this2 = this;
  
        var _props3 = this.props;
        var children = _props3.children;
        var layout = _props3.layout;
        var isTooltipActive = _props3.isTooltipActive;
        var activeTooltipIndex = _props3.activeTooltipIndex;
  
        var tooltipItem = (0, _ReactUtils.findChildByType)(children, _Tooltip2.default);
        var hasDot = tooltipItem && isTooltipActive;
        var dotItems = [];
        var animationId = this.props.animationId;
  
        var areaItems = items.reduce(function (result, child, i) {
          var _child$props = child.props;
          var xAxisId = _child$props.xAxisId;
          var yAxisId = _child$props.yAxisId;
          var dataKey = _child$props.dataKey;
          var fillOpacity = _child$props.fillOpacity;
          var fill = _child$props.fill;
          var activeDot = _child$props.activeDot;
  
          var numericAxisId = layout === 'horizontal' ? yAxisId : xAxisId;
          var stackedData = stackGroups && stackGroups[numericAxisId] && stackGroups[numericAxisId].hasStack && (0, _CartesianUtils.getStackedDataOfItem)(child, stackGroups[numericAxisId].stackGroups);
          var composeData = _this2.getComposedData(xAxisMap[xAxisId], yAxisMap[yAxisId], dataKey, stackedData);
          var activePoint = composeData.points && composeData.points[activeTooltipIndex];
  
          if (hasDot && activeDot && activePoint) {
            var dotProps = _extends({
              index: i,
              dataKey: dataKey,
              animationId: animationId,
              cx: activePoint.x, cy: activePoint.y, r: 4,
              fill: (0, _CartesianUtils.getMainColorOfGraphicItem)(child),
              strokeWidth: 2, stroke: '#fff'
            }, (0, _ReactUtils.getPresentationAttributes)(activeDot));
            dotItems.push(_react2.default.createElement(_Layer2.default, { key: 'dot-' + dataKey }, _this2.renderActiveDot(activeDot, dotProps)));
          }
  
          var area = _react2.default.cloneElement(child, _extends({
            key: 'area-' + i
          }, offset, composeData, {
            animationId: animationId,
            layout: layout
          }));
  
          return [].concat(_toConsumableArray(result), [area]);
        }, []);
  
        return _react2.default.createElement(_Layer2.default, { className: 'recharts-area-chart-group' }, _react2.default.createElement(_Layer2.default, { className: 'recharts-area-chart-shapes' }, areaItems), _react2.default.createElement(_Layer2.default, { className: 'recharts-area-chart-dots' }, dotItems));
      }
    }, {
      key: 'render',
      value: function render() {
        var _props4 = this.props;
        var isComposed = _props4.isComposed;
        var graphicalItems = _props4.graphicalItems;
        var xAxisMap = _props4.xAxisMap;
        var yAxisMap = _props4.yAxisMap;
        var offset = _props4.offset;
        var stackGroups = _props4.stackGroups;
  
        return _react2.default.createElement(_Layer2.default, { className: 'recharts-area-graphical' }, !isComposed && this.renderCursor(xAxisMap, yAxisMap, offset), this.renderItems(graphicalItems, xAxisMap, yAxisMap, offset, stackGroups));
      }
    }]);
  
    return AreaChart;
  }(_react.Component), _class2.displayName = 'AreaChart', _class2.propTypes = {
    layout: _react.PropTypes.oneOf(['horizontal', 'vertical']),
    dataStartIndex: _react.PropTypes.number,
    dataEndIndex: _react.PropTypes.number,
    data: _react.PropTypes.array,
    isTooltipActive: _react.PropTypes.bool,
    activeTooltipIndex: _react.PropTypes.number,
    xAxisMap: _react.PropTypes.object,
    yAxisMap: _react.PropTypes.object,
    offset: _react.PropTypes.object,
    graphicalItems: _react.PropTypes.array,
    children: _react.PropTypes.oneOfType([_react.PropTypes.arrayOf(_react.PropTypes.node), _react.PropTypes.node]),
    stackGroups: _react.PropTypes.object,
    // used internally
    isComposed: _react.PropTypes.bool,
    animationId: _react.PropTypes.number
  }, _temp)) || _class) || _class;
  
  exports.default = (0, _generateCategoricalChart2.default)(AreaChart, _Area2.default);
  exports.AreaChart = AreaChart;

/***/ }),
/* 146 */
/***/ (function(module, exports, __webpack_require__) {

  'use strict';
  
  var _getPrototypeOf = __webpack_require__(29);
  
  var _getPrototypeOf2 = _interopRequireDefault2(_getPrototypeOf);
  
  var _setPrototypeOf = __webpack_require__(59);
  
  var _setPrototypeOf2 = _interopRequireDefault2(_setPrototypeOf);
  
  var _create = __webpack_require__(60);
  
  var _create2 = _interopRequireDefault2(_create);
  
  var _typeof2 = __webpack_require__(61);
  
  var _typeof3 = _interopRequireDefault2(_typeof2);
  
  var _defineProperty2 = __webpack_require__(62);
  
  var _defineProperty3 = _interopRequireDefault2(_defineProperty2);
  
  var _assign = __webpack_require__(23);
  
  var _assign2 = _interopRequireDefault2(_assign);
  
  function _interopRequireDefault2(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  
  var _range2 = __webpack_require__(116);
  
  var _range3 = _interopRequireDefault(_range2);
  
  var _extends = _assign2.default || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }return target;
  };
  
  var _createClass = function () {
    function defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;(0, _defineProperty3.default)(target, descriptor.key, descriptor);
      }
    }return function (Constructor, protoProps, staticProps) {
      if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
    };
  }();
  
  var _class, _class2, _temp2; /**
                                * @fileOverview Radar Bar Chart
                                */
  
  var _react = __webpack_require__(11);
  
  var _react2 = _interopRequireDefault(_react);
  
  var _classnames = __webpack_require__(46);
  
  var _classnames2 = _interopRequireDefault(_classnames);
  
  var _d3Scale = __webpack_require__(117);
  
  var _Surface = __webpack_require__(63);
  
  var _Surface2 = _interopRequireDefault(_Surface);
  
  var _RadialBar = __webpack_require__(113);
  
  var _RadialBar2 = _interopRequireDefault(_RadialBar);
  
  var _DataUtils = __webpack_require__(96);
  
  var _Cell = __webpack_require__(95);
  
  var _Cell2 = _interopRequireDefault(_Cell);
  
  var _Legend = __webpack_require__(71);
  
  var _Legend2 = _interopRequireDefault(_Legend);
  
  var _Tooltip = __webpack_require__(82);
  
  var _Tooltip2 = _interopRequireDefault(_Tooltip);
  
  var _ReactUtils = __webpack_require__(64);
  
  var _PolarUtils = __webpack_require__(89);
  
  var _PureRender = __webpack_require__(72);
  
  var _PureRender2 = _interopRequireDefault(_PureRender);
  
  var _AnimationDecorator = __webpack_require__(94);
  
  var _AnimationDecorator2 = _interopRequireDefault(_AnimationDecorator);
  
  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
  }
  
  function _objectWithoutProperties(obj, keys) {
    var target = {};for (var i in obj) {
      if (keys.indexOf(i) >= 0) continue;if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;target[i] = obj[i];
    }return target;
  }
  
  function _defineProperty(obj, key, value) {
    if (key in obj) {
      (0, _defineProperty3.default)(obj, key, { value: value, enumerable: true, configurable: true, writable: true });
    } else {
      obj[key] = value;
    }return obj;
  }
  
  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }
  
  function _possibleConstructorReturn(self, call) {
    if (!self) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }return call && ((typeof call === 'undefined' ? 'undefined' : (0, _typeof3.default)(call)) === "object" || typeof call === "function") ? call : self;
  }
  
  function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === 'undefined' ? 'undefined' : (0, _typeof3.default)(superClass)));
    }subClass.prototype = (0, _create2.default)(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) _setPrototypeOf2.default ? (0, _setPrototypeOf2.default)(subClass, superClass) : subClass.__proto__ = superClass;
  }
  
  var RadialBarChart = (0, _PureRender2.default)(_class = (_temp2 = _class2 = function (_Component) {
    _inherits(RadialBarChart, _Component);
  
    function RadialBarChart() {
      var _ref;
  
      var _temp, _this, _ret;
  
      _classCallCheck(this, RadialBarChart);
  
      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }
  
      return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = RadialBarChart.__proto__ || (0, _getPrototypeOf2.default)(RadialBarChart)).call.apply(_ref, [this].concat(args))), _this), _this.state = _this.createDefaultState(), _this.handleMouseEnter = function (el, index, e) {
        var _this$props = _this.props;
        var children = _this$props.children;
        var onMouseEnter = _this$props.onMouseEnter;
        var cx = el.cx;
        var cy = el.cy;
        var endAngle = el.endAngle;
        var outerRadius = el.outerRadius;
  
        var tooltipItem = (0, _ReactUtils.findChildByType)(children, _Tooltip2.default);
  
        if (tooltipItem) {
          _this.setState({
            isTooltipActive: true,
            activeTooltipCoord: (0, _PolarUtils.polarToCartesian)(cx, cy, outerRadius, endAngle),
            activeTooltipPayload: [el.payload]
          }, function () {
            if (onMouseEnter) {
              onMouseEnter(el, index, e);
            }
          });
        } else if (onMouseEnter) {
          onMouseEnter(el, index, e);
        }
      }, _this.handleMouseLeave = function (el, index, e) {
        var _this$props2 = _this.props;
        var children = _this$props2.children;
        var onMouseLeave = _this$props2.onMouseLeave;
  
        var tooltipItem = (0, _ReactUtils.findChildByType)(children, _Tooltip2.default);
  
        if (tooltipItem) {
          _this.setState({
            isTooltipActive: false
          }, function () {
            if (onMouseLeave) {
              onMouseLeave(el, index, e);
            }
          });
        } else if (onMouseLeave) {
          onMouseLeave(el, index, e);
        }
      }, _temp), _possibleConstructorReturn(_this, _ret);
    }
  
    _createClass(RadialBarChart, [{
      key: 'componentWillReceiveProps',
      value: function componentWillReceiveProps(nextProps) {
        if (nextProps.data !== this.props.data) {
          this.setState(this.createDefaultState());
        }
      }
      /**
       * Compose the data of each group
       * @param  {Object} item        An instance of RadialBar
       * @param  {Array}  barPosition The offset and size of each bar
       * @param  {Object} radiusScale The scale function of radius of bars
       * @param  {Object} center      The coordinate of center
       * @param  {String} dataKey     The unique key of a group
       * @return {Array}              Composed data
       */
  
    }, {
      key: 'getComposedData',
      value: function getComposedData(item, barPosition, radiusScale, center, dataKey) {
        var data = this.props.data;
  
        var pos = barPosition[dataKey];
        var cells = (0, _ReactUtils.findAllByType)(item.props.children, _Cell2.default);
  
        return data.map(function (entry, index) {
          var value = entry[dataKey];
          var radius = radiusScale(index);
  
          return _extends({}, entry, center, {
            value: value,
            innerRadius: radius - pos.offset,
            outerRadius: radius - pos.offset + pos.radius
          }, cells && cells[index] && cells[index].props);
        });
      }
      /**
       * Calculate the size of all groups
       * @param  {Array} items All the instance of RadialBar
       * @return {Object} The size of all groups
       */
  
    }, {
      key: 'getRadiusList',
      value: function getRadiusList(items) {
        var barSize = this.props.barSize;
  
        return items.map(function (child) {
          return _extends({}, child.props, {
            barSize: child.props.barSize || barSize
          });
        });
      }
  
      /**
       * Calculate the scale function of radius
       * @param {Number} innerRadius The outer radius
       * @param {Number} outerRadius The inner radius
       * @return {Object}            A scale function
       */
  
    }, {
      key: 'getRadiusScale',
      value: function getRadiusScale(innerRadius, outerRadius) {
        var data = this.props.data;
  
        var bandCount = Math.max(data.length, 1);
        var range = [outerRadius, innerRadius];
        var scale = (0, _d3Scale.scaleBand)().domain((0, _range3.default)(0, bandCount)).range(range);
  
        return scale;
      }
  
      /**
       * Calculate the size of each bar and the gap between two bars
       * @param  {Number} bandRadius  The radius of each category
       * @param  {Array} radiusList   The radius of all groups
       * @return {Number} The size of each bar and the gap between two bars
       */
  
    }, {
      key: 'getBarPosition',
      value: function getBarPosition(bandRadius, radiusList) {
        var _props = this.props;
        var barGap = _props.barGap;
        var barCategoryGap = _props.barCategoryGap;
  
        var len = radiusList.length;
        var result = void 0;
  
        // whether or not is barSize setted by user
        if (len && radiusList[0].barSize === +radiusList[0].barSize) {
          (function () {
            var sum = radiusList.reduce(function (res, entry) {
              return res + entry.barSize;
            }, 0);
            sum += (len - 1) * barGap;
            var offset = -sum / 2 >> 0;
            var prev = { offset: offset - barGap, radius: 0 };
  
            result = radiusList.reduce(function (res, entry) {
              prev = {
                offset: prev.offset + prev.radius + barGap,
                radius: entry.barSize
              };
  
              return _extends({}, res, _defineProperty({}, entry.dataKey, prev));
            }, {});
          })();
        } else {
          (function () {
            var offset = (0, _DataUtils.getPercentValue)(barCategoryGap, bandRadius);
            var radius = (bandRadius - 2 * offset - (len - 1) * barGap) / len >> 0;
            offset = -Math.max((radius * len + (len - 1) * barGap) / 2 >> 0, 0);
  
            result = radiusList.reduce(function (res, entry, i) {
              return _extends({}, res, _defineProperty({}, entry.dataKey, {
                offset: offset + (radius + barGap) * i,
                radius: radius
              }));
            }, {});
          })();
        }
  
        return result;
      }
      /**
       * Returns default, reset state for the radial bar chart.
       * @return {Object} Whole new state
       */
  
    }, {
      key: 'createDefaultState',
      value: function createDefaultState() {
        return {
          activeTooltipLabel: '',
          activeTooltipPayload: [],
          activeTooltipCoord: { x: 0, y: 0 },
          isTooltipActive: false
        };
      }
    }, {
      key: 'renderLegend',
  
      /**
       * Draw legend
       * @param  {ReactElement} legendItem The instance of Legend
       * @return {ReactElement}            The instance of Legend
       */
      value: function renderLegend() {
        var children = this.props.children;
  
        var legendItem = (0, _ReactUtils.findChildByType)(children, _Legend2.default);
        if (!legendItem) {
          return null;
        }
  
        var _props2 = this.props;
        var data = _props2.data;
        var width = _props2.width;
        var height = _props2.height;
        var margin = _props2.margin;
  
        var legendData = legendItem.props && legendItem.props.payload || data.map(function (entry) {
          return {
            type: 'square',
            color: entry.fill || '#000',
            value: entry.name
          };
        });
  
        return _react2.default.cloneElement(legendItem, _extends({}, _Legend2.default.getWithHeight(legendItem, width, height), {
          payload: legendData,
          chartWidth: width,
          chartHeight: height,
          margin: margin
        }));
      }
    }, {
      key: 'renderTooltip',
      value: function renderTooltip() {
        var children = this.props.children;
  
        var tooltipItem = (0, _ReactUtils.findChildByType)(children, _Tooltip2.default);
  
        if (!tooltipItem) {
          return null;
        }
  
        var _props3 = this.props;
        var width = _props3.width;
        var height = _props3.height;
        var _state = this.state;
        var isTooltipActive = _state.isTooltipActive;
        var activeTooltipLabel = _state.activeTooltipLabel;
        var activeTooltipCoord = _state.activeTooltipCoord;
        var activeTooltipPayload = _state.activeTooltipPayload;
  
        var viewBox = { x: 0, y: 0, width: width, height: height };
  
        return _react2.default.cloneElement(tooltipItem, {
          viewBox: viewBox,
          active: isTooltipActive,
          label: activeTooltipLabel,
          payload: activeTooltipPayload,
          coordinate: activeTooltipCoord
        });
      }
  
      /**
       * Draw the main part of bar chart
       * @param  {Array} items     All the instance of RadialBar
       * @param  {Object} radiusScale The scale function of radius of bars
       * @param  {Object} center      The coordinate of center
       * @return {ReactComponent}  All the instances of RadialBar
       */
  
    }, {
      key: 'renderItems',
      value: function renderItems(items, radiusScale, center) {
        var _this2 = this;
  
        if (!items || !items.length) {
          return null;
        }
  
        var onClick = this.props.onClick;
  
        var radiusList = this.getRadiusList(items);
        var bandRadius = radiusScale.bandwidth();
        var barPosition = this.getBarPosition(bandRadius, radiusList);
  
        return items.map(function (child, i) {
          var dataKey = child.props.dataKey;
  
          return _react2.default.cloneElement(child, _extends({}, center, {
            key: 'radial-bar-' + i,
            onMouseEnter: _this2.handleMouseEnter,
            onMouseLeave: _this2.handleMouseLeave,
            onClick: onClick,
            data: _this2.getComposedData(child, barPosition, radiusScale, center, dataKey)
          }));
        }, this);
      }
    }, {
      key: 'render',
      value: function render() {
        var data = this.props.data;
  
        if (!(0, _ReactUtils.validateWidthHeight)(this) || !data || !data.length) {
          return null;
        }
  
        var _props4 = this.props;
        var style = _props4.style;
        var children = _props4.children;
        var className = _props4.className;
        var width = _props4.width;
        var height = _props4.height;
        var margin = _props4.margin;
  
        var others = _objectWithoutProperties(_props4, ['style', 'children', 'className', 'width', 'height', 'margin']);
  
        var items = (0, _ReactUtils.findAllByType)(children, _RadialBar2.default);
        var cx = (0, _DataUtils.getPercentValue)(this.props.cx, width, width / 2);
        var cy = (0, _DataUtils.getPercentValue)(this.props.cy, height, height / 2);
        var maxRadius = (0, _PolarUtils.getMaxRadius)(width, height, margin);
        var innerRadius = (0, _DataUtils.getPercentValue)(this.props.innerRadius, maxRadius, 0);
        var outerRadius = (0, _DataUtils.getPercentValue)(this.props.outerRadius, maxRadius, maxRadius * 0.8);
        var radiusScale = this.getRadiusScale(innerRadius, outerRadius);
        var attrs = (0, _ReactUtils.getPresentationAttributes)(others);
  
        return _react2.default.createElement('div', {
          className: (0, _classnames2.default)('recharts-wrapper', className),
          style: _extends({}, style, { cursor: 'default', position: 'relative', width: width, height: height })
        }, _react2.default.createElement(_Surface2.default, _extends({}, attrs, { width: width, height: height }), this.renderItems(items, radiusScale, { cx: cx, cy: cy }), (0, _ReactUtils.filterSvgElements)(children)), this.renderLegend(), this.renderTooltip(items));
      }
    }]);
  
    return RadialBarChart;
  }(_react.Component), _class2.displayName = 'RadialBarChart', _class2.propTypes = {
    width: _react.PropTypes.number,
    height: _react.PropTypes.number,
    margin: _react.PropTypes.shape({
      top: _react.PropTypes.number,
      right: _react.PropTypes.number,
      bottom: _react.PropTypes.number,
      left: _react.PropTypes.number
    }),
    cy: _react.PropTypes.oneOfType([_react.PropTypes.number, _react.PropTypes.string]),
    cx: _react.PropTypes.oneOfType([_react.PropTypes.number, _react.PropTypes.string]),
  
    data: _react.PropTypes.array,
    innerRadius: _react.PropTypes.oneOfType([_react.PropTypes.number, _react.PropTypes.string]),
    outerRadius: _react.PropTypes.oneOfType([_react.PropTypes.number, _react.PropTypes.string]),
    // The offset radius between two categorys
    barCategoryGap: _react.PropTypes.oneOfType([_react.PropTypes.number, _react.PropTypes.string]),
    // The gap radius of two radial bar in one category
    barGap: _react.PropTypes.number,
    // The radius of each radial bar
    barSize: _react.PropTypes.number,
    title: _react.PropTypes.string,
    style: _react.PropTypes.object,
    onMouseEnter: _react.PropTypes.func,
    onMouseLeave: _react.PropTypes.func,
    onClick: _react.PropTypes.func,
    children: _react.PropTypes.oneOfType([_react.PropTypes.arrayOf(_react.PropTypes.node), _react.PropTypes.node]),
    className: _react.PropTypes.string
  }, _class2.defaultProps = {
    cx: '50%',
    cy: '50%',
    innerRadius: '30%',
    outerRadius: '90%',
    barGap: 2,
    barCategoryGap: '10%',
    style: {},
    margin: { top: 0, right: 0, bottom: 0, left: 0 }
  }, _temp2)) || _class;
  
  exports.default = RadialBarChart;

/***/ }),
/* 147 */
/***/ (function(module, exports, __webpack_require__) {

  'use strict';
  
  var _getPrototypeOf = __webpack_require__(29);
  
  var _getPrototypeOf2 = _interopRequireDefault2(_getPrototypeOf);
  
  var _setPrototypeOf = __webpack_require__(59);
  
  var _setPrototypeOf2 = _interopRequireDefault2(_setPrototypeOf);
  
  var _create = __webpack_require__(60);
  
  var _create2 = _interopRequireDefault2(_create);
  
  var _typeof2 = __webpack_require__(61);
  
  var _typeof3 = _interopRequireDefault2(_typeof2);
  
  var _defineProperty = __webpack_require__(62);
  
  var _defineProperty2 = _interopRequireDefault2(_defineProperty);
  
  var _assign = __webpack_require__(23);
  
  var _assign2 = _interopRequireDefault2(_assign);
  
  function _interopRequireDefault2(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  
  var _extends = _assign2.default || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }return target;
  };
  
  var _createClass = function () {
    function defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;(0, _defineProperty2.default)(target, descriptor.key, descriptor);
      }
    }return function (Constructor, protoProps, staticProps) {
      if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
    };
  }();
  
  var _class, _class2, _temp; /**
                               * @fileOverview Composed Chart
                               */
  
  var _react = __webpack_require__(11);
  
  var _react2 = _interopRequireDefault(_react);
  
  var _classnames = __webpack_require__(46);
  
  var _classnames2 = _interopRequireDefault(_classnames);
  
  var _Surface = __webpack_require__(63);
  
  var _Surface2 = _interopRequireDefault(_Surface);
  
  var _Layer = __webpack_require__(87);
  
  var _Layer2 = _interopRequireDefault(_Layer);
  
  var _Tooltip = __webpack_require__(82);
  
  var _Tooltip2 = _interopRequireDefault(_Tooltip);
  
  var _Line = __webpack_require__(124);
  
  var _Line2 = _interopRequireDefault(_Line);
  
  var _Bar = __webpack_require__(126);
  
  var _Bar2 = _interopRequireDefault(_Bar);
  
  var _Area = __webpack_require__(125);
  
  var _Area2 = _interopRequireDefault(_Area);
  
  var _Curve = __webpack_require__(90);
  
  var _Curve2 = _interopRequireDefault(_Curve);
  
  var _Dot = __webpack_require__(106);
  
  var _Dot2 = _interopRequireDefault(_Dot);
  
  var _Rectangle = __webpack_require__(103);
  
  var _Rectangle2 = _interopRequireDefault(_Rectangle);
  
  var _generateCategoricalChart = __webpack_require__(133);
  
  var _generateCategoricalChart2 = _interopRequireDefault(_generateCategoricalChart);
  
  var _DataUtils = __webpack_require__(96);
  
  var _ReactUtils = __webpack_require__(64);
  
  var _PureRender = __webpack_require__(72);
  
  var _PureRender2 = _interopRequireDefault(_PureRender);
  
  var _CartesianUtils = __webpack_require__(134);
  
  var _AreaChart = __webpack_require__(145);
  
  var _LineChart = __webpack_require__(131);
  
  var _BarChart = __webpack_require__(138);
  
  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
  }
  
  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }
  
  function _possibleConstructorReturn(self, call) {
    if (!self) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }return call && ((typeof call === "undefined" ? "undefined" : (0, _typeof3.default)(call)) === "object" || typeof call === "function") ? call : self;
  }
  
  function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : (0, _typeof3.default)(superClass)));
    }subClass.prototype = (0, _create2.default)(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) _setPrototypeOf2.default ? (0, _setPrototypeOf2.default)(subClass, superClass) : subClass.__proto__ = superClass;
  }
  
  var ComposedChart = (0, _PureRender2.default)(_class = (_temp = _class2 = function (_Component) {
    _inherits(ComposedChart, _Component);
  
    function ComposedChart() {
      _classCallCheck(this, ComposedChart);
  
      return _possibleConstructorReturn(this, (ComposedChart.__proto__ || (0, _getPrototypeOf2.default)(ComposedChart)).apply(this, arguments));
    }
  
    _createClass(ComposedChart, [{
      key: 'renderCursor',
      value: function renderCursor(xAxisMap, yAxisMap, offset) {
        var _props = this.props;
        var children = _props.children;
        var isTooltipActive = _props.isTooltipActive;
        var layout = _props.layout;
        var activeTooltipIndex = _props.activeTooltipIndex;
  
        var tooltipItem = (0, _ReactUtils.findChildByType)(children, _Tooltip2.default);
        if (!tooltipItem || !tooltipItem.props.cursor || !isTooltipActive || activeTooltipIndex < 0) {
          return null;
        }
  
        var axisMap = layout === 'horizontal' ? xAxisMap : yAxisMap;
        var axis = (0, _DataUtils.getAnyElementOfObject)(axisMap);
        var ticks = (0, _CartesianUtils.getTicksOfAxis)(axis);
  
        if (!ticks || !ticks[activeTooltipIndex]) {
          return null;
        }
  
        var bandSize = (0, _DataUtils.getBandSizeOfScale)(axis.scale);
        var start = ticks[activeTooltipIndex].coordinate;
        var cursorProps = _extends({
          fill: '#f1f1f1'
        }, (0, _ReactUtils.getPresentationAttributes)(tooltipItem.props.cursor), {
          x: layout === 'horizontal' ? start : offset.left + 0.5,
          y: layout === 'horizontal' ? offset.top + 0.5 : start,
          width: layout === 'horizontal' ? bandSize : offset.width - 1,
          height: layout === 'horizontal' ? offset.height - 1 : bandSize
        });
  
        return _react2.default.isValidElement(tooltipItem.props.cursor) ? _react2.default.cloneElement(tooltipItem.props.cursor, cursorProps) : _react2.default.createElement(_Rectangle2.default, cursorProps);
      }
    }, {
      key: 'render',
      value: function render() {
        var _props2 = this.props;
        var xAxisMap = _props2.xAxisMap;
        var yAxisMap = _props2.yAxisMap;
        var offset = _props2.offset;
        var graphicalItems = _props2.graphicalItems;
        var stackGroups = _props2.stackGroups;
  
        var areaItems = graphicalItems.filter(function (item) {
          return item.type.displayName === 'Area';
        });
        var lineItems = graphicalItems.filter(function (item) {
          return item.type.displayName === 'Line';
        });
        var barItems = graphicalItems.filter(function (item) {
          return item.type.displayName === 'Bar';
        });
  
        return _react2.default.createElement(_Layer2.default, { className: 'recharts-composed' }, this.renderCursor(xAxisMap, yAxisMap, offset), _react2.default.createElement(_AreaChart.AreaChart, _extends({}, this.props, { graphicalItems: areaItems, isComposed: true })), _react2.default.createElement(_BarChart.BarChart, _extends({}, this.props, { graphicalItems: barItems, isComposed: true })), _react2.default.createElement(_LineChart.LineChart, _extends({}, this.props, { graphicalItems: lineItems, isComposed: true })));
      }
    }]);
  
    return ComposedChart;
  }(_react.Component), _class2.displayName = 'ComposedChart', _class2.propTypes = {
    layout: _react.PropTypes.oneOf(['horizontal', 'vertical']),
    dataStartIndex: _react.PropTypes.number,
    dataEndIndex: _react.PropTypes.number,
    isTooltipActive: _react.PropTypes.bool,
    activeTooltipIndex: _react.PropTypes.number,
    xAxisMap: _react.PropTypes.object,
    yAxisMap: _react.PropTypes.object,
    offset: _react.PropTypes.object,
    graphicalItems: _react.PropTypes.array,
    stackGroups: _react.PropTypes.object,
    children: _react.PropTypes.oneOfType([_react.PropTypes.arrayOf(_react.PropTypes.node), _react.PropTypes.node])
  }, _temp)) || _class;
  
  exports.default = (0, _generateCategoricalChart2.default)(ComposedChart, [_Line2.default, _Area2.default, _Bar2.default]);

/***/ }),
/* 148 */
/***/ (function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  
  var _react = __webpack_require__(11);
  
  var _react2 = _interopRequireDefault(_react);
  
  var _Login = __webpack_require__(149);
  
  var _Login2 = _interopRequireDefault(_Login);
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  /**
   * React Starter Kit (https://www.reactstarterkit.com/)
   *
   * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE.txt file in the root directory of this source tree.
   */
  
  exports.default = {
  
    path: '/',
  
    action: function action() {
      return _react2.default.createElement(_Login2.default, null);
    }
  };
  // import App from '../../components/App';

/***/ }),
/* 149 */
/***/ (function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  
  var _react = __webpack_require__(11);
  
  var _react2 = _interopRequireDefault(_react);
  
  var _Button = __webpack_require__(150);
  
  var _Button2 = _interopRequireDefault(_Button);
  
  var _Panel = __webpack_require__(151);
  
  var _Panel2 = _interopRequireDefault(_Panel);
  
  var _reactBootstrap = __webpack_require__(38);
  
  var _withStyles = __webpack_require__(18);
  
  var _withStyles2 = _interopRequireDefault(_withStyles);
  
  var _Login = __webpack_require__(152);
  
  var _Login2 = _interopRequireDefault(_Login);
  
  var _history = __webpack_require__(40);
  
  var _history2 = _interopRequireDefault(_history);
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  // import { Panel, Input, Button } from 'react-bootstrap';
  var title = 'Log In'; /**
                         * React Starter Kit (https://www.reactstarterkit.com/)
                         *
                         * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
                         *
                         * This source code is licensed under the MIT license found in the
                         * LICENSE.txt file in the root directory of this source tree.
                         */
  
  function submitHandler(e) {
    e.preventDefault();
    _history2.default.push('/');
  }
  
  function register() {}
  
  function Login(props, context) {
    context.setTitle(title);
    return _react2.default.createElement(
      'div',
      { className: 'col-md-6 col-md-offset-3' },
      _react2.default.createElement(
        'div',
        { className: 'text-center' },
        _react2.default.createElement(
          'h1',
          { className: 'login-brand-text' },
          'Club Connect'
        )
      ),
      _react2.default.createElement(
        _Panel2.default,
        { header: _react2.default.createElement(
            'h3',
            null,
            'Please Sign In'
          ) },
        _react2.default.createElement(
          'form',
          { role: 'form', onSubmit: function onSubmit(e) {
              submitHandler(e);
            } },
          _react2.default.createElement(
            'fieldset',
            null,
            _react2.default.createElement(
              'div',
              { className: 'form-group' },
              _react2.default.createElement(_reactBootstrap.FormControl, {
                type: 'email',
                className: 'form-control',
                placeholder: 'Email',
                name: 'email'
              })
            ),
            _react2.default.createElement(
              'div',
              { className: 'form-group' },
              _react2.default.createElement(_reactBootstrap.FormControl, {
                className: 'form-control',
                placeholder: 'Password',
                type: 'password',
                name: 'password'
              })
            ),
            _react2.default.createElement(
              _reactBootstrap.Checkbox,
              { label: 'Remember Me' },
              ' Remember Me '
            ),
            _react2.default.createElement(
              _Button2.default,
              { type: 'submit', bsSize: 'large', bsStyle: 'success', block: true },
              'Login'
            )
          )
        )
      ),
      _react2.default.createElement(
        _Panel2.default,
        { header: _react2.default.createElement(
            'h3',
            null,
            'Please Register Your Club'
          ) },
        _react2.default.createElement(
          'form',
          { id: 'register', action: '/createClub', method: 'post', onSubmit: function onSubmit(e) {
              submitHandler(e);
            } },
          _react2.default.createElement(
            'fieldset',
            null,
            _react2.default.createElement(
              'div',
              { className: 'form-group' },
              _react2.default.createElement(_reactBootstrap.FormControl, {
                type: 'text',
                className: 'form-control',
                placeholder: 'Name',
                name: 'name'
              })
            ),
            _react2.default.createElement(
              'div',
              { className: 'form-group' },
              _react2.default.createElement(_reactBootstrap.FormControl, {
                className: 'form-control',
                placeholder: 'Email',
                type: 'email',
                name: 'email'
              })
            ),
            _react2.default.createElement(
              'div',
              { className: 'form-group' },
              _react2.default.createElement(_reactBootstrap.FormControl, {
                className: 'form-control',
                placeholder: 'Password',
                type: 'password',
                name: 'password'
              })
            ),
            _react2.default.createElement(
              'div',
              { className: 'form-group' },
              _react2.default.createElement(_reactBootstrap.FormControl, {
                id: 'clubName',
                className: 'form-control',
                placeholder: 'Club Name',
                type: '',
                name: 'clubName'
              })
            ),
            _react2.default.createElement(
              'div',
              { className: 'form-group' },
              _react2.default.createElement(_reactBootstrap.FormControl, {
                className: 'form-control',
                placeholder: 'Type of Club',
                type: '',
                name: 'clubType'
              })
            ),
            _react2.default.createElement(
              'div',
              { className: 'form-group' },
              _react2.default.createElement(_reactBootstrap.FormControl, {
                className: 'form-control',
                placeholder: 'County',
                type: '',
                name: 'county'
              })
            ),
            _react2.default.createElement(
              'div',
              { className: 'form-group' },
              _react2.default.createElement(_reactBootstrap.FormControl, {
                className: 'form-control',
                placeholder: 'Town',
                type: '',
                name: 'town',
                isRequired: true
              })
            ),
            _react2.default.createElement(
              _Button2.default,
              { type: 'submit', bsSize: 'large', bsStyle: 'primary', block: true },
              'Register'
            )
          )
        )
      )
    );
  }
  
  Login.contextTypes = { setTitle: _react.PropTypes.func.isRequired };
  
  exports.default = (0, _withStyles2.default)(_Login2.default)(Login);

/***/ }),
/* 150 */
/***/ (function(module, exports) {

  module.exports = require("react-bootstrap/lib/Button");

/***/ }),
/* 151 */
/***/ (function(module, exports) {

  module.exports = require("react-bootstrap/lib/Panel");

/***/ }),
/* 152 */
/***/ (function(module, exports, __webpack_require__) {

  
      var content = __webpack_require__(153);
      var insertCss = __webpack_require__(22);
  
      if (typeof content === 'string') {
        content = [[module.id, content, '']];
      }
  
      module.exports = content.locals || {};
      module.exports._getCss = function() { return content.toString(); };
      module.exports._insertCss = function(options) { return insertCss(content, options) };
    
      // Hot Module Replacement
      // https://webpack.github.io/docs/hot-module-replacement
      // Only activated in browser context
      if (false) {
        var removeCss = function() {};
        module.hot.accept("!!../../../node_modules/css-loader/index.js?{\"sourceMap\":true,\"modules\":true,\"localIdentName\":\"[name]_[local]_[hash:base64:3]\",\"minimize\":false}!../../../node_modules/postcss-loader/index.js?pack=default!./Login.css", function() {
          content = require("!!../../../node_modules/css-loader/index.js?{\"sourceMap\":true,\"modules\":true,\"localIdentName\":\"[name]_[local]_[hash:base64:3]\",\"minimize\":false}!../../../node_modules/postcss-loader/index.js?pack=default!./Login.css");
  
          if (typeof content === 'string') {
            content = [[module.id, content, '']];
          }
  
          removeCss = insertCss(content, { replace: true });
        });
        module.hot.dispose(function() { removeCss(); });
      }
    

/***/ }),
/* 153 */
/***/ (function(module, exports, __webpack_require__) {

  exports = module.exports = __webpack_require__(21)();
  // imports
  
  
  // module
  exports.push([module.id, "/**\n * React Starter Kit (https://www.reactstarterkit.com/)\n *\n * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE.txt file in the root directory of this source tree.\n */\n/**\n * React Starter Kit (https://www.reactstarterkit.com/)\n *\n * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE.txt file in the root directory of this source tree.\n */\n:root {\n  /*\n   * Typography\n   * ======================================================================== */\n\n  /*\n   * Layout\n   * ======================================================================== */\n\n  /*\n   * Media queries breakpoints\n   * ======================================================================== */  /* Extra small screen / phone */  /* Small screen / tablet */  /* Medium screen / desktop */ /* Large screen / wide desktop */\n}\n.Login_root_rQN {\n  padding-left: 20px;\n  padding-right: 20px;\n}\n.Login_container_2BV {\n  margin: 0 auto;\n  padding: 0 0 40px;\n  max-width: 380px;\n}\n.Login_lead_1mJ {\n  font-size: 1.25em;\n}\n.Login_formGroup_25T {\n  margin-bottom: 15px;\n}\n.Login_label_2G0 {\n  display: inline-block;\n  margin-bottom: 5px;\n  max-width: 100%;\n  font-weight: 700;\n}\n.Login_input_1bT {\n  display: block;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  padding: 10px 16px;\n  width: 100%;\n  height: 46px;\n  outline: 0;\n  border: 1px solid #ccc;\n  border-radius: 0;\n  background: #fff;\n  -webkit-box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075);\n          box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075);\n  color: #616161;\n  font-size: 18px;\n  line-height: 1.3333333;\n  -webkit-transition: border-color ease-in-out 0.15s, -webkit-box-shadow ease-in-out 0.15s;\n  transition: border-color ease-in-out 0.15s, -webkit-box-shadow ease-in-out 0.15s;\n  -o-transition: border-color ease-in-out 0.15s, box-shadow ease-in-out 0.15s;\n  transition: border-color ease-in-out 0.15s, box-shadow ease-in-out 0.15s;\n  transition: border-color ease-in-out 0.15s, box-shadow ease-in-out 0.15s, -webkit-box-shadow ease-in-out 0.15s;\n}\n.Login_input_1bT:focus {\n  border-color: #0074c2;\n  -webkit-box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 8px rgba(0, 116, 194, 0.6);\n          box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 8px rgba(0, 116, 194, 0.6);\n}\n.Login_button_11e {\n  display: block;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  margin: 0;\n  padding: 10px 16px;\n  width: 100%;\n  outline: 0;\n  border: 1px solid #373277;\n  border-radius: 0;\n  background: #373277;\n  color: #fff;\n  text-align: center;\n  text-decoration: none;\n  font-size: 18px;\n  line-height: 1.3333333;\n  cursor: pointer;\n}\n.Login_button_11e:hover {\n  background: rgba(54, 50, 119, 0.8);\n}\n.Login_button_11e:focus {\n  border-color: #0074c2;\n  -webkit-box-shadow: 0 0 8px rgba(0, 116, 194, 0.6);\n          box-shadow: 0 0 8px rgba(0, 116, 194, 0.6);\n}\n.Login_facebook_2nZ {\n  border-color: #3b5998;\n  background: #3b5998;\n}\n.Login_facebook_2nZ:hover {\n  background: #2d4373;\n}\n.Login_google_23H {\n  border-color: #dd4b39;\n  background: #dd4b39;\n}\n.Login_google_23H:hover {\n  background: #c23321;\n}\n.Login_twitter_AJd {\n  border-color: #55acee;\n  background: #55acee;\n}\n.Login_twitter_AJd:hover {\n  background: #2795e9;\n}\n.Login_icon_34k {\n  display: inline-block;\n  margin: -2px 12px -2px 0;\n  width: 20px;\n  height: 20px;\n  vertical-align: middle;\n  fill: currentColor;\n}\n.Login_lineThrough_Upb {\n  position: relative;\n  z-index: 1;\n  display: block;\n  margin-bottom: 15px;\n  width: 100%;\n  color: #757575;\n  text-align: center;\n  font-size: 80%;\n}\n.Login_lineThrough_Upb::before {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  z-index: -1;\n  margin-top: -5px;\n  margin-left: -20px;\n  width: 40px;\n  height: 10px;\n  background-color: #fff;\n  content: '';\n}\n.Login_lineThrough_Upb::after {\n  position: absolute;\n  top: 49%;\n  z-index: -2;\n  display: block;\n  width: 100%;\n  border-bottom: 1px solid #ddd;\n  content: '';\n}\n", "", {"version":3,"sources":["/./routes/login/Login.css","/./components/variables.css"],"names":[],"mappings":"AAAA;;;;;;;GAOG;ACPH;;;;;;;GAOG;AAEH;EACE;;gFAE8E;;EAI9E;;gFAE8E;;EAI9E;;gFAE8E,EAErD,gCAAgC,EAChC,2BAA2B,EAC3B,6BAA6B,CAC7B,iCAAiC;CAC3D;ADpBD;EACE,mBAAmB;EACnB,oBAAoB;CACrB;AAED;EACE,eAAe;EACf,kBAAkB;EAClB,iBAAiB;CAClB;AAED;EACE,kBAAkB;CACnB;AAED;EACE,oBAAoB;CACrB;AAED;EACE,sBAAsB;EACtB,mBAAmB;EACnB,gBAAgB;EAChB,iBAAiB;CAClB;AAED;EACE,eAAe;EACf,+BAAuB;UAAvB,uBAAuB;EACvB,mBAAmB;EACnB,YAAY;EACZ,aAAa;EACb,WAAW;EACX,uBAAuB;EACvB,iBAAiB;EACjB,iBAAiB;EACjB,yDAAiD;UAAjD,iDAAiD;EACjD,eAAe;EACf,gBAAgB;EAChB,uBAAuB;EACvB,yFAAyE;EAAzE,iFAAyE;EAAzE,4EAAyE;EAAzE,yEAAyE;EAAzE,+GAAyE;CAC1E;AAED;EACE,sBAAsB;EACtB,yFAAiF;UAAjF,iFAAiF;CAClF;AAED;EACE,eAAe;EACf,+BAAuB;UAAvB,uBAAuB;EACvB,UAAU;EACV,mBAAmB;EACnB,YAAY;EACZ,WAAW;EACX,0BAA0B;EAC1B,iBAAiB;EACjB,oBAAoB;EACpB,YAAY;EACZ,mBAAmB;EACnB,sBAAsB;EACtB,gBAAgB;EAChB,uBAAuB;EACvB,gBAAgB;CACjB;AAED;EACE,mCAAmC;CACpC;AAED;EACE,sBAAsB;EACtB,mDAA2C;UAA3C,2CAA2C;CAC5C;AAED;EACE,sBAAsB;EACtB,oBAAoB;CAErB;AAED;EACE,oBAAoB;CACrB;AAED;EACE,sBAAsB;EACtB,oBAAoB;CAErB;AAED;EACE,oBAAoB;CACrB;AAED;EACE,sBAAsB;EACtB,oBAAoB;CAErB;AAED;EACE,oBAAoB;CACrB;AAED;EACE,sBAAsB;EACtB,yBAAyB;EACzB,YAAY;EACZ,aAAa;EACb,uBAAuB;EACvB,mBAAmB;CACpB;AAED;EACE,mBAAmB;EACnB,WAAW;EACX,eAAe;EACf,oBAAoB;EACpB,YAAY;EACZ,eAAe;EACf,mBAAmB;EACnB,eAAe;CAChB;AAED;EACE,mBAAmB;EACnB,SAAS;EACT,UAAU;EACV,YAAY;EACZ,iBAAiB;EACjB,mBAAmB;EACnB,YAAY;EACZ,aAAa;EACb,uBAAuB;EACvB,YAAY;CACb;AAED;EACE,mBAAmB;EACnB,SAAS;EACT,YAAY;EACZ,eAAe;EACf,YAAY;EACZ,8BAA8B;EAC9B,YAAY;CACb","file":"Login.css","sourcesContent":["/**\n * React Starter Kit (https://www.reactstarterkit.com/)\n *\n * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE.txt file in the root directory of this source tree.\n */\n@import '../../components/variables.css';\n\n.root {\n  padding-left: 20px;\n  padding-right: 20px;\n}\n\n.container {\n  margin: 0 auto;\n  padding: 0 0 40px;\n  max-width: 380px;\n}\n\n.lead {\n  font-size: 1.25em;\n}\n\n.formGroup {\n  margin-bottom: 15px;\n}\n\n.label {\n  display: inline-block;\n  margin-bottom: 5px;\n  max-width: 100%;\n  font-weight: 700;\n}\n\n.input {\n  display: block;\n  box-sizing: border-box;\n  padding: 10px 16px;\n  width: 100%;\n  height: 46px;\n  outline: 0;\n  border: 1px solid #ccc;\n  border-radius: 0;\n  background: #fff;\n  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075);\n  color: #616161;\n  font-size: 18px;\n  line-height: 1.3333333;\n  transition: border-color ease-in-out 0.15s, box-shadow ease-in-out 0.15s;\n}\n\n.input:focus {\n  border-color: #0074c2;\n  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 8px rgba(0, 116, 194, 0.6);\n}\n\n.button {\n  display: block;\n  box-sizing: border-box;\n  margin: 0;\n  padding: 10px 16px;\n  width: 100%;\n  outline: 0;\n  border: 1px solid #373277;\n  border-radius: 0;\n  background: #373277;\n  color: #fff;\n  text-align: center;\n  text-decoration: none;\n  font-size: 18px;\n  line-height: 1.3333333;\n  cursor: pointer;\n}\n\n.button:hover {\n  background: rgba(54, 50, 119, 0.8);\n}\n\n.button:focus {\n  border-color: #0074c2;\n  box-shadow: 0 0 8px rgba(0, 116, 194, 0.6);\n}\n\n.facebook {\n  border-color: #3b5998;\n  background: #3b5998;\n  composes: button;\n}\n\n.facebook:hover {\n  background: #2d4373;\n}\n\n.google {\n  border-color: #dd4b39;\n  background: #dd4b39;\n  composes: button;\n}\n\n.google:hover {\n  background: #c23321;\n}\n\n.twitter {\n  border-color: #55acee;\n  background: #55acee;\n  composes: button;\n}\n\n.twitter:hover {\n  background: #2795e9;\n}\n\n.icon {\n  display: inline-block;\n  margin: -2px 12px -2px 0;\n  width: 20px;\n  height: 20px;\n  vertical-align: middle;\n  fill: currentColor;\n}\n\n.lineThrough {\n  position: relative;\n  z-index: 1;\n  display: block;\n  margin-bottom: 15px;\n  width: 100%;\n  color: #757575;\n  text-align: center;\n  font-size: 80%;\n}\n\n.lineThrough::before {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  z-index: -1;\n  margin-top: -5px;\n  margin-left: -20px;\n  width: 40px;\n  height: 10px;\n  background-color: #fff;\n  content: '';\n}\n\n.lineThrough::after {\n  position: absolute;\n  top: 49%;\n  z-index: -2;\n  display: block;\n  width: 100%;\n  border-bottom: 1px solid #ddd;\n  content: '';\n}\n","/**\n * React Starter Kit (https://www.reactstarterkit.com/)\n *\n * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE.txt file in the root directory of this source tree.\n */\n\n:root {\n  /*\n   * Typography\n   * ======================================================================== */\n\n  --font-family-base: 'Segoe UI', 'HelveticaNeue-Light', sans-serif;\n\n  /*\n   * Layout\n   * ======================================================================== */\n\n  --max-content-width: 1000px;\n\n  /*\n   * Media queries breakpoints\n   * ======================================================================== */\n\n  --screen-xs-min: 480px;  /* Extra small screen / phone */\n  --screen-sm-min: 768px;  /* Small screen / tablet */\n  --screen-md-min: 992px;  /* Medium screen / desktop */\n  --screen-lg-min: 1200px; /* Large screen / wide desktop */\n}\n"],"sourceRoot":"webpack://"}]);
  
  // exports
  exports.locals = {
  	"root": "Login_root_rQN",
  	"container": "Login_container_2BV",
  	"lead": "Login_lead_1mJ",
  	"formGroup": "Login_formGroup_25T",
  	"label": "Login_label_2G0",
  	"input": "Login_input_1bT",
  	"button": "Login_button_11e",
  	"facebook": "Login_facebook_2nZ Login_button_11e",
  	"google": "Login_google_23H Login_button_11e",
  	"twitter": "Login_twitter_AJd Login_button_11e",
  	"icon": "Login_icon_34k",
  	"lineThrough": "Login_lineThrough_Upb"
  };

/***/ }),
/* 154 */
/***/ (function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  
  var _react = __webpack_require__(11);
  
  var _react2 = _interopRequireDefault(_react);
  
  var _Table = __webpack_require__(155);
  
  var _Table2 = _interopRequireDefault(_Table);
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  exports.default = {
  
    path: '/table',
  
    action: function action() {
      return _react2.default.createElement(_Table2.default, null);
    }
  };

/***/ }),
/* 155 */
/***/ (function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  
  var _react = __webpack_require__(11);
  
  var _react2 = _interopRequireDefault(_react);
  
  var _Button = __webpack_require__(150);
  
  var _Button2 = _interopRequireDefault(_Button);
  
  var _Panel = __webpack_require__(151);
  
  var _Panel2 = _interopRequireDefault(_Panel);
  
  var _Pagination = __webpack_require__(156);
  
  var _Pagination2 = _interopRequireDefault(_Pagination);
  
  var _PageHeader = __webpack_require__(157);
  
  var _PageHeader2 = _interopRequireDefault(_PageHeader);
  
  var _Well = __webpack_require__(158);
  
  var _Well2 = _interopRequireDefault(_Well);
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  var title = 'Table';
  
  function displayTable(props, context) {
    context.setTitle(title);
    return _react2.default.createElement(
      'div',
      null,
      _react2.default.createElement(
        'div',
        { className: 'col-lg-12' },
        _react2.default.createElement(
          _PageHeader2.default,
          null,
          'Tables'
        )
      ),
      _react2.default.createElement(
        'div',
        { className: 'col-lg-12' },
        _react2.default.createElement(
          _Panel2.default,
          { header: _react2.default.createElement(
              'span',
              null,
              'DataTables Advanced Tables'
            ) },
          _react2.default.createElement(
            'div',
            null,
            _react2.default.createElement(
              'div',
              { className: 'dataTable_wrapper' },
              _react2.default.createElement(
                'div',
                {
                  id: 'dataTables-example_wrapper',
                  className: 'dataTables_wrapper form-inline dt-bootstrap no-footer'
                },
                _react2.default.createElement(
                  'div',
                  { className: 'row' },
                  _react2.default.createElement(
                    'div',
                    { className: 'col-sm-9' },
                    _react2.default.createElement(
                      'div',
                      { className: 'dataTables_length', id: 'dataTables-example_length' },
                      _react2.default.createElement(
                        'label',
                        { htmlFor: 'show' },
                        ' Show',
                        _react2.default.createElement(
                          'select',
                          {
                            name: 'dataTables-example_length',
                            'aria-controls': 'dataTables-example',
                            className: 'form-control input-sm',
                            id: 'show'
                          },
                          _react2.default.createElement(
                            'option',
                            { value: '10' },
                            '10'
                          ),
                          _react2.default.createElement(
                            'option',
                            { value: '25' },
                            '25'
                          ),
                          _react2.default.createElement(
                            'option',
                            { value: '50' },
                            '50'
                          ),
                          _react2.default.createElement(
                            'option',
                            { value: '100' },
                            '100'
                          )
                        ),
                        'entries'
                      )
                    )
                  ),
                  _react2.default.createElement(
                    'div',
                    { className: 'col-sm-3' },
                    _react2.default.createElement(
                      'div',
                      { id: 'dataTables-example_filter', className: 'dataTables_filter' },
                      _react2.default.createElement(
                        'label',
                        { htmlFor: 'search' },
                        'Search:',
                        _react2.default.createElement('input', {
                          type: 'search',
                          className: 'form-control input-sm',
                          placeholder: '',
                          'aria-controls': 'dataTables-example',
                          id: 'search'
                        })
                      )
                    )
                  )
                ),
                _react2.default.createElement(
                  'div',
                  { className: 'row' },
                  _react2.default.createElement(
                    'div',
                    { className: 'col-sm-12' },
                    _react2.default.createElement(
                      'table',
                      {
                        className: 'table table-striped table-bordered table-hover dataTable no-footer',
                        id: 'dataTables-example',
                        role: 'grid',
                        'aria-describedby': 'dataTables-example_info'
                      },
                      _react2.default.createElement(
                        'thead',
                        null,
                        _react2.default.createElement(
                          'tr',
                          { role: 'row' },
                          _react2.default.createElement(
                            'th',
                            {
                              className: 'sorting_asc',
                              tabIndex: '0',
                              'aria-controls': 'dataTables-example',
                              rowSpan: '1',
                              colSpan: '1',
                              'aria-label': 'Rendering engine: activate to sort column descending',
                              'aria-sort': 'ascending',
                              style: { width: 265 }
                            },
                            'Rendering engine'
                          ),
                          _react2.default.createElement(
                            'th',
                            {
                              className: 'sorting',
                              tabIndex: '0',
                              'aria-controls': 'dataTables-example',
                              rowSpan: '1',
                              colSpan: '1',
                              'aria-label': 'Browser: activate to sort column ascending',
                              style: { width: 321 }
                            },
                            'Browser'
                          ),
                          _react2.default.createElement(
                            'th',
                            {
                              className: 'sorting',
                              tabIndex: '0',
                              'aria-controls': 'dataTables-example',
                              rowSpan: '1',
                              colSpan: '1',
                              'aria-label': 'Platform(s): activate to sort column ascending',
                              style: { width: 299 }
                            },
                            'Platform(s)'
                          ),
                          _react2.default.createElement(
                            'th',
                            {
                              className: 'sorting',
                              tabIndex: '0',
                              'aria-controls': 'dataTables-example',
                              rowSpan: '1',
                              colSpan: '1',
                              'aria-label': 'Engine version: activate to sort column ascending',
                              style: { width: 231 }
                            },
                            'Engine version'
                          ),
                          _react2.default.createElement(
                            'th',
                            {
                              className: 'sorting',
                              tabIndex: '0',
                              'aria-controls': 'dataTables-example',
                              rowSpan: '1',
                              colSpan: '1',
                              'aria-label': 'CSS grade: activate to sort column ascending',
                              style: { width: 180 }
                            },
                            'CSS grade'
                          )
                        )
                      ),
                      _react2.default.createElement(
                        'tbody',
                        null,
                        _react2.default.createElement(
                          'tr',
                          { className: 'gradeA odd', role: 'row' },
                          _react2.default.createElement(
                            'td',
                            { className: 'sorting_1' },
                            'Gecko'
                          ),
                          _react2.default.createElement(
                            'td',
                            null,
                            'Firefox 1.0'
                          ),
                          _react2.default.createElement(
                            'td',
                            null,
                            'Win 98+ / OSX.2+'
                          ),
                          _react2.default.createElement(
                            'td',
                            { className: 'center' },
                            '1.7'
                          ),
                          _react2.default.createElement(
                            'td',
                            { className: 'center' },
                            'A'
                          )
                        ),
                        _react2.default.createElement(
                          'tr',
                          { className: 'gradeA even', role: 'row' },
                          _react2.default.createElement(
                            'td',
                            { className: 'sorting_1' },
                            'Gecko'
                          ),
                          _react2.default.createElement(
                            'td',
                            null,
                            'Firefox 1.5'
                          ),
                          _react2.default.createElement(
                            'td',
                            null,
                            'Win 98+ / OSX.2+'
                          ),
                          _react2.default.createElement(
                            'td',
                            { className: 'center' },
                            '1.8'
                          ),
                          _react2.default.createElement(
                            'td',
                            { className: 'center' },
                            'A'
                          )
                        ),
                        _react2.default.createElement(
                          'tr',
                          { className: 'gradeA odd', role: 'row' },
                          _react2.default.createElement(
                            'td',
                            { className: 'sorting_1' },
                            'Gecko'
                          ),
                          _react2.default.createElement(
                            'td',
                            null,
                            'Firefox 2.0'
                          ),
                          _react2.default.createElement(
                            'td',
                            null,
                            'Win 98+ / OSX.2+'
                          ),
                          _react2.default.createElement(
                            'td',
                            { className: 'center' },
                            '1.8'
                          ),
                          _react2.default.createElement(
                            'td',
                            { className: 'center' },
                            'A'
                          )
                        ),
                        _react2.default.createElement(
                          'tr',
                          { className: 'gradeA even', role: 'row' },
                          _react2.default.createElement(
                            'td',
                            { className: 'sorting_1' },
                            'Gecko'
                          ),
                          _react2.default.createElement(
                            'td',
                            null,
                            'Firefox 3.0'
                          ),
                          _react2.default.createElement(
                            'td',
                            null,
                            'Win 2k+ / OSX.3+'
                          ),
                          _react2.default.createElement(
                            'td',
                            { className: 'center' },
                            '1.9'
                          ),
                          _react2.default.createElement(
                            'td',
                            { className: 'center' },
                            'A'
                          )
                        ),
                        _react2.default.createElement(
                          'tr',
                          { className: 'gradeA odd', role: 'row' },
                          _react2.default.createElement(
                            'td',
                            { className: 'sorting_1' },
                            'Gecko'
                          ),
                          _react2.default.createElement(
                            'td',
                            null,
                            'Camino 1.0'
                          ),
                          _react2.default.createElement(
                            'td',
                            null,
                            'OSX.2+'
                          ),
                          _react2.default.createElement(
                            'td',
                            { className: 'center' },
                            '1.8'
                          ),
                          _react2.default.createElement(
                            'td',
                            { className: 'center' },
                            'A'
                          )
                        ),
                        _react2.default.createElement(
                          'tr',
                          { className: 'gradeA even', role: 'row' },
                          _react2.default.createElement(
                            'td',
                            { className: 'sorting_1' },
                            'Gecko'
                          ),
                          _react2.default.createElement(
                            'td',
                            null,
                            'Camino 1.5'
                          ),
                          _react2.default.createElement(
                            'td',
                            null,
                            'OSX.3+'
                          ),
                          _react2.default.createElement(
                            'td',
                            { className: 'center' },
                            '1.8'
                          ),
                          _react2.default.createElement(
                            'td',
                            { className: 'center' },
                            'A'
                          )
                        ),
                        _react2.default.createElement(
                          'tr',
                          { className: 'gradeA odd', role: 'row' },
                          _react2.default.createElement(
                            'td',
                            { className: 'sorting_1' },
                            'Gecko'
                          ),
                          _react2.default.createElement(
                            'td',
                            null,
                            'Netscape 7.2'
                          ),
                          _react2.default.createElement(
                            'td',
                            null,
                            'Win 95+ / Mac OS 8.6-9.2'
                          ),
                          _react2.default.createElement(
                            'td',
                            { className: 'center' },
                            '1.7'
                          ),
                          _react2.default.createElement(
                            'td',
                            { className: 'center' },
                            'A'
                          )
                        ),
                        _react2.default.createElement(
                          'tr',
                          { className: 'gradeA even', role: 'row' },
                          _react2.default.createElement(
                            'td',
                            { className: 'sorting_1' },
                            'Gecko'
                          ),
                          _react2.default.createElement(
                            'td',
                            null,
                            'Netscape Browser 8'
                          ),
                          _react2.default.createElement(
                            'td',
                            null,
                            'Win 98SE+'
                          ),
                          _react2.default.createElement(
                            'td',
                            { className: 'center' },
                            '1.7'
                          ),
                          _react2.default.createElement(
                            'td',
                            { className: 'center' },
                            'A'
                          )
                        ),
                        _react2.default.createElement(
                          'tr',
                          { className: 'gradeA odd', role: 'row' },
                          _react2.default.createElement(
                            'td',
                            { className: 'sorting_1' },
                            'Gecko'
                          ),
                          _react2.default.createElement(
                            'td',
                            null,
                            'Netscape Navigator 9'
                          ),
                          _react2.default.createElement(
                            'td',
                            null,
                            'Win 98+ / OSX.2+'
                          ),
                          _react2.default.createElement(
                            'td',
                            { className: 'center' },
                            '1.8'
                          ),
                          _react2.default.createElement(
                            'td',
                            { className: 'center' },
                            'A'
                          )
                        ),
                        _react2.default.createElement(
                          'tr',
                          { className: 'gradeA even', role: 'row' },
                          _react2.default.createElement(
                            'td',
                            { className: 'sorting_1' },
                            'Gecko'
                          ),
                          _react2.default.createElement(
                            'td',
                            null,
                            'Mozilla 1.0'
                          ),
                          _react2.default.createElement(
                            'td',
                            null,
                            'Win 95+ / OSX.1+'
                          ),
                          _react2.default.createElement(
                            'td',
                            { className: 'center' },
                            '1'
                          ),
                          _react2.default.createElement(
                            'td',
                            { className: 'center' },
                            'A'
                          )
                        )
                      )
                    )
                  )
                ),
                _react2.default.createElement(
                  'div',
                  { className: 'row' },
                  _react2.default.createElement(
                    'div',
                    { className: 'col-sm-6' },
                    _react2.default.createElement(
                      'div',
                      {
                        className: 'dataTables_info',
                        id: 'dataTables-example_info',
                        role: 'status',
                        'aria-live': 'polite'
                      },
                      'Showing 1 to 10 of 57 entries'
                    )
                  ),
                  _react2.default.createElement(
                    'div',
                    { className: 'col-sm-6 pullRight ' },
                    _react2.default.createElement(_Pagination2.default, {
                      activePage: 1,
                      items: 6,
                      first: true,
                      last: true,
                      prev: true,
                      next: true,
                      onSelect: function onSelect() {
                        // function for Pagination
                      }
                    })
                  )
                )
              )
            ),
            _react2.default.createElement(
              _Well2.default,
              null,
              _react2.default.createElement(
                'h4',
                null,
                'DataTables Usage Information'
              ),
              _react2.default.createElement(
                'p',
                null,
                'DataTables is a very flexible, advanced tables plugin for jQuery. In SB Admin, we are using a specialized version of DataTables built for Bootstrap 3. We have also customized the table headings to use Font Awesome icons in place of images. For complete documentation on DataTables, visit their website at ',
                _react2.default.createElement(
                  'a',
                  { target: '_blank', rel: 'noopener noreferrer', href: 'https://datatables.net/' },
                  '\'https://datatables.net/\''
                ),
                '.'
              ),
              _react2.default.createElement(
                _Button2.default,
                { bsSize: 'large', block: true, href: 'https://datatables.net/' },
                'View DataTables Documentation'
              )
            )
          )
        )
      ),
      _react2.default.createElement(
        'div',
        { className: 'row ng-scope' },
        _react2.default.createElement(
          'div',
          { className: 'col-lg-6' },
          _react2.default.createElement(
            _Panel2.default,
            { header: _react2.default.createElement(
                'span',
                null,
                'Kitchen Sink '
              ) },
            _react2.default.createElement(
              'div',
              { className: 'table-responsive' },
              _react2.default.createElement(
                'table',
                { className: 'table table-striped table-bordered table-hover' },
                _react2.default.createElement(
                  'thead',
                  null,
                  _react2.default.createElement(
                    'tr',
                    null,
                    _react2.default.createElement(
                      'th',
                      null,
                      '# '
                    ),
                    _react2.default.createElement(
                      'th',
                      null,
                      'First Name '
                    ),
                    _react2.default.createElement(
                      'th',
                      null,
                      'Last Name '
                    ),
                    _react2.default.createElement(
                      'th',
                      null,
                      'Username '
                    )
                  )
                ),
                _react2.default.createElement(
                  'tbody',
                  null,
                  _react2.default.createElement(
                    'tr',
                    null,
                    _react2.default.createElement(
                      'td',
                      null,
                      '1 '
                    ),
                    _react2.default.createElement(
                      'td',
                      null,
                      'Mark '
                    ),
                    _react2.default.createElement(
                      'td',
                      null,
                      'Otto '
                    ),
                    _react2.default.createElement(
                      'td',
                      null,
                      '@mdo '
                    )
                  ),
                  _react2.default.createElement(
                    'tr',
                    null,
                    _react2.default.createElement(
                      'td',
                      null,
                      '2 '
                    ),
                    _react2.default.createElement(
                      'td',
                      null,
                      'Jacob '
                    ),
                    _react2.default.createElement(
                      'td',
                      null,
                      'Thornton '
                    ),
                    _react2.default.createElement(
                      'td',
                      null,
                      '@fat '
                    )
                  ),
                  _react2.default.createElement(
                    'tr',
                    null,
                    _react2.default.createElement(
                      'td',
                      null,
                      '3 '
                    ),
                    _react2.default.createElement(
                      'td',
                      null,
                      'Larry '
                    ),
                    _react2.default.createElement(
                      'td',
                      null,
                      'the Bird '
                    ),
                    _react2.default.createElement(
                      'td',
                      null,
                      '@twitter '
                    )
                  )
                )
              )
            )
          )
        ),
        _react2.default.createElement(
          'div',
          { className: 'col-lg-6' },
          _react2.default.createElement(
            _Panel2.default,
            { header: _react2.default.createElement(
                'span',
                null,
                'Basic Table'
              ) },
            _react2.default.createElement(
              'div',
              { className: 'table-responsive' },
              _react2.default.createElement(
                'table',
                { className: 'table' },
                _react2.default.createElement(
                  'thead',
                  null,
                  _react2.default.createElement(
                    'tr',
                    null,
                    _react2.default.createElement(
                      'th',
                      null,
                      '# '
                    ),
                    _react2.default.createElement(
                      'th',
                      null,
                      'First Name '
                    ),
                    _react2.default.createElement(
                      'th',
                      null,
                      'Last Name '
                    ),
                    _react2.default.createElement(
                      'th',
                      null,
                      'Username '
                    )
                  )
                ),
                _react2.default.createElement(
                  'tbody',
                  null,
                  _react2.default.createElement(
                    'tr',
                    null,
                    _react2.default.createElement(
                      'td',
                      null,
                      '1 '
                    ),
                    _react2.default.createElement(
                      'td',
                      null,
                      'Mark '
                    ),
                    _react2.default.createElement(
                      'td',
                      null,
                      'Otto '
                    ),
                    _react2.default.createElement(
                      'td',
                      null,
                      '@mdo '
                    )
                  ),
                  _react2.default.createElement(
                    'tr',
                    null,
                    _react2.default.createElement(
                      'td',
                      null,
                      '2 '
                    ),
                    _react2.default.createElement(
                      'td',
                      null,
                      'Jacob '
                    ),
                    _react2.default.createElement(
                      'td',
                      null,
                      'Thornton '
                    ),
                    _react2.default.createElement(
                      'td',
                      null,
                      '@fat'
                    )
                  ),
                  _react2.default.createElement(
                    'tr',
                    null,
                    _react2.default.createElement(
                      'td',
                      null,
                      '3 '
                    ),
                    _react2.default.createElement(
                      'td',
                      null,
                      'Larry '
                    ),
                    _react2.default.createElement(
                      'td',
                      null,
                      'the Bird '
                    ),
                    _react2.default.createElement(
                      'td',
                      null,
                      '@twitter'
                    )
                  )
                )
              )
            )
          )
        )
      ),
      _react2.default.createElement(
        'div',
        { className: 'row ng-scope' },
        _react2.default.createElement(
          'div',
          { className: 'col-lg-6' },
          _react2.default.createElement(
            _Panel2.default,
            { header: _react2.default.createElement(
                'span',
                null,
                'Striped Rows '
              ) },
            _react2.default.createElement(
              'div',
              { className: 'table-responsive' },
              _react2.default.createElement(
                'table',
                { className: 'table table-striped' },
                _react2.default.createElement(
                  'thead',
                  null,
                  _react2.default.createElement(
                    'tr',
                    null,
                    _react2.default.createElement(
                      'th',
                      null,
                      '# '
                    ),
                    _react2.default.createElement(
                      'th',
                      null,
                      'First Name '
                    ),
                    _react2.default.createElement(
                      'th',
                      null,
                      'Last Name '
                    ),
                    _react2.default.createElement(
                      'th',
                      null,
                      'Username '
                    )
                  )
                ),
                _react2.default.createElement(
                  'tbody',
                  null,
                  _react2.default.createElement(
                    'tr',
                    null,
                    _react2.default.createElement(
                      'td',
                      null,
                      '1 '
                    ),
                    _react2.default.createElement(
                      'td',
                      null,
                      'Mark '
                    ),
                    _react2.default.createElement(
                      'td',
                      null,
                      'Otto '
                    ),
                    _react2.default.createElement(
                      'td',
                      null,
                      '@mdo '
                    )
                  ),
                  _react2.default.createElement(
                    'tr',
                    null,
                    _react2.default.createElement(
                      'td',
                      null,
                      '2 '
                    ),
                    _react2.default.createElement(
                      'td',
                      null,
                      'Jacob '
                    ),
                    _react2.default.createElement(
                      'td',
                      null,
                      'Thornton '
                    ),
                    _react2.default.createElement(
                      'td',
                      null,
                      '@fat'
                    )
                  ),
                  _react2.default.createElement(
                    'tr',
                    null,
                    _react2.default.createElement(
                      'td',
                      null,
                      '3 '
                    ),
                    _react2.default.createElement(
                      'td',
                      null,
                      'Larry '
                    ),
                    _react2.default.createElement(
                      'td',
                      null,
                      'the Bird '
                    ),
                    _react2.default.createElement(
                      'td',
                      null,
                      '@twitter '
                    )
                  )
                )
              )
            )
          )
        ),
        _react2.default.createElement(
          'div',
          { className: 'col-lg-6' },
          _react2.default.createElement(
            _Panel2.default,
            { header: _react2.default.createElement(
                'span',
                null,
                'Bordered Table '
              ) },
            _react2.default.createElement(
              'div',
              { className: 'table-responsive table-bordered' },
              _react2.default.createElement(
                'table',
                { className: 'table' },
                _react2.default.createElement(
                  'thead',
                  null,
                  _react2.default.createElement(
                    'tr',
                    null,
                    _react2.default.createElement(
                      'th',
                      null,
                      '# '
                    ),
                    _react2.default.createElement(
                      'th',
                      null,
                      'First Name '
                    ),
                    _react2.default.createElement(
                      'th',
                      null,
                      'Last Name '
                    ),
                    _react2.default.createElement(
                      'th',
                      null,
                      'Username '
                    )
                  )
                ),
                _react2.default.createElement(
                  'tbody',
                  null,
                  _react2.default.createElement(
                    'tr',
                    null,
                    _react2.default.createElement(
                      'td',
                      null,
                      '1 '
                    ),
                    _react2.default.createElement(
                      'td',
                      null,
                      'Mark '
                    ),
                    _react2.default.createElement(
                      'td',
                      null,
                      'Otto '
                    ),
                    _react2.default.createElement(
                      'td',
                      null,
                      '@mdo'
                    )
                  ),
                  _react2.default.createElement(
                    'tr',
                    null,
                    _react2.default.createElement(
                      'td',
                      null,
                      '2 '
                    ),
                    _react2.default.createElement(
                      'td',
                      null,
                      'Jacob '
                    ),
                    _react2.default.createElement(
                      'td',
                      null,
                      'Thornton'
                    ),
                    _react2.default.createElement(
                      'td',
                      null,
                      '@fat'
                    )
                  ),
                  _react2.default.createElement(
                    'tr',
                    null,
                    _react2.default.createElement(
                      'td',
                      null,
                      '3 '
                    ),
                    _react2.default.createElement(
                      'td',
                      null,
                      'Larry '
                    ),
                    _react2.default.createElement(
                      'td',
                      null,
                      'the Bird '
                    ),
                    _react2.default.createElement(
                      'td',
                      null,
                      '@twitter '
                    )
                  )
                )
              )
            )
          )
        )
      ),
      _react2.default.createElement(
        'div',
        { className: 'row ng-scope' },
        _react2.default.createElement(
          'div',
          { className: 'col-lg-6' },
          _react2.default.createElement(
            _Panel2.default,
            { header: _react2.default.createElement(
                'span',
                null,
                'Hover Rows '
              ) },
            _react2.default.createElement(
              'div',
              { className: 'table-responsive' },
              _react2.default.createElement(
                'table',
                { className: 'table table-hover' },
                _react2.default.createElement(
                  'thead',
                  null,
                  _react2.default.createElement(
                    'tr',
                    null,
                    _react2.default.createElement(
                      'th',
                      null,
                      '# '
                    ),
                    _react2.default.createElement(
                      'th',
                      null,
                      'First Name '
                    ),
                    _react2.default.createElement(
                      'th',
                      null,
                      'Last Name '
                    ),
                    _react2.default.createElement(
                      'th',
                      null,
                      'Username'
                    )
                  )
                ),
                _react2.default.createElement(
                  'tbody',
                  null,
                  _react2.default.createElement(
                    'tr',
                    null,
                    _react2.default.createElement(
                      'td',
                      null,
                      '1 '
                    ),
                    _react2.default.createElement(
                      'td',
                      null,
                      'Mark '
                    ),
                    _react2.default.createElement(
                      'td',
                      null,
                      'Otto '
                    ),
                    _react2.default.createElement(
                      'td',
                      null,
                      '@mdo'
                    )
                  ),
                  _react2.default.createElement(
                    'tr',
                    null,
                    _react2.default.createElement(
                      'td',
                      null,
                      '2 '
                    ),
                    _react2.default.createElement(
                      'td',
                      null,
                      'Jacob '
                    ),
                    _react2.default.createElement(
                      'td',
                      null,
                      'Thornton '
                    ),
                    _react2.default.createElement(
                      'td',
                      null,
                      '@fat'
                    )
                  ),
                  _react2.default.createElement(
                    'tr',
                    null,
                    _react2.default.createElement(
                      'td',
                      null,
                      '3 '
                    ),
                    _react2.default.createElement(
                      'td',
                      null,
                      'Larry '
                    ),
                    _react2.default.createElement(
                      'td',
                      null,
                      'the Bird '
                    ),
                    _react2.default.createElement(
                      'td',
                      null,
                      '@twitter '
                    )
                  )
                )
              )
            )
          )
        ),
        _react2.default.createElement(
          'div',
          { className: 'col-lg-6' },
          _react2.default.createElement(
            _Panel2.default,
            { header: _react2.default.createElement(
                'span',
                null,
                'Context Classes '
              ) },
            _react2.default.createElement(
              'div',
              { className: 'table-responsive' },
              _react2.default.createElement(
                'table',
                { className: 'table' },
                _react2.default.createElement(
                  'thead',
                  null,
                  _react2.default.createElement(
                    'tr',
                    null,
                    _react2.default.createElement(
                      'th',
                      null,
                      '# '
                    ),
                    _react2.default.createElement(
                      'th',
                      null,
                      'First Name '
                    ),
                    _react2.default.createElement(
                      'th',
                      null,
                      'Last Name '
                    ),
                    _react2.default.createElement(
                      'th',
                      null,
                      'Username '
                    )
                  )
                ),
                _react2.default.createElement(
                  'tbody',
                  null,
                  _react2.default.createElement(
                    'tr',
                    { className: 'success' },
                    _react2.default.createElement(
                      'td',
                      null,
                      '1 '
                    ),
                    _react2.default.createElement(
                      'td',
                      null,
                      'Mark '
                    ),
                    _react2.default.createElement(
                      'td',
                      null,
                      'Otto '
                    ),
                    _react2.default.createElement(
                      'td',
                      null,
                      '@mdo'
                    )
                  ),
                  _react2.default.createElement(
                    'tr',
                    { className: 'info' },
                    _react2.default.createElement(
                      'td',
                      null,
                      '2 '
                    ),
                    _react2.default.createElement(
                      'td',
                      null,
                      'Jacob '
                    ),
                    _react2.default.createElement(
                      'td',
                      null,
                      'Thornton '
                    ),
                    _react2.default.createElement(
                      'td',
                      null,
                      '@fat'
                    )
                  ),
                  _react2.default.createElement(
                    'tr',
                    { className: 'warning' },
                    _react2.default.createElement(
                      'td',
                      null,
                      '3 '
                    ),
                    _react2.default.createElement(
                      'td',
                      null,
                      'Larry '
                    ),
                    _react2.default.createElement(
                      'td',
                      null,
                      'the Bird '
                    ),
                    _react2.default.createElement(
                      'td',
                      null,
                      '@twitter'
                    )
                  ),
                  _react2.default.createElement(
                    'tr',
                    { className: 'danger' },
                    _react2.default.createElement(
                      'td',
                      null,
                      '4 '
                    ),
                    _react2.default.createElement(
                      'td',
                      null,
                      'John '
                    ),
                    _react2.default.createElement(
                      'td',
                      null,
                      'Smith '
                    ),
                    _react2.default.createElement(
                      'td',
                      null,
                      '@jsmith '
                    )
                  )
                )
              )
            )
          )
        )
      )
    );
  }
  
  displayTable.contextTypes = { setTitle: _react.PropTypes.func.isRequired };
  
  exports.default = displayTable;

/***/ }),
/* 156 */
/***/ (function(module, exports) {

  module.exports = require("react-bootstrap/lib/Pagination");

/***/ }),
/* 157 */
/***/ (function(module, exports) {

  module.exports = require("react-bootstrap/lib/PageHeader");

/***/ }),
/* 158 */
/***/ (function(module, exports) {

  module.exports = require("react-bootstrap/lib/Well");

/***/ }),
/* 159 */
/***/ (function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  
  var _react = __webpack_require__(11);
  
  var _react2 = _interopRequireDefault(_react);
  
  var _Button = __webpack_require__(160);
  
  var _Button2 = _interopRequireDefault(_Button);
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  exports.default = {
  
    path: '/button',
  
    action: function action() {
      return _react2.default.createElement(_Button2.default, null);
    }
  };

/***/ }),
/* 160 */
/***/ (function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  
  var _react = __webpack_require__(11);
  
  var _react2 = _interopRequireDefault(_react);
  
  var _Button = __webpack_require__(150);
  
  var _Button2 = _interopRequireDefault(_Button);
  
  var _Panel = __webpack_require__(151);
  
  var _Panel2 = _interopRequireDefault(_Panel);
  
  var _PageHeader = __webpack_require__(157);
  
  var _PageHeader2 = _interopRequireDefault(_PageHeader);
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  var title = 'Buttons';
  
  function displayButtons(props, context) {
    context.setTitle(title);
    return _react2.default.createElement(
      'div',
      null,
      _react2.default.createElement(
        'div',
        { className: 'row' },
        _react2.default.createElement(
          'div',
          { className: 'col-lg-12' },
          _react2.default.createElement(
            _PageHeader2.default,
            null,
            'Buttons'
          )
        )
      ),
      _react2.default.createElement(
        'div',
        { className: 'row' },
        _react2.default.createElement(
          'div',
          { className: 'col-lg-6' },
          _react2.default.createElement(
            _Panel2.default,
            { header: _react2.default.createElement(
                'span',
                null,
                'Default Buttons'
              ) },
            _react2.default.createElement(
              'h4',
              null,
              'Normal Buttons'
            ),
            _react2.default.createElement(
              'p',
              null,
              _react2.default.createElement(
                _Button2.default,
                null,
                'Default'
              ),
              _react2.default.createElement(
                _Button2.default,
                { bsStyle: 'primary' },
                'Primary'
              ),
              _react2.default.createElement(
                _Button2.default,
                { bsStyle: 'success' },
                'Success'
              ),
              _react2.default.createElement(
                _Button2.default,
                { bsStyle: 'info' },
                'Info'
              ),
              _react2.default.createElement(
                _Button2.default,
                { bsStyle: 'warning' },
                'Warning'
              ),
              _react2.default.createElement(
                _Button2.default,
                { bsStyle: 'danger' },
                'Danger'
              ),
              _react2.default.createElement(
                _Button2.default,
                { bsStyle: 'link' },
                'Link'
              )
            ),
            _react2.default.createElement('br', null),
            _react2.default.createElement(
              'h4',
              null,
              'Disabled Buttons'
            ),
            _react2.default.createElement(
              'p',
              null,
              _react2.default.createElement(
                _Button2.default,
                { disabled: true },
                'Default'
              ),
              _react2.default.createElement(
                _Button2.default,
                { bsStyle: 'primary', disabled: true },
                'Primary'
              ),
              _react2.default.createElement(
                _Button2.default,
                { bsStyle: 'success', disabled: true },
                'Success'
              ),
              _react2.default.createElement(
                _Button2.default,
                { bsStyle: 'info', disabled: true },
                'Info'
              ),
              _react2.default.createElement(
                _Button2.default,
                { bsStyle: 'warning', disabled: true },
                'Warning'
              ),
              _react2.default.createElement(
                _Button2.default,
                { bsStyle: 'danger', disabled: true },
                'Danger'
              ),
              _react2.default.createElement(
                _Button2.default,
                { bsStyle: 'link', disabled: true },
                'Link'
              )
            ),
            _react2.default.createElement('br', null),
            _react2.default.createElement(
              'h4',
              null,
              'Button Sizes'
            ),
            _react2.default.createElement(
              'p',
              null,
              _react2.default.createElement(
                _Button2.default,
                { bsStyle: 'primary', bsSize: 'large' },
                'Large button'
              ),
              _react2.default.createElement(
                _Button2.default,
                { bsStyle: 'primary' },
                'Default button'
              ),
              _react2.default.createElement(
                _Button2.default,
                { bsStyle: 'primary', bsSize: 'small' },
                'Small button'
              ),
              _react2.default.createElement(
                _Button2.default,
                { bsStyle: 'primary', bsSize: 'xsmall' },
                'Mini button'
              ),
              _react2.default.createElement('br', null),
              _react2.default.createElement('br', null),
              _react2.default.createElement(
                _Button2.default,
                { bsStyle: 'primary', bsSize: 'large', block: true },
                'Block level button'
              )
            )
          ),
          _react2.default.createElement(
            _Panel2.default,
            { header: _react2.default.createElement(
                'span',
                null,
                'Circle Icon Buttons with Font Awesome Icons'
              ) },
            _react2.default.createElement(
              'h4',
              null,
              'Normal Circle Buttons'
            ),
            _react2.default.createElement(
              _Button2.default,
              { className: 'btn-circle' },
              _react2.default.createElement('i', { className: 'fa fa-check' })
            ),
            _react2.default.createElement(
              _Button2.default,
              { bsStyle: 'primary', className: 'btn-circle' },
              _react2.default.createElement('i', { className: 'fa fa-list' })
            ),
            _react2.default.createElement(
              _Button2.default,
              { bsStyle: 'success', className: 'btn-circle' },
              _react2.default.createElement('i', { className: 'fa fa-link' })
            ),
            _react2.default.createElement(
              _Button2.default,
              { bsStyle: 'info', className: 'btn-circle' },
              _react2.default.createElement('i', { className: 'fa fa-check' })
            ),
            _react2.default.createElement(
              _Button2.default,
              { bsStyle: 'warning', className: 'btn-circle' },
              _react2.default.createElement('i', { className: 'fa fa-times' })
            ),
            _react2.default.createElement(
              _Button2.default,
              { bsStyle: 'danger', className: 'btn-circle' },
              _react2.default.createElement('i', { className: 'fa fa-heart' })
            ),
            _react2.default.createElement('br', null),
            _react2.default.createElement('br', null),
            _react2.default.createElement(
              'h4',
              null,
              'Large Circle Buttons'
            ),
            _react2.default.createElement(
              _Button2.default,
              { bsSize: 'large', className: 'btn-circle' },
              _react2.default.createElement('i', { className: 'fa fa-check' })
            ),
            _react2.default.createElement(
              _Button2.default,
              { bsSize: 'large', bsStyle: 'primary', className: 'btn-circle' },
              _react2.default.createElement('i', { className: 'fa fa-list' })
            ),
            _react2.default.createElement(
              _Button2.default,
              { bsSize: 'large', bsStyle: 'success', className: 'btn-circle' },
              _react2.default.createElement('i', { className: 'fa fa-link' })
            ),
            _react2.default.createElement(
              _Button2.default,
              { bsSize: 'large', bsStyle: 'info', className: 'btn-circle' },
              _react2.default.createElement('i', { className: 'fa fa-check' })
            ),
            _react2.default.createElement(
              _Button2.default,
              { bsSize: 'large', bsStyle: 'warning', className: 'btn-circle' },
              _react2.default.createElement('i', { className: 'fa fa-times' })
            ),
            _react2.default.createElement(
              _Button2.default,
              { bsSize: 'large', bsStyle: 'danger', className: 'btn-circle' },
              _react2.default.createElement('i', { className: 'fa fa-heart' })
            ),
            _react2.default.createElement('br', null),
            _react2.default.createElement('br', null),
            _react2.default.createElement(
              'h4',
              null,
              'Extra Large Circle Buttons'
            ),
            _react2.default.createElement(
              _Button2.default,
              { className: 'btn-circle btn-xl' },
              _react2.default.createElement('i', { className: 'fa fa-check' })
            ),
            _react2.default.createElement(
              _Button2.default,
              { bsStyle: 'primary', className: 'btn-circle btn-xl' },
              _react2.default.createElement('i', { className: 'fa fa-list' })
            ),
            _react2.default.createElement(
              _Button2.default,
              { bsStyle: 'success', className: 'btn-circle btn-xl' },
              _react2.default.createElement('i', { className: 'fa fa-link' })
            ),
            _react2.default.createElement(
              _Button2.default,
              { bsStyle: 'info', className: 'btn-circle btn-xl' },
              _react2.default.createElement('i', { className: 'fa fa-check' })
            ),
            _react2.default.createElement(
              _Button2.default,
              { bsStyle: 'warning', className: 'btn-circle btn-xl' },
              _react2.default.createElement('i', { className: 'fa fa-times' })
            ),
            _react2.default.createElement(
              _Button2.default,
              { bsStyle: 'danger', className: 'btn-circle btn-xl' },
              _react2.default.createElement('i', { className: 'fa fa-heart' })
            )
          )
        ),
        _react2.default.createElement(
          'div',
          { className: 'col-lg-6' },
          _react2.default.createElement(
            _Panel2.default,
            { header: _react2.default.createElement(
                'span',
                null,
                'Outline Buttons with Smooth Transition'
              ) },
            _react2.default.createElement(
              'h4',
              null,
              'Outline Buttons'
            ),
            _react2.default.createElement(
              'p',
              null,
              _react2.default.createElement(
                _Button2.default,
                { className: 'btn-outline' },
                'Default'
              ),
              _react2.default.createElement(
                _Button2.default,
                { bsStyle: 'primary', className: 'btn-outline' },
                'Primary'
              ),
              _react2.default.createElement(
                _Button2.default,
                { bsStyle: 'success', className: 'btn-outline' },
                'Success'
              ),
              _react2.default.createElement(
                _Button2.default,
                { bsStyle: 'info', className: 'btn-outline' },
                'Info'
              ),
              _react2.default.createElement(
                _Button2.default,
                { bsStyle: 'warning', className: 'btn-outline' },
                'Warning'
              ),
              _react2.default.createElement(
                _Button2.default,
                { bsStyle: 'danger', className: 'btn-outline' },
                'Danger'
              ),
              _react2.default.createElement(
                _Button2.default,
                { bsStyle: 'link', className: 'btn-outline' },
                'Link'
              )
            ),
            _react2.default.createElement('br', null),
            _react2.default.createElement(
              'h4',
              null,
              'Outline Button Sizes'
            ),
            _react2.default.createElement(
              'p',
              null,
              _react2.default.createElement(
                _Button2.default,
                { bsStyle: 'primary', className: 'btn-outline', bsSize: 'large' },
                'Large button'
              ),
              _react2.default.createElement(
                _Button2.default,
                { bsStyle: 'primary', className: 'btn-outline' },
                'Default button'
              ),
              _react2.default.createElement(
                _Button2.default,
                { bsStyle: 'primary', className: 'btn-outline', bsSize: 'small' },
                'Small button'
              ),
              _react2.default.createElement(
                _Button2.default,
                { bsStyle: 'primary', className: 'btn-outline', bsSize: 'xsmall' },
                'Mini button'
              ),
              _react2.default.createElement('br', null),
              _react2.default.createElement('br', null),
              _react2.default.createElement(
                _Button2.default,
                { bsStyle: 'primary', className: 'btn-outline', bsSize: 'large', block: true },
                'Block level button'
              )
            )
          ),
          _react2.default.createElement(
            _Panel2.default,
            { header: _react2.default.createElement(
                'span',
                null,
                'Social Buttons with Font Awesome Icons'
              ) },
            _react2.default.createElement(
              'h4',
              null,
              'Social Buttons'
            ),
            _react2.default.createElement(
              _Button2.default,
              {
                bsStyle: 'link',
                className: 'btn-social { btn-bitbucket }', block: true
              },
              _react2.default.createElement('i', { className: 'fa fa-bitbucket' }),
              ' Sign in with Bitbucket'
            ),
            _react2.default.createElement(
              _Button2.default,
              { bsStyle: 'link', className: 'btn-social btn-dropbox', block: true },
              _react2.default.createElement('i', { className: 'fa fa-dropbox' }),
              ' Sign in with Dropbox'
            ),
            _react2.default.createElement(
              _Button2.default,
              { bsStyle: 'link', className: 'btn-social btn-facebook', block: true },
              _react2.default.createElement('i', { className: 'fa fa-facebook' }),
              ' Sign in with Facebook'
            ),
            _react2.default.createElement(
              _Button2.default,
              { bsStyle: 'link', className: 'btn-social btn-flickr', block: true },
              _react2.default.createElement('i', { className: 'fa fa-flickr' }),
              ' Sign in with Flickr'
            ),
            _react2.default.createElement(
              _Button2.default,
              { bsStyle: 'link', className: 'btn-social btn-github', block: true },
              _react2.default.createElement('i', { className: 'fa fa-github' }),
              ' Sign in with GitHub'
            ),
            _react2.default.createElement(
              _Button2.default,
              { bsStyle: 'link', className: 'btn-social btn-google-plus', block: true },
              _react2.default.createElement('i', { className: 'fa fa-google-plus' }),
              ' Sign in with Google'
            ),
            _react2.default.createElement(
              _Button2.default,
              { bsStyle: 'link', className: 'btn-social btn-instagram', block: true },
              _react2.default.createElement('i', { className: 'fa fa-instagram' }),
              ' Sign in with Instagram'
            ),
            _react2.default.createElement(
              _Button2.default,
              { bsStyle: 'link', className: 'btn-social btn-linkedin', block: true },
              _react2.default.createElement('i', { className: 'fa fa-linkedin' }),
              ' Sign in with LinkedIn'
            ),
            _react2.default.createElement(
              _Button2.default,
              { bsStyle: 'link', className: 'btn-social btn-pinterest', block: true },
              _react2.default.createElement('i', { className: 'fa fa-pinterest' }),
              ' Sign in with Pinterest'
            ),
            _react2.default.createElement(
              _Button2.default,
              { bsStyle: 'link', className: 'btn-social btn-tumblr', block: true },
              _react2.default.createElement('i', { className: 'fa fa-tumblr' }),
              ' Sign in with Tumblr'
            ),
            _react2.default.createElement(
              _Button2.default,
              { bsStyle: 'link', className: 'btn-social btn-twitter', block: true },
              _react2.default.createElement('i', { className: 'fa fa-twitter' }),
              ' Sign in with Twitter'
            ),
            _react2.default.createElement(
              _Button2.default,
              { bsStyle: 'link', className: 'btn-social btn-vk', block: true },
              _react2.default.createElement('i', { className: 'fa fa-vk' }),
              ' Sign in with VK'
            ),
            _react2.default.createElement('hr', null),
            _react2.default.createElement(
              'div',
              { className: 'text-center' },
              _react2.default.createElement(
                _Button2.default,
                { bsStyle: 'link', className: 'btn-social-icon btn-bitbucket' },
                _react2.default.createElement('i', { className: 'fa fa-bitbucket' })
              ),
              _react2.default.createElement(
                _Button2.default,
                { bsStyle: 'link', className: 'btn-social-icon btn-dropbox' },
                _react2.default.createElement('i', { className: 'fa fa-dropbox' })
              ),
              _react2.default.createElement(
                _Button2.default,
                { bsStyle: 'link', className: 'btn-social-icon btn-facebook' },
                _react2.default.createElement('i', { className: 'fa fa-facebook' })
              ),
              _react2.default.createElement(
                _Button2.default,
                { bsStyle: 'link', className: 'btn-social-icon btn-flickr' },
                _react2.default.createElement('i', { className: 'fa fa-flickr' })
              ),
              _react2.default.createElement(
                _Button2.default,
                { bsStyle: 'link', className: 'btn-social-icon btn-github' },
                _react2.default.createElement('i', { className: 'fa fa-github' })
              ),
              _react2.default.createElement(
                _Button2.default,
                { bsStyle: 'link', className: 'btn-social-icon btn-google-plus' },
                _react2.default.createElement('i', { className: 'fa fa-google-plus' })
              ),
              _react2.default.createElement(
                _Button2.default,
                { bsStyle: 'link', className: 'btn-social-icon btn-instagram' },
                _react2.default.createElement('i', { className: 'fa fa-instagram' })
              ),
              _react2.default.createElement(
                _Button2.default,
                { bsStyle: 'link', className: 'btn-social-icon btn-linkedin' },
                _react2.default.createElement('i', { className: 'fa fa-linkedin' })
              ),
              _react2.default.createElement(
                _Button2.default,
                { bsStyle: 'link', className: 'btn-social-icon btn-pinterest' },
                _react2.default.createElement('i', { className: 'fa fa-pinterest' })
              ),
              _react2.default.createElement(
                _Button2.default,
                { bsStyle: 'link', className: 'btn-social-icon btn-tumblr' },
                _react2.default.createElement('i', { className: 'fa fa-tumblr' })
              ),
              _react2.default.createElement(
                _Button2.default,
                { bsStyle: 'link', className: 'btn-social-icon btn-twitter' },
                _react2.default.createElement('i', { className: 'fa fa-twitter' })
              ),
              _react2.default.createElement(
                _Button2.default,
                { bsStyle: 'link', className: 'btn-social-icon btn-vk' },
                _react2.default.createElement('i', { className: 'fa fa-vk' })
              )
            )
          )
        )
      )
    );
  }
  
  displayButtons.contextTypes = { setTitle: _react.PropTypes.func.isRequired };
  
  exports.default = displayButtons;

/***/ }),
/* 161 */
/***/ (function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  
  var _react = __webpack_require__(11);
  
  var _react2 = _interopRequireDefault(_react);
  
  var _FlotCharts = __webpack_require__(162);
  
  var _FlotCharts2 = _interopRequireDefault(_FlotCharts);
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  exports.default = {
  
    path: '/flotcharts',
  
    action: function action() {
      return _react2.default.createElement(_FlotCharts2.default, null);
    }
  };

/***/ }),
/* 162 */
/***/ (function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  
  var _react = __webpack_require__(11);
  
  var _react2 = _interopRequireDefault(_react);
  
  var _Button = __webpack_require__(150);
  
  var _Button2 = _interopRequireDefault(_Button);
  
  var _Panel = __webpack_require__(151);
  
  var _Panel2 = _interopRequireDefault(_Panel);
  
  var _PageHeader = __webpack_require__(157);
  
  var _PageHeader2 = _interopRequireDefault(_PageHeader);
  
  var _recharts = __webpack_require__(100);
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  var title = 'Flot Charts';
  
  function plotData() {
    var data = [];
    var offset = 0;
    var sineValue = void 0;
    var cosValue = void 0;
    for (var i = 0; i < 12; i += 0.8) {
      sineValue = Math.sin(i + offset);
      cosValue = Math.cos(i + offset);
      data.push({ name: i, sine: sineValue, cosine: cosValue });
      // data.push({ name: i, cosine: cosValue });
    }
    return data;
  }
  var lineChartData = plotData();
  
  var pieChartData = [{ name: 'Group A', value: 400 }, { name: 'Group B', value: 300 }, { name: 'Group C', value: 300 }, { name: 'Group D', value: 200 }, { name: 'Group E', value: 278 }, { name: 'Group F', value: 189 }];
  
  var BarChartData = [{ name: 'Page A', uv: 4000.343, pv: 2400, amt: 2400 }, { name: 'Page B', uv: 3000.6756754, pv: 1398, amt: 2210 }, { name: 'Page C', uv: 2000.987654, pv: 9800, amt: 2290 }, { name: 'Page D', uv: 2780.472384, pv: 3908, amt: 2000 }, { name: 'Page E', uv: 1890.98347593, pv: 4800, amt: 2181 }, { name: 'Page F', uv: 2390.28913479283, pv: 3800, amt: 2500 }, { name: 'Page G', uv: 3490.2345678, pv: 4300, amt: 2100 }];
  
  function displayFlotCharts(props, context) {
    context.setTitle(title);
    return _react2.default.createElement(
      'div',
      null,
      _react2.default.createElement(
        'div',
        { className: 'row' },
        _react2.default.createElement(
          'div',
          { className: 'col-lg-12' },
          _react2.default.createElement(
            _PageHeader2.default,
            null,
            'Flot'
          )
        )
      ),
      _react2.default.createElement(
        'div',
        { className: 'row' },
        _react2.default.createElement(
          'div',
          { className: 'col-lg-12' },
          _react2.default.createElement(
            _Panel2.default,
            { header: _react2.default.createElement(
                'span',
                null,
                'Line Chart Example'
              ) },
            _react2.default.createElement(
              'div',
              null,
              _react2.default.createElement(
                _recharts.ResponsiveContainer,
                { width: '100%', aspect: 2 },
                _react2.default.createElement(
                  _recharts.LineChart,
                  { data: lineChartData, margin: { top: 10, right: 30, left: 0, bottom: 0 } },
                  _react2.default.createElement(_recharts.CartesianGrid, { stroke: '#ccc' }),
                  _react2.default.createElement(_recharts.XAxis, null),
                  _react2.default.createElement(_recharts.YAxis, null),
                  _react2.default.createElement(_recharts.Tooltip, null),
                  _react2.default.createElement(_recharts.Line, { type: 'monotone', dataKey: 'sine', stroke: '#8884d8' }),
                  _react2.default.createElement(_recharts.Line, { type: 'monotone', dataKey: 'cosine', stroke: '#82ca9d' })
                )
              )
            )
          )
        )
      ),
      _react2.default.createElement(
        'div',
        { className: 'row' },
        _react2.default.createElement(
          'div',
          { className: 'col-lg-6' },
          _react2.default.createElement(
            _Panel2.default,
            { header: _react2.default.createElement(
                'span',
                null,
                'Pie Chart Example'
              ) },
            _react2.default.createElement(
              'div',
              null,
              _react2.default.createElement(
                _recharts.ResponsiveContainer,
                { width: '100%', aspect: 2 },
                _react2.default.createElement(
                  _recharts.PieChart,
                  null,
                  _react2.default.createElement(_recharts.Pie, { isAnimationActive: false, data: pieChartData, fill: '#8884d8', label: true }),
                  _react2.default.createElement(_recharts.Tooltip, null)
                )
              )
            )
          )
        ),
        _react2.default.createElement(
          'div',
          { className: 'col-lg-6' },
          _react2.default.createElement(
            _Panel2.default,
            { header: _react2.default.createElement(
                'span',
                null,
                'Bar Chart Example'
              ) },
            _react2.default.createElement(
              'div',
              null,
              _react2.default.createElement(
                _recharts.ResponsiveContainer,
                { width: '100%', aspect: 2 },
                _react2.default.createElement(
                  _recharts.BarChart,
                  {
                    data: BarChartData,
                    margin: { top: 5, right: 30, left: 20, bottom: 5 }
                  },
                  _react2.default.createElement(_recharts.XAxis, { dataKey: 'name' }),
                  _react2.default.createElement(_recharts.YAxis, null),
                  _react2.default.createElement(_recharts.CartesianGrid, { strokeDasharray: '3 3' }),
                  _react2.default.createElement(_recharts.Tooltip, null),
                  _react2.default.createElement(_recharts.Legend, null),
                  _react2.default.createElement(_recharts.Bar, { dataKey: 'pv', fill: '#8884d8' }),
                  _react2.default.createElement(_recharts.Bar, { dataKey: 'uv', fill: '#82ca9d' })
                )
              )
            )
          )
        ),
        _react2.default.createElement(
          'div',
          { className: 'col-lg-6' },
          _react2.default.createElement(
            _Panel2.default,
            { header: _react2.default.createElement(
                'span',
                null,
                'Multiple Axes Line Chart Example'
              ) },
            _react2.default.createElement(
              'div',
              null,
              'Panel contents'
            )
          )
        ),
        _react2.default.createElement(
          'div',
          { className: 'col-lg-6' },
          _react2.default.createElement(
            _Panel2.default,
            { header: _react2.default.createElement(
                'span',
                null,
                'Moving Line Chart Example'
              ) },
            _react2.default.createElement(
              'div',
              null,
              'Panel contents'
            )
          )
        ),
        _react2.default.createElement(
          'div',
          { className: 'col-lg-12' },
          _react2.default.createElement(
            _Panel2.default,
            { header: _react2.default.createElement(
                'span',
                null,
                'Flot Charts Usage'
              ) },
            _react2.default.createElement(
              'div',
              null,
              _react2.default.createElement(
                'p',
                null,
                'Flot is a pure JavaScript plotting library for jQuery, with a focus on simple usage, attractive looks, and interactive features. In SB Admin, we are using the most recent version of Flot along with a few plugins to enhance the user experience. The Flot plugins being used are the tooltip plugin for hoverable tooltips, and the resize plugin for fully responsive charts. The documentation for Flot Charts is available on their website,',
                _react2.default.createElement(
                  'a',
                  { target: '_blank', rel: 'noopener noreferrer', href: 'http://www.flotcharts.org/' },
                  '"http://www.flotcharts.org/"'
                ),
                '.'
              ),
              _react2.default.createElement(
                _Button2.default,
                { bsSize: 'large', block: true, href: 'http://www.flotcharts.org/' },
                'View Flot Charts Documentation'
              )
            )
          )
        )
      )
    );
  }
  
  displayFlotCharts.contextTypes = { setTitle: _react.PropTypes.func.isRequired };
  
  exports.default = displayFlotCharts;

/***/ }),
/* 163 */
/***/ (function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  
  var _react = __webpack_require__(11);
  
  var _react2 = _interopRequireDefault(_react);
  
  var _Forms = __webpack_require__(164);
  
  var _Forms2 = _interopRequireDefault(_Forms);
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  exports.default = {
  
    path: '/forms',
  
    action: function action() {
      return _react2.default.createElement(_Forms2.default, null);
    }
  };

/***/ }),
/* 164 */
/***/ (function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  
  var _react = __webpack_require__(11);
  
  var _react2 = _interopRequireDefault(_react);
  
  var _reactBootstrap = __webpack_require__(38);
  
  var _FormControlFeedback = __webpack_require__(165);
  
  var _FormControlFeedback2 = _interopRequireDefault(_FormControlFeedback);
  
  var _FormControlStatic = __webpack_require__(166);
  
  var _FormControlStatic2 = _interopRequireDefault(_FormControlStatic);
  
  var _InputGroupAddon = __webpack_require__(167);
  
  var _InputGroupAddon2 = _interopRequireDefault(_InputGroupAddon);
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  var title = 'Forms';
  
  function displayForms(props, context) {
    context.setTitle(title);
    return _react2.default.createElement(
      'div',
      null,
      _react2.default.createElement(
        'div',
        { className: 'row' },
        _react2.default.createElement(
          'div',
          { className: 'col-lg-12' },
          _react2.default.createElement(
            _reactBootstrap.PageHeader,
            null,
            'Forms'
          )
        )
      ),
      _react2.default.createElement(
        'div',
        { className: 'row' },
        _react2.default.createElement(
          'div',
          { className: 'col-lg-12' },
          _react2.default.createElement(
            _reactBootstrap.Panel,
            { header: _react2.default.createElement(
                'span',
                null,
                'Basic Form Elements'
              ) },
            _react2.default.createElement(
              'div',
              { className: 'row' },
              _react2.default.createElement(
                'div',
                { className: 'col-lg-6' },
                _react2.default.createElement(
                  _reactBootstrap.Form,
                  null,
                  _react2.default.createElement(
                    _reactBootstrap.FormGroup,
                    {
                      controlId: 'formBasicText'
                    },
                    _react2.default.createElement(
                      _reactBootstrap.ControlLabel,
                      null,
                      'Text Input'
                    ),
                    _react2.default.createElement(_reactBootstrap.FormControl, {
                      type: 'text'
                    }),
                    _react2.default.createElement(_FormControlFeedback2.default, null),
                    _react2.default.createElement(
                      _reactBootstrap.HelpBlock,
                      null,
                      'Example block-level help text here.'
                    )
                  ),
                  _react2.default.createElement(
                    _reactBootstrap.FormGroup,
                    { controlId: 'formBasicText2' },
                    _react2.default.createElement(
                      _reactBootstrap.ControlLabel,
                      null,
                      'Text Input'
                    ),
                    _react2.default.createElement(_reactBootstrap.FormControl, {
                      type: 'text',
                      placeholder: 'Enter Text'
                    }),
                    _react2.default.createElement(_FormControlFeedback2.default, null)
                  ),
                  _react2.default.createElement(
                    _reactBootstrap.FormGroup,
                    null,
                    _react2.default.createElement(
                      _reactBootstrap.ControlLabel,
                      null,
                      'Static text'
                    ),
                    _react2.default.createElement(
                      _FormControlStatic2.default,
                      null,
                      'email@example.com'
                    )
                  ),
                  _react2.default.createElement(
                    _reactBootstrap.FormGroup,
                    {
                      controlId: 'formBasicFile'
                    },
                    _react2.default.createElement(
                      _reactBootstrap.ControlLabel,
                      null,
                      'File Input'
                    ),
                    _react2.default.createElement(_reactBootstrap.FormControl, {
                      type: 'file'
                    }),
                    _react2.default.createElement(_FormControlFeedback2.default, null)
                  ),
                  _react2.default.createElement(
                    _reactBootstrap.FormGroup,
                    { controlId: 'formControlsTextarea' },
                    _react2.default.createElement(
                      _reactBootstrap.ControlLabel,
                      null,
                      'Textarea'
                    ),
                    _react2.default.createElement(_reactBootstrap.FormControl, { componentClass: 'textarea', placeholder: 'textarea' })
                  ),
                  _react2.default.createElement(
                    _reactBootstrap.FormGroup,
                    { controlId: 'formControlsCheckbox' },
                    _react2.default.createElement(
                      _reactBootstrap.ControlLabel,
                      null,
                      'CheckBox'
                    ),
                    _react2.default.createElement(
                      _reactBootstrap.Checkbox,
                      null,
                      'Checkbox #1 '
                    ),
                    _react2.default.createElement(
                      _reactBootstrap.Checkbox,
                      null,
                      ' Checkbox #2 '
                    ),
                    _react2.default.createElement(
                      _reactBootstrap.Checkbox,
                      null,
                      ' Checkbox #3 '
                    )
                  ),
                  _react2.default.createElement(
                    _reactBootstrap.FormGroup,
                    null,
                    _react2.default.createElement(
                      _reactBootstrap.ControlLabel,
                      null,
                      'Inline CheckBox'
                    ),
                    _react2.default.createElement(
                      _reactBootstrap.Col,
                      null,
                      _react2.default.createElement(
                        _reactBootstrap.Checkbox,
                        { inline: true },
                        '1'
                      ),
                      ' ',
                      _react2.default.createElement(
                        _reactBootstrap.Checkbox,
                        { inline: true },
                        '2'
                      ),
                      ' ',
                      _react2.default.createElement(
                        _reactBootstrap.Checkbox,
                        { inline: true },
                        '3'
                      )
                    )
                  ),
                  _react2.default.createElement(
                    _reactBootstrap.FormGroup,
                    null,
                    _react2.default.createElement(
                      _reactBootstrap.ControlLabel,
                      null,
                      'Inline Radio'
                    ),
                    _react2.default.createElement(
                      _reactBootstrap.Col,
                      null,
                      _react2.default.createElement(
                        _reactBootstrap.Radio,
                        { inline: true },
                        '1'
                      ),
                      ' ',
                      _react2.default.createElement(
                        _reactBootstrap.Radio,
                        { inline: true },
                        '2'
                      ),
                      ' ',
                      _react2.default.createElement(
                        _reactBootstrap.Radio,
                        { inline: true },
                        '3'
                      )
                    )
                  ),
                  _react2.default.createElement(
                    _reactBootstrap.FormGroup,
                    { controlId: 'formControlsSelect' },
                    _react2.default.createElement(
                      _reactBootstrap.ControlLabel,
                      null,
                      'Select'
                    ),
                    _react2.default.createElement(
                      _reactBootstrap.FormControl,
                      { componentClass: 'select', placeholder: 'select' },
                      _react2.default.createElement(
                        'option',
                        { value: '1' },
                        '1'
                      ),
                      _react2.default.createElement(
                        'option',
                        { value: '2' },
                        '2'
                      ),
                      _react2.default.createElement(
                        'option',
                        { value: '3' },
                        '3'
                      ),
                      _react2.default.createElement(
                        'option',
                        { value: '4' },
                        '4'
                      ),
                      _react2.default.createElement(
                        'option',
                        { value: '5' },
                        '5'
                      )
                    )
                  ),
                  _react2.default.createElement(
                    _reactBootstrap.FormGroup,
                    { controlId: 'formControlsSelectMultiple' },
                    _react2.default.createElement(
                      _reactBootstrap.ControlLabel,
                      null,
                      'Multiple select'
                    ),
                    _react2.default.createElement(
                      _reactBootstrap.FormControl,
                      { componentClass: 'select', multiple: true },
                      _react2.default.createElement(
                        'option',
                        { value: '1' },
                        '1'
                      ),
                      _react2.default.createElement(
                        'option',
                        { value: '2' },
                        '2'
                      ),
                      _react2.default.createElement(
                        'option',
                        { value: '3' },
                        '3'
                      ),
                      _react2.default.createElement(
                        'option',
                        { value: '4' },
                        '4'
                      ),
                      _react2.default.createElement(
                        'option',
                        { value: '5' },
                        '5'
                      )
                    )
                  ),
                  _react2.default.createElement(
                    _reactBootstrap.FormGroup,
                    null,
                    _react2.default.createElement(
                      _reactBootstrap.Button,
                      { type: 'submit' },
                      'Submit Button'
                    ),
                    '  ',
                    _react2.default.createElement(
                      _reactBootstrap.Button,
                      { type: 'reset' },
                      'Reset Button'
                    )
                  )
                )
              ),
              _react2.default.createElement(
                'div',
                { className: 'col-lg-6' },
                _react2.default.createElement(
                  'h1',
                  null,
                  'Disabled Form States'
                ),
                _react2.default.createElement(
                  _reactBootstrap.Form,
                  null,
                  _react2.default.createElement(
                    _reactBootstrap.FormGroup,
                    { controlId: 'formControlDisableState' },
                    _react2.default.createElement(
                      _reactBootstrap.ControlLabel,
                      null,
                      ' Disabled Input '
                    ),
                    _react2.default.createElement(_reactBootstrap.FormControl, { type: 'text', placeholder: 'Disabled Input', disabled: true })
                  ),
                  _react2.default.createElement(
                    _reactBootstrap.FormGroup,
                    { controlId: 'formControlsDisableSelect' },
                    _react2.default.createElement(
                      _reactBootstrap.ControlLabel,
                      null,
                      'Disabled Select'
                    ),
                    _react2.default.createElement(
                      _reactBootstrap.FormControl,
                      { componentClass: 'select', placeholder: 'select', disabled: true },
                      _react2.default.createElement(
                        'option',
                        { value: '1' },
                        '1'
                      ),
                      _react2.default.createElement(
                        'option',
                        { value: '2' },
                        '2'
                      )
                    )
                  ),
                  _react2.default.createElement(
                    _reactBootstrap.FormGroup,
                    { controlId: 'formControlsDisabledCheckbox' },
                    _react2.default.createElement(
                      _reactBootstrap.Checkbox,
                      { disabled: true },
                      'Disabled CheckBox'
                    )
                  ),
                  _react2.default.createElement(
                    _reactBootstrap.FormGroup,
                    { controlId: 'formControlsDisabledButton' },
                    _react2.default.createElement(
                      _reactBootstrap.Button,
                      { bsStyle: 'primary', type: 'submit', disabled: true },
                      'Disabled Button '
                    )
                  )
                ),
                _react2.default.createElement(
                  'h1',
                  null,
                  'Form Validation States'
                ),
                _react2.default.createElement(
                  _reactBootstrap.Form,
                  null,
                  _react2.default.createElement(
                    _reactBootstrap.FormGroup,
                    { controlId: 'formValidationSuccess2', validationState: 'success' },
                    _react2.default.createElement(
                      _reactBootstrap.ControlLabel,
                      null,
                      'Input with success'
                    ),
                    _react2.default.createElement(_reactBootstrap.FormControl, { type: 'text' }),
                    _react2.default.createElement(_FormControlFeedback2.default, null)
                  ),
                  _react2.default.createElement(
                    _reactBootstrap.FormGroup,
                    { controlId: 'formValidationWarning1', validationState: 'warning' },
                    _react2.default.createElement(
                      _reactBootstrap.ControlLabel,
                      null,
                      'Input with warning'
                    ),
                    _react2.default.createElement(_reactBootstrap.FormControl, { type: 'text' }),
                    _react2.default.createElement(_FormControlFeedback2.default, null)
                  ),
                  _react2.default.createElement(
                    _reactBootstrap.FormGroup,
                    { controlId: 'formValidationWarning1', validationState: 'error' },
                    _react2.default.createElement(
                      _reactBootstrap.ControlLabel,
                      null,
                      'Input with Error'
                    ),
                    _react2.default.createElement(_reactBootstrap.FormControl, { type: 'text' }),
                    _react2.default.createElement(_FormControlFeedback2.default, null)
                  )
                ),
                _react2.default.createElement(
                  'h1',
                  null,
                  'Input Groups'
                ),
                _react2.default.createElement(
                  _reactBootstrap.Form,
                  null,
                  _react2.default.createElement(
                    _reactBootstrap.FormGroup,
                    null,
                    _react2.default.createElement(
                      _reactBootstrap.InputGroup,
                      null,
                      _react2.default.createElement(
                        _InputGroupAddon2.default,
                        null,
                        '@'
                      ),
                      _react2.default.createElement(_reactBootstrap.FormControl, { type: 'text' })
                    )
                  ),
                  _react2.default.createElement(
                    _reactBootstrap.FormGroup,
                    null,
                    _react2.default.createElement(
                      _reactBootstrap.InputGroup,
                      null,
                      _react2.default.createElement(_reactBootstrap.FormControl, { type: 'text' }),
                      _react2.default.createElement(
                        _InputGroupAddon2.default,
                        null,
                        '.00'
                      )
                    )
                  ),
                  _react2.default.createElement(
                    _reactBootstrap.FormGroup,
                    null,
                    _react2.default.createElement(
                      _reactBootstrap.InputGroup,
                      null,
                      _react2.default.createElement(
                        _InputGroupAddon2.default,
                        null,
                        '$'
                      ),
                      _react2.default.createElement(_reactBootstrap.FormControl, { type: 'text' }),
                      _react2.default.createElement(
                        _InputGroupAddon2.default,
                        null,
                        '.00'
                      )
                    )
                  ),
                  _react2.default.createElement(
                    _reactBootstrap.FormGroup,
                    null,
                    _react2.default.createElement(
                      _reactBootstrap.InputGroup,
                      null,
                      _react2.default.createElement(_reactBootstrap.FormControl, { type: 'text' }),
                      _react2.default.createElement(
                        _InputGroupAddon2.default,
                        null,
                        _react2.default.createElement(_reactBootstrap.Glyphicon, { glyph: 'music' })
                      )
                    )
                  )
                )
              )
            )
          )
        )
      )
    );
  }
  
  displayForms.contextTypes = { setTitle: _react.PropTypes.func.isRequired };
  
  exports.default = displayForms;

/***/ }),
/* 165 */
/***/ (function(module, exports) {

  module.exports = require("react-bootstrap/lib/FormControlFeedback");

/***/ }),
/* 166 */
/***/ (function(module, exports) {

  module.exports = require("react-bootstrap/lib/FormControlStatic");

/***/ }),
/* 167 */
/***/ (function(module, exports) {

  module.exports = require("react-bootstrap/lib/InputGroupAddon");

/***/ }),
/* 168 */
/***/ (function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  
  var _react = __webpack_require__(11);
  
  var _react2 = _interopRequireDefault(_react);
  
  var _Grid = __webpack_require__(169);
  
  var _Grid2 = _interopRequireDefault(_Grid);
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  exports.default = {
  
    path: '/grid',
  
    action: function action() {
      return _react2.default.createElement(_Grid2.default, null);
    }
  };

/***/ }),
/* 169 */
/***/ (function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  
  var _react = __webpack_require__(11);
  
  var _react2 = _interopRequireDefault(_react);
  
  var _Panel = __webpack_require__(151);
  
  var _Panel2 = _interopRequireDefault(_Panel);
  
  var _PageHeader = __webpack_require__(157);
  
  var _PageHeader2 = _interopRequireDefault(_PageHeader);
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  var title = 'Grid';
  
  function displayGrid(props, context) {
    context.setTitle(title);
    return _react2.default.createElement(
      'div',
      null,
      _react2.default.createElement(
        'div',
        { className: 'row' },
        _react2.default.createElement(
          'div',
          { className: 'col-lg-12' },
          _react2.default.createElement(
            _PageHeader2.default,
            null,
            'Grid'
          )
        )
      ),
      _react2.default.createElement(
        'div',
        { className: 'row' },
        _react2.default.createElement(
          'div',
          { className: 'col-lg-12' },
          _react2.default.createElement(
            _Panel2.default,
            null,
            _react2.default.createElement(
              'h3',
              null,
              'Grid options'
            ),
            _react2.default.createElement(
              'p',
              null,
              'See how aspects of the Bootstrap grid system work across multiple devices with a handy table.'
            ),
            _react2.default.createElement(
              'div',
              { className: 'table-responsive' },
              _react2.default.createElement(
                'table',
                { className: 'table table-bordered table-striped' },
                _react2.default.createElement(
                  'thead',
                  null,
                  _react2.default.createElement(
                    'tr',
                    null,
                    _react2.default.createElement('th', null),
                    _react2.default.createElement(
                      'th',
                      null,
                      'Extra small devices',
                      _react2.default.createElement(
                        'small',
                        null,
                        'Phones (<768px)'
                      )
                    ),
                    _react2.default.createElement(
                      'th',
                      null,
                      'Small devices',
                      _react2.default.createElement(
                        'small',
                        null,
                        'Tablets (\u2265768px)'
                      )
                    ),
                    _react2.default.createElement(
                      'th',
                      null,
                      'Medium devices',
                      _react2.default.createElement(
                        'small',
                        null,
                        'Desktops (\u2265992px)'
                      )
                    ),
                    _react2.default.createElement(
                      'th',
                      null,
                      'Large devices',
                      _react2.default.createElement(
                        'small',
                        null,
                        'Desktops (\u22651200px)'
                      )
                    )
                  )
                ),
                _react2.default.createElement(
                  'tbody',
                  null,
                  _react2.default.createElement(
                    'tr',
                    null,
                    _react2.default.createElement(
                      'th',
                      null,
                      'Grid behavior'
                    ),
                    _react2.default.createElement(
                      'td',
                      null,
                      'Horizontal at all times'
                    ),
                    _react2.default.createElement(
                      'td',
                      { colSpan: '3' },
                      'Collapsed to start, horizontal above breakpoints'
                    )
                  ),
                  _react2.default.createElement(
                    'tr',
                    null,
                    _react2.default.createElement(
                      'th',
                      null,
                      'Max container width'
                    ),
                    _react2.default.createElement(
                      'td',
                      null,
                      'None (auto)'
                    ),
                    _react2.default.createElement(
                      'td',
                      null,
                      '750px'
                    ),
                    _react2.default.createElement(
                      'td',
                      null,
                      '970px'
                    ),
                    _react2.default.createElement(
                      'td',
                      null,
                      '1170px'
                    )
                  ),
                  _react2.default.createElement(
                    'tr',
                    null,
                    _react2.default.createElement(
                      'th',
                      null,
                      'Class prefix'
                    ),
                    _react2.default.createElement(
                      'td',
                      null,
                      _react2.default.createElement(
                        'code',
                        null,
                        '.col-xs-'
                      )
                    ),
                    _react2.default.createElement(
                      'td',
                      null,
                      _react2.default.createElement(
                        'code',
                        null,
                        '.col-sm-'
                      )
                    ),
                    _react2.default.createElement(
                      'td',
                      null,
                      _react2.default.createElement(
                        'code',
                        null,
                        '.col-md-'
                      )
                    ),
                    _react2.default.createElement(
                      'td',
                      null,
                      _react2.default.createElement(
                        'code',
                        null,
                        '.col-lg-'
                      )
                    )
                  ),
                  _react2.default.createElement(
                    'tr',
                    null,
                    _react2.default.createElement(
                      'th',
                      null,
                      '# of columns'
                    ),
                    _react2.default.createElement(
                      'td',
                      { colSpan: '4' },
                      '12'
                    )
                  ),
                  _react2.default.createElement(
                    'tr',
                    null,
                    _react2.default.createElement(
                      'th',
                      null,
                      'Max column width'
                    ),
                    _react2.default.createElement(
                      'td',
                      { className: 'text-muted' },
                      'Auto'
                    ),
                    _react2.default.createElement(
                      'td',
                      null,
                      '60px'
                    ),
                    _react2.default.createElement(
                      'td',
                      null,
                      '78px'
                    ),
                    _react2.default.createElement(
                      'td',
                      null,
                      '95px'
                    )
                  ),
                  _react2.default.createElement(
                    'tr',
                    null,
                    _react2.default.createElement(
                      'th',
                      null,
                      'Gutter width'
                    ),
                    _react2.default.createElement(
                      'td',
                      { colSpan: '4' },
                      '30px (15px on each side of a column)'
                    )
                  ),
                  _react2.default.createElement(
                    'tr',
                    null,
                    _react2.default.createElement(
                      'th',
                      null,
                      'Nestable'
                    ),
                    _react2.default.createElement(
                      'td',
                      { colSpan: '4' },
                      'Yes'
                    )
                  ),
                  _react2.default.createElement(
                    'tr',
                    null,
                    _react2.default.createElement(
                      'th',
                      null,
                      'Offsets'
                    ),
                    _react2.default.createElement(
                      'td',
                      { colSpan: '4' },
                      'Yes'
                    )
                  ),
                  _react2.default.createElement(
                    'tr',
                    null,
                    _react2.default.createElement(
                      'th',
                      null,
                      'Column ordering'
                    ),
                    _react2.default.createElement(
                      'td',
                      { colSpan: '4' },
                      'Yes'
                    )
                  )
                )
              )
            ),
            _react2.default.createElement(
              'p',
              null,
              'Grid classes apply to devices with screen widths greater than or equal to the breakpoint sizes, and override grid classes targeted at smaller devices. Therefore, applying any',
              _react2.default.createElement(
                'code',
                null,
                '.col-md-'
              ),
              ' class to an element will not only affect its styling on medium devices but also on large devices if a',
              _react2.default.createElement(
                'code',
                null,
                '.col-lg-'
              ),
              ' class is not present.'
            )
          )
        )
      ),
      _react2.default.createElement(
        'div',
        { className: 'row' },
        _react2.default.createElement(
          'div',
          { className: 'col-lg-12' },
          _react2.default.createElement(
            _Panel2.default,
            null,
            _react2.default.createElement(
              'h3',
              null,
              'Example: Stacked-to-horizontal'
            ),
            _react2.default.createElement(
              'p',
              null,
              'Using a single set of',
              _react2.default.createElement(
                'code',
                null,
                '.col-md-*'
              ),
              ' grid classes, you can create a default grid system that starts out stacked on mobile devices and tablet devices (the extra small to small range) before becoming horizontal on desktop (medium) devices. Place grid columns in any',
              _react2.default.createElement(
                'code',
                null,
                '.row'
              ),
              '.'
            ),
            _react2.default.createElement(
              'div',
              { className: 'row show-grid' },
              _react2.default.createElement(
                'div',
                { className: 'col-md-1' },
                '.col-md-1'
              ),
              _react2.default.createElement(
                'div',
                { className: 'col-md-1' },
                '.col-md-1'
              ),
              _react2.default.createElement(
                'div',
                { className: 'col-md-1' },
                '.col-md-1'
              ),
              _react2.default.createElement(
                'div',
                { className: 'col-md-1' },
                '.col-md-1'
              ),
              _react2.default.createElement(
                'div',
                { className: 'col-md-1' },
                '.col-md-1'
              ),
              _react2.default.createElement(
                'div',
                { className: 'col-md-1' },
                '.col-md-1'
              ),
              _react2.default.createElement(
                'div',
                { className: 'col-md-1' },
                '.col-md-1'
              ),
              _react2.default.createElement(
                'div',
                { className: 'col-md-1' },
                '.col-md-1'
              ),
              _react2.default.createElement(
                'div',
                { className: 'col-md-1' },
                '.col-md-1'
              ),
              _react2.default.createElement(
                'div',
                { className: 'col-md-1' },
                '.col-md-1'
              ),
              _react2.default.createElement(
                'div',
                { className: 'col-md-1' },
                '.col-md-1'
              ),
              _react2.default.createElement(
                'div',
                { className: 'col-md-1' },
                '.col-md-1'
              )
            ),
            _react2.default.createElement(
              'div',
              { className: 'row show-grid' },
              _react2.default.createElement(
                'div',
                { className: 'col-md-8' },
                '.col-md-8'
              ),
              _react2.default.createElement(
                'div',
                { className: 'col-md-4' },
                '.col-md-4'
              )
            ),
            _react2.default.createElement(
              'div',
              { className: 'row show-grid' },
              _react2.default.createElement(
                'div',
                { className: 'col-md-4' },
                '.col-md-4'
              ),
              _react2.default.createElement(
                'div',
                { className: 'col-md-4' },
                '.col-md-4'
              ),
              _react2.default.createElement(
                'div',
                { className: 'col-md-4' },
                '.col-md-4'
              )
            ),
            _react2.default.createElement(
              'div',
              { className: 'row show-grid' },
              _react2.default.createElement(
                'div',
                { className: 'col-md-6' },
                '.col-md-6'
              ),
              _react2.default.createElement(
                'div',
                { className: 'col-md-6' },
                '.col-md-6'
              )
            )
          )
        )
      ),
      _react2.default.createElement(
        'div',
        { className: 'row' },
        _react2.default.createElement(
          'div',
          { className: 'col-lg-12' },
          _react2.default.createElement(
            _Panel2.default,
            null,
            _react2.default.createElement(
              'h3',
              null,
              'Example: Mobile and desktop'
            ),
            _react2.default.createElement(
              'p',
              null,
              'Dont want your columns to simply stack in smaller devices? Use the extra small and medium device grid classes by adding ',
              _react2.default.createElement(
                'code',
                null,
                '.col-xs-*'
              ),
              ' ',
              _react2.default.createElement(
                'code',
                null,
                '.col-md-*'
              ),
              ' to your columns. See the example below for a better idea of how it all works.'
            ),
            _react2.default.createElement(
              'div',
              { className: 'row show-grid' },
              _react2.default.createElement(
                'div',
                { className: 'col-xs-12 col-md-8' },
                '.col-xs-12 .col-md-8'
              ),
              _react2.default.createElement(
                'div',
                { className: 'col-xs-6 col-md-4' },
                '.col-xs-6 .col-md-4'
              )
            ),
            _react2.default.createElement(
              'div',
              { className: 'row show-grid' },
              _react2.default.createElement(
                'div',
                { className: 'col-xs-6 col-md-4' },
                '.col-xs-6 .col-md-4'
              ),
              _react2.default.createElement(
                'div',
                { className: 'col-xs-6 col-md-4' },
                '.col-xs-6 .col-md-4'
              ),
              _react2.default.createElement(
                'div',
                { className: 'col-xs-6 col-md-4' },
                '.col-xs-6 .col-md-4'
              )
            ),
            _react2.default.createElement(
              'div',
              { className: 'row show-grid' },
              _react2.default.createElement(
                'div',
                { className: 'col-xs-6' },
                '.col-xs-6'
              ),
              _react2.default.createElement(
                'div',
                { className: 'col-xs-6' },
                '.col-xs-6'
              )
            )
          )
        )
      ),
      _react2.default.createElement(
        'div',
        { className: 'row' },
        _react2.default.createElement(
          'div',
          { className: 'col-lg-12' },
          _react2.default.createElement(
            _Panel2.default,
            null,
            _react2.default.createElement(
              'h3',
              null,
              'Example: Mobile, tablet, desktops'
            ),
            _react2.default.createElement(
              'p',
              null,
              'Build on the previous example by creating even more dynamic and powerful layouts with tablet ',
              _react2.default.createElement(
                'code',
                null,
                '.col-sm-*'
              ),
              ' classes.'
            ),
            _react2.default.createElement(
              'div',
              { className: 'row show-grid' },
              _react2.default.createElement(
                'div',
                { className: 'col-xs-12 col-sm-6 col-md-8' },
                '.col-xs-12 .col-sm-6 .col-md-8'
              ),
              _react2.default.createElement(
                'div',
                { className: 'col-xs-6 col-md-4' },
                '.col-xs-6 .col-md-4'
              )
            ),
            _react2.default.createElement(
              'div',
              { className: 'row show-grid' },
              _react2.default.createElement(
                'div',
                { className: 'col-xs-6 col-sm-4' },
                '.col-xs-6 .col-sm-4'
              ),
              _react2.default.createElement(
                'div',
                { className: 'col-xs-6 col-sm-4' },
                '.col-xs-6 .col-sm-4'
              ),
              _react2.default.createElement('div', { className: 'clearfix visible-xs' }),
              _react2.default.createElement(
                'div',
                { className: 'col-xs-6 col-sm-4' },
                '.col-xs-6 .col-sm-4'
              )
            )
          )
        )
      ),
      _react2.default.createElement(
        'div',
        { className: 'row' },
        _react2.default.createElement(
          'div',
          { className: 'col-lg-12' },
          _react2.default.createElement(
            _Panel2.default,
            null,
            _react2.default.createElement(
              'h3',
              { id: 'grid-responsive-resets' },
              'Responsive column resets'
            ),
            _react2.default.createElement(
              'p',
              null,
              'With the four tiers of grids available you\'re bound to run into issues where, at certain breakpoints, your columns don\'t clear quite right as one is taller than the other. To fix that, use a combination of a ',
              _react2.default.createElement(
                'code',
                null,
                '.clearfix'
              ),
              ' and our',
              _react2.default.createElement(
                'a',
                { href: '', onClick: function onClick(e) {
                    e.preventDefault();
                  } },
                'responsive utility classes'
              ),
              '.'
            ),
            _react2.default.createElement(
              'div',
              { className: 'row show-grid' },
              _react2.default.createElement(
                'div',
                { className: 'col-xs-6 col-sm-3' },
                '.col-xs-6 .col-sm-3',
                _react2.default.createElement('br', null),
                'Resize your viewport or check it out on your phone for an example.'
              ),
              _react2.default.createElement(
                'div',
                { className: 'col-xs-6 col-sm-3' },
                '.col-xs-6 .col-sm-3'
              ),
              _react2.default.createElement('div', { className: 'clearfix visible-xs' }),
              _react2.default.createElement(
                'div',
                { className: 'col-xs-6 col-sm-3' },
                '.col-xs-6 .col-sm-3'
              ),
              _react2.default.createElement(
                'div',
                { className: 'col-xs-6 col-sm-3' },
                '.col-xs-6 .col-sm-3'
              )
            )
          )
        )
      ),
      _react2.default.createElement(
        'div',
        { className: 'row' },
        _react2.default.createElement(
          'div',
          { className: 'col-lg-12' },
          _react2.default.createElement(
            _Panel2.default,
            null,
            _react2.default.createElement(
              'h3',
              { id: 'grid-offsetting' },
              'Offsetting columns'
            ),
            _react2.default.createElement(
              'p',
              null,
              'Move columns to the right using ',
              _react2.default.createElement(
                'code',
                null,
                '.col-md-offset-*'
              ),
              ' classes. These classes increase the left margin of a column by ',
              _react2.default.createElement(
                'code',
                null,
                '*'
              ),
              ' columns. For example, ',
              _react2.default.createElement(
                'code',
                null,
                '.col-md-offset-4'
              ),
              ' moves ',
              _react2.default.createElement(
                'code',
                null,
                '.col-md-4'
              ),
              ' over four columns.'
            ),
            _react2.default.createElement(
              'div',
              { className: 'row show-grid' },
              _react2.default.createElement(
                'div',
                { className: 'col-md-4' },
                '.col-md-4'
              ),
              _react2.default.createElement(
                'div',
                { className: 'col-md-4 col-md-offset-4' },
                '.col-md-4 .col-md-offset-4'
              )
            ),
            _react2.default.createElement(
              'div',
              { className: 'row show-grid' },
              _react2.default.createElement(
                'div',
                { className: 'col-md-3 col-md-offset-3' },
                '.col-md-3 .col-md-offset-3'
              ),
              _react2.default.createElement(
                'div',
                { className: 'col-md-3 col-md-offset-3' },
                '.col-md-3 .col-md-offset-3'
              )
            ),
            _react2.default.createElement(
              'div',
              { className: 'row show-grid' },
              _react2.default.createElement(
                'div',
                { className: 'col-md-6 col-md-offset-3' },
                '.col-md-6 .col-md-offset-3'
              )
            )
          )
        )
      ),
      _react2.default.createElement(
        'div',
        { className: 'row' },
        _react2.default.createElement(
          'div',
          { className: 'col-lg-12' },
          _react2.default.createElement(
            _Panel2.default,
            null,
            _react2.default.createElement(
              'h3',
              { id: 'grid-nesting' },
              'Nesting columns'
            ),
            _react2.default.createElement(
              'p',
              null,
              'To nest your content with the default grid, add a new ',
              _react2.default.createElement(
                'code',
                null,
                '.row'
              ),
              ' and set of',
              _react2.default.createElement(
                'code',
                null,
                '.col-md-*'
              ),
              ' columns within an existing ',
              _react2.default.createElement(
                'code',
                null,
                '.col-md-*'
              ),
              ' column. Nested rows should include a set of columns that add up to 12.'
            ),
            _react2.default.createElement(
              'div',
              { className: 'row show-grid' },
              _react2.default.createElement(
                'div',
                { className: 'col-md-9' },
                'Level 1: .col-md-9',
                _react2.default.createElement(
                  'div',
                  { className: 'row show-grid' },
                  _react2.default.createElement(
                    'div',
                    { className: 'col-md-6' },
                    'Level 2: .col-md-6'
                  ),
                  _react2.default.createElement(
                    'div',
                    { className: 'col-md-6' },
                    'Level 2: .col-md-6'
                  )
                )
              )
            )
          )
        )
      ),
      _react2.default.createElement(
        'div',
        { className: 'row' },
        _react2.default.createElement(
          'div',
          { className: 'col-lg-12' },
          _react2.default.createElement(
            _Panel2.default,
            null,
            _react2.default.createElement(
              'h3',
              { id: 'grid-column-ordering' },
              'Column ordering'
            ),
            _react2.default.createElement(
              'p',
              null,
              'Easily change the order of our built-in grid columns with',
              _react2.default.createElement(
                'code',
                null,
                '.col-md-push-*'
              ),
              ' and',
              _react2.default.createElement(
                'code',
                null,
                '.col-md-pull-*'
              ),
              ' modifier classes.'
            ),
            _react2.default.createElement(
              'div',
              { className: 'row show-grid' },
              _react2.default.createElement(
                'div',
                { className: 'col-md-9 col-md-push-3' },
                '.col-md-9 .col-md-push-3'
              ),
              _react2.default.createElement(
                'div',
                { className: 'col-md-3 col-md-pull-9' },
                '.col-md-3 .col-md-pull-9'
              )
            )
          )
        )
      )
    );
  }
  
  displayGrid.contextTypes = { setTitle: _react.PropTypes.func.isRequired };
  
  exports.default = displayGrid;

/***/ }),
/* 170 */
/***/ (function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  
  var _react = __webpack_require__(11);
  
  var _react2 = _interopRequireDefault(_react);
  
  var _onlineStore = __webpack_require__(171);
  
  var _onlineStore2 = _interopRequireDefault(_onlineStore);
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  exports.default = {
  
    path: '/onlineStore',
  
    action: function action() {
      return _react2.default.createElement(_onlineStore2.default, null);
    }
  };

/***/ }),
/* 171 */
/***/ (function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  
  var _react = __webpack_require__(11);
  
  var _react2 = _interopRequireDefault(_react);
  
  var _reactBootstrap = __webpack_require__(38);
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  var title = 'Online Store';
  
  var buttonStyle = {
    float: 'right',
    margin: '-7px -10px 0px 0px'
  };
  
  var logo = __webpack_require__(172);
  
  function displayOnlineStore(props, context) {
    context.setTitle(title);
    return _react2.default.createElement(
      'div',
      null,
      _react2.default.createElement(
        'div',
        { className: 'col-lg-12' },
        _react2.default.createElement(
          _reactBootstrap.PageHeader,
          null,
          'Online Store',
          _react2.default.createElement('i', { className: 'fa fa-shopping-cart fa-fw' })
        )
      ),
      _react2.default.createElement(
        'div',
        { className: 'row' },
        _react2.default.createElement(
          'div',
          { className: 'col-lg-4' },
          _react2.default.createElement(
            _reactBootstrap.Panel,
            {
              header: _react2.default.createElement(
                'span',
                null,
                'Club Jersey'
              ), className: 'panel-success',
  
              footer: _react2.default.createElement(
                'span',
                null,
                '\xA330',
                _react2.default.createElement(
                  _reactBootstrap.Button,
                  { bsStyle: 'primary', style: buttonStyle },
                  'Add to Basket'
                )
              )
            },
            _react2.default.createElement(
              'div',
              null,
              _react2.default.createElement('img', { src: logo, alt: 'Club Connect', title: 'ClubConnect' }),
              _react2.default.createElement(
                'p',
                null,
                '17 and above for all sports'
              ),
              _react2.default.createElement(
                _reactBootstrap.FormGroup,
                { controlId: 'formControlsSelect' },
                _react2.default.createElement(
                  _reactBootstrap.ControlLabel,
                  null,
                  'Size'
                ),
                _react2.default.createElement(
                  _reactBootstrap.FormControl,
                  { componentClass: 'select', placeholder: 'select' },
                  _react2.default.createElement(
                    'option',
                    { value: '1' },
                    '7-8'
                  ),
                  _react2.default.createElement(
                    'option',
                    { value: '2' },
                    '9-10'
                  ),
                  _react2.default.createElement(
                    'option',
                    { value: '3' },
                    '11-12'
                  ),
                  _react2.default.createElement(
                    'option',
                    { value: '4' },
                    '13-14'
                  ),
                  _react2.default.createElement(
                    'option',
                    { value: '5' },
                    'Small'
                  ),
                  _react2.default.createElement(
                    'option',
                    { value: '5' },
                    'Medium'
                  ),
                  _react2.default.createElement(
                    'option',
                    { value: '5' },
                    'Large'
                  )
                )
              ),
              _react2.default.createElement(
                _reactBootstrap.FormGroup,
                { controlId: 'formControlsSelect' },
                _react2.default.createElement(
                  _reactBootstrap.ControlLabel,
                  null,
                  'Quantity'
                ),
                _react2.default.createElement(
                  _reactBootstrap.FormControl,
                  { componentClass: 'select', placeholder: 'select' },
                  _react2.default.createElement(
                    'option',
                    { value: '1' },
                    '1'
                  ),
                  _react2.default.createElement(
                    'option',
                    { value: '2' },
                    '2'
                  ),
                  _react2.default.createElement(
                    'option',
                    { value: '3' },
                    '3'
                  ),
                  _react2.default.createElement(
                    'option',
                    { value: '4' },
                    '4'
                  ),
                  _react2.default.createElement(
                    'option',
                    { value: '5' },
                    '5'
                  )
                )
              )
            )
          )
        ),
        _react2.default.createElement(
          'div',
          { className: 'col-lg-4' },
          _react2.default.createElement(
            _reactBootstrap.Panel,
            {
              header: _react2.default.createElement(
                'span',
                null,
                _react2.default.createElement('i', { className: 'fa fa-shopping-basket fa-fw' }),
                'Basket'
              ), className: 'panel-primary',
              footer: _react2.default.createElement(
                'span',
                null,
                _react2.default.createElement(
                  _reactBootstrap.Button,
                  { bsStyle: 'success' },
                  'Buy Now'
                )
              )
            },
            _react2.default.createElement(
              'div',
              null,
              _react2.default.createElement(
                'p',
                null,
                '() items in basket'
              )
            )
          )
        )
      )
    );
  }
  
  displayOnlineStore.contextTypes = { setTitle: _react.PropTypes.func.isRequired };
  
  exports.default = displayOnlineStore;

/***/ }),
/* 172 */
/***/ (function(module, exports, __webpack_require__) {

  module.exports = __webpack_require__.p + "routes/dashboardPages/onlinestore/logo1.png?8a2775b651bd94385e39b7025ca10ce3";

/***/ }),
/* 173 */
/***/ (function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  
  var _react = __webpack_require__(11);
  
  var _react2 = _interopRequireDefault(_react);
  
  var _MorrisjsCharts = __webpack_require__(174);
  
  var _MorrisjsCharts2 = _interopRequireDefault(_MorrisjsCharts);
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  exports.default = {
  
    path: '/morrisjscharts',
  
    action: function action() {
      return _react2.default.createElement(_MorrisjsCharts2.default, null);
    }
  };

/***/ }),
/* 174 */
/***/ (function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  
  var _react = __webpack_require__(11);
  
  var _react2 = _interopRequireDefault(_react);
  
  var _Button = __webpack_require__(150);
  
  var _Button2 = _interopRequireDefault(_Button);
  
  var _Panel = __webpack_require__(151);
  
  var _Panel2 = _interopRequireDefault(_Panel);
  
  var _PageHeader = __webpack_require__(157);
  
  var _PageHeader2 = _interopRequireDefault(_PageHeader);
  
  var _Donut = __webpack_require__(57);
  
  var _Donut2 = _interopRequireDefault(_Donut);
  
  var _recharts = __webpack_require__(100);
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  // ResponsiveContainer is broken so we have customise the ResponsiveContainer
  
  var title = 'MorrisjsCharts';
  
  var data = [{ name: 'Page A', uv: 4000, pv: 2400, amt: 2400, value: 600 }, { name: 'Page B', uv: 3000, pv: 1398, amt: 2210, value: 300 }, { name: 'Page C', uv: 2000, pv: 9800, amt: 2290, value: 500 }, { name: 'Page D', uv: 2780, pv: 3908, amt: 2000, value: 400 }, { name: 'Page E', uv: 1890, pv: 4800, amt: 2181, value: 200 }, { name: 'Page F', uv: 2390, pv: 3800, amt: 2500, value: 700 }, { name: 'Page G', uv: 3490, pv: 4300, amt: 2100, value: 100 }];
  
  function displayMorrisjsCharts(props, context) {
    context.setTitle(title);
    return _react2.default.createElement(
      'div',
      null,
      _react2.default.createElement(
        'div',
        { className: 'row' },
        _react2.default.createElement(
          'div',
          { className: 'col-lg-12' },
          _react2.default.createElement(
            _PageHeader2.default,
            null,
            'Morris.js Charts'
          )
        )
      ),
      _react2.default.createElement(
        'div',
        { className: 'row' },
        _react2.default.createElement(
          'div',
          { className: 'col-lg-6' },
          _react2.default.createElement(
            _Panel2.default,
            { header: _react2.default.createElement(
                'span',
                null,
                'Area Chart Example'
              ) },
            _react2.default.createElement(
              'div',
              null,
              _react2.default.createElement(
                _recharts.ResponsiveContainer,
                { width: '100%', aspect: 2 },
                _react2.default.createElement(
                  _recharts.AreaChart,
                  { data: data, margin: { top: 10, right: 30, left: 0, bottom: 0 } },
                  _react2.default.createElement(_recharts.XAxis, { dataKey: 'name' }),
                  _react2.default.createElement(_recharts.YAxis, null),
                  _react2.default.createElement(_recharts.CartesianGrid, { stroke: '#ccc' }),
                  _react2.default.createElement(_recharts.Tooltip, null),
                  _react2.default.createElement(_recharts.Area, { type: 'monotone', dataKey: 'uv', stackId: '1', stroke: '#8884d8', fill: '#8884d8' }),
                  _react2.default.createElement(_recharts.Area, { type: 'monotone', dataKey: 'pv', stackId: '1', stroke: '#82ca9d', fill: '#82ca9d' }),
                  _react2.default.createElement(_recharts.Area, { type: 'monotone', dataKey: 'amt', stackId: '1', stroke: '#ffc658', fill: '#ffc658' })
                )
              )
            )
          )
        ),
        _react2.default.createElement(
          'div',
          { className: 'col-lg-6' },
          _react2.default.createElement(
            _Panel2.default,
            { header: _react2.default.createElement(
                'span',
                null,
                'Bar Chart Example'
              ) },
            _react2.default.createElement(
              'div',
              null,
              _react2.default.createElement(
                _recharts.ResponsiveContainer,
                { width: '100%', aspect: 2 },
                _react2.default.createElement(
                  _recharts.BarChart,
                  { data: data, margin: { top: 10, right: 30, left: 0, bottom: 0 } },
                  _react2.default.createElement(_recharts.CartesianGrid, { stroke: '#ccc' }),
                  _react2.default.createElement(_recharts.XAxis, { dataKey: 'name' }),
                  _react2.default.createElement(_recharts.YAxis, null),
                  _react2.default.createElement(_recharts.Tooltip, null),
                  _react2.default.createElement(_recharts.Bar, { dataKey: 'pv', stackId: '1', fill: '#8884d8' }),
                  _react2.default.createElement(_recharts.Bar, { dataKey: 'uv', stackId: '1', fill: '#82ca9d' }),
                  _react2.default.createElement(_recharts.Bar, { type: 'monotone', dataKey: 'amt', fill: '#ffc658' })
                )
              )
            )
          )
        ),
        _react2.default.createElement(
          'div',
          { className: 'col-lg-6' },
          _react2.default.createElement(
            _Panel2.default,
            { header: _react2.default.createElement(
                'span',
                null,
                'Line Chart Example'
              ) },
            _react2.default.createElement(
              'div',
              null,
              _react2.default.createElement(
                _recharts.ResponsiveContainer,
                { width: '100%', aspect: 2 },
                _react2.default.createElement(
                  _recharts.LineChart,
                  { data: data, margin: { top: 10, right: 30, left: 0, bottom: 0 } },
                  _react2.default.createElement(_recharts.CartesianGrid, { stroke: '#ccc' }),
                  _react2.default.createElement(_recharts.XAxis, { dataKey: 'name' }),
                  _react2.default.createElement(_recharts.YAxis, null),
                  _react2.default.createElement(_recharts.Tooltip, null),
                  _react2.default.createElement(_recharts.Line, { type: 'monotone', dataKey: 'uv', stroke: '#8884d8' }),
                  _react2.default.createElement(_recharts.Line, { type: 'monotone', dataKey: 'pv', stroke: '#82ca9d' }),
                  _react2.default.createElement(_recharts.Line, { type: 'monotone', dataKey: 'amt', stroke: '#ffc658' })
                )
              )
            )
          )
        ),
        _react2.default.createElement(
          'div',
          { className: 'col-lg-6' },
          _react2.default.createElement(
            _Panel2.default,
            { header: _react2.default.createElement(
                'span',
                null,
                'Donut Chart Example'
              ) },
            _react2.default.createElement(
              'div',
              null,
              _react2.default.createElement(_Donut2.default, { data: data, color: '#8884d8', innerRadius: '60', outerRadius: '80' })
            )
          )
        ),
        _react2.default.createElement(
          'div',
          { className: 'col-lg-12' },
          _react2.default.createElement(
            _Panel2.default,
            { header: _react2.default.createElement(
                'span',
                null,
                'Morris.js Usage'
              ) },
            _react2.default.createElement(
              'div',
              null,
              _react2.default.createElement(
                'p',
                null,
                'Morris Morris.js is a jQuery based charting plugin created by Olly Smith. In SB Admin, we are using the most recent version of Morris.js which includes the resize functions, which makes the charts fully responsive. The documentation for Morris.js is available on their website,',
                _react2.default.createElement(
                  'a',
                  { target: '_blank', rel: 'noopener noreferrer', href: 'http://morrisjs.github.io/morris.js/' },
                  '\'http://morrisjs.github.io/morris.js/\''
                ),
                '.'
              ),
              _react2.default.createElement(
                _Button2.default,
                { bsSize: 'large', block: true, href: 'http://morrisjs.github.io/morris.js/' },
                'View Morris.js Documentation'
              )
            )
          )
        )
      )
    );
  }
  
  displayMorrisjsCharts.contextTypes = { setTitle: _react.PropTypes.func.isRequired };
  
  exports.default = displayMorrisjsCharts;

/***/ }),
/* 175 */
/***/ (function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  
  var _react = __webpack_require__(11);
  
  var _react2 = _interopRequireDefault(_react);
  
  var _Notification = __webpack_require__(176);
  
  var _Notification2 = _interopRequireDefault(_Notification);
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  exports.default = {
  
    path: '/notification',
  
    action: function action() {
      return _react2.default.createElement(_Notification2.default, null);
    }
  };

/***/ }),
/* 176 */
/***/ (function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  
  var _getPrototypeOf = __webpack_require__(29);
  
  var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);
  
  var _classCallCheck2 = __webpack_require__(30);
  
  var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
  
  var _createClass2 = __webpack_require__(31);
  
  var _createClass3 = _interopRequireDefault(_createClass2);
  
  var _possibleConstructorReturn2 = __webpack_require__(32);
  
  var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);
  
  var _inherits2 = __webpack_require__(33);
  
  var _inherits3 = _interopRequireDefault(_inherits2);
  
  var _react = __webpack_require__(11);
  
  var _react2 = _interopRequireDefault(_react);
  
  var _Panel = __webpack_require__(151);
  
  var _Panel2 = _interopRequireDefault(_Panel);
  
  var _Alert = __webpack_require__(177);
  
  var _Alert2 = _interopRequireDefault(_Alert);
  
  var _Button = __webpack_require__(150);
  
  var _Button2 = _interopRequireDefault(_Button);
  
  var _OverlayTrigger = __webpack_require__(178);
  
  var _OverlayTrigger2 = _interopRequireDefault(_OverlayTrigger);
  
  var _Tooltip = __webpack_require__(179);
  
  var _Tooltip2 = _interopRequireDefault(_Tooltip);
  
  var _Popover = __webpack_require__(180);
  
  var _Popover2 = _interopRequireDefault(_Popover);
  
  var _Modal = __webpack_require__(181);
  
  var _Modal2 = _interopRequireDefault(_Modal);
  
  var _PageHeader = __webpack_require__(157);
  
  var _PageHeader2 = _interopRequireDefault(_PageHeader);
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  var Notification = function (_Component) {
    (0, _inherits3.default)(Notification, _Component);
  
    function Notification(props) {
      (0, _classCallCheck3.default)(this, Notification);
  
      var _this = (0, _possibleConstructorReturn3.default)(this, (Notification.__proto__ || (0, _getPrototypeOf2.default)(Notification)).call(this, props));
  
      _this.state = {
        alertVisibleA: true,
        alertVisibleB: true,
        alertVisibleC: true,
        alertVisibleD: true,
        showModal: false
      };
      _this.handleAlertDismiss = _this.handleAlertDismiss.bind(_this);
      return _this;
    }
  
    (0, _createClass3.default)(Notification, [{
      key: 'close',
      value: function close() {
        this.setState({ showModal: false });
      }
    }, {
      key: 'open',
      value: function open() {
        this.setState({ showModal: true });
      }
    }, {
      key: 'handleAlertDismiss',
      value: function handleAlertDismiss(option) {
        switch (option) {
          case 'A':
            this.setState({ alertVisibleA: false });
            break;
          case 'B':
            this.setState({ alertVisibleB: false });
            break;
          case 'C':
            this.setState({ alertVisibleC: false });
            break;
          case 'D':
            this.setState({ alertVisibleD: false });
            break;
          default:
            this.setState({
              alertVisibleA: false,
              alertVisibleB: false,
              alertVisibleC: false,
              alertVisibleD: false
            });
        }
      }
    }, {
      key: 'render',
      value: function render() {
        var _this2 = this;
  
        return _react2.default.createElement(
          'div',
          null,
          _react2.default.createElement(
            'div',
            { className: 'row' },
            _react2.default.createElement(
              'div',
              { className: 'col-lg-12' },
              _react2.default.createElement(
                _PageHeader2.default,
                null,
                'Notifications'
              )
            )
          ),
          _react2.default.createElement(
            'div',
            { className: 'row' },
            _react2.default.createElement(
              'div',
              { className: 'col-lg-6' },
              _react2.default.createElement(
                _Panel2.default,
                { header: _react2.default.createElement(
                    'span',
                    null,
                    'Alert Styles'
                  ) },
                _react2.default.createElement(
                  _Alert2.default,
                  { bsStyle: 'success' },
                  'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
                  _react2.default.createElement(
                    'a',
                    {
                      href: '',
                      onClick: function onClick(e) {
                        e.preventDefault();
                      },
                      className: 'alert-link'
                    },
                    'Alert Link'
                  ),
                  '.'
                ),
                _react2.default.createElement(
                  _Alert2.default,
                  { bsStyle: 'info' },
                  'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
                  _react2.default.createElement(
                    'a',
                    {
                      href: '',
                      onClick: function onClick(e) {
                        e.preventDefault();
                      },
                      className: 'alert-link'
                    },
                    'Alert Link'
                  ),
                  '.'
                ),
                _react2.default.createElement(
                  _Alert2.default,
                  { bsStyle: 'warning' },
                  'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
                  _react2.default.createElement(
                    'a',
                    {
                      href: '',
                      onClick: function onClick(e) {
                        e.preventDefault();
                      },
                      className: 'alert-link'
                    },
                    'Alert Link'
                  ),
                  '.'
                ),
                _react2.default.createElement(
                  _Alert2.default,
                  { bsStyle: 'danger' },
                  'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
                  _react2.default.createElement(
                    'a',
                    {
                      href: '',
                      onClick: function onClick(e) {
                        e.preventDefault();
                      },
                      className: 'alert-link'
                    },
                    'Alert Link'
                  ),
                  '.'
                )
              )
            ),
            _react2.default.createElement(
              'div',
              { className: 'col-lg-6' },
              _react2.default.createElement(
                _Panel2.default,
                { header: _react2.default.createElement(
                    'span',
                    null,
                    'Dismissable Alerts'
                  ) },
                this.state.alertVisibleA ? _react2.default.createElement(
                  _Alert2.default,
                  { bsStyle: 'success', onDismiss: function onDismiss() {
                      return _this2.handleAlertDismiss('A');
                    } },
                  'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
                  _react2.default.createElement(
                    'a',
                    {
                      href: '',
                      onClick: function onClick(e) {
                        e.preventDefault();
                      },
                      className: 'alert-link'
                    },
                    'Alert Link'
                  ),
                  '.'
                ) : null,
                this.state.alertVisibleB ? _react2.default.createElement(
                  _Alert2.default,
                  { bsStyle: 'info', onDismiss: function onDismiss() {
                      return _this2.handleAlertDismiss('B');
                    } },
                  'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
                  _react2.default.createElement(
                    'a',
                    {
                      href: '',
                      onClick: function onClick(e) {
                        e.preventDefault();
                      },
                      className: 'alert-link'
                    },
                    'Alert Link'
                  ),
                  '.'
                ) : null,
                this.state.alertVisibleC ? _react2.default.createElement(
                  _Alert2.default,
                  { bsStyle: 'warning', onDismiss: function onDismiss() {
                      return _this2.handleAlertDismiss('C');
                    } },
                  'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
                  _react2.default.createElement(
                    'a',
                    {
                      href: '',
                      onClick: function onClick(e) {
                        e.preventDefault();
                      },
                      className: 'alert-link'
                    },
                    'Alert Link'
                  ),
                  '.'
                ) : null,
                this.state.alertVisibleD ? _react2.default.createElement(
                  _Alert2.default,
                  { bsStyle: 'danger', onDismiss: function onDismiss() {
                      return _this2.handleAlertDismiss('D');
                    } },
                  'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
                  _react2.default.createElement(
                    'a',
                    {
                      href: '',
                      onClick: function onClick(e) {
                        e.preventDefault();
                      },
                      className: 'alert-link'
                    },
                    'Alert Link'
                  ),
                  '.'
                ) : null
              )
            )
          ),
          _react2.default.createElement(
            'div',
            { className: 'row' },
            _react2.default.createElement(
              'div',
              { className: 'col-lg-6' },
              _react2.default.createElement(
                _Panel2.default,
                { header: _react2.default.createElement(
                    'span',
                    null,
                    'Modals'
                  ) },
                _react2.default.createElement(
                  _Button2.default,
                  { bsStyle: 'primary', bsSize: 'large', onClick: this.open },
                  'Launch Demo Modal'
                ),
                _react2.default.createElement(
                  _Modal2.default,
                  { show: this.state.showModal, onHide: this.close },
                  _react2.default.createElement(
                    _Modal.Header,
                    { closeButton: true },
                    _react2.default.createElement(
                      _Modal.Title,
                      null,
                      'Modal Title'
                    )
                  ),
                  _react2.default.createElement(
                    _Modal.Body,
                    null,
                    _react2.default.createElement(
                      'p',
                      null,
                      'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
                    )
                  ),
                  _react2.default.createElement(
                    _Modal.Footer,
                    null,
                    _react2.default.createElement(
                      _Button2.default,
                      { onClick: this.close },
                      'Close'
                    ),
                    _react2.default.createElement(
                      _Button2.default,
                      { bsStyle: 'primary' },
                      ' Save changes'
                    )
                  )
                )
              )
            ),
            _react2.default.createElement(
              'div',
              { className: 'col-lg-6' },
              _react2.default.createElement(
                _Panel2.default,
                { header: _react2.default.createElement(
                    'span',
                    null,
                    'Tooltips and Popovers'
                  ) },
                _react2.default.createElement(
                  'h4',
                  null,
                  'Tooltip Demo'
                ),
                _react2.default.createElement(
                  'div',
                  null,
                  _react2.default.createElement(
                    _OverlayTrigger2.default,
                    {
                      placement: 'left',
                      overlay: _react2.default.createElement(
                        _Tooltip2.default,
                        { id: 'tooltip1' },
                        'Check this out!'
                      )
                    },
                    _react2.default.createElement(
                      _Button2.default,
                      null,
                      'Tooltip on left'
                    )
                  ),
                  _react2.default.createElement(
                    _OverlayTrigger2.default,
                    {
                      placement: 'top',
                      overlay: _react2.default.createElement(
                        _Tooltip2.default,
                        { id: 'tooltip2' },
                        'Check this out!'
                      )
                    },
                    _react2.default.createElement(
                      _Button2.default,
                      null,
                      'Tooltip on top'
                    )
                  ),
                  _react2.default.createElement(
                    _OverlayTrigger2.default,
                    {
                      placement: 'bottom',
                      overlay: _react2.default.createElement(
                        _Tooltip2.default,
                        { id: 'tooltip3' },
                        'Check this out!'
                      )
                    },
                    _react2.default.createElement(
                      _Button2.default,
                      null,
                      'Tooltip on bottom'
                    )
                  ),
                  _react2.default.createElement(
                    _OverlayTrigger2.default,
                    {
                      placement: 'right',
                      overlay: _react2.default.createElement(
                        _Tooltip2.default,
                        { id: 'tooltip4' },
                        'Check this out!'
                      )
                    },
                    _react2.default.createElement(
                      _Button2.default,
                      null,
                      'Tooltip on right'
                    )
                  )
                ),
                _react2.default.createElement('br', null),
                _react2.default.createElement(
                  'h4',
                  null,
                  'Clickable Popover Demo'
                ),
                _react2.default.createElement(
                  'div',
                  null,
                  _react2.default.createElement(
                    _OverlayTrigger2.default,
                    {
                      trigger: 'click',
                      placement: 'left',
                      overlay: _react2.default.createElement(
                        _Popover2.default,
                        { id: 'popover1', title: 'Popover left' },
                        _react2.default.createElement(
                          'strong',
                          null,
                          'Hello!'
                        ),
                        ' Check this info.'
                      ) },
                    _react2.default.createElement(
                      _Button2.default,
                      null,
                      'Popover on left'
                    )
                  ),
                  _react2.default.createElement(
                    _OverlayTrigger2.default,
                    {
                      trigger: 'click',
                      placement: 'top',
                      overlay: _react2.default.createElement(
                        _Popover2.default,
                        { id: 'popover2', title: 'Popover top' },
                        _react2.default.createElement(
                          'strong',
                          null,
                          'Hello!'
                        ),
                        ' Check this info.'
                      )
                    },
                    _react2.default.createElement(
                      _Button2.default,
                      null,
                      'Popover on top'
                    )
                  ),
                  _react2.default.createElement(
                    _OverlayTrigger2.default,
                    {
                      trigger: 'click',
                      placement: 'bottom',
                      overlay: _react2.default.createElement(
                        _Popover2.default,
                        { id: 'popover3', title: 'Popover bottom' },
                        _react2.default.createElement(
                          'strong',
                          null,
                          'Hello!'
                        ),
                        ' Check this info.'
                      ) },
                    _react2.default.createElement(
                      _Button2.default,
                      null,
                      'Popover on bottom'
                    )
                  ),
                  _react2.default.createElement(
                    _OverlayTrigger2.default,
                    {
                      trigger: 'click',
                      placement: 'right',
                      overlay: _react2.default.createElement(
                        _Popover2.default,
                        { id: 'popover4', title: 'Popover right' },
                        _react2.default.createElement(
                          'strong',
                          null,
                          'Hello!'
                        ),
                        ' Check this info.'
                      ) },
                    _react2.default.createElement(
                      _Button2.default,
                      null,
                      'Popover on right'
                    )
                  )
                )
              )
            )
          )
        );
      }
    }]);
    return Notification;
  }(_react.Component);
  
  exports.default = Notification;

/***/ }),
/* 177 */
/***/ (function(module, exports) {

  module.exports = require("react-bootstrap/lib/Alert");

/***/ }),
/* 178 */
/***/ (function(module, exports) {

  module.exports = require("react-bootstrap/lib/OverlayTrigger");

/***/ }),
/* 179 */
/***/ (function(module, exports) {

  module.exports = require("react-bootstrap/lib/Tooltip");

/***/ }),
/* 180 */
/***/ (function(module, exports) {

  module.exports = require("react-bootstrap/lib/Popover");

/***/ }),
/* 181 */
/***/ (function(module, exports) {

  module.exports = require("react-bootstrap/lib/Modal");

/***/ }),
/* 182 */
/***/ (function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  
  var _react = __webpack_require__(11);
  
  var _react2 = _interopRequireDefault(_react);
  
  var _membershipReg = __webpack_require__(183);
  
  var _membershipReg2 = _interopRequireDefault(_membershipReg);
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  exports.default = {
  
    path: '/membershipReg',
  
    action: function action() {
      return _react2.default.createElement(_membershipReg2.default, null);
    }
  };

/***/ }),
/* 183 */
/***/ (function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  
  var _react = __webpack_require__(11);
  
  var _react2 = _interopRequireDefault(_react);
  
  var _reactBootstrap = __webpack_require__(38);
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  var title = 'Membership Registration';
  
  var buttonStyle = {
    float: 'right',
    margin: '-7px -10px 0px 0px'
  };
  
  function displayMembershipRegistration(props, context) {
    context.setTitle(title);
    return _react2.default.createElement(
      'div',
      null,
      _react2.default.createElement(
        'div',
        { className: 'col-lg-12' },
        _react2.default.createElement(
          _reactBootstrap.PageHeader,
          null,
          'Membership Registration  ',
          _react2.default.createElement('i', { className: 'fa fa-user-plus fa-fw' })
        )
      ),
      _react2.default.createElement(
        'div',
        { className: 'row' },
        _react2.default.createElement(
          'div',
          { className: 'col-lg-8' },
          _react2.default.createElement(
            _reactBootstrap.Panel,
            {
              header: _react2.default.createElement(
                'span',
                null,
                'Adult Membership'
              ), className: 'panel-success',
              footer: _react2.default.createElement(
                'span',
                null,
                '\xA330',
                _react2.default.createElement(
                  _reactBootstrap.Button,
                  { bsStyle: 'primary', style: buttonStyle },
                  'Add to Basket'
                )
              )
            },
            _react2.default.createElement(
              'div',
              null,
              _react2.default.createElement(
                'p',
                null,
                '17 and above for all sports'
              )
            )
          )
        ),
        _react2.default.createElement(
          'div',
          { className: 'col-lg-4' },
          _react2.default.createElement(
            _reactBootstrap.Panel,
            {
              header: _react2.default.createElement(
                'span',
                null,
                _react2.default.createElement('i', { className: 'fa fa-shopping-basket fa-fw' }),
                'Basket'
              ), className: 'panel-primary',
              footer: _react2.default.createElement(
                'span',
                null,
                _react2.default.createElement(
                  _reactBootstrap.Button,
                  { bsStyle: 'success' },
                  'Buy Now'
                )
              )
            },
            _react2.default.createElement(
              'div',
              null,
              _react2.default.createElement(
                'p',
                null,
                '() items in basket'
              )
            )
          )
        ),
        _react2.default.createElement(
          'div',
          { className: 'col-lg-8' },
          _react2.default.createElement(
            _reactBootstrap.Panel,
            {
              header: _react2.default.createElement(
                'span',
                null,
                'Student Membership'
              ), className: 'panel-success',
              footer: _react2.default.createElement(
                'span',
                null,
                '\xA315',
                _react2.default.createElement(
                  _reactBootstrap.Button,
                  { bsStyle: 'primary', style: buttonStyle },
                  'Add to Basket'
                )
              )
            },
            _react2.default.createElement(
              'div',
              null,
              _react2.default.createElement(
                'p',
                null,
                'Anyone still in full time education'
              )
            )
          )
        ),
        _react2.default.createElement(
          'div',
          { className: 'col-lg-8' },
          _react2.default.createElement(
            _reactBootstrap.Panel,
            {
              header: _react2.default.createElement(
                'span',
                null,
                'Children Membership'
              ), className: 'panel-success',
              footer: _react2.default.createElement(
                'span',
                null,
                '\xA315',
                _react2.default.createElement(
                  _reactBootstrap.Button,
                  { bsStyle: 'primary', style: buttonStyle },
                  'Add to Basket'
                )
              )
            },
            _react2.default.createElement(
              'div',
              null,
              _react2.default.createElement(
                'p',
                null,
                '16 or below for all sports '
              )
            )
          )
        )
      )
    );
  }
  
  displayMembershipRegistration.contextTypes = { setTitle: _react.PropTypes.func.isRequired };
  
  exports.default = displayMembershipRegistration;

/***/ }),
/* 184 */
/***/ (function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  
  var _react = __webpack_require__(11);
  
  var _react2 = _interopRequireDefault(_react);
  
  var _chat = __webpack_require__(185);
  
  var _chat2 = _interopRequireDefault(_chat);
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  exports.default = {
  
    path: '/chat',
  
    action: function action() {
      return _react2.default.createElement(_chat2.default, null);
    }
  };

/***/ }),
/* 185 */
/***/ (function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  
  var _getPrototypeOf = __webpack_require__(29);
  
  var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);
  
  var _classCallCheck2 = __webpack_require__(30);
  
  var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
  
  var _createClass2 = __webpack_require__(31);
  
  var _createClass3 = _interopRequireDefault(_createClass2);
  
  var _possibleConstructorReturn2 = __webpack_require__(32);
  
  var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);
  
  var _inherits2 = __webpack_require__(33);
  
  var _inherits3 = _interopRequireDefault(_inherits2);
  
  var _react = __webpack_require__(11);
  
  var _react2 = _interopRequireDefault(_react);
  
  var _Panel = __webpack_require__(151);
  
  var _Panel2 = _interopRequireDefault(_Panel);
  
  var _PageHeader = __webpack_require__(157);
  
  var _PageHeader2 = _interopRequireDefault(_PageHeader);
  
  var _MessageList = __webpack_require__(186);
  
  var _MessageList2 = _interopRequireDefault(_MessageList);
  
  var _firebase = __webpack_require__(187);
  
  var _firebase2 = _interopRequireDefault(_firebase);
  
  var _MessageBox = __webpack_require__(188);
  
  var _MessageBox2 = _interopRequireDefault(_MessageBox);
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  var title = 'Chat';
  
  var Chat = function (_Component) {
    (0, _inherits3.default)(Chat, _Component);
  
    function Chat(props) {
      (0, _classCallCheck3.default)(this, Chat);
  
      var _this = (0, _possibleConstructorReturn3.default)(this, (Chat.__proto__ || (0, _getPrototypeOf2.default)(Chat)).call(this, props));
  
      var config = {
        apiKey: "AIzaSyCOgQiq1Tq6Cdgx60UVZ6a2mp-42T9XNJ0",
        authDomain: "clubconnect-c4852.firebaseapp.com",
        databaseURL: "https://clubconnect-c4852.firebaseio.com",
        projectId: "clubconnect-c4852",
        storageBucket: "clubconnect-c4852.appspot.com",
        messagingSenderId: "270307080443"
      };
      _firebase2.default.initializeApp(config);
      return _this;
    }
  
    (0, _createClass3.default)(Chat, [{
      key: 'render',
      value: function render() {
        return _react2.default.createElement(
          'div',
          { className: 'container' },
          _react2.default.createElement(
            'div',
            { className: 'columns' },
            _react2.default.createElement('div', { className: 'column is-3' }),
            _react2.default.createElement(
              'div',
              { className: 'column is-6' },
              _react2.default.createElement(_MessageList2.default, { db: _firebase2.default })
            )
          ),
          _react2.default.createElement(
            'div',
            { className: 'columns' },
            _react2.default.createElement('div', { className: 'column is-3' }),
            _react2.default.createElement(
              'div',
              { className: 'column is-6' },
              _react2.default.createElement(_MessageBox2.default, { db: _firebase2.default })
            )
          )
        );
      }
    }]);
    return Chat;
  }(_react.Component);
  
  exports.default = Chat;

/***/ }),
/* 186 */
/***/ (function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  
  var _getPrototypeOf = __webpack_require__(29);
  
  var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);
  
  var _classCallCheck2 = __webpack_require__(30);
  
  var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
  
  var _createClass2 = __webpack_require__(31);
  
  var _createClass3 = _interopRequireDefault(_createClass2);
  
  var _possibleConstructorReturn2 = __webpack_require__(32);
  
  var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);
  
  var _inherits2 = __webpack_require__(33);
  
  var _inherits3 = _interopRequireDefault(_inherits2);
  
  var _react = __webpack_require__(11);
  
  var _react2 = _interopRequireDefault(_react);
  
  var _Message = __webpack_require__(202);
  
  var _Message2 = _interopRequireDefault(_Message);
  
  var _lodash = __webpack_require__(203);
  
  var _lodash2 = _interopRequireDefault(_lodash);
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  var MessageList = function (_Component) {
    (0, _inherits3.default)(MessageList, _Component);
  
    function MessageList(props) {
      (0, _classCallCheck3.default)(this, MessageList);
  
      var _this = (0, _possibleConstructorReturn3.default)(this, (MessageList.__proto__ || (0, _getPrototypeOf2.default)(MessageList)).call(this, props));
  
      _this.state = {
        messages: []
      };
      var app = _this.props.db.database().ref('messages');
      app.on('value', function (snapshot) {
        _this.getData(snapshot.val());
      });
      return _this;
    }
  
    (0, _createClass3.default)(MessageList, [{
      key: 'getData',
      value: function getData(values) {
        var messagesVal = values;
        var messages = (0, _lodash2.default)(messagesVal).keys().map(function (messageKey) {
          var cloned = _lodash2.default.clone(messagesVal[messageKey]);
          cloned.key = messageKey;
          return cloned;
        }).value();
        this.setState({
          messages: messages
        });
      }
    }, {
      key: 'render',
      value: function render() {
        var messageNodes = this.state.messages.map(function (message) {
          return _react2.default.createElement(
            'div',
            { className: 'card' },
            _react2.default.createElement(
              'div',
              { className: 'card-content' },
              _react2.default.createElement(_Message2.default, { message: message.message })
            )
          );
        });
        return _react2.default.createElement(
          'div',
          null,
          messageNodes
        );
      }
    }]);
    return MessageList;
  }(_react.Component);
  
  exports.default = MessageList;

/***/ }),
/* 187 */
/***/ (function(module, exports) {

  module.exports = require("firebase");

/***/ }),
/* 188 */
/***/ (function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  
  var _getPrototypeOf = __webpack_require__(29);
  
  var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);
  
  var _classCallCheck2 = __webpack_require__(30);
  
  var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
  
  var _createClass2 = __webpack_require__(31);
  
  var _createClass3 = _interopRequireDefault(_createClass2);
  
  var _possibleConstructorReturn2 = __webpack_require__(32);
  
  var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);
  
  var _inherits2 = __webpack_require__(33);
  
  var _inherits3 = _interopRequireDefault(_inherits2);
  
  var _react = __webpack_require__(11);
  
  var _react2 = _interopRequireDefault(_react);
  
  var _trim = __webpack_require__(189);
  
  var _trim2 = _interopRequireDefault(_trim);
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  var MessageBox = function (_Component) {
    (0, _inherits3.default)(MessageBox, _Component);
  
    function MessageBox(props) {
      (0, _classCallCheck3.default)(this, MessageBox);
  
      var _this = (0, _possibleConstructorReturn3.default)(this, (MessageBox.__proto__ || (0, _getPrototypeOf2.default)(MessageBox)).call(this, props));
  
      _this.onChange = _this.onChange.bind(_this);
      _this.onKeyup = _this.onKeyup.bind(_this);
      _this.state = {
        message: ''
      };
      return _this;
    }
  
    (0, _createClass3.default)(MessageBox, [{
      key: 'onChange',
      value: function onChange(e) {
        this.setState({
          message: e.target.value
        });
      }
    }, {
      key: 'onKeyup',
      value: function onKeyup(e) {
        if (e.keyCode === 13 && (0, _trim2.default)(e.target.value) !== '') {
          e.preventDefault();
          var dbCon = this.props.db.database().ref('/messages');
          dbCon.push({
            message: (0, _trim2.default)(e.target.value)
          });
          this.setState({
            message: ''
          });
        }
      }
    }, {
      key: 'render',
      value: function render() {
        return _react2.default.createElement(
          'form',
          null,
          _react2.default.createElement('textarea', {
            className: 'textarea',
            placeholder: 'Type a message',
            cols: '100',
            onChange: this.onChange,
            onKeyUp: this.onKeyup,
            value: this.state.message })
        );
      }
    }]);
    return MessageBox;
  }(_react.Component);
  
  exports.default = MessageBox;

/***/ }),
/* 189 */
/***/ (function(module, exports) {

  module.exports = require("trim");

/***/ }),
/* 190 */
/***/ (function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  
  var _react = __webpack_require__(11);
  
  var _react2 = _interopRequireDefault(_react);
  
  var _resultsFixtures = __webpack_require__(191);
  
  var _resultsFixtures2 = _interopRequireDefault(_resultsFixtures);
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  exports.default = {
    path: '/resultsFixtures',
  
    action: function action() {
      return _react2.default.createElement(_resultsFixtures2.default, null);
    }
  };

/***/ }),
/* 191 */
/***/ (function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  
  var _react = __webpack_require__(11);
  
  var _react2 = _interopRequireDefault(_react);
  
  var _reactBootstrap = __webpack_require__(38);
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  var title = 'Results and Fixtures';
  
  var buttonStyle = {
    float: 'right',
    margin: '-7px -10px 0px 0px'
  };
  
  function resultsFixtures(props, context) {
    context.setTitle(title);
    return _react2.default.createElement(
      'div',
      null,
      _react2.default.createElement(
        'div',
        { className: 'col-lg-12' },
        _react2.default.createElement(
          _reactBootstrap.PageHeader,
          null,
          'Results and Fixtures'
        )
      ),
      _react2.default.createElement(
        'div',
        { className: 'row' },
        _react2.default.createElement(
          'div',
          { className: 'col-lg-8' },
          _react2.default.createElement(
            _reactBootstrap.Panel,
            {
              header: _react2.default.createElement(
                'span',
                null,
                'Results'
              ), className: 'panel-success',
              footer: _react2.default.createElement(
                'span',
                null,
                'Last 7 days'
              )
            },
            _react2.default.createElement(
              'div',
              null,
              _react2.default.createElement('p', null)
            )
          )
        ),
        _react2.default.createElement(
          'div',
          { className: 'col-lg-4' },
          _react2.default.createElement(
            _reactBootstrap.Panel,
            {
              header: _react2.default.createElement(
                'span',
                null,
                'Club Lotto Results'
              ), className: 'panel-primary',
              footer: _react2.default.createElement(
                'span',
                null,
                ' Next weeks lotto - \xA35000 '
              )
            },
            _react2.default.createElement(
              'div',
              null,
              _react2.default.createElement(
                'p',
                null,
                '4 6 15 7 No Winners'
              )
            )
          )
        ),
        _react2.default.createElement(
          'div',
          { className: 'col-lg-8' },
          _react2.default.createElement(
            _reactBootstrap.Panel,
            {
              header: _react2.default.createElement(
                'span',
                null,
                'Fixtures'
              ), className: 'panel-success',
              footer: _react2.default.createElement(
                'span',
                null,
                'Next 7 days'
              )
            },
            _react2.default.createElement(
              'div',
              null,
              _react2.default.createElement(
                'p',
                null,
                'u14/u16 Football Training 7pm Tuesday and Thursday'
              ),
              _react2.default.createElement(
                'p',
                null,
                'Senior camogie training 7.30 Wednesday & Friday'
              )
            )
          )
        )
      )
    );
  }
  
  resultsFixtures.contextTypes = { setTitle: _react.PropTypes.func.isRequired };
  
  exports.default = resultsFixtures;

/***/ }),
/* 192 */
/***/ (function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  
  var _react = __webpack_require__(11);
  
  var _react2 = _interopRequireDefault(_react);
  
  var _App = __webpack_require__(28);
  
  var _App2 = _interopRequireDefault(_App);
  
  var _ErrorPage = __webpack_require__(17);
  
  var _ErrorPage2 = _interopRequireDefault(_ErrorPage);
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  exports.default = {
  
    path: '/error',
  
    action: function action(_ref) {
      var render = _ref.render,
          context = _ref.context,
          error = _ref.error;
  
      // console.log('error obj inside error index.js', error);
      return render(_react2.default.createElement(
        _App2.default,
        { context: context, error: error },
        _react2.default.createElement(_ErrorPage2.default, { error: error })
      ), error.status || 500);
    }
  }; /**
      * React Starter Kit (https://www.reactstarterkit.com/)
      *
      * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
      *
      * This source code is licensed under the MIT license found in the
      * LICENSE.txt file in the root directory of this source tree.
      */

/***/ }),
/* 193 */
/***/ (function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  
  var _react = __webpack_require__(11);
  
  var _react2 = _interopRequireDefault(_react);
  
  var _clubs = __webpack_require__(194);
  
  var _clubs2 = _interopRequireDefault(_clubs);
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  exports.default = {
  
    path: '/clubs',
  
    action: function action() {
      return _react2.default.createElement(_clubs2.default, null);
    }
  };

/***/ }),
/* 194 */
/***/ (function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  
  var _react = __webpack_require__(11);
  
  var _react2 = _interopRequireDefault(_react);
  
  var _withStyles = __webpack_require__(18);
  
  var _withStyles2 = _interopRequireDefault(_withStyles);
  
  var _reactBootstrap = __webpack_require__(38);
  
  var _clubs = __webpack_require__(195);
  
  var _clubs2 = _interopRequireDefault(_clubs);
  
  var _Widget = __webpack_require__(52);
  
  var _Widget2 = _interopRequireDefault(_Widget);
  
  var _Donut = __webpack_require__(57);
  
  var _Donut2 = _interopRequireDefault(_Donut);
  
  var _recharts = __webpack_require__(100);
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  var title = 'Club Connect';
  
  var data = [{ name: 'Page A', uv: 4000, pv: 2400, amt: 2400, value: 600 }, { name: 'Page B', uv: 3000, pv: 1398, amt: 2210, value: 300 }, { name: 'Page C', uv: 2000, pv: 9800, amt: 2290, value: 500 }, { name: 'Page D', uv: 2780, pv: 3908, amt: 2000, value: 400 }, { name: 'Page E', uv: 1890, pv: 4800, amt: 2181, value: 200 }, { name: 'Page F', uv: 2390, pv: 3800, amt: 2500, value: 700 }, { name: 'Page G', uv: 3490, pv: 4300, amt: 2100, value: 100 }];
  
  function Clubs(props, context) {
    context.setTitle(title);
    return _react2.default.createElement(
      'div',
      null,
      _react2.default.createElement(
        'div',
        { className: 'row' },
        _react2.default.createElement(
          'div',
          { className: 'col-lg-12' },
          _react2.default.createElement(
            _reactBootstrap.PageHeader,
            null,
            'Welcome to ClubConnect'
          )
        )
      ),
      _react2.default.createElement(
        'div',
        { className: 'row' },
        _react2.default.createElement(
          'div',
          { className: 'col-lg-6 col-md-6' },
          _react2.default.createElement(_Widget2.default, {
            style: 'panel-primary',
            icon: 'fa fa-comments fa-5x',
            count: '26',
            headerText: 'Group Chat',
            footerText: 'View chat',
            linkTo: '/chat'
          })
        ),
        _react2.default.createElement(
          'div',
          { className: 'col-lg-6 col-md-6' },
          _react2.default.createElement(_Widget2.default, {
            style: 'panel-green',
            icon: 'fa fa-user-plus fa-5x',
            count: '12',
            headerText: 'Become a member',
            footerText: 'View Details',
            linkTo: '/membershipReg'
          })
        ),
        _react2.default.createElement(
          'div',
          { className: 'col-lg-6 col-md-6' },
          _react2.default.createElement(_Widget2.default, {
            style: 'panel-yellow',
            icon: 'fa fa-shopping-cart fa-5x',
            count: '124',
            headerText: 'Shop our online store',
            footerText: 'View Club Gear',
            linkTo: '/onlineStore'
          })
        ),
        _react2.default.createElement(
          'div',
          { className: 'col-lg-6 col-md-6' },
          _react2.default.createElement(_Widget2.default, {
            style: 'panel-red',
            icon: 'fa fa-tasks fa-5x',
            count: '13',
            headerText: 'Results / Fixtures',
            footerText: 'View Details',
            linkTo: '/resultsFixtures'
          })
        )
      ),
      _react2.default.createElement(
        'div',
        { className: 'row' },
        _react2.default.createElement(
          'div',
          { className: 'col-lg-8' },
          _react2.default.createElement(
            _reactBootstrap.Panel,
            {
              header: _react2.default.createElement(
                'span',
                null,
                _react2.default.createElement('i', { className: 'fa fa-bar-chart-o fa-fw' }),
                ' Area Chart Example',
                _react2.default.createElement(
                  'div',
                  { className: 'pull-right' },
                  _react2.default.createElement(
                    _reactBootstrap.DropdownButton,
                    { title: 'Dropdown', bsSize: 'xs', pullRight: true, id: 'dropdownButton1' },
                    _react2.default.createElement(
                      _reactBootstrap.MenuItem,
                      { eventKey: '1' },
                      'Action'
                    ),
                    _react2.default.createElement(
                      _reactBootstrap.MenuItem,
                      { eventKey: '2' },
                      'Another action'
                    ),
                    _react2.default.createElement(
                      _reactBootstrap.MenuItem,
                      { eventKey: '3' },
                      'Something else here'
                    ),
                    _react2.default.createElement(_reactBootstrap.MenuItem, { divider: true }),
                    _react2.default.createElement(
                      _reactBootstrap.MenuItem,
                      { eventKey: '4' },
                      'Separated link'
                    )
                  )
                )
              )
            },
            _react2.default.createElement(
              'div',
              null,
              _react2.default.createElement(
                _recharts.ResponsiveContainer,
                { width: '100%', aspect: 2 },
                _react2.default.createElement(
                  _recharts.AreaChart,
                  { data: data, margin: { top: 10, right: 30, left: 0, bottom: 0 } },
                  _react2.default.createElement(_recharts.XAxis, { dataKey: 'name' }),
                  _react2.default.createElement(_recharts.YAxis, null),
                  _react2.default.createElement(_recharts.CartesianGrid, { stroke: '#ccc' }),
                  _react2.default.createElement(_recharts.Tooltip, null),
                  _react2.default.createElement(_recharts.Area, { type: 'monotone', dataKey: 'uv', stackId: '1', stroke: '#8884d8', fill: '#8884d8' }),
                  _react2.default.createElement(_recharts.Area, { type: 'monotone', dataKey: 'pv', stackId: '1', stroke: '#82ca9d', fill: '#82ca9d' }),
                  _react2.default.createElement(_recharts.Area, { type: 'monotone', dataKey: 'amt', stackId: '1', stroke: '#ffc658', fill: '#ffc658' })
                )
              )
            )
          ),
          _react2.default.createElement(
            _reactBootstrap.Panel,
            {
              header: _react2.default.createElement(
                'span',
                null,
                _react2.default.createElement('i', { className: 'fa fa-bar-chart-o fa-fw' }),
                ' Bar Chart Example',
                _react2.default.createElement(
                  'div',
                  { className: 'pull-right' },
                  _react2.default.createElement(
                    _reactBootstrap.DropdownButton,
                    { title: 'Dropdown', bsSize: 'xs', pullRight: true, id: 'dropdownButton2' },
                    _react2.default.createElement(
                      _reactBootstrap.MenuItem,
                      { eventKey: '1' },
                      'Action'
                    ),
                    _react2.default.createElement(
                      _reactBootstrap.MenuItem,
                      { eventKey: '2' },
                      'Another action'
                    ),
                    _react2.default.createElement(
                      _reactBootstrap.MenuItem,
                      { eventKey: '3' },
                      'Something else here'
                    ),
                    _react2.default.createElement(_reactBootstrap.MenuItem, { divider: true }),
                    _react2.default.createElement(
                      _reactBootstrap.MenuItem,
                      { eventKey: '4' },
                      'Separated link'
                    )
                  )
                )
              )
            },
            _react2.default.createElement(
              'div',
              null,
              _react2.default.createElement(
                _recharts.ResponsiveContainer,
                { width: '100%', aspect: 2 },
                _react2.default.createElement(
                  _recharts.BarChart,
                  { data: data, margin: { top: 10, right: 30, left: 0, bottom: 0 } },
                  _react2.default.createElement(_recharts.CartesianGrid, { stroke: '#ccc' }),
                  _react2.default.createElement(_recharts.XAxis, { dataKey: 'name' }),
                  _react2.default.createElement(_recharts.YAxis, null),
                  _react2.default.createElement(_recharts.Tooltip, null),
                  _react2.default.createElement(_recharts.Bar, { dataKey: 'pv', stackId: '1', fill: '#8884d8' }),
                  _react2.default.createElement(_recharts.Bar, { dataKey: 'uv', stackId: '1', fill: '#82ca9d' }),
                  _react2.default.createElement(_recharts.Bar, { type: 'monotone', dataKey: 'amt', fill: '#ffc658' })
                )
              )
            )
          ),
          _react2.default.createElement(
            _reactBootstrap.Panel,
            {
              header: _react2.default.createElement(
                'span',
                null,
                _react2.default.createElement('i', { className: 'fa fa-clock-o fa-fw' }),
                ' Responsive Timeline'
              )
            },
            _react2.default.createElement(
              'div',
              null,
              _react2.default.createElement(
                'ul',
                { className: 'timeline' },
                _react2.default.createElement(
                  'li',
                  null,
                  _react2.default.createElement(
                    'div',
                    { className: 'timeline-badge' },
                    _react2.default.createElement('i', { className: 'fa fa-check' })
                  ),
                  _react2.default.createElement(
                    'div',
                    { className: 'timeline-panel' },
                    _react2.default.createElement(
                      'div',
                      { className: 'timeline-heading' },
                      _react2.default.createElement(
                        'h4',
                        { className: 'timeline-title' },
                        'Lorem ipsum dolor'
                      ),
                      _react2.default.createElement(
                        'p',
                        null,
                        _react2.default.createElement(
                          'small',
                          { className: 'text-muted' },
                          _react2.default.createElement('i', { className: 'fa fa-clock-o' }),
                          ' 11 hours ago via Twitter'
                        )
                      )
                    ),
                    _react2.default.createElement(
                      'div',
                      { className: 'timeline-body' },
                      _react2.default.createElement(
                        'p',
                        null,
                        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero laboriosam dolor perspiciatis omnis exercitationem. Beatae, officia pariatur? Est cum veniam excepturi. Maiores praesentium, porro voluptas suscipit facere rem dicta, debitis.'
                      )
                    )
                  )
                ),
                _react2.default.createElement(
                  'li',
                  { className: 'timeline-inverted' },
                  _react2.default.createElement(
                    'div',
                    { className: 'timeline-badge warning' },
                    _react2.default.createElement('i', { className: 'fa fa-credit-card' })
                  ),
                  _react2.default.createElement(
                    'div',
                    { className: 'timeline-panel' },
                    _react2.default.createElement(
                      'div',
                      { className: 'timeline-heading' },
                      _react2.default.createElement(
                        'h4',
                        { className: 'timeline-title' },
                        'Lorem ipsum dolor'
                      )
                    ),
                    _react2.default.createElement(
                      'div',
                      { className: 'timeline-body' },
                      _react2.default.createElement(
                        'p',
                        null,
                        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem dolorem quibusdam, tenetur commodi provident cumque magni voluptatem libero, quis rerum. Fugiat esse debitis optio, tempore. Animi officiis alias, officia repellendus.'
                      ),
                      _react2.default.createElement(
                        'p',
                        null,
                        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium maiores odit qui est tempora eos, nostrum provident explicabo dignissimos debitis vel! Adipisci eius voluptates, ad aut recusandae minus eaque facere.'
                      )
                    )
                  )
                ),
                _react2.default.createElement(
                  'li',
                  null,
                  _react2.default.createElement(
                    'div',
                    { className: 'timeline-badge danger' },
                    _react2.default.createElement('i', { className: 'fa fa-bomb' })
                  ),
                  _react2.default.createElement(
                    'div',
                    { className: 'timeline-panel' },
                    _react2.default.createElement(
                      'div',
                      { className: 'timeline-heading' },
                      _react2.default.createElement(
                        'h4',
                        { className: 'timeline-title' },
                        'Lorem ipsum dolor'
                      )
                    ),
                    _react2.default.createElement(
                      'div',
                      { className: 'timeline-body' },
                      _react2.default.createElement(
                        'p',
                        null,
                        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellendus numquam facilis enim eaque, tenetur nam id qui vel velit similique nihil iure molestias aliquam, voluptatem totam quaerat, magni commodi quisquam.'
                      )
                    )
                  )
                )
              )
            )
          )
        ),
        _react2.default.createElement(
          'div',
          { className: 'col-lg-4' },
          _react2.default.createElement(
            _reactBootstrap.Panel,
            {
              header: _react2.default.createElement(
                'span',
                null,
                _react2.default.createElement('i', { className: 'fa fa-bell fa-fw' }),
                ' Notifications Panel'
              )
            },
            _react2.default.createElement(
              _reactBootstrap.ListGroup,
              null,
              _react2.default.createElement(
                _reactBootstrap.ListGroupItem,
                { href: '', onClick: function onClick(e) {
                    e.preventDefault();
                  } },
                _react2.default.createElement('i', { className: 'fa fa-comment fa-fw' }),
                ' New Comment',
                _react2.default.createElement(
                  'span',
                  { className: 'pull-right text-muted small' },
                  _react2.default.createElement(
                    'em',
                    null,
                    '4 minutes ago'
                  )
                )
              ),
              _react2.default.createElement(
                _reactBootstrap.ListGroupItem,
                { href: '', onClick: function onClick(e) {
                    e.preventDefault();
                  } },
                _react2.default.createElement('i', { className: 'fa fa-twitter fa-fw' }),
                ' 3 New Followers',
                _react2.default.createElement(
                  'span',
                  { className: 'pull-right text-muted small' },
                  _react2.default.createElement(
                    'em',
                    null,
                    '12 minutes ago'
                  )
                )
              ),
              _react2.default.createElement(
                _reactBootstrap.ListGroupItem,
                { href: '', onClick: function onClick(e) {
                    e.preventDefault();
                  } },
                _react2.default.createElement('i', { className: 'fa fa-envelope fa-fw' }),
                ' Message Sent',
                _react2.default.createElement(
                  'span',
                  { className: 'pull-right text-muted small' },
                  _react2.default.createElement(
                    'em',
                    null,
                    '27 minutes ago'
                  )
                )
              ),
              _react2.default.createElement(
                _reactBootstrap.ListGroupItem,
                { href: '', onClick: function onClick(e) {
                    e.preventDefault();
                  } },
                _react2.default.createElement('i', { className: 'fa fa-tasks fa-fw' }),
                ' New Task',
                _react2.default.createElement(
                  'span',
                  { className: 'pull-right text-muted small' },
                  _react2.default.createElement(
                    'em',
                    null,
                    '43 minutes ago'
                  )
                )
              ),
              _react2.default.createElement(
                _reactBootstrap.ListGroupItem,
                { href: '', onClick: function onClick(e) {
                    e.preventDefault();
                  } },
                _react2.default.createElement('i', { className: 'fa fa-upload fa-fw' }),
                ' Server Rebooted',
                _react2.default.createElement(
                  'span',
                  { className: 'pull-right text-muted small' },
                  _react2.default.createElement(
                    'em',
                    null,
                    '11:32 AM'
                  )
                )
              ),
              _react2.default.createElement(
                _reactBootstrap.ListGroupItem,
                { href: '', onClick: function onClick(e) {
                    e.preventDefault();
                  } },
                _react2.default.createElement('i', { className: 'fa fa-bolt fa-fw' }),
                ' Server Crashed!',
                _react2.default.createElement(
                  'span',
                  { className: 'pull-right text-muted small' },
                  _react2.default.createElement(
                    'em',
                    null,
                    '11:13 AM'
                  )
                )
              ),
              _react2.default.createElement(
                _reactBootstrap.ListGroupItem,
                { href: '', onClick: function onClick(e) {
                    e.preventDefault();
                  } },
                _react2.default.createElement('i', { className: 'fa fa-warning fa-fw' }),
                ' Server Not Responding',
                _react2.default.createElement(
                  'span',
                  { className: 'pull-right text-muted small' },
                  _react2.default.createElement(
                    'em',
                    null,
                    '10:57 AM'
                  )
                )
              ),
              _react2.default.createElement(
                _reactBootstrap.ListGroupItem,
                { href: '', onClick: function onClick(e) {
                    e.preventDefault();
                  } },
                _react2.default.createElement('i', { className: 'fa fa-shopping-cart fa-fw' }),
                ' New Order Placed',
                _react2.default.createElement(
                  'span',
                  { className: 'pull-right text-muted small' },
                  _react2.default.createElement(
                    'em',
                    null,
                    '9:49 AM'
                  )
                )
              ),
              _react2.default.createElement(
                _reactBootstrap.ListGroupItem,
                { href: '', onClick: function onClick(e) {
                    e.preventDefault();
                  } },
                _react2.default.createElement('i', { className: 'fa fa-money fa-fw' }),
                ' Payment Received',
                _react2.default.createElement(
                  'span',
                  { className: 'pull-right text-muted small' },
                  _react2.default.createElement(
                    'em',
                    null,
                    'Yesterday'
                  )
                )
              )
            ),
            _react2.default.createElement(
              _reactBootstrap.Button,
              { block: true },
              'View All Alerts'
            )
          ),
          _react2.default.createElement(
            _reactBootstrap.Panel,
            {
              header: _react2.default.createElement(
                'span',
                null,
                _react2.default.createElement('i', { className: 'fa fa-bar-chart-o fa-fw' }),
                ' Donut Chart Example'
              )
            },
            _react2.default.createElement(
              'div',
              null,
              _react2.default.createElement(_Donut2.default, { data: data, color: '#8884d8', innerRadius: '70%', outerRadius: '90%' })
            )
          )
        )
      )
    );
  }
  
  Clubs.propTypes = {
    // news: PropTypes.arrayOf(PropTypes.shape({
    //   title: PropTypes.string.isRequired,
    //   link: PropTypes.string.isRequired,
    //   contentSnippet: PropTypes.string,
    // })).isRequired,
  };
  Clubs.contextTypes = { setTitle: _react.PropTypes.func.isRequired };
  
  exports.default = (0, _withStyles2.default)(_clubs2.default)(Clubs);

/***/ }),
/* 195 */
/***/ (function(module, exports, __webpack_require__) {

  
      var content = __webpack_require__(196);
      var insertCss = __webpack_require__(22);
  
      if (typeof content === 'string') {
        content = [[module.id, content, '']];
      }
  
      module.exports = content.locals || {};
      module.exports._getCss = function() { return content.toString(); };
      module.exports._insertCss = function(options) { return insertCss(content, options) };
    
      // Hot Module Replacement
      // https://webpack.github.io/docs/hot-module-replacement
      // Only activated in browser context
      if (false) {
        var removeCss = function() {};
        module.hot.accept("!!../../../../node_modules/css-loader/index.js?{\"sourceMap\":true,\"modules\":true,\"localIdentName\":\"[name]_[local]_[hash:base64:3]\",\"minimize\":false}!../../../../node_modules/postcss-loader/index.js?pack=default!./clubs.css", function() {
          content = require("!!../../../../node_modules/css-loader/index.js?{\"sourceMap\":true,\"modules\":true,\"localIdentName\":\"[name]_[local]_[hash:base64:3]\",\"minimize\":false}!../../../../node_modules/postcss-loader/index.js?pack=default!./clubs.css");
  
          if (typeof content === 'string') {
            content = [[module.id, content, '']];
          }
  
          removeCss = insertCss(content, { replace: true });
        });
        module.hot.dispose(function() { removeCss(); });
      }
    

/***/ }),
/* 196 */
/***/ (function(module, exports, __webpack_require__) {

  exports = module.exports = __webpack_require__(21)();
  // imports
  
  
  // module
  exports.push([module.id, "/**\n * React Starter Kit (https://www.reactstarterkit.com/)\n *\n * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE.txt file in the root directory of this source tree.\n */\n\n/**\n * React Starter Kit (https://www.reactstarterkit.com/)\n *\n * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE.txt file in the root directory of this source tree.\n */\n\n:root {\n  /*\n   * Typography\n   * ======================================================================== */\n\n  /*\n   * Layout\n   * ======================================================================== */\n\n  /*\n   * Media queries breakpoints\n   * ======================================================================== */  /* Extra small screen / phone */  /* Small screen / tablet */  /* Medium screen / desktop */ /* Large screen / wide desktop */\n}\n\n.clubs_root_pKm {\n  padding-left: 20px;\n  padding-right: 20px;\n}\n\n.clubs_container_2uC {\n  margin: 0 auto;\n  padding: 0 0 40px;\n  max-width: 1000px;\n}\n\n.clubs_news__Qo {\n  padding: 0;\n}\n\n.clubs_newsItem_2aO {\n  list-style-type: none;\n  padding-bottom: 6px;\n}\n\n.clubs_newsTitle_H8E {\n  font-size: 1.125em;\n}\n\n.clubs_newsTitle_H8E,\n.clubs_newsDesc_3il {\n  display: block;\n}\n", "", {"version":3,"sources":["/./routes/dashboardPages/clubs/clubs.css","/./components/variables.css"],"names":[],"mappings":"AAAA;;;;;;;GAOG;;ACPH;;;;;;;GAOG;;AAEH;EACE;;gFAE8E;;EAI9E;;gFAE8E;;EAI9E;;gFAE8E,EAErD,gCAAgC,EAChC,2BAA2B,EAC3B,6BAA6B,CAC7B,iCAAiC;CAC3D;;ADnBD;EACE,mBAAmB;EACnB,oBAAoB;CACrB;;AAED;EACE,eAAe;EACf,kBAAkB;EAClB,kBAAoC;CACrC;;AAED;EACE,WAAW;CACZ;;AAED;EACE,sBAAsB;EACtB,oBAAoB;CACrB;;AAED;EACE,mBAAmB;CACpB;;AAED;;EAEE,eAAe;CAChB","file":"clubs.css","sourcesContent":["/**\n * React Starter Kit (https://www.reactstarterkit.com/)\n *\n * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE.txt file in the root directory of this source tree.\n */\n\n@import '../../../components/variables.css';\n\n.root {\n  padding-left: 20px;\n  padding-right: 20px;\n}\n\n.container {\n  margin: 0 auto;\n  padding: 0 0 40px;\n  max-width: var(--max-content-width);\n}\n\n.news {\n  padding: 0;\n}\n\n.newsItem {\n  list-style-type: none;\n  padding-bottom: 6px;\n}\n\n.newsTitle {\n  font-size: 1.125em;\n}\n\n.newsTitle,\n.newsDesc {\n  display: block;\n}\n","/**\n * React Starter Kit (https://www.reactstarterkit.com/)\n *\n * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE.txt file in the root directory of this source tree.\n */\n\n:root {\n  /*\n   * Typography\n   * ======================================================================== */\n\n  --font-family-base: 'Segoe UI', 'HelveticaNeue-Light', sans-serif;\n\n  /*\n   * Layout\n   * ======================================================================== */\n\n  --max-content-width: 1000px;\n\n  /*\n   * Media queries breakpoints\n   * ======================================================================== */\n\n  --screen-xs-min: 480px;  /* Extra small screen / phone */\n  --screen-sm-min: 768px;  /* Small screen / tablet */\n  --screen-md-min: 992px;  /* Medium screen / desktop */\n  --screen-lg-min: 1200px; /* Large screen / wide desktop */\n}\n"],"sourceRoot":"webpack://"}]);
  
  // exports
  exports.locals = {
  	"root": "clubs_root_pKm",
  	"container": "clubs_container_2uC",
  	"news": "clubs_news__Qo",
  	"newsItem": "clubs_newsItem_2aO",
  	"newsTitle": "clubs_newsTitle_H8E",
  	"newsDesc": "clubs_newsDesc_3il"
  };

/***/ }),
/* 197 */
/***/ (function(module, exports) {

  module.exports = require("./assets");

/***/ }),
/* 198 */
/***/ (function(module, exports, __webpack_require__) {

  "use strict";
  
  var mysql = __webpack_require__(199);
  
  var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "root",
    database: 'clubconnect'
  });
  
  con.connect(function (err) {
    if (err) throw err;
  });
  
  module.exports = con;

/***/ }),
/* 199 */
/***/ (function(module, exports) {

  module.exports = require("mysql");

/***/ }),
/* 200 */
/***/ (function(module, exports) {

  module.exports = require("http");

/***/ }),
/* 201 */
/***/ (function(module, exports) {

  module.exports = require("socket.io");

/***/ }),
/* 202 */
/***/ (function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  
  var _getPrototypeOf = __webpack_require__(29);
  
  var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);
  
  var _classCallCheck2 = __webpack_require__(30);
  
  var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
  
  var _createClass2 = __webpack_require__(31);
  
  var _createClass3 = _interopRequireDefault(_createClass2);
  
  var _possibleConstructorReturn2 = __webpack_require__(32);
  
  var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);
  
  var _inherits2 = __webpack_require__(33);
  
  var _inherits3 = _interopRequireDefault(_inherits2);
  
  var _react = __webpack_require__(11);
  
  var _react2 = _interopRequireDefault(_react);
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  var Message = function (_Component) {
    (0, _inherits3.default)(Message, _Component);
  
    function Message() {
      (0, _classCallCheck3.default)(this, Message);
      return (0, _possibleConstructorReturn3.default)(this, (Message.__proto__ || (0, _getPrototypeOf2.default)(Message)).apply(this, arguments));
    }
  
    (0, _createClass3.default)(Message, [{
      key: 'render',
      value: function render() {
        return _react2.default.createElement(
          'div',
          null,
          this.props.message
        );
      }
    }]);
    return Message;
  }(_react.Component);
  
  exports.default = Message;

/***/ }),
/* 203 */
/***/ (function(module, exports) {

  module.exports = require("lodash");

/***/ })
/******/ ]);
//# sourceMappingURL=server.js.map