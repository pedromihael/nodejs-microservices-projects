const { Kafka, logLevel } = require('kafkajs');

const kafka = new Kafka({
  clientId: 'api',
  brokers: ['localhost:9092'],
  logLevel: logLevel.WARN,
  retry: {
    initialRetryTime: 300,
    retries: 10
  },
});

const topic = 'update-project-reliability'
const consumer = kafka.consumer({ groupId: 'project-reliability-update-group' })

module.exports = { consumer, topic }