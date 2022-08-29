const Router = require('express')
const router = new Router()
const ProfitController = require('../controllers/profitController')
const authMiddleware = require('../middleware/authMiddleware')

router.post('/create', ProfitController.create)
router.post('/delete', ProfitController.delete)
router.post('/update', ProfitController.update)

router.get('/getProfits/:walletId', ProfitController.getProfits)

module.exports = router