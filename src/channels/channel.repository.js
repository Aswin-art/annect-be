const prisma = require("../db");
const cuid = require("cuid");

const findall = async (name, user_id) => {
  const ch = await prisma.channels.findMany({
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

  console.log("repo", ch);

  ch.forEach((channel) => {
    channel.is_following = false;

    if (channel.follows && channel.follows.length > 0 && user_id != null) {
      channel.follows.forEach((follower) => {
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
      events: true,
    },
  });

  if (ch) {
    ch.is_following = false;

    if (ch.follows && ch.follows.length > 0 && user_id != null) {
      ch.is_following = ch.follows.some((follow) => follow.user_id === user_id);
    }
  }

  return ch;
};

const insert = async (channelsdata) => {
  try {
    const ch = await prisma.channels.create({
      data: {
        id: cuid(),
        users: {
          connect: {
            id: channelsdata.user_id,
          },
        },
        name: channelsdata.name,
        description: channelsdata.description,
        image: channelsdata.image,
        email: channelsdata.email,
        nik: channelsdata.nik,
        ktp_photo: channelsdata.ktp_photo,
        phone: channelsdata.phone,
      },
    });
    return ch;
  } catch (err) {
    console.log(err);
    return null;
  }
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
