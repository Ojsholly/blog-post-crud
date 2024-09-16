const express = require('express');

const router = express.Router();

const Post = require('../models/Post');

router.get('/', (req, res) => {
    res.send("We are on the posts page");
});

router.post('/', (req, res) => {
    const post = new Post({
        title: req.body.title,
        description: req.body.description,
    });

    post.save()
        .then(data => {
            res.status(201).json(data);
        })
        .catch(err => {
            res.status(500).json({ message: err.message });
        });
});


module.exports = router;