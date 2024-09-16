const express = require('express');

const router = express.Router();

const Post = require('../models/Post');

router.get('/', (req, res) => {
    res.send("We are on the posts page");
});

router.post('/', async (req, res) => {
    const post = new Post({
        title: req.body.title,
        description: req.body.description,
    });

    try {
        const savedPost = await post.save();

        res.status(201).json({ status: "success", data: savedPost });
    } catch (error) {
        console.log(error);

        res.status(500).json({ status: "error", error: error.message });
    }
});


module.exports = router;