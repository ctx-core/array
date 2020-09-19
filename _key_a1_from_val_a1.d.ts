import type { maybe } from '@ctx-core/function';
/**
 * Returns Array of `obj[key_a1[]]`.
 */
export declare function _key_a1_from_val_a1<I>(obj: I, key_a1: string[]): I[keyof I][];
export declare const _a1__val__from__a1__key: typeof _key_a1_from_val_a1;
export declare function _maybe_key_a1_from_val_a1<I>(obj: maybe<I>, key_a1: string[]): maybe<maybe<I[keyof I][], undefined>, undefined>;
