global.log = function (message: string) {
  console.log(message);
};

global.logError = function (message: string) {
  console.error(`\x1b[31m${message}\x1b[0m`);
};

global.logSuccess = function (message: string) {
  console.log(`\x1b[32m${message}\x1b[0m`);
};

global.logInfo = function (message: string) {
  console.log(`\x1b[34m${message}\x1b[0m`);
};

global.logWarning = function (message: string) {
  console.log(`\x1b[33m${message}\x1b[0m`);
};

global.logDebug = function (message: string) {
  console.log(`\x1b[35m${message}\x1b[0m`);
};

