import { key_r_, maybe_key_r_ } from './key_r_.js'
/**
 * Returns a Function using argument `key` that returns value from [_key_hash](#_hash__key).
 */ export function key_r_2(key) {
	return (a)=>key_r_(a, key)

}
export function maybe_key_r_2(key) {
	return (maybe_a)=>maybe_key_r_(maybe_a, key)

}
export {
	key_r_2 as key_h_2,
	key_r_2 as _key_hash_fn,
	key_r_2 as _fn__hash__key,
	maybe_key_r_2 as maybe_key_h_2,
	maybe_key_r_2 as _maybe_key_hash_fn,
}
