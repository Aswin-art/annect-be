const { findall, insert, edit } = require("./categories.repository");

const getall = async (name = "") => {
  const cg = await findall(name);
  return cg;
};

const create = async (categoriesdata) => {
  const cg = await insert(categoriesdata);
  return cg;
};

const update = async (id, categoriesdata) => {
  const cg = await edit(id, categoriesdata);
  return cg;
};

module.exports = {
  getall,
  create,
  update,
};
