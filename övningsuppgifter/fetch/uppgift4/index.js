///////////// uppgift 4 ////////////////
// getApi("https://fakestoreapi.com/products/category/jewelery");
getApi("https://fakestoreapi.com/products");

async function getApi(url) {
  let wait = await fetch(url);
  let resources = await wait.json();

  // console.log(resources);

  for (let i = 0; i < resources.length; i++) {
    const element = resources[i];
    console.log(element);
    createCards(i);
  }

  function createCards(i) {
    const element = resources[i];

    let cards = document.querySelector(".wrapper");
    let article = document.createElement("ul");

    let pic = document.createElement("li");
    pic.innerHTML = `<img src="${element.image}" class="productPic" alt="${element.title}">`;
    article.appendChild(pic).setAttribute("class", `picture`);

    let prodName = document.createElement("li");
    prodName.textContent = element.title;
    article.appendChild(prodName).setAttribute("class", `name`);

    let category = document.createElement("li");
    category.textContent = element.category;
    article.appendChild(category).setAttribute("class", `product`);

    let description = document.createElement("li");
    description.textContent = element.description;
    article.appendChild(description).setAttribute("class", `description`);

    let price = document.createElement("li");
    price.textContent = `$${element.price}`;
    article.appendChild(price).setAttribute("class", `price`);

    cards.appendChild(article).setAttribute("class", `card ${i}`);
  }
}
