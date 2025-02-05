const EventEmitter = require("events");

function createLogger() {
  const emitter = new EventEmitter();

  const logInfo = (message) => emitter.emit("info", message);
  const logWarning = (message) => emitter.emit("warning", message);
  const logError = (message) => emitter.emit("error", message);

  return { emitter, logInfo, logWarning, logError };
}

const Logger = createLogger();

Logger.emitter.on("info", (message) => console.log(`ℹ️ [INFO]: ${message}`));
Logger.emitter.on("warning", (message) => console.log(`⚠️ [WARNING]: ${message}`));
Logger.emitter.on("error", (message) => console.log(`❌ [ERROR]: ${message}`));

Logger.logInfo("Application started successfully.");
Logger.logWarning("Disk space running low.");
Logger.logError("Failed to connect to the database.");
