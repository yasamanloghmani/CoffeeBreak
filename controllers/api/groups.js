const Group = require('../../models/groups/group');
const User = require('../../models/users/user');
module.exports = {
    create,
    index,
    show,
    update,
    deleteOne,
    addGroupToUser
};



function create(req, res) {
  Group.create(req.body).then(function(group) {
    res.status(201).json(group);
  });
}



function addGroupToUser(req, res) {
  User.findById(req.params.id, function(err, user) {
    user.groups.push(req.body.groupsId);
    user.save((err, user)=>{
      if (err) {
        console.log("create error: " + err);
      }
      console.log("created ", user.groups);
      res.json(user);

    })
  })
}




//get all users
function index(req, res) {
  Group.find()
    .populate('user')
      .exec((err, groups)=>{
      if (err) { 
        console.log("index error: " + err); }
      console.log(groups)
      res.json(groups);
    });
}

//show each user
function show(req, res) {
Group.findById(req.params.id)
  .populate('user')
    .exec((err, group)=>{
      if (err) { 
        console.log("index error: " + err); }
      console.log(group)
      res.json(group);
    })
}


function update(req, res) {
Group.findByIdAndUpdate(req.params.id, req.body, {new: true})
  .populate('user')
    .exec((err, group)=>{
      if (err) { 
        console.log("index error: " + err); }
      console.log(group)
      res.json(group);
  })
}

function deleteOne(req, res) {
Group.findByIdAndDelete(req.params.id)
  .populate('user')
    .exec((err, group)=>{
       if (err) { 
         console.log("index error: " + err); }
      console.log(group)
      res.json(group);
  })
}