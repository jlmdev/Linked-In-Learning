// var [first,, third,,] = ["Spokane", "Boston", "Los Angeles", "Seattle", "Portland"];
// console.log(first);
// console.log(third);

// 
// var sandwich = {
//   title: "Reuben",
//   price: 7,
//   description: "Cleveland's favorite sandwich",
//   ingredients: ['bread', 'corned beef', 'dressing', 'saurkraut', 'cheese']
// };

// var {title, price, description, ingredients} = {
//   title: "Reuben",
//   price: 7,
//   description: "Cleveland's favorite sandwich",
//   ingredients: ['bread', 'corned beef', 'dressing', 'saurkraut', 'cheese']
// };

// console.log(title);
// console.log(price);

var vacation = {
  destination: "Chile",
  travelers: 2,
  activity: "Skiing",
  cost: 4000
};

function vacationMarketing({destination, activity}) {
  return `Come to ${destination} and do some ${activity}`
}

console.log(vacationMarketing(vacation));