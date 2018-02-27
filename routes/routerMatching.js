const express = require('express');
const router = express.Router();

router.get('/match/:id/:type', function(req, res, next) {
    res.render('routerMatching', { params: JSON.stringify(req.params), query: JSON.stringify(req.query) });
});

module.exports = router;
