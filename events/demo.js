const EventEmitter = require("events");

function LoggingSystems() {
  const emitter = new EventEmitter();

  emitter.trigger = function () {
    emitter.emit("topic-a", "Mathematics");
    emitter.emit("topic-b", "Physics");
  };

  emitter.emit("error", "An error occurred");
  return emitter;
}

const logger2 = LoggingSystems();

// subscriber 1
logger2.on("topic-a", (subject) => {
  console.log(`Subscriber 1 got topic-a: ${subject}`);
});

// subscriber 2
logger2.on("topic-a", (subject) => {
  console.log(`Subscriber 2 got topic-a: ${subject}`);
});

// subscriber 2
logger2.on("topic-b", (subject) => {
  console.log(`Subscriber 2 got topic-b: ${subject}`);
});

// subscriber 3
logger2.on("topic-b", (subject) => {
  console.log(`Subscriber 3 got topic-b: ${subject}`);
});

logger2.trigger();
