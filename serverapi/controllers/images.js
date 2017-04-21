var express = require('express');
    router = express.Router();



router.get('/api/images', function(req, res) {
    res.send(global.images);
})

router.post('/api/images', function(req, res) {
    return res.json({
        message: 'Success',
        error: false
    })
})

router.post('/api/checkUserName', function(req, res) {
    console.log(req.body.username);

    return res.json({
        message: 'Success',
        error: false
    })
})

module.exports = router;