exports.create = async (req, res) => {
    const data = await WhatsAppInstances[req.body.key].createNewGroup(
        req.body.name,
        req.body.users
    )
    return res.status(201).json({ error: false, data: data })
}

exports.addNewParticipant = async (req, res) => {
    const data = await WhatsAppInstances[req.body.key].addNewParticipant(
        req.body.id,
        req.body.users
    )
    return res.status(201).json({ error: false, data: data })
}

exports.makeAdmin = async (req, res) => {
    const data = await WhatsAppInstances[req.body.key].makeAdmin(
        req.body.id,
        req.body.users
    )
    return res.status(201).json({ error: false, data: data })
}

exports.demoteAdmin = async (req, res) => {
    const data = await WhatsAppInstances[req.body.key].demoteAdmin(
        req.body.id,
        req.body.users
    )
    return res.status(201).json({ error: false, data: data })
}

exports.listAll = async (req, res) => {
    const data = await WhatsAppInstances[req.body.key].getAllGroups(
        req.body.key
    )
    return res.status(201).json({ error: false, data: data })
}

exports.leaveGroup = async (req, res) => {
    const data = await WhatsAppInstances[req.body.key].leaveGroup(req.query.id)
    return res.status(201).json({ error: false, data: data })
}

exports.getInviteCodeGroup = async (req, res) => {
    const data = await WhatsAppInstances[req.body.key].getInviteCodeGroup(
        req.query.id
    )
    return res
        .status(201)
        .json({ error: false, link: 'https://chat.whatsapp.com/' + data })
}

exports.getInstanceInviteCodeGroup = async (req, res) => {
    const data = await WhatsAppInstances[
        req.body.key
    ].getInstanceInviteCodeGroup(req.query.id)
    return res
        .status(201)
        .json({ error: false, link: 'https://chat.whatsapp.com/' + data })
}

exports.getAllGroups = async (req, res) => {
    const instance = WhatsAppInstances[req.body.key]
    let data
    try {
        data = await instance.groupFetchAllParticipating()
    } catch (error) {
        data = {}
    }
    return res.json({
        error: false,
        message: 'Instance fetched successfully',
        instance_data: data,
    })
}

exports.groupParticipantsUpdate = async (req, res) => {
    const data = await WhatsAppInstances[req.body.key].groupParticipantsUpdate(
        req.body.id,
        req.body.users,
        req.body.action
    )
    return res.status(201).json({ error: false, data: data })
}

exports.groupSettingUpdate = async (req, res) => {
    const data = await WhatsAppInstances[req.body.key].groupSettingUpdate(
        req.body.id,
        req.body.action
    )
    return res.status(201).json({ error: false, data: data })
}

exports.groupUpdateSubject = async (req, res) => {
    const data = await WhatsAppInstances[req.body.key].groupUpdateSubject(
        req.body.id,
        req.body.subject
    )
    return res.status(201).json({ error: false, data: data })
}

exports.groupUpdateDescription = async (req, res) => {
    const data = await WhatsAppInstances[req.body.key].groupUpdateDescription(
        req.body.id,
        req.body.description
    )
    return res.status(201).json({ error: false, data: data })
}

exports.groupInviteInfo = async (req, res) => {
    const data = await WhatsAppInstances[req.body.key].groupGetInviteInfo(
        req.body.code
    )
    return res.status(201).json({ error: false, data: data })
}

exports.groupJoin = async (req, res) => {
    const data = await WhatsAppInstances[req.body.key].groupAcceptInvite(
        req.body.code
    )
    return res.status(201).json({ error: false, data: data })
}
