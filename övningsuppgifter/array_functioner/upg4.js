const users = [
  {name: "John", surname: "Smith", id: 1},
  {name: "Pete", surname: "Hunt", id: 2},
  {name: "Mary", surname: "Key", id: 3},
];
const usersMapped = users.map(function (user) {
  return {Fullname: user.name + " " + user.surname};
}); // Din kod
console.log(usersMapped);
/*
[
  { fullName: "John Smith", id: 1 },
  { fullName: "Pete Hunt", id: 2 },
  { fullName: "Mary Key", id: 3 }
]
*/
