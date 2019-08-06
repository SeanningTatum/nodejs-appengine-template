const User = require('../models/User');

exports.getUser = async (req, res, next) => {
  try {
    const entity = await User.get(req.params.id);
    res.status(200).json(entity.plain());
  } catch (err) {
    res.status(400).json(err);
  }
};

exports.createUser = async (req, res, next) => {
  const entityData = User.sanitize(req.body);
  const user = new User(entityData);

  try {
    const entity = await user.save();
    res.json(entity.plain());
  } catch (err) {
    res.status(400).json(err);
  }
};
