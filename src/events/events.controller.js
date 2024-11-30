const { Router } = require("express");
const {
  getAllEvents,
  updateEvent,
  insertEvent,
  getEventDetail,
  updatePaymentImageService,
} = require("./events.service");
const router = Router();

router.get("/", async (req, res) => {
  try {
    // Ambil parameter query dari URL
    const name = req.query.name !== "undefined" ? req.query.name : null;
    const user_id = req.query.users !== "undefined" ? req.query.users : null;
    const status = req.query.status || "ONGOING";
    const is_paid =
      req.query.prices !== "undefined" && req.query.prices.length > 0
        ? req.query.prices.split(",")
        : [];
    const tags =
      req.query.tags !== "undefined" && req.query.tags.length
        ? req.query.tags.split(",")
        : [];
    const categories =
      req.query.categories !== "undefined" && req.query.categories.length
        ? req.query.categories.split(",")
        : [];

    const isPaidFilters =
      is_paid.length > 0
        ? is_paid.map((status) => {
            if (status === "PAID") return true;
            if (status === "UNPAID") return false;
            return null;
          })
        : [];

    // Membuat objek filter berdasarkan parameter yang diterima
    const filter = {
      where: {
        status: status,
      },
      orderBy: {
        created_at: "desc",
      },
      include: {
        channels: true,
        tags: tags.length > 0 ? { where: { id: { in: tags } } } : true,
        categories:
          categories.length > 0 ? { where: { id: { in: categories } } } : true,
        favorites: true,
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

    if (isPaidFilters.length === 1) {
      filter.where.is_paid = isPaidFilters[0];
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

    const events = await getAllEvents(filter);

    events.forEach((event) => {
      event.is_favorite = false;
      if (event.favorites.length > 0 && user_id != null) {
        event.favorites.forEach((favorite) => {
          if (favorite.user_id == user_id) {
            event.is_favorite = true;
          }
        });
      }
    });

    res.send(events);
  } catch (error) {
    console.error("Error retrieving events:", error.message);
    res.status(400).send(error.message);
  }
});

router.get("/admin", async (req, res) => {
  try {
    const filter = {
      orderBy: {
        created_at: "desc",
      },
      include: {
        channels: true,
        favorites: true,
        tags: true,
        categories: true,
        user_events: {
          select: {
            users: true,
          },
        },
      },
    };

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

router.post("/:event_id/payment", async (req, res) => {
  try {
    const { event_id } = req.params;
    const { image } = req.body;
    const updatedPayment = await updatePaymentImageService(event_id, image);
    console.log(updatedPayment);
    res.send(updatedPayment);
  } catch (error) {
    res.status(400).send(error.message);
  }
});

router.get("/:event_id", async (req, res) => {
  try {
    const { event_id } = req.params;
    const user_id = req.query.user_id || null;
    const eventDetail = await getEventDetail(event_id, user_id);
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
