const Router = require('express')
const router = new Router()
const userController = require('../controllers/userController')
const authMiddleware = require('../middleware/authMiddleware')

router.post('/registration', userController.registration)
router.post('/login', userController.login)
router.get('/getUser/:id', authMiddleware, userController.getUser)
router.post('/auth', authMiddleware, userController.check)


module.exports = router