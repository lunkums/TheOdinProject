const findTheOldest = function (people) {
  return people.sort((a, b) => (getAge(a) > getAge(b) ? -1 : 1)).at(0);
};

function getAge(person) {
  return "yearOfDeath" in person
    ? person.yearOfDeath - person.yearOfBirth
    : new Date().getFullYear() - person.yearOfBirth;
}

// Do not edit below this line
module.exports = findTheOldest;
