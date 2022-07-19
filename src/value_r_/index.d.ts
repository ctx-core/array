/**
 * Returns a Hash with a key for each item in `value_a` & value set to the return of `value_`.
 */
export declare function value_r_<Out extends unknown = unknown>(
	in_key_a:readonly string[]|undefined, value_:(key:string, i:number)=>Out
):Record<string, Out>
export { value_r_ as value_h_, value_r_ as value_hash_fn, value_r_ as _value_hash, value_r_ as _hash__value, }
