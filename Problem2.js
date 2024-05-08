function Student(firstName,lastName){
    this.firstName = firstName;
    this.lastName = lastName;
    this.grades = [];
}

Student.prototype.computeAverage = function(){
    return this.grades.reduce((acc,cur)=>acc+cur/this.grades.length,0);
}

Student.prototype.inputNewGrade = function(newGrade){
    this.grades.push(newGrade);
};

const john = new Student("John","Smith");
john.inputNewGrade(93);
john.inputNewGrade(89);
john.inputNewGrade(85);
console.log(john.grades);
console.log(john.computeAverage());

const edward = new Student("Edward","Smith");
edward.inputNewGrade(92);
edward.inputNewGrade(99);
edward.inputNewGrade(90);
console.log(edward.grades);
console.log(edward.computeAverage());
