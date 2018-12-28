const express = require('express');
const router = express.Router();

// Mount sub routers
router.use('/character', require('./character'));

router.get('/', function (req, res) {
    res.send('Hello')
  })

module.exports = router;