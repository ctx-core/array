/**
 * Returns a Hash with a key for each item in `value_a` & value set to the return of `_value`.
 */
export declare function value_h_<Out extends unknown = unknown>(in_key_a: string[] | undefined, _value: (key: string, i: number) => Out): Record<string, Out>;
export { value_h_ as value_hash_fn, value_h_ as _value_hash, value_h_ as _hash__value, };
