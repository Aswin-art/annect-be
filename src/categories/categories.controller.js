const express = require('express');
const { getall, create, update } = require('./categories.service');
const router = express.Router();

router.get('/', async (req,res) => {
    try {
        const cg = await getall();
        res.send(cg);
    } catch (error) {
        res.status(400).send(error.message);
    }
})

router.post('/', async (req,res) => {
    try {
        const categoriesdata = req.body;
        const cg = await create(categoriesdata);
        res.send(cg)
    } catch (error) {
        res.status(400).send(error.message);
    }
})

router.post('/:id', async (req,res) => {
    try {
        const id = req.params.id;
        const categoriesdata = req.body;
        const cg = await update(id, categoriesdata);
        res.send(cg)
    } catch (error) {
        res.status(400).send(error.message);
    }
})

module.exports = router;