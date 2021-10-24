const {
  CreateProjectUseCase,
  UpdateProjectUseCase,
  GetProjectByIdUseCase,
  ListAllProjectsUseCase,
  ListProjectsByProviderUseCase,
  GetProjectByNameUseCase,
  DeleteProjectUseCase
} = require('../../useCases')

const { PostgresProjectRepository } = require('../../repositories/PostgresProjectRepository')
const repository = PostgresProjectRepository()

const express = require('express')
const router = express.Router()

router.get('/', async (req, res) => {
  const listAllProjectsUseCase = ListAllProjectsUseCase(repository)
  const response = await listAllProjectsUseCase.execute()

  if (response.isApiError) res.status(response.code).send(response)
  
  else res.send(response)

  res.send(response)
})

router.get('/:id', async (req, res) => {
  const getProjectByIdUseCase = GetProjectByIdUseCase(repository)
  const response = await getProjectByIdUseCase.execute(req.params.id)

  if(!response) res.status(404).send({ok: false, message: 'not found'})

  if (response.isApiError) res.status(response.code).send(response)
  
  else res.send(response)
})

router.get('/provider/:provider', async (req, res) => {
  const listProjectsByProviderUseCase = ListProjectsByProviderUseCase(repository)
  const response = await listProjectsByProviderUseCase.execute(req.params.provider)

  if(!response) res.status(404).send({ok: false, message: 'not found'})

  if (response.isApiError) res.status(response.code).send(response)
  
  else res.send(response)
})

router.get('/name/:name', async (req, res) => {
  const getProjectByNameUseCase = GetProjectByNameUseCase(repository)
  const response = await getProjectByNameUseCase.execute(req.params.name)

  if(!response) res.status(404).send({ok: false, message: 'not found'})

  if (response.isApiError) res.status(response.code).send(response)
  
  else res.send(response)
})

router.post('/', async (req, res) => {
  const createProjectUseCase = CreateProjectUseCase(repository)
  const response = await createProjectUseCase.execute(req.body)

  if (response.isApiError) res.status(response.code).send(response)
  
  else res.send(response)
})

router.put('/:id', async (req, res) => {
  const data = req.body
  const updateProjectUseCase = UpdateProjectUseCase(repository)
  const response = await updateProjectUseCase.execute(req.params.id, data)

  if (response.isApiError) res.status(response.code).send(response)
  
  else res.send(response)})

router.delete('/:id', async (req, res) => {
  const deleteProjectUseCase = DeleteProjectUseCase(repository)
  const response = await deleteProjectUseCase.execute(req.params.id)

  res.send(response)
})

module.exports = router