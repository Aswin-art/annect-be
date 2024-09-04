const {
  findallusers,
  finduserbyid,
  findHistoryEvent,
} = require("./users.repeository");

const getall = async () => {
  const user = await findallusers();
  return user;
};

const getbyid = async (id) => {
  const user = await finduserbyid(id);
  if (!user) {
    throw new Error("id users not found");
  }
  return user;
};

const getHistoryEvent = async (id) => {
  const user = await findHistoryEvent(id);
  if (!user) {
    throw new Error("id users not found");
  }
  return user;
};

module.exports = {
  getall,
  getbyid,
  getHistoryEvent,
};
