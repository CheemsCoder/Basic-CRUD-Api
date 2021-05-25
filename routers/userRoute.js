const router = require('express').Router();
const {addUser,getAllUser,getUser, deleteUser, updateUser} = require('../controllers/userController');

router.post('/addUser', addUser);
router.get('/getAllUsers', getAllUser)
router.get('/getUser', getUser)
router.delete('/deleteUser', deleteUser)
router.put('/updateUser', updateUser)

module.exports = router