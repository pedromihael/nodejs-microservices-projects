const ApiErrorFactory = require('../../../../../../shared/factories/ApiErrorFactory')

const apiErrorFactory = ApiErrorFactory()

function ListProjectsByProvider(repository) {
  const execute = async fk_provider => {
    try {
      const response = await repository.listByProvider(fk_provider)
      return response
    } catch (error) {
      return apiErrorFactory.createError(
        'API Error',
        'CannotListProjectsByProvider',
        400
      )
    }
  }

  return { execute }
}

module.exports = ListProjectsByProvider
