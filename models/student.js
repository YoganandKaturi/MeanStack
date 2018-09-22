const mongoose = require('mongoose');

// Book Schema
const studentSchema = mongoose.Schema({
	code:{
		type: String,
		required: true
	},
    admn_no:{
		type: String,
		required: true
	},
	class:{
		type: String,
		required: true
	},
	student_name:{
		type: String,
		required: true
	},
	father_name:{
		type: String,
		required: true
	},
	door_no:{
		type: String
	},
	street:{
		type: String
	},
	town:{
		type: String,
		required:true
	},
	phone_no1:{
		type: String,
		required:true
	},
	phone_no2:{
		type: String
	},
	mail:{
		type: String
	}
});

const Student = module.exports = mongoose.model('Student_Profile', studentSchema);

// Get Books
module.exports.getStudents = (callback, limit) => {
	Student.find(callback).limit(limit);
}

// Get Book
module.exports.getStudentById = (id, callback) => {
	Student.findById(id, callback);
}

// Add Book
module.exports.addStudent = (student, callback) => {
	Student.create(student, callback);
}

// Update Book
module.exports.updateStudent = (id, student, options, callback) => {
	var query = {_id: id};
	var update = {
		code: student.code,
		admn_no: student.admn_no,
		class: student.class,
		student_name: student.student_name,
		father_name: student.father_name,
		door_no: student.door_no,
		street: student.street,
		phone_no1: student.phone_no1,
		phone_no2:student.phone_no2,
		mail:student.mail
	}
	Student.findOneAndUpdate(query, update, options, callback);
}

// Delete Book
module.exports.removeStudent = (id, callback) => {
	var query = {_id: id};
	Student.remove(query, callback);
}
