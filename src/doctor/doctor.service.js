module.exports.DoctorService = class {
  constructor (doctorOutput) {
    this.doctorOutput = doctorOutput
  }

  async insert (doctor) {
    return this.doctorOutput.insert(doctor)
  }

  async getByRut (rut) {
    return this.doctorOutput.getByRut(rut)
  }
}
