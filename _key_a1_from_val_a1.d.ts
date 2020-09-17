import type { maybe } from '@ctx-core/function';
/**
 * Returns Array of `obj[key_a1[]]`.
 */
export declare function _key_a1_from_val_a1<I = unknown>(obj: maybe<I>, key_a1: maybe<string[]>): maybe<maybe<I[keyof I][], undefined>, undefined>;
export declare const _a1__val__from__a1__key: typeof _key_a1_from_val_a1;
