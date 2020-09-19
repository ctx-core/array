import type { maybe } from '@ctx-core/function';
/**
 * Returns an `Object.<key,value>` of the given `key_hash[a1[][key]] = a1[]`.
 */
export declare function _key_hash<I extends object[]>(a1: I, key: string | number): Record<string, I[number]>;
export declare const _hash__key: typeof _key_hash;
export declare function _maybe_key_hash<I extends object[]>(maybe_a1: maybe<I>, key: string | number): Record<string, I[number]>;
