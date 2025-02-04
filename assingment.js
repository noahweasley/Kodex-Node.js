const fs = require("fs");

const stream = fs.createReadStream("new.js");

stream.on("data", (chunk) => {
  console.log(chunk.toString());
});

const stream2 = fs.createWriteStream("nex.js");

stream2.write("Hello")
