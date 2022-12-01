/////////////////// uppgift 1 /////////////////

// const wait = new Promise(function (resolve, reject) {
//   setTimeout(function () {
//     resolve(console.log("uppgift 1 svar"));
//   }, 500);
// });

/////////////////// uppgift 2 /////////////////

// function greaterThan10(num) {
//   return new Promise(function (resolve, reject) {
//     if (num > 10) {
//       resolve();
//     } else {
//       reject();
//     }
//   });
// }

// greaterThan10(12).then(function () {
//   console.log("Success!");
// });

// greaterThan10(5).catch(function () {
//   console.log("Fail!");
// });

/////////////////// uppgift 3 /////////////////

// function makeUpperCase(result) {
//   return new Promise(function (resolve, reject) {
//     if (typeof result === "string") {
//       let answer = result.toUpperCase();
//       resolve(`${answer}`);
//     } else {
//       reject(`Not a String`);
//     }
//   });
// }

// makeUpperCase("jonas").then(function (result) {
//   console.log(result); // JONAS
// });

// makeUpperCase(5).catch(function (error) {
//   console.log(error); // Not a string
// });

/////////////////// uppgift 4 /////////////////

// function delay(time) {
//   return new Promise(function (resolve, reject) {
//     setTimeout(function () {
//       resolve();
//     }, time);
//   });
// }

// delay(1000).then(function () {
//   console.log("We waited"); // Körs efter 1000 millisekunder
// });

/////////////////// uppgift 5 /////////////////

const hayStack = [
  {
    id: 0,
    name: "STRAW",
  },
  {
    id: 1,
    name: "GRASS",
  },
  {
    id: 2,
    name: "NEEDLE",
  },
  {
    id: 3,
    name: "STICK",
  },
];

function findByName(string, array) {
  return new Promise(function (resolve, reject) {
    const result = array.find(function (hay) {
      return hay.name === string;
    });
    if (typeof result === "object") {
      resolve(result);
      // console.log("funkar");
    } else {
      reject("Matching object not found");
      // console.log("funkar inte");
    }
  });
}

findByName("NEEDLE", hayStack).then(function (result) {
  console.log(result); // { id: 2, name: 'Needle' }
});

findByName("FOOTBALL", hayStack).catch(function (error) {
  console.log(error); // Matching object not found
});
