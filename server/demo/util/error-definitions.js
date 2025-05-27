const clientError = require("./client-error");
const serverError = require("./server-error");

module.exports = {
  ...clientError,
  ...serverError,
};
