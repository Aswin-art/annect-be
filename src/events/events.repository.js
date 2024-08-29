const prisma = require("../db/index");

const getAll = () =>
  prisma.events.findMany({
    include: {
      user_events: {
        select: {
          users: true,
        },
      },
      channels: true,
      tags: true,
      categories: true,
    },
  });

const getById = (eventId) =>
  prisma.events.findFirst({
    where: {
      id: eventId,
    },
  });

const getDetail = (eventId) =>
  prisma.events.findUnique({
    where: {
      id: eventId,
    },
    include: {
      channels: true,
      tags: true,
      categories: true,
    },
  });

const getSimilar = (currentEventId, eventTagId, eventCategoryId) =>
  prisma.events.findMany({
    take: 3,
    where: {
      OR: [
        { tag_id: { equals: eventTagId } },
        { category_id: { equals: eventCategoryId } },
      ],
      NOT: {
        id: { equals: currentEventId },
      },
    },
  });

const insert = (eventData) => {
  const { tag_id, category_id, channel_id, ...rest } = eventData;
  return prisma.events.create({
    data: {
      ...rest,
      tags: {
        connect: {
          id: tag_id,
        },
      },
      categories: {
        connect: {
          id: category_id,
        },
      },
      channels: {
        connect: {
          id: channel_id,
        },
      },
    },
  });
};

const updateById = (eventData, eventId) =>
  prisma.events.update({
    where: {
      id: eventId,
    },
    data: {
      ...eventData,
    },
  });

module.exports = {
  getAll,
  updateById,
  insert,
  getById,
  getDetail,
  getSimilar,
};
