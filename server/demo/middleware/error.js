const { BadRequestError } = require("../util/error-definitions");

module.exports = function (_req, _res, next) {
  next(new BadRequestError());
};
