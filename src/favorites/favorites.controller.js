const { Router } = require("express");
const {
  getAllUserFavorites,
  deleteFavorite,
  insertUserFavorite,
} = require("./favorites.service");
const favoriteInsertSchema = require("../schema/favorite.ts");
const { fromError } = require('zod-validation-error');
const { ZodError } = require("zod");
const router = Router();

router.get("/users/:user_id/follows", async (req, res) => {
  try {
    const { user_id } = req;
    const userFavorites = await getAllUserFavorites(user_id);
    res.send(userFavorites);
  } catch (error) {
    res.status(400).send(error.message);
  }
});

router.post("/favorites/add", async (req, res) => {
  try {
    favoriteInsertSchema.parse(req.body);
    await insertUserFavorite(req.body);
    res.send({
      message: "Success",
    });
  } catch (error) {
    if (error instanceof ZodError) {
      return res.status(400).send({ message: fromError(error).toString() });
    }
    res.status(500).send(error.message);
  }
});

router.post("/favorites/:favorite_id", async (req, res) => {
  try {
    const { favorite_id } = req;
    await deleteFavorite(favorite_id);
    res.send({
      message: "Success",
    });
  } catch (error) {
    res.status(400).send(error.message);
  }
});

module.exports = router;