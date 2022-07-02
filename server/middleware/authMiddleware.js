const jwt = require('jsonwebtoken')

module.exports = function (req, res, next) {
    if (req.method === "OPTIONS") {
        next()
    }
    try {
        const token = req.headers.authorization.split(' ')[1]
        // ! EXAMPLE: req.headers.authorization = Bearer asdasdadsdas
        if (!token) {
            return res.status(401).json({ message: `NOT AUTHORIZED` })
        }
        const decoded = jwt.verify(token, process.env.SECRET_KEY)
        req.user = decoded
        next()
    } catch (e) {
        res.status(401).json({ message: `NOT AUTHORIZED` })
    }
}