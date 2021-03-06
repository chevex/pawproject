var router = require('express').Router();
var pages = require('../controllers/pages/root');

router.get('/', pages.home);
router.get('/blog', pages.blog);
router.get('/faq', pages.faq);
router.get('/about', pages.about);
router.get('/mailinglist', pages.mailingList);
router.get('/contribute', pages.contribute);
router.get('/whatyoucando', pages.whatYouCanDo);
router.get('/team', pages.team);
router.get('/contact', pages.contact);

module.exports = router;
