var express = require('express');
    router = express.Router();

router.use('/images', require('./images'));
router.use('/api/users', require('./users'));

module.exports = router;