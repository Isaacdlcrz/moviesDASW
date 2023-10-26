module.exports = (req, res, next) => {
    req.query.token === '123' ? next() : res.status(401).send("You are not authorized.")
}