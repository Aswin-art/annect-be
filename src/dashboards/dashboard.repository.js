const prisma = require("../db");

const countall = async () => {
  const userCount = await prisma.users.count({
    where: {
      NOT: {
        role: "ADMIN",
      },
    },
  });

  const eventCount = await prisma.events.count();

  const channelCount = await prisma.channels.count();

  const pricecount = await prisma.events.aggregate({
    _sum: {
      price: true,
    },
  });

  const totalprice = pricecount._sum.price;

  const transaction = await prisma.user_events.findMany({
    include: {
      events: true,
      users: true,
    },
    orderBy: {
      created_at: "desc",
    },
    take: 5,
  });

  const tags = await prisma.tags.findMany({
    include: {
      events: true,
    },
  });
  const tagsWithEventCount = [];

  tags.forEach((tag) => {
    const tagData = {
      name: tag.name,
      totalData: tag.events.length,
    };
    tagsWithEventCount.push(tagData);
  });

  return {
    userCount,
    eventCount,
    channelCount,
    totalprice,
    transaction,
    tagsWithEventCount,
  };
};

module.exports = {
  countall,
};
