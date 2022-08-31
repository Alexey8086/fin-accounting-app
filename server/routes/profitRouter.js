const Router = require('express')
const router = new Router()
const ProfitController = require('../controllers/profitController')
const authMiddleware = require('../middleware/authMiddleware')

router.post('/create', authMiddleware, ProfitController.create)
router.post('/delete', authMiddleware, ProfitController.delete)
router.post('/update', authMiddleware, ProfitController.update)

router.get('/getProfits/:walletId', authMiddleware, ProfitController.getProfits)
router.get('/deleteAllProfits/:walletId', authMiddleware, ProfitController.deleteAllProfits)

module.exports = router