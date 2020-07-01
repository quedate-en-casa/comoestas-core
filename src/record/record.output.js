const { NotImplementedError } = require('../exception')

module.exports.RecordOutput = class {
  async insert (record) {
    throw new NotImplementedError('Method insert not implemented')
  }

  async getListByRut (rut) {
    throw new NotImplementedError('Method getListByRut not implemented')
  }
}
