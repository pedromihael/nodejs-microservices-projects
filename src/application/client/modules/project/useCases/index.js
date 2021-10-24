const CreateProjectUseCase = require('./CreateProject')
const UpdateProjectUseCase = require('./UpdateProject')
const GetProjectByIdUseCase = require('./GetProjectById')
const ListAllProjectsUseCase = require('./ListAllProjects')
const DeleteProjectUseCase = require('./DeleteProject')
const ListProjectsByProviderUseCase = require('./ListProjectsByProvider')
const GetProjectByNameUseCase = require('./GetProjectByName')

module.exports = {
  CreateProjectUseCase,
  UpdateProjectUseCase,
  GetProjectByIdUseCase,
  ListAllProjectsUseCase,
  ListProjectsByProviderUseCase,
  GetProjectByNameUseCase,
  DeleteProjectUseCase
}
