const { PostgresProjectRepository } = require('../../../../repositories/PostgresProjectRepository')

const UpdateProjectReliability = () => {
  const repository = PostgresProjectRepository()
  
  const execute = async (projectId, incidentSeverity) => {
    const project = await repository.findById(projectId)
    
    if (project && !project.hasOwnProperty('isApiError')) {
      let newReliability = project.reliability_percentage - ((project.reliability_percentage / 100) * incidentSeverity)
      newReliability = newReliability <= 0 ? 0 : newReliability
      
      const res = await repository.save(projectId, { field: 'reliability_percentage', value: newReliability })
      
      return { ...res, newValue: newReliability };
    }

    return null
  }

  return { execute }
}

module.exports = { UpdateProjectReliability }