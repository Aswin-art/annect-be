const prisma = require("../db");

const findallusers = async () => {
  const user = await prisma.users.findMany();
  return user;
};

const finduserbyid = async (id) => {
  const user = await prisma.users.findUnique({
    where: {
      id: id,
    },
    include: {
      user_events: {
        include: {
          events: true,
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

  const favoriteEventIds = user.favorites.map(favorite => favorite.event_id);

  const userEventsWithFavoritesAndJoin = user.user_events.map((userEvent) => {
    return {
      ...userEvent,
      is_Payment: userEvent.status
    };
  });

  const is_following = await prisma.follows.findMany({
    where: {
      user_id: id,
    },
    select: {
      channel_id: true,
    },
  });

  const followingChannelIds = is_following.map(follow => follow.channel_id);

  const userChannelsWithFollowing = user.channels.map((channel) => {
    return {
      ...channel,
      is_following: followingChannelIds.includes(channel.id),
    };
  });

  return {
    ...user,
    user_events: userEventsWithFavoritesAndJoin,
    channels: userChannelsWithFollowing,
  };
};

const findHistoryEvent = async (user_id) => {
  const user = await prisma.user_events.findMany({
    where: {
      user_id,
    },
    include: {
      events: {
        include: {
          tags: true,
          categories: true,
        },
      },
    },
  });

  return user;
};

module.exports = {
  findallusers,
  finduserbyid,
  findHistoryEvent,
};
