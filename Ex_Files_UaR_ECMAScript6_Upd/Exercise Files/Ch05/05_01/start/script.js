const delay = seconds => {
  return new Promise((resolve, reject) => {
    if(typeof seconds !== 'number') {
      reject(new Error(`Argument seconds must be a number`));
    }
    setTimeout( () => resolve(`${seconds} second delay is up`), 
    seconds * 1000)
  });
};

console.log("zero seconds");
delay("10 Minutes").then(message => message.toUpperCase())
        .then(message => `${message}!!!!!!`)
        .then(message => console.log(message));
delay(2).then(message => message.toUpperCase())
        .then(message => `${message}!!!!!!`)
        .then(message => console.log(message));



