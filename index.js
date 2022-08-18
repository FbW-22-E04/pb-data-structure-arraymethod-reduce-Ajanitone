//Create a function groupById(arr) that creates an object from it, with id as the key, and array items as values.
//1

let users = [
  { id: "john", name: "John Smith", age: 20 },
  { id: "ann", name: "Ann Smith", age: 24 },
  { id: "pete", name: "Pete Peterson", age: 31 },
];

const groupById = (arr) => {
  return arr.reduce((acc, next) => {
    let name = next.id;
    acc[name] = next;
    return acc;
  }, {});
};

console.log(groupById(users));

// function groupById(objectArray, property) {
//   return objectArray.reduce((accumulator, currentObject) => {
//     let key = currentObject[property];
//     if (!accumulator[key]) {
//       accumulator[key] = [];
//     }
//     accumulator[key].push(currentObject.id, currentObject);
//     return accumulator;
//   }, {});
// }

// let usersById = groupById(users);
// console.log(usersById);

/* expected output: 

{
  john: { id: 'john', name: 'John Smith', age: 20 },
  ann: { id: 'ann', name: 'Ann Smith', age: 24 },
  pete: { id: 'pete', name: 'Pete Peterson', age: 31 }
}
  
*/

console.log("-------------------------------------------------");
