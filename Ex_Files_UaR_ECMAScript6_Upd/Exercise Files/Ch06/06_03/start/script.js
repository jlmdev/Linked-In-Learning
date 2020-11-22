// Getters and Setters

var attendance = {
  _list: [],
  set addName(name) {
    this._list.push(name);
  },
  get list() {
    return this._list.join(', ');
  }
};

attendance.addName = 'Joanne';
console.log("List getter:", attendance.list);
console.log("Underscore list (prop)", attendance._list);