import type { falsy } from '@ctx-core/function';
/**
 * Returns a Function using argument `key` that returns value from [_key_hash](#_hash__key).
 */
export declare function _key_hash_fn</*@formatter:off*/ Val extends Record<string, string> = Record<string, string>, Key extends keyof Val = keyof Val>(key: Key): (a1: Val[]) => Record<string, Val>;
export declare function _maybe_key_hash_fn</*@formatter:off*/ Val extends Record<string, string> = Record<string, string>, Key extends keyof Val = keyof Val>(key: Key): (maybe_a1: Val[] | falsy) => Record<string, Val>;
export { _key_hash_fn as _fn__hash__key, };
