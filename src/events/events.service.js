const {
  getAll,
  updateById,
  insert,
  getDetail,
  getSimilar,
} = require("./events.repository");

const getAllEvents = (filter) => getAll(filter);

const updateEvent = (eventData, eventId) => updateById(eventData, eventId);

const insertEvent = async (eventData) => {
  return insert(eventData);
};

const getEventDetail = async (event_id, user_id) => {
  const eventDetail = await getDetail(event_id);

  eventDetail.is_favorite = false;

  if (
    eventDetail.favorites &&
    eventDetail.favorites.length > 0 &&
    user_id != null
  ) {
    eventDetail.is_favorite = eventDetail.favorites.some(
      (favorite) => favorite.user_id === user_id
    );
  }

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
