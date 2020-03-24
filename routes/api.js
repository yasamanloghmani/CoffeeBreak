var express = require('express');
var router = express.Router();
const userCtrl = require('../controllers/api/users');
const groupctrl = require('../controllers/api/groups');
//users route
router.get('/users', userCtrl.index);
router.post('/users', userCtrl.create);
router.get('/users/:id', userCtrl.show);
router.put('/users/:id', userCtrl.update);
router.delete('/users/:id', userCtrl.deleteOne)
router.post('/users/userId/groups/groupId', userCtrl.joinGroup)

//groups routes
router.get('/groups', groupctrl.index);
router.post('/groups', groupctrl.create);
router.get('/groups/:id', groupctrl.show);
router.put('/groups/:id', groupctrl.update);
router.delete('/groups/:id', groupctrl.deleteOne)
router.post('users/:id/groups', groupctrl.addGroupToUser)

module.exports = router;

