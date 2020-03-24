const Group = require('../../models/group');
//const User = require('../../models/user');
module.exports = {
    create,
    index,
    show,
    update,
    deleteOne,
    createPost,
    updatePost,
    deletePost,
    allPosts
};



function create(req, res) {
  Group.create(req.body).then(function(group) {
    res.status(201).json(group);
  });
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


function createPost(req, res){
  Group.findById(req.params.id)
  .populate('user')
  .exec((err , group) => {
    group.post.push(req.body);
    group.save((err , updatedgroup) => {
      res.json(updatedgroup);
    })
  })
}


function updatePost(req, res) {
  Group.findById(req.params.id).exec((err, group) =>
    {
      var subDoc = group.post.id(req.params.postId);
      subDoc.set(req.body);
      group.save((err, updatedgroup) => {
        if (err) { 
          console.log("index error: " + err); }
        res.json(updatedgroup)

      })
    }
  )
}

function deletePost(req, res) {
  Group.findById(req.params.id).exec((err, group) =>
    {
      var subDoc = group.post.id(req.params.postId);
      subDoc.remove();
      group.save((err, updatedgroup) => {
        if (err) { 
          console.log("index error: " + err); }
        res.json(updatedgroup)

      })
    }
  )
}



function allPosts(req, res) {
  Group.findById(req.params.id)
  .populate('user')
  .exec((err , group) => {
      if (err) { 
      console.log("index error: " + err); }
      posts = group.post;
      res.json(posts);
    });
}
