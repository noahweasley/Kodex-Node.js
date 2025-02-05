const events = require("events");

function CounterEvent() {
  let start = 0;
  const counter = new events.EventEmitter();

  setInterval(() => {
    counter.emit("increment", start++);
  }, 1000);
  return counter;
}

const counter = CounterEvent();

counter.on("increment", function (count) {
  console.log(count);
});
