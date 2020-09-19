import type { maybe } from '@ctx-core/function';
/**
 * Returns a Function using argument `key` that returns value from [_key_hash](#_hash__key).
 */
export declare function _key_hash_fn<I extends object[]>(key: string | number): (a1: I) => Record<string, I[number]>;
export declare const _fn__hash__key: typeof _key_hash_fn;
export declare function _maybe_key_hash_fn<I extends object[]>(key: string | number): (maybe_a1: maybe<I>) => Record<string, I[number]>;
