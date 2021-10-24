const ApiErrorFactory = require('../../../../../../shared/factories/ApiErrorFactory')

const apiErrorFactory = ApiErrorFactory()

function CreateProjectUseCase(repository) {
  const execute = async data => {
    if (data) {
      const response = await repository.create(data)
      return response
    } else {
      return apiErrorFactory.createError(
        'API Error',
        'CreateProjectWithMissingData',
        400
      )
    }
  }

  return { execute }
}

module.exports = CreateProjectUseCase
