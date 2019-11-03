const express = require("express");
const router = express.Router();

// User Model
const User = require("../../models/User");

// @route   GET api/users
// @desc    get all users
// @access  public

router.get("/", (req, res) => {
  User.find()
    .sort({ date: -1 })
    .then(users => res.json(users));
});

// @route   POST api/users
// @desc    create a user
// @access  public

router.post("/", (req, res) => {
  const newUser = new User({
    email: req.body.email,
    password: req.body.password
  });
  newUser.save().then(user => res.json(user));
});

// @route   DELETE api/users/:id
// @desc    delete a user
// @access  public

router.post("/:id", (req, res) => {
  User.findById(req.params.id)
    .then(user => user.remove().then(() => res.json({ success: true })))
    .catch(err => res.status(404).json({ success: false }));
});

module.exports = router;
