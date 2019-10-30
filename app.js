const express = require('express');
const router = express.Router();
const app = express();
const _ = require('lodash');
const logger = require('.//services/logger');
const history = require('connect-history-api-fallback');
const port = process.env.port || 8080;


app.listen(port, () => { console.log("Listening on port " + port)});
router.use('/', require('./controllers'));
app.use('/', router);
app.use('/', history());

const proxy = require('express-http-proxy');
app.use('/', proxy('localhost:8080', {
    proxyReqPathResolver: (req) => {
      logger.info('proxy request: ' + req.url);
      if (_.endsWith(req.url, '/')) {
        req.url = req.url + 'index.html';
      }
      logger.info("Index File Path: " + require('url').parse(req.url).path);
      return require('url').parse(req.url).path;
    }
  })
)

app.get('/__webpack_hmr',function(req,res,next){
    if (req.protocol === 'https') {
      res.redirect('https://localhost:8081/__webpack_hmr');
    } else {
      res.redirect('http://localhost:8080/__webpack_hmr');
    }
    next();
  });

  app.get('/ui',function(req,res,next){
    res.redirect('/');
    next();
});