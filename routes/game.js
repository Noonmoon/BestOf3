var express = require('express');
var router = express.Router();

// SINGLE ROUTES
router.get('/single', function(req, res) {
  res.render('game/single/index', { user: req.currentUser });
});

router.get('/single/:game_name', function(req, res) {
  name = req.params.game_name
  res.render(`game/single/${name}`, { user: req.currentUser })
});

// LOCAL MULTI ROUTES
router.get('/multi/local', function(req, res) {
  res.render('game/local-multi/index', { user: req.currentUser })
});

router.get('/multi/local/:game_name', function(req, res) {
  name = req.params.game_name
  res.render(`game/local-multi/${name}`, { user: req.currentUser })
});

// ONLINE ROUTES
router.get('/multi/online', function(req, res) {
  res.render(`game/online-multi/index`, { user: req.currentUser })
});

router.get('/multi/online/:game_name', function(req, res) {
  name = req.params.game_name
  res.render(`game/online-multi/${name}`, { user: req.currentUser })
});


module.exports = router;
