
const express = require('express');
const router = express.Router();
const commentController = require('../controllers/comment-controller');

router.get('/:videoId/comments', commentController.getCommentsByVideoId);
router.post('/:videoId/comments', commentController.createComment);

module.exports = router;
