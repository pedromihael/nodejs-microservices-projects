const express = require('express')
const logger = require('morgan')
const dotenv = require('dotenv')
const cors = require('cors')
const { consumer, topic: consumerTopic } = require('../../application/client/modules/project/infra/kafka/consumers')
const { producer, topic: producerTopic } = require('../../application/client/modules/project/infra/kafka/producers')
const { UpdateProjectReliability } = require('../../application/client/modules/project/infra/kafka/actions/UpdateProjectReliability')
const { GetProjectProvider } = require('../../application/client/modules/project/infra/kafka/actions/GetProjectProvider')
const routes = require('../../application/client/modules/project/infra/http/routes')

dotenv.config()

const app = express()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true}))
app.use(logger('dev'))

app.get('/health-check', (req, res) => {
  res.status(200).send("Could we start our life project together? 😋")
})

app.use(routes)

const run = async () => {
  app.listen(process.env.PORT || 3002, () => {
    console.log('Projects service is ready ✅');
  });
  
  await consumer.connect()
  await producer.connect()
  await consumer.subscribe({ topic: consumerTopic })

  await consumer.run({
    eachMessage: async ({ message }) => {
      const payload = {key: `${message.key}`, value: `${message.value}`}
      console.log('TEST', payload.key, payload.value)

      const project = payload.value.split("::")[0]
      const severity = payload.value.split("::")[1]

      console.log('values', severity, project)

      const updateProjectReliability = UpdateProjectReliability()
      const res = await updateProjectReliability.execute(project, severity)

      if (res) {
        console.log("new project reliability: ", res.newValue)
      }

      const getProjectProvider = GetProjectProvider()
      const providerId = await getProjectProvider.execute(project)

      await producer.send({
        topic: producerTopic,
        messages: [
          { value: `${providerId}::${severity}` }
        ]
      })
    },
  })
}

run().catch(err => console.error(err))