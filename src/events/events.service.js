const {
  getAll,
  updateById,
  insert,
  getDetail,
  getSimilar,
  updatePaymentImage,
} = require("./events.repository");

const getAllEvents = (filter) => getAll(filter);

const updateEvent = (eventData, eventId) => updateById(eventData, eventId);

const updatePaymentImageService = async (eventId, paymentImage) =>
  await updatePaymentImage(eventId, paymentImage);

const insertEvent = async (eventData) => {
  return insert(eventData);
};

const getEventDetail = async (event_id, user_id) => {
  const eventDetail = await getDetail(event_id);

  if (!eventDetail) {
    throw Error("event not found!");
  }

  eventDetail.is_favorite = false;
  eventDetail.is_join = false;

  if (
    eventDetail.favorites &&
    eventDetail.favorites.length > 0 &&
    user_id != null
  ) {
    eventDetail.is_favorite = eventDetail.favorites.some(
      (favorite) => favorite.user_id === user_id
    );
  }

  if (
    eventDetail.user_events &&
    eventDetail.user_events.length > 0 &&
    user_id != null
  ) {
    eventDetail.is_join = eventDetail.user_events.some(
      (user_events) => user_events.user_id == String(user_id)
    );
  }

  const similarEvent = await getSimilar(eventDetail.id, eventDetail.tag_id);
  eventDetail.similar_event = similarEvent;
  return eventDetail;
};

module.exports = {
  getAllEvents,
  updateEvent,
  insertEvent,
  getEventDetail,
  updatePaymentImageService,
};
