
const getPeopleInSpace = () =>
  fetch('http://api.open-notify.org/astros.json')
    .then(response => response.json());

const spaceNames = () =>
  getPeopleInSpace()
    .then(json => json.people)
    .then(people => people.map(person => person.name))
    .then(names => names.join(', '));

spaceNames()
  .then(console.log);