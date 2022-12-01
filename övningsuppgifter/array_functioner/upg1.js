const hayStack = [
  {
    id: 0,
    name: "Straw",
  },
  {
    id: 1,
    name: "Grass",
  },
  {
    id: 2,
    name: "Needle",
  },
  {
    id: 3,
    name: "Stick",
  },
];

function findByName(item, object) {
  const sorted = object.find(function (hay) {
    return hay.name === item;
  });
  console.log(sorted);
}

findByName("Needle", hayStack); // {id: 2, name: "Needle"}
