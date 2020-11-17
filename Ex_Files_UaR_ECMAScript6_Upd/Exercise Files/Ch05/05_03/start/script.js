
// const getPeopleInSpace = () =>
//   fetch('http://api.open-notify.org/astros.json')
//     .then(response => response.json());

// const spaceNames = () =>
//   getPeopleInSpace()
//     .then(json => json.people)
//     .then(people => people.map(person => person.name))
//     .then(names => names.join(', '));

// spaceNames()
//   .then(console.log);

const getSignificantEarthquakes = () =>
  fetch('https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/2.5_day.geojson')
    .then(response => response.json());

getSignificantEarthquakes().then(console.log);