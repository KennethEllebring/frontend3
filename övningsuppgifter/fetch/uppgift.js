///////////// uppgift 1 ////////////////

getText("./uppgift.txt");

async function getText(file) {
  let wait = await fetch(file);
  let resource = await wait.text();
  document.querySelector("#testAsyncText").innerHTML = resource;
}

///////////// uppgift 2 ////////////////

getJson("./uppgift.json");

async function getJson(file) {
  let wait = await fetch(file);
  let resources = await wait.json();

  for (const i in resources.employees) {
    const element = resources.employees[i];

    let article = document.querySelector("#testAsyncJson");

    let ulList = document.createElement("li");
    ulList.textContent = `${element.firstName} ${element.lastName}`;
    article.appendChild(ulList);

    console.log(element);
  }
}

///////////// uppgift 3 ////////////////

getImg("./blob.png");
// getImg("./test.jpg"); // add more pictures

async function getImg(file) {
  let wait = await fetch(file);
  let blob = await wait.blob();

  let img = document.querySelector("#testImgAsync");
  // let img = document.createElement("img");  // create new element if you want more picture tag

  img.src = URL.createObjectURL(blob);
  // document.body.append(img);  // add new tag
  img.appendChild(); // add to "old" tag
}

///////////// uppgift 4 ////////////////
