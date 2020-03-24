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



// req.user.id
function joinGroup(req, res){
 // const userId = req.params.userId ;
  Group.findById(req.params.groupId)
  .populate("user")
      .exec((err, group) => {
        if(err){
           console.log("index error: " + err);
        }
        console.log(req.body.userId)
        group.users.push(req.body.userId);
        console.log(group);
        group.save((err, updatedGroup)=>{
          if (err) {
            console.log("create error: " + err);
          }
          res.json(updatedGroup);
        })
      })
      User.findById(req.body.userId)
      .populate('group')
      .exec(
        (err, user) => {
          if(err){
             console.log("index error: " + err);
          }
          user.groups.push(req.params.groupId);
          user.save((err, updatedUser)=>{
            if (err) {
              console.log("create error: " + err);
            }
            res.json(updatedUser);
          })
        }
      )
}