function sayHi(name, greeting = "Hello", loop) {
  let loops = 0;
  while (loops < loop) {
    test = greeting + " " + name + "!";
    loops++;
    console.log(test);
  }
}
sayHi("Jonas", "Hello", 12);
