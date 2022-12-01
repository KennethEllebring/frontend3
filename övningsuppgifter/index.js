////////////////// Article data //////////////////////////
fetch("../assets/json/products.json")
  .then((response) => (response = response.json()))
  .then((events) => {
    function createCards() {
      let i = 0;
      for (const event of events) {
        if (i === 6) {
          break;
        }
        i++;
        console.log(i);
        console.log(event);
        let article = document.createElement("ul");

        let pic = document.createElement("div");
        pic.innerHTML = `<a href="../html/detailedinfo.html"><img src="${event.image}" alt="${event.name}"></a>`;
        article.appendChild(pic).setAttribute("class", `picture ${event.index}`);

        let prodName = document.createElement("h3");
        prodName.textContent = event.name;
        article.appendChild(prodName).setAttribute("class", `product ${event.index}`);

        let category = document.createElement("li");
        category.textContent = event.category;
        article.appendChild(category).setAttribute("class", `info ${event.index}`);

        let date = document.createElement("li");
        date.textContent = event.date;
        article.appendChild(date).setAttribute("class", `info ${event.index}`);

        let moreInfo = document.createElement("button");
        moreInfo.textContent = "Beskriving";
        article.appendChild(moreInfo).setAttribute("onclick", `info(${event.index})`);

        let price = document.createElement("p");
        price.textContent = event.price;
        article.appendChild(price).setAttribute("class", `price ${event.index}`);

        cards.appendChild(article).setAttribute("class", `card ${event.index}`);
      }
    }
    createCards();
  });

////////////////// More info //////////////////////////
function openBigCard(x) {
  document.getElementById("bigCard" + x).style.cssText = `
    height: 400px;
    border: #ffd700 5px solid;
    position: fixed; 
  `;
}
function closeBigCard(x) {
  document.getElementById("bigCard" + x).style.cssText = `
    height: 0%;
    `;
}

function info(y) {
  navSize = document.getElementById("bigCard" + y).style.height;
  if (navSize == "0%") {
    return openBigCard(y);
  } else {
    return closeBigCard(y);
  }
}
