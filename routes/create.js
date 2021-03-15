var express = require('express');
var router = express.Router();
var miriadb = require('mariadb')

router.post('/storeHighlight', function(req, res, next) {
  const {userId, pageUrl, colorHex, text} = req.body;

  var connection = miriadb.createConnection({
    host: process.env.HOST,
    user: process.env.USER,
    password: process.env.PASSWORD,
    database: process.env.DATABASE
  });

  connection.connect();

  res.send('respond with a resource');
});

module.exports = router;
