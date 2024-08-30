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
            },
          },
        },
        take: 3,
      },
      channels: {
        include: {
          users: true,
        },
        take: 3,
      },
      favorites: {
        include: {
          events: true,
        },
        take: 3,
      },
    },
  });
  return user;
};

module.exports = {
  findallusers,
  finduserbyid,
};
