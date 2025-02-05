const events = require("events");

function CounterEvent() {
  let start = 0;
  const counter = new events.EventEmitter();

  counter.increment = function () {
    counter.emit("increment", (start += 1));
  };

  return counter;
}

const counter = CounterEvent();

counter.addListener("increment", function (count) {
  console.log(count);
});

counter.increment();

