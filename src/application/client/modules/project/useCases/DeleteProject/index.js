const ApiErrorFactory = require('../../../../../../shared/factories/ApiErrorFactory')

const apiErrorFactory = ApiErrorFactory()

function DeleteProjectUseCase(repository) {
  const execute = async id => {
    if (id) {
      const response = await repository.remove(id)
      return response
    } else {
      return apiErrorFactory.createError(
        'API Error',
        'DeleteProjectWithMissingId',
        400
      )
    }
  }

  return { execute }
}

module.exports = DeleteProjectUseCase
