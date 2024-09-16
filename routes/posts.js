const express = require('express');

const router = express.Router();

const Post = require('../models/Post');

// Fetch all the posts.
router.get('/', async (req, res) => {
    try {
        const posts = await Post.find();

        res.status(200).json({ status: "success", data: posts });
    } catch (error) {
        console.log(error);

        res.status(400).json({ status: 'error', message: error.message });
    }
});

// Create a new post.
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

// Retrieve a specific post's details.
router.get('/:id', async (req, res) => {

    try {
        const post = await Post.findById(req.params.id);

        res.status(200).json({ status: "success", data: post });
    } catch (error) {
        console.log(error);

        res.status(500).json({ status: "error", message: error.message });
    }
});


module.exports = router;