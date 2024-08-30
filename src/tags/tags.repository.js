const prisma = require("../db");
const cuid = require("cuid");

const findall = async (name) => {
  const tg = await prisma.tags.findMany({
    where: {
      name: {
        contains: name,
      },
    },
    include: {
      events: true,
    },
  });
  return tg;
};

const insert = async (tagsdata) => {
  const tg = await prisma.tags.create({
    data: {
      id: cuid(),
      name: tagsdata.name,
    },
  });
  return tg;
};

const edit = async (id, tagsdata) => {
  const tg = await prisma.tags.update({
    where: {
      id: id,
    },
    data: {
      name: tagsdata.name,
    },
  });
  return tg;
};

module.exports = {
  findall,
  insert,
  edit,
};
