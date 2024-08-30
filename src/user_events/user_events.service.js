const { getById, insert } = require("./user_events.repository");

const getUserEventById = (user_id) => getById(user_id);

const inserUserEvent = (user_id, event_id) => insert(user_id, event_id);

module.exports = {
  getUserEventById,
  inserUserEvent,
};
