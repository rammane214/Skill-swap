const Skill = require('../models/Skill');

// Create skill
exports.createSkill = async (req, res) => {
  try {
    const { title, description, category, proficiencyLevel } = req.body;

    const skill = new Skill({
      title,
      description,
      category,
      proficiencyLevel,
      owner: req.userId
    });

    await skill.save();

    res.status(201).json({
      message: 'Skill created successfully',
      skill
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get all skills
exports.getAllSkills = async (req, res) => {
  try {
    const { category, search, owner } = req.query;
    let query = { isActive: true };

    if (category) {
      query.category = category;
    }

    if (search) {
      query.$or = [
        { title: { $regex: search, $options: 'i' } },
        { description: { $regex: search, $options: 'i' } }
      ];
    }

    if (owner) {
      query.owner = owner;
    }

    const skills = await Skill.find(query)
      .populate('owner', '-password')
      .sort({ createdAt: -1 });

    res.json(skills);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get skill by ID
exports.getSkillById = async (req, res) => {
  try {
    const skill = await Skill.findById(req.params.id).populate('owner', '-password');
    
    if (!skill) {
      return res.status(404).json({ message: 'Skill not found' });
    }

    res.json(skill);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Update skill
exports.updateSkill = async (req, res) => {
  try {
    let skill = await Skill.findById(req.params.id);
    
    if (!skill) {
      return res.status(404).json({ message: 'Skill not found' });
    }

    if (skill.owner.toString() !== req.userId) {
      return res.status(403).json({ message: 'Not authorized to update this skill' });
    }

    skill = await Skill.findByIdAndUpdate(
      req.params.id,
      { ...req.body, updatedAt: Date.now() },
      { new: true }
    );

    res.json({
      message: 'Skill updated successfully',
      skill
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Delete skill
exports.deleteSkill = async (req, res) => {
  try {
    const skill = await Skill.findById(req.params.id);
    
    if (!skill) {
      return res.status(404).json({ message: 'Skill not found' });
    }

    if (skill.owner.toString() !== req.userId) {
      return res.status(403).json({ message: 'Not authorized to delete this skill' });
    }

    await Skill.findByIdAndRemove(req.params.id);

    res.json({ message: 'Skill deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
