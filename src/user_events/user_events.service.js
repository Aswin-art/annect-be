const {
  getById,
  insert,
  updateStatus,
  findall,
} = require("./user_events.repository");

const getUserEventById = (user_id) => getById(user_id);

const updateUserEventStatus = (updated_user_event_status) => {
  return updateStatus(updated_user_event_status);
};

const inserUserEvent = async (user_event_data) => {
  const { user_id, event_id, status } = user_event_data;
  return await insert(user_id, event_id, status);
};

const getall = async () => {
  const ue = await findall();
  return ue;
};

module.exports = {
  getUserEventById,
  inserUserEvent,
  updateUserEventStatus,
  getall,
};
