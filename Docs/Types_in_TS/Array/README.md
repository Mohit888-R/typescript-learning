## Array in TypeScript

An array is a collection of data items of the same type. In TypeScript, arrays can be of any type, including number, string, boolean, object, or any.

To create an array, we can use the `Array()` constructor or the square brackets `[]`.

```
let ids : number[] = [1,2,3,4,5];
let names : string[] = ['mohit', 'arvind','danny','john'];
let options : boolean[] =  [true, false, false, true];
let books: object[] = [
    {name : "Sapiens", author : 'Yuval Noah harari'},
    {name : 'Atomic Habit', author : 'James Clear'}
]
let arr : any[] = ['hello', 1, true];
```

we can access the elements of an array using the index operator `[]`. The index starts at 0.

```
console.log(ids[0]); // 1
console.log(names[2]); // danny
console.log(options[3]); // true
console.log(books[0].name); // Sapiens
console.log(arr[2]); // true
```

we can also use the `forEach()` method to iterate over the elements of an array.

```
ids.forEach(function(id) {
  console.log(id);
});

names.forEach(function(name) {
  console.log(name);
});

options.forEach(function(option) {
  console.log(option);
});

books.forEach(function(book) {
  console.log(book.name);
});

arr.forEach(function(item) {
  console.log(item);
});
```
