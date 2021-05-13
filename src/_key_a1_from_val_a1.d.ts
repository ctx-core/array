import type { falsy } from '@ctx-core/function';
/**
 * Returns Array of `obj[key_a1[]]`.
 */
export declare function _key_a1_from_val_a1</*@formatter:off*/ Val extends unknown = unknown>(obj: Record<string, Val>, key_a1: string[]): Val[];
export declare function _maybe_key_a1_from_val_a1</*@formatter:off*/ Val extends unknown = unknown>(obj: Record<string, Val> | falsy, key_a1: string[]): Val[] | undefined;
export { _key_a1_from_val_a1 as _a1__val__from__a1__key, };
