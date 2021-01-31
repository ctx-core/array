import type { maybe } from '@ctx-core/function';
/**
 * Returns a Function using argument `key` that returns value from [_key_hash](#_hash__key).
 */
export declare function _key_hash_fn<I extends object[] = object[]>(key: string | number): (a1: I) => Record<string, I[number]>;
export declare function _maybe_key_hash_fn<I extends object[] = object[]>(key: string | number): (maybe_a1: maybe<I>) => Record<string, I[number]>;
export { _key_hash_fn as _fn__hash__key, };
