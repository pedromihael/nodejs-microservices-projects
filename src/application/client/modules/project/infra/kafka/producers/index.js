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

const topic = 'update-provider-reliability'
const producer = kafka.producer()

module.exports = { producer, topic }