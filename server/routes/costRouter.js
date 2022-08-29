const Router = require('express')
const router = new Router()
const CostController = require('../controllers/costController')
const authMiddleware = require('../middleware/authMiddleware')

router.post('/create', CostController.create)
router.post('/delete', CostController.delete)
router.post('/update', CostController.update)

router.get('/getCosts/:walletId', CostController.getCosts)



module.exports = router