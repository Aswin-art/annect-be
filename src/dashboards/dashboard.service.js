const { countall } = require("./dashboard.repository");

const totalcount = async () => {
  const count = await countall();
  return count;
};

module.exports = {
  totalcount,
};
