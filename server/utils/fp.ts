export const promiseWrap = <T>(input: T) => async (): Promise<T> => await input;

export const executePayloadFnIf = <TPayload>(expression: boolean, curriedFn: any) => async (payload: TPayload) => (expression ? curriedFn(payload) : payload);
