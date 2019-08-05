//importing (object) defined in other file
const person= require('./person_object');
console.log(person);

//importing class defined in other file
const Person= require('./person_class');

//creatning instance
const hiren=new Person('Hirenkumar Patel',30);

//calling get_data method
console.log(hiren.get_data());