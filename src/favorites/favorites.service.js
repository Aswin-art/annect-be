const { getAll, deleteById } = require('./favorites.repository');
const { getbyid } = require('../users/users.service');

const getAllUserFavorites = async (user_id) => {
    await getbyid(user_id); // Check if user exists
    return getAll(user_id);
}

const deleteFavorite = (favorite_id) => (deleteById(favorite_id))

module.exports = {
    getAllUserFavorites,
    deleteFavorite,
}