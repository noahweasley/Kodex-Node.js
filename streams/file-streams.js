const fs = require("fs");
const fsp = require("fs/promises");

(async function main() {
  const stream = fs.createReadStream("./streams/file-streams.js");
  const stream2 = fs.createWriteStream("./output/new-file.js");
  await fsp.mkdir("./output");

  stream.on("data", (chunk) => {
    stream2.write(chunk.toString());
    console.log("Successful");
  });
})();
