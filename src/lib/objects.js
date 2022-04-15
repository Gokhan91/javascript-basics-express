const createPerson = (name, age) => {
  const person = {
    name: name,
    age: age,
  }
  return person;
};

const getName = object => {
  return object.name;
};

const getProperty = (property, object) => {
  return object[property];
};

const hasProperty = (property, object) => {
  return object.hasOwnProperty(property);
};

const isOver65 = person => {
  if (person.age > 65) {
    return true;
  }
  return false;
};

const getAges = people => {
  return people.map(people => people.age);
};

const findByName = (name, people) => {
  return people.find(people => { return people.name === name })
};

const findHondas = cars => {
  return cars.filter(cars => cars.manufacturer === "Honda");
};

const averageAge = people => {
  let ages = people.map(people => people.age);
  let getAverage = arr => {
    let reducer = (total, currentValue) => total + currentValue;
    let sum = arr.reduce(reducer);
    return sum / arr.length;
  }
  return getAverage(ages)
};

const createTalkingPerson = (name, age) => {
  let person = {
    name: name,
    age: age,
    introduce: (someone) => { return `Hi ${someone}, my name is ${name} and I am ${age}!` }
  };
  return person;
};

module.exports = {
  createPerson,
  getName,
  getProperty,
  hasProperty,
  isOver65,
  getAges,
  findByName,
  findHondas,
  averageAge,
  createTalkingPerson
};
