const route = require('express').Router()
const { createUser, getAllUser, getSingleUser, updateUserById, deleteUser } = require('../controllers/userControllers');

route.post('/createuser', createUser)
route.get('/getusers', getAllUser)
route.get('/getuser/:id', getSingleUser)
route.patch('/updateuser/:id', updateUserById)
route.delete('/deleteuser/:id', deleteUser)

module.exports = route