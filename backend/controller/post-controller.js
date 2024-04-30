const postRepository = require('../repositories/post-repository');

// Function to create a post
async function createPost(req, res) {
    try {
        // Save post to database
        await postRepository.createPost(req.body);
        res.status(201).json({ message: 'Post created successfully' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: error.message });
    }
}

// Function to get all post
async function getAllPosts(req, res) {
    try {
        // Save post to database
        const posts = await postRepository.getAllPosts();
        res.status(201).json(posts);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: error.message });
    }
}

// Function to update a post
async function updatePost(req, res) {
    try {
        const updateId = req.params.id

        // update post to database
        await postRepository.updatePost(updateId, req.body);
        res.status(201).json({ message: 'Post updated successfully' });

    } catch (error) {
        console.error(error);
        res.status(500).json({ message: error.message });
    }
}

// Function to delete a post
async function deletePost(req, res) {
    try {
        const deleteId = req.params.id

        // update post to database
        await postRepository.deletePost(deleteId);
        res.status(201).json({ message: 'Post Deleted successfully' });
        
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: error.message });
    }
}

module.exports = {createPost, getAllPosts, updatePost, deletePost}