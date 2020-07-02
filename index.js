const { DoctorService } = require('./src/doctor/doctor.service')
const { RecordService } = require('./src/record/record.service')

module.exports = (doctorOutput, recordOutput) => {
  return {
    doctor: new DoctorService(doctorOutput),
    record: new RecordService(recordOutput)
  }
}
