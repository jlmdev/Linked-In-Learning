// Old way: Create variable outside function to pass 'this' value
var person = {
  first: "Doug",
  actions: ['bike', 'hike', 'ski', 'surf'],
  printActions: function() {
    var _this = this;
    this.actions.forEach(function(action) {
      var statement = `${_this.first} likes to ${action}`;
      console.log(statement);
    });
  }
};

// Using .bind
// var person = {
//   first: "Doug",
//   actions: ['bike', 'hike', 'ski', 'surf'],
//   printActions: function() {
//     this.actions.forEach(function(action) {
//       var statement = `${this.first} likes to ${action}`;
//       console.log(statement);
//     }.bind(this));
//   }
// };

// Using arrow function
var person = {
  first: "Doug",
  actions: ['bike', 'hike', 'ski', 'surf'],
  printActions() {
    var _this = this;
    this.actions.forEach((action) => {
      var statement = `${this.first} likes to ${action}`;
      console.log(statement);
    });
  }
};

person.printActions();