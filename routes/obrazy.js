var express = require('express');
var router = express.Router();

router.get('/1', (req, res) => {
    res.render('picture1.pug', {
        title: 'Przyklady'
    });
});

router.get('/2', (req, res) => {
    res.render('picture2.pug', {
        title: 'Przyklady'
    });
});
router.get('/3', (req, res) => {
    res.render('picture3.pug', {
        title: 'Przyklady'
    });
});
router.get('/4', (req, res) => {
    res.render('picture4.pug', {
        title: 'Przyklady'
    });
});
router.get('/5', (req, res) => {
    res.render('picture5.pug', {
        title: 'Przyklady'
    });
});
router.get('/6', (req, res) => {
    res.render('picture6.pug', {
        title: 'Przyklady'
    });
});
router.get('/7', (req, res) => {
    res.render('picture7.pug', {
        title: 'Przyklady'
    });
});
router.get('/8', (req, res) => {
    res.render('picture8.pug', {
        title: 'Przyklady'
    });
});
router.get('/9', (req, res) => {
    res.render('picture9.pug', {
        title: 'Przyklady'
    });
});
router.get('/10', (req, res) => {
    res.render('picture10.pug', {
        title: 'Przyklady'
    });
});
router.get('/11', (req, res) => {
    res.render('picture11.pug', {
        title: 'Przyklady'
    });
});
router.get('/12', (req, res) => {
    res.render('picture12.pug', {
        title: 'Przyklady'
    });
});
router.get('/13', (req, res) => {
    res.render('picture13.pug', {
        title: 'Przyklady'
    });
});

module.exports = router;