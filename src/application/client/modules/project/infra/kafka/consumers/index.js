const kafka = require('../index')
const topic = 'update-project-reliability'
const consumer = kafka.consumer({ groupId: 'project-reliability-update-group' })

module.exports = { consumer, topic }