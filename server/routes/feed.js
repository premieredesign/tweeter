const express = require("express");
const router = express.Router();
const axios = require("axios");

// Create
router.post("/", async (req, res) => {
  res.json({
    msg: "Data created",
  });
});

// Update
router.put("/", async (req, res) => {
  res.json({
    msg: "Data updated",
  });
});

// Read
router.get("/", async (req, res) => {
  const feeds = await axios.get(
    "https://mpb-site.s3.us-east-2.amazonaws.com/tweeter.json"
  );
  res.json(feeds.data);
});

// Delete
router.delete("/", async (req, res) => {
  res.json({
    msg: "Data deleted",
  });
});

module.exports = router;
