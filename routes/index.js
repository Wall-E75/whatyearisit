var express = require('express');
var router = express.Router();


router.get('/year', function(req, res) {
  const date = new Date();
  const année = date.getFullYear();

  res.json( { year: année});
});

module.exports = router;
