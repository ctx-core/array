import type { falsy } from '@ctx-core/function';
/**
 * Returns an `Object.<key,value>` of the given `key_hash[a1[][key]] = a1[]`.
 */
export declare function _key_hash<Val extends {
    [key: string]: any;
}, Key extends keyof Val>(a1: Val[], key: Key): Record<Key, Val>;
export declare function _maybe_key_hash<Val extends {
    [key: string]: any;
}, Key extends keyof Val>(maybe_a1: Val[] | falsy, key: Key): Record<Key, Val>;
export { _key_hash as _hash__key, };
