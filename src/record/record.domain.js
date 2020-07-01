module.exports.RecordDomain = class {
  constructor (hospital, doctorComments, rut, date, doctor, status) {
    this.hospital = hospital
    this.doctorComments = doctorComments
    this.rut = rut
    this.date = date
    this.doctor = doctor
    this.status = status
  }
}
