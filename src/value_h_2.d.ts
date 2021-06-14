/**
 * Returns a Function that returns from [_value_hash](#_value_hash).
 */
export declare function value_h_2<Out extends unknown = unknown>(value_: (key: string, idx: number) => Out): (value_a: string[]) => Record<string, Out>;
export { value_h_2 as value_hash_fn2, value_h_2 as _value_hash_fn, value_h_2 as _fn__hash__value, };
