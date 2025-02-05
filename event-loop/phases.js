setTimeout(() => {
  process.nextTick(() => {
    console.log("next tick inside set timeout");
  });

  setImmediate(() => {
    console.log("Set immediate inside timeout");
  });
  console.log("setTimeout 1");
}, 0);

setImmediate(() => {
  console.log("Set immediate 1");
});

setTimeout(() => {
  console.log("Set timeout 2");
}, 0);

process.nextTick(() => {
  console.log("next tick 1");
});

setImmediate(() => {
  console.log("Set immediate 2");
});
