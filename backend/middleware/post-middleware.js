const mongoose = require('mongoose');

// Function to validate Create post request
function validateCreatePostRequest(req, res, next) {
    const { title, content, author } = req.body;

    // Validate title
    if (!title || typeof title !== 'string') {
        return res.status(400).json({ message: 'Title is required and must be a string' });
    }

    // Validate content
    if (!content || typeof content !== 'string') {
        return res.status(400).json({ message: 'Content is required and must be a string' });
    }

    // Validate author
    if (!author || !mongoose.Types.ObjectId.isValid(author)) {
        return res.status(400).json({ message: 'Author is required and must be a valid ObjectId' });
    }

    next();
}

// Function to validate Create post request
function validateUpdatePostRequest(req, res, next) {
    const { title, content, author } = req.body;

    // Validate title
    if (title  && typeof title !== 'string') {
        return res.status(400).json({ message: 'Title must be a string' });
    }

    // Validate content
    if (content  && typeof content !== 'string') {
        return res.status(400).json({ message: 'Content must be a string' });
    }

    // Validate author
    if (author  && !mongoose.Types.ObjectId.isValid(author)) {
        return res.status(400).json({ message: 'Author must be a valid ObjectId' });
    }

    next();
}

module.exports = {validateCreatePostRequest, validateUpdatePostRequest}
