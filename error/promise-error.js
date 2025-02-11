const { setTimeout } = require("timers/promises");

(async function main() {
  // IIFE AKA Ifunanya
  const result = await setTimeout(2000, "done");
  console.log(result);

  setTimeout(2000, "done").then((value) => console.log(value));
})();
