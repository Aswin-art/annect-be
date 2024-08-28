const express = require('express');
const { getall, create, update } = require('./tags.service');
const router = express.Router();

router.get('/', async (req,res) => {
    try {
        const tg = await getall();
        res.send(tg);
    } catch (error) {
        res.status(400).send(error.message);
    }
})

router.post('/', async (req,res) => {
    try {
        const tagsdata = req.body;
        const tg = await create(tagsdata);
        res.send(tg)
    } catch (error) {
        res.status(400).send(error.message);
    }
})

router.post('/:id', async (req,res) => {
    try {
        const id = req.params.id;
        const tagsdata = req.body;
        const tg = await update(id, tagsdata);
        res.send(tg)
    } catch (error) {
        res.status(400).send(error.message);
    }
})

module.exports = router;