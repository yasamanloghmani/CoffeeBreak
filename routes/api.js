var express = require('express');
var router = express.Router();
const userCtrl = require('../controllers/api/users');
const groupctrl = require('../controllers/api/groups');


//users route
router.get('/users', userCtrl.index);
router.post('/users', userCtrl.create);
router.get('/users/:id', userCtrl.show);
router.put('/users/:id', userCtrl.update);
router.delete('/users/:id', userCtrl.deleteOne);
router.put('/groups/:groupId/join', userCtrl.joinGroup);
router.post('/users/:id/coffees', userCtrl.createCoffee);
router.get('/users/:id/coffees', userCtrl.allCoffees);

//groups routes
router.get('/groups', groupctrl.index);
router.post('/groups', groupctrl.create);
router.get('/groups/:id', groupctrl.show);
router.put('/groups/:id', groupctrl.update);
router.delete('/groups/:id', groupctrl.deleteOne);
router.post('/groups/:id/posts', groupctrl.createPost)
router.put('/groups/:id/posts/:postId', groupctrl.updatePost)
router.delete('/groups/:id/posts/:postId', groupctrl.deletePost)
router.get('/groups/:id/posts', groupctrl.allPosts);
router.get('/groups/:id/posts/:postId', groupctrl.showPost)



module.exports = router;

