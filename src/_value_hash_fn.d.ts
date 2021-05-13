/**
 * Returns a Function that returns from [_value_hash](#_value_hash).
 */
export declare function _value_hash_fn<Out extends unknown = unknown>(_value: (key: string, idx: number) => Out): (value_a1: string[]) => Record<string, Out>;
export { _value_hash_fn as _fn__hash__value, };
