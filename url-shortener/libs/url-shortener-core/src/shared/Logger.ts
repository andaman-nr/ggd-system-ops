export type LogFunction<T extends object = object> = (obj: T, msg?: string, ...args: unknown[]) => void;
export type LogFunctionWithoutObject = (msg?: string, ...args: unknown[]) => void;

export type Logger = {
  fatal: LogFn;
  error: LogFn;
  warn: LogFn;
  info: LogFn;
  debug: LogFn;
  trace: LogFn;
};

type LogFn = {
  <T extends object>(obj: T, msg?: string, ...args: unknown[]): void;
  (obj: unknown, msg?: string, ...args: unknown[]): void;
  (msg: string, ...args: unknown[]): void;
};
