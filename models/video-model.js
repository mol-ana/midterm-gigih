const mongoose = require('mongoose');
const { v4: uuidv4 } = require('uuid');

const videoSchema = new mongoose.Schema(
  {
    videoId: { type: String, default: uuidv4(), required: true },
    titleVideo: { type: String, required: true },
    urlImageThumbnail: { type: String, required: true },
    videoLink: { type: String, required: true },
  },
  { collection: "videos", versionKey: false }
);

module.exports = mongoose.model("Video", videoSchema);
