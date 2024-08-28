const express = require('express');
const { findfollowbyuserid, findfollowbychannelid, create, deletefollow, getall } = require('./follows.service');
// const { deleteid } = require('./follows.repository');
const router = express.Router();

// router.get('/follow', async (req, res) => {
//     try {
//         const user_id = req.query.user_id;
//         let follow;
//         follow = await getall(user_id);
//         res.send(follow)
//     } catch (error) {
//         res.status(400).send(error.message);
//     }
// })

router.get('/users/:id/follows', async (req, res) => {
    try {
        const id = req.params.id;
        const follow = await findfollowbyuserid(id);
        res.send(follow);
    } catch (error) {
        res.status(400).send(error.message);
    }
})

router.get('/channels/:id/followers', async (req, res) => {
    try {
        const id = req.params.id;
        const follow = await findfollowbychannelid(id);
        res.send(follow);
    } catch (error) {
        res.status(400).send(error.message);
    }
})

router.post('/follows', async (req, res) => {
    try {
        const followdata = req.body;
        const channelId = req.query.id; 
        
        
        const fl = await create(followdata, channelId);
        res.status(201).send(fl);
    } catch (error) {
        console.log("Error terjadi:", error.message);
        res.status(400).send({ error: error.message });
    }
});


router.post('/follows/:id', async (req,res) => {
    try {
        const id = req.params.id
        await deletefollow(id);
        res.send({
            message: "Success"
        })
    } catch (error) {
        res.status(400).send(error.message);
    }
})

module.exports = router;