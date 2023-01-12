const express = require("express");
const app = express();
const port = process.env.PORT || 3001;
// Routes
const feeds = require("./routes/feed");

const start = async () => {
  app.use(express.json());
  app.use("/api/feeds", feeds);

  app.listen(port, () => {
    console.log("📦 Server started on port", port);
  });
};

start();
