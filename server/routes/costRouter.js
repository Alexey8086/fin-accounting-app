const Router = require('express')
const router = new Router()
const CostController = require('../controllers/costController')
const authMiddleware = require('../middleware/authMiddleware')

router.post('/create', authMiddleware, CostController.create)
router.post('/delete', authMiddleware, CostController.delete)
router.post('/update', authMiddleware, CostController.update)

router.get('/getCosts/:walletId', authMiddleware, CostController.getCosts)
router.get('/deleteAllCosts/:walletId', authMiddleware, CostController.deleteAllCosts)


module.exports = router