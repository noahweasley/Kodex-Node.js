const HttpError = require("./http-error");

class InternalServerError extends HttpError {
  constructor(message = "Internal Server Error", details) {
    super(message, 500, details);
  }
}

class NotImplementedError extends HttpError {
  constructor(message = "Not Implemented", details) {
    super(message, 501, details);
  }
}

class ServiceUnavailableError extends HttpError {
  constructor(message = "Service Unavailable", details) {
    super(message, 503, details);
  }
}

module.exports = {
  InternalServerError,
  NotImplementedError,
  ServiceUnavailableError,
};
