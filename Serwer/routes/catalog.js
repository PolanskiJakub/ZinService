var express = require('express');
var router = express.Router();

var user_controller = require('../controllers/userController');

router.get('/login',user_controller.login_get);

router.post('/login',user_controller.login_post);

router.post('/register',user_controller.register_post);

router.get('/register',(req, res) => {
    res.render('register', {
        title: 'Register'
    });
});

router.get('/przyklady', (req, res) => {
    res.render('przyklady', {
        title: 'Home Page'
    });
});
module.exports = router;