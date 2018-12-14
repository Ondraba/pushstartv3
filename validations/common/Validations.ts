export const validatePocetZnaku = (min: number, max: number) => async(input: string): Promise<boolean> => input.length <= max && input.length >= min;

