// const { setTimeout: setTimeoutP } = require("timers/promises");
// const { setTimeout: setTimeoutP } = require("timers/promises");
// const { setTimeout } = require("timers");

// (async function main() {
//   const data = await setTimeoutP(3000, "Hello world");
//   console.log(data);
// })();

// setTimeout(() => {
//   console.log("Hello");
// }, 3000);

// ----------------------------------------

(async function main() {
  let a = null;

  try {
    const data = await getPromise(100);
    console.log(data);
  } catch (error) {
    console.warn(error.message);
  } finally {
    // clean up code
    a = null;
  }
})();

getPromise(500)
  .then((value) => console.log(value))
  .catch((error) => console.error(error))
  .finally(() => (a = null));

function getPromise(num) {
  a = 1000;

  return new Promise((resolve, reject) => {
    if (num > 50) {
      reject(new Error("Something went wrong"));
    } else {
      resolve(num);
    }
  });
}
