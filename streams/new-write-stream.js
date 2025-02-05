const stream = require("stream");

function LogWriter() {
  const writer = new stream.Writable();

  writer._write = function (chunk, _encoding, callback) {
    try {
      console.log(chunk.toString());
      console.log(_encoding);
    } catch (error) {
      callback(error);
    }
  };

  writer._destroy = function () {};
  writer._final = function () {};

  return writer;
}

const w = LogWriter();
w.write("Hello");
w.end();
w.destroy();
