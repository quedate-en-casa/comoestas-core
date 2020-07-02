const { NotImplementedError } = require('../exception')

module.exports.DoctorOutput = class {
  async insert (doctor) {
    throw new NotImplementedError('Method insert not implemented')
  }

  async getByRut (rut) {
    throw new NotImplementedError('Method insert not implemented')
  }
}
