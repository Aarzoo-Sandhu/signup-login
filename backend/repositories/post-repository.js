const Post = require('../model/post-model');

// function to create post 
async function createPost(data) {
    try {
        const newPost = await Post.create(data);
        return newPost;
    } catch (error) {
        throw new Error(error.message);
    }
}

// function to get all post 
async function getAllPosts() {
    try {
        const allPost = await Post.find({});
        return allPost;
    } catch (error) {
        throw new Error(error.message);
    }
}

// function to update post 
async function updatePost(id , data) {
    try {
        const response = await Post.findByIdAndUpdate({_id : id}, data);
        return response;
    } catch (error) {
        throw new Error(error.message);
    }
}

// function to delete post 
async function deletePost(id) {
    try {
        const response = await Post.deleteOne({_id : id});
        return response;
    } catch (error) {
        throw new Error(error.message);
    }
}
module.exports = {createPost, getAllPosts, updatePost, deletePost}