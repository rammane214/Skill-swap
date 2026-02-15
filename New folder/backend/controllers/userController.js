const User = require('../models/User');

// Get user profile
exports.getUserProfile = async (req, res) => {
  try {
    const user = await User.findById(req.params.id)
      .populate('skills')
      .select('-password');
    
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    res.json(user);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Update user profile
exports.updateProfile = async (req, res) => {
  try {
    const { name, bio, avatar, skillsToLearn } = req.body;
    
    const user = await User.findByIdAndUpdate(
      req.userId,
      { name, bio, avatar, skillsToLearn, updatedAt: Date.now() },
      { new: true }
    ).select('-password');

    res.json({
      message: 'Profile updated successfully',
      user
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get all users (for browsing)
exports.getAllUsers = async (req, res) => {
  try {
    const { category, search } = req.query;
    let query = { _id: { $ne: req.userId } };

    if (search) {
      query.$or = [
        { name: { $regex: search, $options: 'i' } },
        { bio: { $regex: search, $options: 'i' } },
        { skillsToLearn: { $in: [new RegExp(search, 'i')] } }
      ];
    }

    const users = await User.find(query)
      .populate('skills')
      .select('-password')
      .limit(20);

    res.json(users);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Add review
exports.addReview = async (req, res) => {
  try {
    const { rating, comment } = req.body;
    const userId = req.params.id;

    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    user.reviews.push({
      reviewer: req.userId,
      rating,
      comment
    });

    // Recalculate average rating
    const avgRating = user.reviews.reduce((sum, review) => sum + review.rating, 0) / user.reviews.length;
    user.rating = avgRating;

    await user.save();

    res.json({
      message: 'Review added successfully',
      user
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
