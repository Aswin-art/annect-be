const { findall, insert, edit } = require("./tags.repository");

const getall = async (name = "") => {
  const tg = await findall(name);
  return tg;
};

const create = async (tagsdata) => {
  const tg = await insert(tagsdata);
  return tg;
};

const update = async (id, tagsdata) => {
  const tg = await edit(id, tagsdata);
  return tg;
};

module.exports = {
  getall,
  create,
  update,
};
