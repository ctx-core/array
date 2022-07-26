/**
 * Returns a Function using argument `key` that returns value from [_key_hash](#_hash__key).
 */
export declare function key_r_2<Key extends string, Obj extends { [k in Key]:string }>(
	key:Key
):(a:readonly Obj[])=>Record<string, Obj>
export declare function maybe_key_r_2<Key extends string, Obj extends { [k in Key]:string }, Or = null>(
	key:Key, or?:Or
):(maybe_a:readonly Obj[]|undefined)=>Record<string, Obj>|Or
export {
	key_r_2 as key_h_2,
	key_r_2 as _key_hash_fn,
	key_r_2 as _fn__hash__key,
	maybe_key_r_2 as maybe_key_h_2,
	maybe_key_r_2 as _maybe_key_hash_fn,
}