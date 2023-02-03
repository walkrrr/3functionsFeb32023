var startMyDay = function () {
  return "Time for coffee and a shower!";
};
console.log(startMyDay());

var favoriteCookie = function (cookie) {
  return `My favorite cookie is ${cookie}.`;
};
// console.log(favoriteCookie()); tested parameter and argument.
console.log(favoriteCookie("double chocolate chip"));

var introduce = function (name, occupation) {
  return `My name is ${name}, and I am a ${occupation} for a living.`;
};
console.log(introduce("RW", "Talent Acquisition Sourcer"));
console.log(introduce("Missy", "dog"));

var hydrationFeedback = function () {
  var numGlasses = Number(
    prompt("“How many glasses of water did you have today?")
  );
  if (numGlasses >= 8) {
    console.log("Congratulations!");
  } else {
    console.log("Not bad, not bad. Let’s try for a bit more tomorrow!");
  }
};
console.log(hydrationFeedback());
