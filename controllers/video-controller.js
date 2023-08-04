const videoService = require('../services/video-service');

async function getAllVideos(req, res) {
  try {
    const videos = await videoService.getAllVideos();
    res.status(200).json(videos);
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
}


async function addVideo(req, res) {
  const { titleVideo, urlImageThumbnail, videoLink } = req.body;
  try {
    const newVideo = await videoService.addVideo(titleVideo, urlImageThumbnail, videoLink);
    res.status(201).json(newVideo);
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
}

async function getVideosByTitle(req, res) {
  const { titleVideo } = req.params;
  try {
    const videos = await videoService.getVideosByTitle(titleVideo);
    if (videos.length === 0) {
      return res.status(404).json({ message: "Video not found" });
    }
    res.status(200).json(videos);
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
}

module.exports = {
  getAllVideos,
  addVideo,
  getVideosByTitle
};
