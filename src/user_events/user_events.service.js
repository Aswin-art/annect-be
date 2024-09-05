const { getById, insert } = require("./user_events.repository");
const userEventsInsertSchema = require("../schema/userEvents");

const getUserEventById = (user_id) => getById(user_id);

const inserUserEvent = (user_event_data) => {
  userEventsInsertSchema.parse(user_event_data);
  const { user_id, event_id } = user_event_data;
  return insert(user_id, event_id);
};

module.exports = {
  getUserEventById,
  inserUserEvent,
};
