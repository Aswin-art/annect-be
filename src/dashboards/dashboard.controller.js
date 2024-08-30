const express = require("express");
const { totalcount } = require("./dashboard.service");
const router = express.Router();

router.get("/", async (_, res) => {
  try {
    const count = await totalcount();
    res.send(count);
  } catch (error) {
    res.status(400).send(error.message);
  }
});

module.exports = router;
