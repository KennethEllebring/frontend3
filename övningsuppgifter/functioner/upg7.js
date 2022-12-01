function legal(age) {
  if (age >= 18) {
    return "Du får rösta";
  } else {
    return "Du är för ung, vänta tills du blir 18";
  }
}
console.log(legal(18));
