const Message = require('../models/Message');

// Send message
exports.sendMessage = async (req, res) => {
  try {
    const { receiverId, content, swapRequestId } = req.body;

    const message = new Message({
      sender: req.userId,
      receiver: receiverId,
      content,
      swapRequest: swapRequestId
    });

    await message.save();
    await message.populate(['sender', 'receiver']);

    res.status(201).json({
      message: 'Message sent successfully',
      data: message
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get conversation
exports.getConversation = async (req, res) => {
  try {
    const { userId } = req.params;

    const messages = await Message.find({
      $or: [
        { sender: req.userId, receiver: userId },
        { sender: userId, receiver: req.userId }
      ]
    })
      .populate(['sender', 'receiver'])
      .sort({ createdAt: 1 });

    res.json(messages);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get all conversations (user's chats)
exports.getConversations = async (req, res) => {
  try {
    const messages = await Message.find({
      $or: [
        { sender: req.userId },
        { receiver: req.userId }
      ]
    })
      .populate(['sender', 'receiver'])
      .sort({ createdAt: -1 });

    // Group by user
    const conversations = {};
    messages.forEach(msg => {
      const otherUserId = msg.sender._id.toString() === req.userId ? msg.receiver._id.toString() : msg.sender._id.toString();
      if (!conversations[otherUserId]) {
        conversations[otherUserId] = [];
      }
      conversations[otherUserId].push(msg);
    });

    res.json(conversations);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Mark message as read
exports.markAsRead = async (req, res) => {
  try {
    const { messageId } = req.params;

    const message = await Message.findByIdAndUpdate(
      messageId,
      { isRead: true },
      { new: true }
    ).populate(['sender', 'receiver']);

    res.json(message);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
