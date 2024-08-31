const { seedRepo } = require("./seeder.repository");

const seedService = async (name = "") => {
  const tg = await seedRepo(name);
  return tg;
};

module.exports = {
  seedService,
};
