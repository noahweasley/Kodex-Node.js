const fs = require("fs/promises");
const { Writable } = require("stream");

const createFileWriteStream = (filePath) => {
  let fd = null;

  const writer = new Writable({
    async write(chunk, _encoding, callback) {
      try {
        if (!fd) {
          fd = await fs.open(filePath, "w");
        }

        await fd.write(chunk);
        callback();
      } catch (err) {
        callback(err);
      }
    },

//     async final(callback) {
//       try {
//         if (fd) {
//           await fd.close();
//         }
//         callback();
//       } catch (err) {
//         callback(err);
//       }
//     },

    async destroy(err, callback) {
      try {
        if (fd) {
          await fd.close();
        }
        callback(err);
      } catch (closeErr) {
        callback(closeErr);
      }
    },
  });

  return writer;
};

const filePath = "./output/output.txt";
const fileStream = createFileWriteStream(filePath);

fileStream.write("Hello, ", "utf8", (err) => {
  if (err) console.error("Write Error:", err);
  else console.log("Chunk 1 written");
});

fileStream.write("World!", "utf8", (err) => {
  if (err) console.error("Write Error:", err);
  else console.log("Chunk 2 written");
});

fileStream.end(() => {
  console.log("File writing completed.");
});

fileStream.on("error", (err) => {
  console.error("Stream Error:", err.message);
});
