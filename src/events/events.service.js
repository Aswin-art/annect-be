const { getAll, updateById, insert, getDetail, getSimilar } = require('./events.repository');
const { finduserbyid } = require('../users/users.repeository');

const getAllEvents = () => (getAll());

const updateEvent = (eventData, eventId) => (updateById(eventData, eventId));

const insertEvent = async (requestBody, eventData) => {
    const { user_id } = requestBody;
    const { role: userRole } = await finduserbyid(user_id);
    if (userRole == "ADMIN") {
        throw new Error("NOT AUTHORIZED");

    }
    return insert(eventData);
};

const getEventDetail = async (event_id) => {
    const eventDetail = await getDetail(event_id);
    const { tag_id, channel_id, id } = eventDetail;
    const similarEvent = await getSimilar(id, tag_id, channel_id);
    eventDetail.similar_event = similarEvent;
    return eventDetail;
}

module.exports = {
    getAllEvents,
    updateEvent,
    insertEvent,
    getEventDetail,
}