import type { maybe } from '@ctx-core/function';
/**
 * Returns an `Object.<key,value>` of the given `key_hash[a1[][key]] = a1[]`.
 */
export declare function _key_hash<I extends object[] = object[]>(a1: I, key: string | number): Record<string, I[number]>;
export declare function _maybe_key_hash<I extends object[] = object[]>(maybe_a1: maybe<I>, key: string | number): Record<string, I[number]>;
export { _key_hash as _hash__key, };
