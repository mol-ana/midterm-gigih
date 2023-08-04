const Comment = require('../models/comment-model');

async function getCommentsByVideoId(videoId) {
  try {
    const comments = await Comment.find({ videoId }, { _id: 0 });
    return comments;
  } catch (error) {
    throw new Error("Error retrieving comments from the database");
  }
}

async function createComment(videoId, username, comment) {
  try {
    const newComment = await Comment.create({ videoId, username, comment });
    return newComment;
  } catch (error) {
    throw new Error("Error creating comment");
  }
}

module.exports = {
  getCommentsByVideoId,
  createComment,
};
