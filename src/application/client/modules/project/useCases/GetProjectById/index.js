const ApiErrorFactory = require('../../../../../../shared/factories/ApiErrorFactory')

const apiErrorFactory = ApiErrorFactory()

function GetProjectByIdUseCase(repository) {
  const execute = async id => {
    if (id) {
      const response = await repository.findById(id)
      return response
    } else {
      return apiErrorFactory.createError(
        'API Error',
        'GetProjectWithMissingId',
        400
      )
    }
  }

  return { execute }
}

module.exports = GetProjectByIdUseCase
