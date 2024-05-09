type SuccessResult<T> = {
  success: true;
  fail: false;
  data: T;
  message?: string;
};

type ErrorResult<E> = {
  success: false;
  fail: true;
  error: E;
  message?: string;
};

export type Result<T = object, E = unknown> = SuccessResult<T> | ErrorResult<E>;

export type DataParser<I, O> = (data: I) => Result<O>;

export const Result = {
  ok<T>(data: T, message?: string): SuccessResult<T> {
    return {
      success: true,
      fail: false,
      data,
      message,
    };
  },
  fail<E>(error: E, message?: string): ErrorResult<E> {
    return {
      success: false,
      fail: true,
      error,
      message,
    };
  },
};
