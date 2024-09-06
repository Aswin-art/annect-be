const {
  getAll,
  deleteById,
  insert,
  getById,
} = require("./favorites.repository");
const { getbyid } = require("../users/users.service");

const getAllUserFavorites = async (user_id) => {
  const user = await getbyid(user_id);
  if (!user) return null;
  return getAll(user_id);
};

const insertUserFavorite = async (favoriteData) => {
  const [exist] = await getById(favoriteData.user_id, favoriteData.event_id);

  if (!exist) {
    return insert(favoriteData);
  } else {
    return deleteById(exist.id);
  }
};

const deleteFavorite = (favorite_id) => deleteById(favorite_id);

module.exports = {
  getAllUserFavorites,
  deleteFavorite,
  insertUserFavorite,
};
