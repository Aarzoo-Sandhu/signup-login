const express = require('express');
const router = express.Router();
const postMiddleware = require('../middleware/post-middleware');
const postController = require('../controller/post-controller');
const authMiddleware = require('../middleware/auth-middleware');

// Getting all posts
router.get('/' , authMiddleware.AuthenticationUser, postController.getAllPosts);

//Create post
router.post('/create', authMiddleware.AuthenticationUser, postMiddleware.validateCreatePostRequest, postController.createPost);

//Update post
router.put('/update/:id' , authMiddleware.AuthenticationUser, postMiddleware.validateUpdatePostRequest, postController.updatePost);

// Delete post
router.delete('/delete/:id', authMiddleware.AuthenticationUser, postController.deletePost);

module.exports = router;


