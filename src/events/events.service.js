const {
  getAll,
  updateById,
  insert,
  getDetail,
  getSimilar,
} = require("./events.repository");

const getAllEvents = (name = "") => getAll(name);

const updateEvent = (eventData, eventId) => updateById(eventData, eventId);

const insertEvent = async (eventData) => {
  return insert(eventData);
};

const getEventDetail = async (event_id) => {
  const eventDetail = await getDetail(event_id);
  const { tag_id, channel_id, id } = eventDetail;
  const similarEvent = await getSimilar(id, tag_id, channel_id);
  eventDetail.similar_event = similarEvent;
  return eventDetail;
};

module.exports = {
  getAllEvents,
  updateEvent,
  insertEvent,
  getEventDetail,
};
