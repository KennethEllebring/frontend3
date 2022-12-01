/////////////upgift 1 ////////////////

getText("/fetch/uppgift.txt");

async function getText(file) {
  let wait = await fetch(file);
  let resource = await wait.text();
  document.getElementById("testAsyncText").innerHTML = resource;
}

/////////////upgift 2 ////////////////

getJson("/fetch/uppgift.json");

async function getJson(file) {
  let wait = await fetch(file);
  let resources = await wait.json();

  for (const i in resources.employees) {
    const element = resources.employees[i];

    let article = document.getElementById("testAsyncJson");

    let ulList = document.createElement("li");
    ulList.textContent = `${element.firstName} ${element.lastName}`;
    article.appendChild(ulList);

    console.log(element);
  }
}

/////////////upgift 3 ////////////////

getImg("/fetch/blob.png");

async function getImg(file) {
  let wait = await fetch(file);
  let resource = await wait.blob();
  console.log(resource);

  let url = URL.createObjectURL(resource);
  let imgElement = url;

  imgElement = document.getElementById(".testImgAsync");
}
