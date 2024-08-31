const { Router } = require("express");
const {
  getAllEvents,
  updateEvent,
  insertEvent,
  getEventDetail,
} = require("./events.service");
const router = Router();

router.get("/", async (req, res) => {
  try {
    // Ambil parameter query dari URL
    const name = req.query.name || null;
    const is_paid = req.query.is_paid
      ? req.query.is_paid === "true"
      : undefined;
    const tags = req.query.tags ? req.query.tags.split(",") : [];
    const categories = req.query.categories
      ? req.query.categories.split(",")
      : [];

    // Membuat objek filter berdasarkan parameter yang diterima
    const filter = {
      where: {},
      include: {
        channels: true,
        tags: tags.length > 0 ? { where: { id: { in: tags } } } : true,
        categories:
          categories.length > 0 ? { where: { id: { in: categories } } } : true,
        user_events: {
          select: {
            users: true,
          },
        },
      },
    };

    if (name) {
      filter.where.name = {
        contains: name,
      };
    }

    if (is_paid !== undefined) {
      filter.where.is_paid = is_paid;
    }

    if (tags.length > 0) {
      filter.where.tag_id = {
        in: tags,
      };
    }

    if (categories.length > 0) {
      filter.where.category_id = {
        in: categories,
      };
    }

    // Panggil fungsi repository dengan filter yang sudah dibangun
    const events = await getAllEvents(filter);

    res.send(events);
  } catch (error) {
    console.error("Error retrieving events:", error.message);
    res.status(400).send(error.message);
  }
});

router.post("/:event_id", async (req, res) => {
  try {
    const { event_id } = req.params;
    const updatedEvent = await updateEvent(req.body, event_id);
    res.send(updatedEvent);
  } catch (error) {
    res.status(400).send(error.message);
  }
});

router.get("/:event_id", async (req, res) => {
  try {
    const { event_id } = req.params;
    const eventDetail = await getEventDetail(event_id);
    res.send(eventDetail);
  } catch (error) {
    res.status(400).send(error.message);
  }
});

router.post("/", async (req, res) => {
  try {
    const insertedEvent = await insertEvent(req.body);
    res.send(insertedEvent);
  } catch (error) {
    if (error.message == "NOT AUTHORIZED") {
      res.status(403).send(error.message);
    }
    res.status(400).send(error.message);
  }
});

module.exports = router;
