const User = require('../models/User');

async function getUserById(userId) {

    const user = await User.findById(userId)
        .select('-password');

    if (!user) {
        const error = new Error('User not found.');
        error.statusCode = 404;
        throw error;
    }

    return user;
}

async function getUserProfile(userId) {

    const user = await User.findById(userId)
        .select('-password');

    if (!user) {
        const error = new Error('User not found.');
        error.statusCode = 404;
        throw error;
    }

    return {
        id: user._id,
        name: user.name,
        email: user.email,
        createdAt: user.createdAt
    };
}

async function updateUserProfile(userId, updates) {

    const allowedUpdates = {};

    if (updates.name !== undefined) {
        allowedUpdates.name = updates.name.trim();
    }

    if (updates.email !== undefined) {
        allowedUpdates.email = updates.email.toLowerCase().trim();
    }

    const user = await User.findByIdAndUpdate(
        userId,
        allowedUpdates,
        {
            new: true,
            runValidators: true
        }
    ).select('-password');

    if (!user) {
        const error = new Error('User not found.');
        error.statusCode = 404;
        throw error;
    }

    return user;
}

async function deleteUser(userId) {

    const user = await User.findByIdAndDelete(userId);

    if (!user) {
        const error = new Error('User not found.');
        error.statusCode = 404;
        throw error;
    }

    return user;
}

module.exports = {
    getUserById,
    getUserProfile,
    updateUserProfile,
    deleteUser
};