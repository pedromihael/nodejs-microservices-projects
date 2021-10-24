const ApiErrorFactory = require('../../../../../../shared/factories/ApiErrorFactory')

const apiErrorFactory = ApiErrorFactory()

function UpdateProjectUseCase(repository) {
  const execute = async (id, data) => {
    if (id && data) {
      const response = await repository.save(id, data)
      return response
    } else {
      return apiErrorFactory.createError(
        'API Error',
        'UpdateProjectWithMissingIdOrData',
        400
      )
    }
  }

  return { execute }
}

module.exports = UpdateProjectUseCase
