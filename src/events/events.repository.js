const prisma = require('../db/index');

const getAll = () => (
    prisma.events.findMany({
        include: {
            user_events: {
                select: {
                    users: true
                }
            }
        }
    })
)

const getById = (eventId) => (
    prisma.events.findFirst({
        where: {
            id: eventId
        }
    })
)

const getDetail = (eventId) => (
    prisma.events.findUnique({
        where: {
            id: eventId
        },
        include: {
            channels: true
        }
    })
)

const getSimilar = (currentEventId, eventTagId, eventCategoryId) => (
    prisma.events.findMany({
        take: 3,
        where: {
            OR: [
                { tag_id: { equals: eventTagId } },
                { category_id: { equals: eventCategoryId } }
            ],
            NOT: {
                id: { equals: currentEventId }
            }
        },
    })
)

const insert = (eventData) => (
    prisma.events.create({
        data: { ...eventData }
    })
)

const updateById = (eventData, eventId) => (
    prisma.events.update({
        where: {
            id: eventId
        },
        data: {
            ...eventData
        }
    })
)

module.exports = {
    getAll,
    updateById,
    insert,
    getById,
    getDetail,
    getSimilar,
}