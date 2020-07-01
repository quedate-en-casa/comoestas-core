const { DoctorService } = require('./src/doctor/doctor.service')
const { RegisterService } = require('./src/record/record.service')

module.exports = (doctorOutput, recordOutput) => {
  return {
    doctor: new DoctorService(doctorOutput),
    record: new RegisterService(recordOutput)
  }
}
