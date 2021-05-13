import type { falsy } from '@ctx-core/function';
/**
 * Returns a Hash with a key for each item in `value_a1` & value set to the return of `_value`.
 */
export declare function _value_hash<Out extends unknown = unknown>(in_value_a1: string[] | falsy, _value: (string: any, number: any) => Out): Record<string, Out>;
export { _value_hash as _hash__value, };
