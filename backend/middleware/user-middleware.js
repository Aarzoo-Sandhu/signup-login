//for validating signup request
function validateSignupRequest(req, res, next) {
    const { username, name, email, password } = req.body;

    // Validate username
    if (!username) {
        return res.status(400).json({ message: 'Username is required' });
    }

    // Validate name
    if (!name) {
        return res.status(400).json({ message: 'Name is required' });
    }

    // Validate email
    if (!email) {
        return res.status(400).json({ message: 'Email is required' });
    } else if (!validateEmail(email)) {
        return res.status(400).json({ message: 'Invalid email format' });
    }

    // Validate password
    if (!password) {
        return res.status(400).json({ message: 'Password is required' });
    } else if (password.length < 6) {
        return res.status(400).json({ message: 'Password must be at least 6 characters long' });
    }

    next();
}

function validateEmail(email) {
    const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return emailRegex.test(email);
}


// For validating login request
function validateLoginRequest(req, res, next) {
    const { username, password } = req.body;
    if (!username || !password) {
        return res.status(400).json({ message: 'Username and password are required' });
    }
    next();
}

module.exports = { validateSignupRequest, validateLoginRequest };
