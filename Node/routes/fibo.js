var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  function fibonacci(n) {
    let fibSequence = [0, 1];
    for (let i = 2; i < n; i++) {
      fibSequence.push(fibSequence[i - 1] + fibSequence[i - 2]);
    }
    return fibSequence;
  }

  // Generate the first 100 Fibonacci numbers
  const fibNumbers = fibonacci(100);

  // Send the Fibonacci sequence as the response
  res.send(fibNumbers.join(', '));
});

module.exports = router;
