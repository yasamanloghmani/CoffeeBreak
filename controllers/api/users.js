const User = require('../../models/users/user');

module.exports = {
    create
};


function create(req, res) {
    User.create(req.body).then(function(user) {
      res.status(201).json(user);
    });
  }