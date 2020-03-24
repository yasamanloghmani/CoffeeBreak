const User = require('../../models/users/user');
const Group = require('../../models/groups/group');

module.exports = {
    create,
    index,
    show,
    update,
    deleteOne,
    joinGroup
};


function create(req, res) {
    User.create(req.body).then(function(user) {
      res.status(201).json(user);
    });
}
//get all users
function index(req, res) {
    User.find()
      .populate('groups')
        .exec((err, users)=>{
        if (err) { 
          console.log("index error: " + err); }
        console.log(users)
        res.json(users);
      });
  }
  
//show each user
function show(req, res) {
  User.findById(req.params.id)
    .populate('groups')
      .exec((err, user)=>{
        if (err) { 
          console.log("index error: " + err); }
        console.log(user)
        res.json(user);
      })
}


function update(req, res) {
  User.findByIdAndUpdate(req.params.id, req.body, {new: true})
    .populate('groups')
      .exec((err, user)=>{
        if (err) { 
          console.log("index error: " + err); }
        console.log(user)
        res.json(user);
      })
}

function deleteOne(req, res) {
  User.findByIdAndDelete(req.params.id)
    .populate('groups')
      .exec((err, user)=>{
        if (err) { 
          console.log("index error: " + err); }
        console.log(user)
        res.json(user);
  })
}

function joinGroup(req, res){
  const userId = req.params.userId;
  console.log(userId);
  Group.findById(req.params.groupId)
      .exec((err, user, group) => {
        console.log(groupId)
        if(err){
           console.log("index error: " + err);
        }
        user.groups.push(groupId);
        group.users.push(userId);
        user.save((err, user)=>{
          if (err) {
            console.log("create error: " + err);
          }
          console.log("created ", user.groups);
          res.json(user);
        })
        group.save((err, user)=>{
          if (err) {
            console.log("create error: " + err);
          }
          console.log("created ", user.groups);
          res.json(group);
        })
      })

}