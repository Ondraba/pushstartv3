export const promiseWrap = <T>(input: T) => async (): Promise<T> => await input;
