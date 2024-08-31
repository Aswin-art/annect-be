const express = require("express");
const { seedService } = require("./seeder.service");
const router = express.Router();

router.get("/", async (_, res) => {
  try {
    await seedService();
    res.send("Data berhasil di seed");
  } catch (error) {
    res.status(400).send(error.message);
  }
});

module.exports = router;
