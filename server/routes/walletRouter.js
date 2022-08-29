const Router = require('express')
const router = new Router()
const WalletController = require('../controllers/walletController')
const authMiddleware = require('../middleware/authMiddleware')

router.post('/create', WalletController.create)
router.post('/delete', WalletController.delete)
router.post('/update', WalletController.update)


module.exports = router