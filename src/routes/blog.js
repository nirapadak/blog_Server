const express = require('express');
const router = express.Router();

const { blog, remove, update, list } = require('../controller/blog');
const { requireSignIn, isAdmin} = require('../middleware/auth')

router.post('/blog', requireSignIn, blog);
router.put('/blog/:blogId', requireSignIn, update);
router.delete('/blog/:blogId', requireSignIn, remove);
router.get('/list', requireSignIn, list);


module.exports = router