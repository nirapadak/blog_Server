const express = require('express');
const router = express.Router();

const { blog, remove, update, list, blogFindOne } = require('../controller/blog');
const { requireSignIn, isAdmin} = require('../middleware/auth')

router.post('/blog', blog);
router.put('/blog/:blogId', update);
router.delete('/blog/:blogId', remove);
router.get('/list', list);
router.get('/blog/:blogId', blogFindOne);

module.exports = router