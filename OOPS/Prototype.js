const str = "Akshay   ";

String.prototype.trueLength = function () {
  console.log(`The length if the string is : ${this.trim().length}`);
};

// str.trueLength()
// "Raj".trueLength()

const obj = {
  name: "Akshay",
  age: 25,
  city: "Pune",
};

Object.prototype.Akshay = function () {
  console.log("Akshay is working");
};

// obj.Akshay()
// str.Akshay()

const teacher = {
  name: "Akshay",
};

const teachingSupport = {
  isAvailble: true,
};

const TASupport = {
  makeAss: "JS ASSIGNMENt",
  fullTime: true,
  __proto__: teacher,
};

console.log(TASupport.name);
