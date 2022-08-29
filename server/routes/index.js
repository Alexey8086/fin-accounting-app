const Router = require('express')
const router = new Router()
const userRouter = require('./userRouter')
const walletRouter = require('./walletRouter')
const profitRouter = require('./profitRouter')
const costRouter = require('./costRouter')

router.use('/user', userRouter)
router.use('/wallet', walletRouter)
router.use('/profit', profitRouter)
router.use('/cost', costRouter)


module.exports = router