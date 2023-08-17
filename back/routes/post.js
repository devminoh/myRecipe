const express = require("express");

const router = express.Router();

router.post("/", (req, res) => { // POST /post
  res.json("작성 완료");
});

router.delete("/", (req, res) => { // DELETE /post
  res.json({ id: 1 });
});

module.exports = router;
