import type { maybe } from '@ctx-core/function';
/**
 * Returns a Hash with a key for each item in `value_a1` & value set to the return of `_value`.
 */
export declare function _value_hash<O = unknown>(in_value_a1: maybe<string[]>, _value: (string: any, number: any) => O): Record<string, O>;
export { _value_hash as _hash__value, };
