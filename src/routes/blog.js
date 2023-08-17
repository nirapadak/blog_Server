const express = require('express');
const router = express.Router();

const { blog, remove, update, list, blogFindOne } = require('../controller/blog');
const { requireSignIn, isAdmin} = require('../middleware/auth')

router.post('/blog', blog);
router.put('/update/:blogId', update);
router.delete('/delete/:blogId', remove);
router.get('/list', list);
router.get('/one/:blogId', blogFindOne);

module.exports = router