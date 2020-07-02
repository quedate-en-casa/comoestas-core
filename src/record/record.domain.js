module.exports.RecordDomain = class {
  constructor (hospital, doctorComments, rut, doctor, status, date) {
    this.hospital = hospital
    this.doctorComments = doctorComments
    this.rut = rut
    this.doctor = doctor
    this.status = status
    this.date = date
  }
}
