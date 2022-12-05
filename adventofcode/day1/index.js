getText("./1.txt");

async function getText(file) {
  let wait = await fetch(file);
  let resource = await wait.text();

  const a = resource.split(/\r?\n/);

  //   arrRes.forEach((element) => {
  //     convertArr = parseInt(element);

  //     console.log(convertArr);
  //     document.querySelector(".output").innerText = convert;
  //   });

  for (let i = 0; i < a.length; i++) {
    if (a[i] == 1) {
      a.push();
      console.log(a[i]);
    }
    console.log(a[i]);
  }
}
