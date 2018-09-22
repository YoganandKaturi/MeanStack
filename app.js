const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

app.use(express.static(__dirname+'/client'));
app.use(bodyParser.json());


Student =require('./models/student');

// Connect to Mongoose
mongoose.connect('mongodb://localhost/sasi_bill');
var db = mongoose.connection;

app.get('/', (req, res) => {
	res.send('Please use /api/students');
});



app.get('/api/students', (req, res) => {
	Student.getStudents((err,students) => {
		if(err){
			throw err;
		}
		res.json(students);
	});
});

app.get('/api/students/:_id', (req, res) => {
	Student.getStudentById(req.params._id, (err, student) => {
		if(err){
			throw err;
		}
		res.json(student);
	});
});

app.post('/api/students', (req, res) => {
	var student = req.body;
	Student.addStudent(student, (err, student) => {
		if(err){
			throw err;
		}
		res.json(student);
	});
});

app.put('/api/students/:_id', (req, res) => {
	var id = req.params._id;
	var student = req.body;
	Student.updateStudent(id, student, {}, (err, student) => {
		if(err){
			throw err;
		}
		res.json(student);
	});
});

app.delete('/api/students/:_id', (req, res) => {
	var id = req.params._id;
	Student.removeStudent(id, (err, student) => {
		if(err){
			throw err;
		}
		res.json(student);
	});
});

app.listen(3000);
console.log('Running on port 3000...');
