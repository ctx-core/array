/**
 * Returns a Function that returns from [_value_hash](#_value_hash).
 */
export declare function _value_hash_fn<Val extends unknown = unknown, Out extends unknown = unknown>(_value: (value: Val, idx: number) => Out): (value_a1: any) => Record<string, Out>;
export { _value_hash_fn as _fn__hash__value, };
