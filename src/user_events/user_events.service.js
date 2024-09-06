const {
  getById,
  insert,
  updateStatus,
  findall,
} = require("./user_events.repository");
const userEventsInsertSchema = require("../schema/userEvents");

const getUserEventById = (user_id) => getById(user_id);

const updateUserEventStatus = (updated_user_event_status) => {
  return updateStatus(updated_user_event_status);
};

const inserUserEvent = (user_event_data) => {
  userEventsInsertSchema.parse(user_event_data);
  const { user_id, event_id } = user_event_data;
  return insert(user_id, event_id);
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
