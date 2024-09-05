const prisma = require("../db");

const findallusers = async () => {
  const user = await prisma.users.findMany();
  return user;
};

const finduserbyid = async (user_id) => {
  const user = await prisma.users.findUnique({
    where: {
      id: user_id,
    },
    include: {
      user_events: {
        include: {
          events: {
            include: {
              tags: true,
              channels: true,
              categories: true,
            },
          },
        },
        take: 3,
      },
      channels: {
        include: {
          users: true,
          _count: {
            select: {
              events: true,
            },
          },
        },
        take: 3,
      },
      favorites: {
        include: {
          events: {
            include: {
              tags: true,
              categories: true,
            },
          },
        },
        take: 3,
      },
    },
  });
  return user;
};

const findHistoryEvent = async (user_id) => {
  const user = await prisma.user_events.findMany({
    where: {
      user_id,
    },
    include: {
      events: true,
    },
  });

  return user;
};

module.exports = {
  findallusers,
  finduserbyid,
  findHistoryEvent,
};
