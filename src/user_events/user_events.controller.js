const { getUserEventById, inserUserEvent } = require("./user_events.service");
const { Router } = require("express");
const router = Router();

router.get("/:user_id", async (req, res) => {
  try {
    const { user_id } = req.params;
    const userEventDetail = await getUserEventById(user_id);
    res.send(userEventDetail);
  } catch (error) {
    res.status(400).send(error.message);
  }
});

router.post("/", async (req, res) => {
  try {
    const { user_id, event_id } = req.body;
    await inserUserEvent(user_id, event_id);
    res.status(201).send("success");
  } catch (error) {
    res.status(400).send(error.message);
  }
});

module.exports = router;
