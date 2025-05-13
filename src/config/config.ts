export function logError(error: string) {
  console.error(`\x1b[31m${error}\x1b[0m`);
}
export function logSuccess(message: string) {
  console.log(`\x1b[32m${message}\x1b[0m`);
}
export function logInfo(message: string) {
  console.log(`\x1b[34m${message}\x1b[0m`);
}
export function logWarning(message: string) {
  console.log(`\x1b[33m${message}\x1b[0m`);
}
export function logDebug(message: string) {
  console.log(`\x1b[35m${message}\x1b[0m`);
}
