var books = new Set();
books.add('The Hobbit')
.add('Lord of the Rings')
.add('Dune');

console.log(books);
console.log(`How many books? ${books.size}`);
console.log(`Has Dune? ${books.has('Dune')}`);

var data = [4,2,4,4,2,5,1,6,7,5,6,8,2,7];
var set = new Set(data);
console.log('data.length', data.length);
console.log('set.size', set.size);
