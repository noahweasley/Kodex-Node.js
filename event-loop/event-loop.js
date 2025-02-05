const fs = require("fs/promises");

(async function main() {
  const data = await fs.readFile("event-loop.js");
  console.log(data.toString());
})();
