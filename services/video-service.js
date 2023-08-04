const Video = require('../models/video-model');

async function getAllVideos() {
  try {
    const videos = await Video.find({}, { _id: 0 });
    return videos;
  } catch (error) {
    throw new Error("Error retrieving videos from the database");
  }
}

async function addVideo(titleVideo, urlImageThumbnail, videoLink) {
  try {
    const newVideo = await Video.create({
      titleVideo,
      urlImageThumbnail,
      videoLink,
    });
    return newVideo;
  } catch (error) {
    throw new Error("Error adding video to the database: " + error.message);
  }
}

async function getVideosByTitle(titleVideo) {
  try {
    const videos = await Video.find({ titleVideo }, { _id: 0 });
    return videos;
  } catch (error) {
    throw new Error("Error retrieving videos by title from the database");
  }
}


module.exports = {
  getAllVideos,
  addVideo,
  getVideosByTitle,
};
