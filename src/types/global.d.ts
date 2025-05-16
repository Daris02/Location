export {};

declare global {
  const log: (message: string) => void;
  const logError: (message: string) => void;
  const logSuccess: (message: string) => void;
  const logInfo: (message: string) => void;
  const logWarning: (message: string) => void;
  const logDebug: (message: string) => void;
}
