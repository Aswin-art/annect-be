const prisma = require('../db');

const getAll = async (user_id) => (
    prisma.favorites.findMany({
        where: {
            user_id: user_id
        },
        include: {
            events: true
        }
    })
)

const deleteById = (favorite_id) => (
    prisma.favorites.delete({
        where: {
            id: favorite_id
        }
    })
)

module.exports = {
    getAll,
    deleteById,
}