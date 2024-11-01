var express = require('express');
var router = express.Router();


router.get('/year', function(req, res) {
  const date = new Date();
  const année = String(date.getFullYear());

  res.json( { year: année});
});

module.exports = router;
