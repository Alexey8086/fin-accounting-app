const Router = require('express')
const router = new Router()
const WalletController = require('../controllers/walletController')
const authMiddleware = require('../middleware/authMiddleware')

router.post('/create', authMiddleware, WalletController.create)
router.post('/delete', authMiddleware, WalletController.delete)
router.post('/update', authMiddleware, WalletController.update)

router.get('/getWallets/:userId', authMiddleware, WalletController.getWallets)



module.exports = router