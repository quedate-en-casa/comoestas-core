module.exports.RecordService = class {
  constructor (recordOutput) {
    this.recordOutput = recordOutput
  }

  async insert (record) {
    return this.recordOutput.insert(record)
  }

  async getListByRut (rut) {
    return this.recordOutput.getListByRut(rut)
  }
}
