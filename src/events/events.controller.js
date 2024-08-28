const { Router } = require('express');
const { getAllEvents, updateEvent, insertEvent, getEventDetail } = require('./events.service');
const router = Router();

router.get('/', async (_, res) => {
    try {
        const allEvents = await getAllEvents();
        res.send(allEvents);
    } catch (error) {
        res.status(400).send(error.message);
    }
})

router.post('/:event_id', async (req, res) => {
    try {
        const { event_id } = req.params;
        const updatedEvent = await updateEvent(req.body, event_id);
        res.send(updatedEvent);
    } catch (error) {
        res.status(400).send(error.message);
    }
})

router.get('/:event_id', async (req, res) => {
    try {
        const { event_id } = req.params;
        const eventDetail = await getEventDetail(event_id);
        res.send(eventDetail);
    } catch (error) {
        res.status(400).send(error.message);
    }
})

router.post('/', async (req, res) => {
    try {
        const insertedEvent = await insertEvent(req.body);
        res.send(insertedEvent);
    } catch (error) {
        if (error.message == "NOT AUTHORIZED") {
            res.status(403).send(error.message);
        }
        res.status(400).send(error.message);
    }
})

module.exports = router;
