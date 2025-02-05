const stream = require("stream");

function EvenReadStream() {
  let even = 0;
  const reader = new stream.Readable();

  reader._read = function () {
    even = even + 2;
    const evenToString = String(even);
    reader.push(evenToString);

    if (even >= 40) {
      reader.push(null);
    }
  };

  return reader;
}

const s = EvenReadStream();

s.on("readable", () => {
  const data = s.read();
  if (data != null) console.log(data.toString());
});

s.on("error", (error) => {
  console.log(error);
});

s.on("end", () => {
  console.log("I have ended");
  s.destroy();
});
