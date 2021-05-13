import type { falsy } from '@ctx-core/function';
/**
 * Returns Array of `obj[key_a1[]]`.
 */
export declare function _key_a1_from_val_a1<Val extends object = object>(obj: Val, key_a1: string[]): Val[keyof Val][];
export declare function _maybe_key_a1_from_val_a1<Val extends object = object>(obj: Val | falsy, key_a1: string[]): Val[keyof Val][] | undefined;
export { _key_a1_from_val_a1 as _a1__val__from__a1__key, };
