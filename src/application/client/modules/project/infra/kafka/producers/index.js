const kafka = require('../index')
const topic = 'update-provider-reliability'
const producer = kafka.producer()

module.exports = { producer, topic }