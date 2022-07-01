const Router = require('express')
const router = new Router()
const deviceRouter = require('./deviceRoutes')
const userRouter = require('./userRoutes')
const brandRouter = require('./brandRoutes')
const typeRouter = require('./typeRoutes')

router.use('/user', userRouter)
router.use('/type', typeRouter)
router.use('/brand', brandRouter)
router.use('/device', deviceRouter)

module.exports = router 