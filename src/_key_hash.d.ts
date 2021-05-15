import type { falsy } from '@ctx-core/function';
/**
 * Returns an `Object.<key,value>` of the given `key_hash[a1[][key]] = a1[]`.
 */
export declare function _key_hash<Val extends Record<string, any>>(a1: Val[], key: keyof Val): Record<keyof Val, Val>;
export declare function _maybe_key_hash<Val extends {
    [key: string]: any;
}>(maybe_a1: Val[] | falsy, key: keyof Val): Record<keyof Val, Val>;
export { _key_hash as _hash__key, };
