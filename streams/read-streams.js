const stream = require("stream");

function NumberStream() {
  let start = 0;
  const reader = new stream.Readable({
    read() {
      this.push(String((start += 2) + " "));
      if (start >= 40) this.push(null);
    },
  });

  return reader;
}

const numberStream = NumberStream();
numberStream.on("readable", function () {
  var data = numberStream.read();
  data && process.stdout.write(data);
});

numberStream.on("end", function () {
  console.log("E don do");
});
