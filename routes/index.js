var express = require('express');
var router = express.Router();


router.get('/year', function(req, res) {
  const currentDate = new Date();
console.log(currentDate)
  res.json( { year: currentDate});
});

module.exports = router;
