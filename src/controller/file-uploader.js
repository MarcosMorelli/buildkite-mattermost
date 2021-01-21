async function post (req, res, next) {
    console.log(req.body)
    res.status(200).json({status: true})
}

module.exports = {
    post
}