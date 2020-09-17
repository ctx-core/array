import type { maybe } from '@ctx-core/function';
/**
 * Returns a Function using argument `key` that returns value from [_key_hash](#_hash__key).
 */
export declare function _key_hash_fn<I = unknown>(key: string | number): (a1: maybe<I[]>) => Record<string, I>;
export declare const _fn__hash__key: typeof _key_hash_fn;
