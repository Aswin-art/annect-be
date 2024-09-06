const prisma = require("../db");
const cuid = require("cuid");

const findall = async (name, user_id) => {
  const ch = await prisma.channels.findMany({
    where: {
      NOT: {
        user_id: user_id,
      },
      name: {
        contains: name,
      },
      status: "VERIFIED",
    },
    include: {
      users: true,
      follows: true,
      _count: {
        select: {
          events: true,
        },
      },
    },
    orderBy: {
      created_at: "desc",
    },
  });

  ch.forEach((channel) => {
    channel.is_following = false;

    if (channel.followers && channel.followers.length > 0 && user_id != null) {
      channel.followers.forEach((follower) => {
        if (follower.user_id == user_id) {
          channel.is_following = true;
        }
      });
    }
  });

  return ch;
};

const findchannelbyiduser = async (user_id) => {
  const channel = await prisma.channels.findFirst({
    where: {
      user_id: user_id,
    },
    include: {
      events: {
        include: {
          categories: true,
          tags: true,
          user_events: true,
        },
      },
      users: true,
      follows: {
        include: {
          users: true,
        },
      },
      _count: true,
    },
  });
  return channel;
};

const findbyid = async (id, user_id) => {
  const ch = await prisma.channels.findUnique({
    where: {
      id: id,
    },
    include: {
      users: true,
      follows: true,
      events: {
        include: {
          tags: true,
          categories: true,
        },
      },
    },
  });

  if (ch) {
    ch.is_following = false;

    if (ch.follows && ch.follows.length > 0 && user_id != null) {
      ch.follows.forEach((follow) => {
        if (follow.user_id == user_id) {
          ch.is_following = true;
        }
      });
    }
  }

  return ch;
};

const insert = async (channelsdata) => {
  const ch = await prisma.channels.create({
    data: {
      id: cuid(),
      user_id: channelsdata.user_id,
      name: channelsdata.name,
      description: channelsdata.description,
      image: channelsdata.image,
      no_rek: channelsdata.no_rek,
      nik: channelsdata.nik,
    },
  });
  return ch;
};

const edit = async (id, channelsdata) => {
  const ch = await prisma.channels.update({
    where: {
      id: id,
    },
    data: {
      name: channelsdata.name,
      description: channelsdata.description,
      image: channelsdata.image,
      nik: channelsdata.nik,
      no_rek: channelsdata.no_rek,
      phone: channelsdata.phone,
      status: channelsdata.status,
    },
  });
  return ch;
};

module.exports = {
  findall,
  findbyid,
  insert,
  edit,
  findchannelbyiduser,
};
