const prisma = require("../db");

const getAll = async (user_id) =>
  prisma.favorites.findMany({
    where: {
      user_id: user_id,
    },
    include: {
      events: true,
    },
  });

const insert = (favoriteData) =>
  prisma.favorites.create({
    data: {
      ...favoriteData,
    },
  });

const getById = (user_id, event_id) => (
  prisma.favorites.findMany({
    where: {
      user_id: user_id,
      event_id: event_id
    }
  })
)

const deleteById = (favorite_id) =>
  prisma.favorites.delete({
    where: {
      id: favorite_id,
    },
  });

module.exports = {
  getAll,
  deleteById,
  insert,
  getById,
};
