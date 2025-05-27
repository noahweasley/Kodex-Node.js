const {
  UnauthorizedError,
  BadRequestError,
} = require("../util/error-definitions");

function errorHandler(err, _req, res, _next) {
  console.log(err);
  if (err instanceof UnauthorizedError || err instanceof BadRequestError) {
    return res
      .status(err.statusCode)
      .json({ error: err.message, detail: err.details });
  } else {
    return res
      .status(err.statusCode || 500)
      .json({ error: err.details || "Internal Server error" });
  }
}

module.exports = errorHandler;
