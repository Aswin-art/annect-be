const prisma = require("../db/index");

const getAll = (filter) => {
  return prisma.events.findMany(filter);
};

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
      user_events: true,
      favorites: true,
      channels: true,
      tags: true,
    },
  });

const getSimilar = (currentEventId, eventTagId) =>
  prisma.events.findMany({
    take: 3,
    where: {
      OR: [{ tag_id: { equals: eventTagId } }],
      NOT: {
        id: { equals: currentEventId },
      },
    },
  });

const insert = (eventData) => {
  const { tag_id, channel_id, ...rest } = eventData;
  return prisma.events.create({
    data: {
      ...rest,
      tags: {
        connect: {
          id: tag_id,
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

const updatePaymentImage = async (eventId, paymentImage) => {
  await prisma.events.update({
    where: {
      id: eventId,
    },
    data: {
      tf_image: paymentImage,
    },
  });
};

module.exports = {
  getAll,
  updateById,
  insert,
  getById,
  getDetail,
  getSimilar,
  updatePaymentImage,
};
