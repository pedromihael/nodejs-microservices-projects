const knex = require('../../../../../infra/db/adapters/knex')
const ApiErrorFactory = require('../../../../../shared/factories/ApiErrorFactory')

const errorFactory = ApiErrorFactory()

function PostgresProjectRepository() {
  const create = async data => {
    try {
      const { name, responsible, hours_effort, fk_provider } = data
      await knex('project').insert({ name, responsible, hours_effort, fk_provider });

      return { ok: true }
    } catch (error) {
      return errorFactory.createError(error, 'createProject')
    }
   }
  
  const findAll = async () => {
    try {
      const results = await knex('project').orderBy('id')
      return results
    } catch (error) {
      return errorFactory.createError(error, 'findAllProjects')
    }
   }
  
  const findById = async id => {
    try {
      const result = await knex('project').where({ id })
      if (result.length) {
        return result[0]
      } else {
        return null
      }
    } catch (error) {
      return errorFactory.createError(error, 'findProjectById')
    }
  }

  const findByName = async (name) => {
    try {
      const result = await knex('project').where({ name });
      return result[0];
    } catch (error) {
      return errorFactory.createError(error, 'findProjectByName')
    }
  };

  const listByProvider = async (fk_provider) => {
    try {
      const result = await knex('project').where({ fk_provider }).orderBy('id');
      return result;
    } catch (error) {
      return errorFactory.createError(error, 'listByProvider')
    }
  };
  
  const remove = async id => {
    try {  
      await knex('project').where({ id }).delete();

      return { ok: true };
    } catch (error) {
      return errorFactory.createError(error, 'deleteProject');
    }
  }

  const save = async (id, data) => {
    try {
      const { field, value } = data
      await knex('project')
        .update({ [`${field}`]: value })
        .where({ id });
  
      return { ok: true };
    } catch (error) {
      return errorFactory.createError(error, 'updateProject');
    }
  }
  
  return {
    create,
    findAll,
    findById,
    findByName,
    listByProvider,
    remove,
    save
  }
}

module.exports = { PostgresProjectRepository }