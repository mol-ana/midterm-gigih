const express = require("express");
const { connectToDatabase } = require("./config/db");

const app = express();
const PORT = process.env.PORT || 7777;

// Routes
const videoRoutes = require('./routes/video-route');
const productRoutes = require('./routes/product-route');
const commentRoutes = require('./routes/comment-route');

// Middleware
app.use(express.json());
app.use("/videos", videoRoutes);
app.use("/products", productRoutes);
app.use("/comments", commentRoutes);

// Connect to MongoDB and Start the server
async function startServer() {
  await connectToDatabase();
  app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`);
  });
}

startServer();
