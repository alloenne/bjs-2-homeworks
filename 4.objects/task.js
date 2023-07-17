function Student(name, gender, age) {
	this.name = name;
	this.gender = gender;
	this.age = age;
	this.marks = [];
}

let student1 = new Student("Василиса", "женский", 19);
let student2 = new Student("Олег", "мужской", 18);

Student.prototype.setSubject = function(subjectName) {
	this.subject = subjectName;
}

Student.prototype.addMarks = function(...marks) {
	if (!this.marks) {
		console.log('Ошибка! Студент исключен');
	} else {
		this.marks.push(...marks);
	}
}

Student.prototype.getAverage = function() {
	if (!this.marks || this.marks.length === 0) {
		return 0;
	} else {
		let avg = this.marks.reduce((acc, item, index, arr) => {
			acc += item;
			if (index === arr.length - 1) {
				return acc / arr.length;
			}
			return acc;
		}, 0)
		return avg;
	}
}

Student.prototype.exclude = function(reason) {
	delete this.subject;
	delete this.marks;
	this.excluded = reason;
}