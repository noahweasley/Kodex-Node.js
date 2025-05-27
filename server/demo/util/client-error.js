const HttpError = require("./http-error");

class BadRequestError extends HttpError {
  constructor(message = "Bad Request", details) {
    super(message, 400, details);
  }
}

class UnauthorizedError extends HttpError {
  constructor(message = "Unauthorized", details) {
    super(message, 401, details);
  }
}

class ForbiddenError extends HttpError {
  constructor(message = "Forbidden", details) {
    super(message, 403, details);
  }
}

class NotFoundError extends HttpError {
  constructor(message = "Not Found", details) {
    super(message, 404, details);
  }
}

class ConflictError extends HttpError {
  constructor(message = "Conflict", details) {
    super(message, 409, details);
  }
}

module.exports = {
  BadRequestError,
  UnauthorizedError,
  ForbiddenError,
  NotFoundError,
  ConflictError,
};
