var cat = {
  meow(times) {
    console.log("meow ".repeat(times));
  },
  purr(times) {
    console.log("purr ".repeat(times));
  },
  bark(times) {
    console.log("bark ".repeat(times));
  }
};

cat.meow(3);
cat.purr(4);
cat.bark(5);