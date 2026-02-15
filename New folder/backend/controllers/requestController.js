const SwapRequest = require('../models/SwapRequest');
const User = require('../models/User');

// Create swap request
exports.createSwapRequest = async (req, res) => {
  try {
    const { requesteeId, skillOfferedId, skillRequestedId, message, proposedDate } = req.body;

    const request = new SwapRequest({
      requester: req.userId,
      requestee: requesteeId,
      skillOffered: skillOfferedId,
      skillRequested: skillRequestedId,
      message,
      proposedDate
    });

    await request.save();
    await request.populate(['requester', 'requestee', 'skillOffered', 'skillRequested']);

    res.status(201).json({
      message: 'Swap request created successfully',
      request
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get swap requests
exports.getSwapRequests = async (req, res) => {
  try {
    const { status } = req.query;
    let query = {
      $or: [
        { requester: req.userId },
        { requestee: req.userId }
      ]
    };

    if (status) {
      query.status = status;
    }

    const requests = await SwapRequest.find(query)
      .populate(['requester', 'requestee', 'skillOffered', 'skillRequested'])
      .sort({ createdAt: -1 });

    res.json(requests);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Update swap request status
exports.updateSwapRequestStatus = async (req, res) => {
  try {
    const { status } = req.body;
    const requestId = req.params.id;

    const request = await SwapRequest.findById(requestId);
    if (!request) {
      return res.status(404).json({ message: 'Request not found' });
    }

    if (request.requestee.toString() !== req.userId && request.requester.toString() !== req.userId) {
      return res.status(403).json({ message: 'Not authorized' });
    }

    request.status = status;
    if (status === 'completed') {
      request.completedAt = Date.now();
      
      // Update user stats
      await User.findByIdAndUpdate(request.requester, { $inc: { completedSwaps: 1 } });
      await User.findByIdAndUpdate(request.requestee, { $inc: { completedSwaps: 1 } });
    }

    await request.save();
    await request.populate(['requester', 'requestee', 'skillOffered', 'skillRequested']);

    res.json({
      message: 'Request status updated successfully',
      request
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get request by ID
exports.getSwapRequestById = async (req, res) => {
  try {
    const request = await SwapRequest.findById(req.params.id)
      .populate(['requester', 'requestee', 'skillOffered', 'skillRequested']);

    if (!request) {
      return res.status(404).json({ message: 'Request not found' });
    }

    res.json(request);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
