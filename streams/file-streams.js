const fs = require("fs");

const stream = fs.createReadStream("./streams/file-streams.js");
const stream2 = fs.createWriteStream("./new-file.js");

stream.on("data", (chunk) => {
  stream2.write(chunk.toString());
});
