const commentService = require('../services/comment-service');

async function getCommentsByVideoId(req, res) {
  const { videoId } = req.params;
  try {
    const Comments = await commentService.getCommentsByVideoId(videoId);
    res.status(200).json(Comments);
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
}

async function createComment(req, res) {
  const { videoId } = req.params;
  const { username, comment } = req.body;
  try {
    const newComment = await commentService.createComment(videoId, username, comment);
    res.status(201).json(newComment);
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
}

module.exports = {
  getCommentsByVideoId,
  createComment,
};
