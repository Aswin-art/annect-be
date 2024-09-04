const express = require("express");
const { getall, getbyid, getHistoryEvent } = require("./users.service");
const { getAllUserFavorites } = require("../favorites/favorites.service");
const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const user = await getall();
    res.send(user);
  } catch (error) {
    res.status(400).send(error.message);
  }
});

router.get("/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const user = await getbyid(id);
    res.send(user);
  } catch (error) {
    res.status(400).send(error.message);
  }
});

router.get("/:id/favorites", async (req, res) => {
  try {
    const id = req.params.id;
    const user = await getAllUserFavorites(id);
    res.send(user);
  } catch (error) {
    res.status(400).send(error.message);
  }
});

router.get("/:id/event-histories", async (req, res) => {
  try {
    const id = req.params.id;
    const user = await getHistoryEvent(id);
    res.send(user);
  } catch (error) {
    res.status(400).send(error.message);
  }
});

module.exports = router;
