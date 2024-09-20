const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define the schema for a Student
const studentSchema = new Schema({
  id: { type: String, required: true },
  name: { type: String, required: true },
  address: { type: String, required: true },
  city: { type: String, required: true },
  nationality: { type: String, required: true },
  phone: { type: String, required: true },
  email: { type: String, required: true },
  previous_attended: { type: String },
  previous_address: { type: String },
  previous_purpose: { type: String },
  class_study: { type: String },
  teacher_certificate: { type: String },
  dob_certificate: { type: String },
  physically_handicap: { type: Boolean },
  class_id: { type: String },
  section_id: { type: String },
  parent: { type: String },
  roll_no: { type: String },
  transport: { type: String },
  dormitory: { type: String },
  house: { type: String },
  dormitory_room_no: { type: String },
  more_entries: { type: String },
  login_status: { type: Boolean },
  user: { type: String },
  school: { type: String },
  branch: { type: String },
  grade: { type: String }
}, { timestamps: true });

module.exports = mongoose.model('Student', studentSchema);
