import type { maybe } from '@ctx-core/function';
/**
 * Returns an `Object.<key,value>` of the given `key_hash[a1[][key]] = a1[]`.
 */
export declare function _key_hash<I = unknown>(in_a1: maybe<I[]>, key: string | number): Record<string, I>;
export declare const _hash__key: typeof _key_hash;
