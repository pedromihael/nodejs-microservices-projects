const ApiErrorFactory = require('../../../../../../shared/factories/ApiErrorFactory')

const apiErrorFactory = ApiErrorFactory()

function GetProjectByNameUseCase(repository) {
  const execute = async id => {
    if (id) {
      const response = await repository.findByName(name)
      return response
    } else {
      return apiErrorFactory.createError(
        'API Error',
        'GetProjectWithMissingName',
        400
      )
    }
  }

  return { execute }
}

module.exports = GetProjectByNameUseCase
