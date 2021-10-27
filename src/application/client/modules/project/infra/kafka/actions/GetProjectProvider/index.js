const { PostgresProjectRepository } = require('../../../../repositories/PostgresProjectRepository')

const GetProjectProvider = () => {
  const repository = PostgresProjectRepository()
  
  const execute = async (projectId) => {
    const project = await repository.findById(projectId)
    
    if (project && !project.hasOwnProperty('isApiError')) {
      return project.fk_provider;
    }

    return null
  }

  return { execute }
}

module.exports = { GetProjectProvider }