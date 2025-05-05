const fs = require("fs");
const path = require("path");
const fsp = require("fs/promises");
const { pipeline } = require("stream");

(async function main() {
  const input = path.join("./streams", "file-streams.js");
  const stream = fs.createReadStream(input);
  const stream2 = fs.createWriteStream("./output/new-file.js");

  try {
    await fsp.stat("./output");
  } catch (error) {
    if (error == "ENOENT") await fsp.mkdir("./output");
  }

  // pipeline(stream, stream2);
  stream.on("data", (chunk) => {
    stream2.write(chunk.toString());
    console.log("Successful");
  });
})();
