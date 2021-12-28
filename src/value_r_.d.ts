/**
 * Returns a Hash with a key for each item in `value_a` & value set to the return of `_value`.
 */
export declare function value_r_<Out extends unknown = unknown>(in_key_a:string[]|undefined, _value:(key:string, i:number)=>Out):Record<string, Out>;
export { value_r_ as value_h_, value_r_ as value_hash_fn, value_r_ as _value_hash, value_r_ as _hash__value, }
