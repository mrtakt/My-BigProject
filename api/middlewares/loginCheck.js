function loginVerification(req, res, next) {
    const key = req.body.key?.toString()
    if (!key) {
        return res
            .status(403)
            .send({ error: true, message: 'no key query was present' })
    }
    const instance = WhatsAppInstances[key]
    if (!instance.instance?.online) {
        return res
            .status(401)
            .send({ error: true, message: "phone isn't connected" })
    }
    next()
}

module.exports = loginVerification
