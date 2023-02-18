import { key_r_, maybe_key_r_ } from '../key_r_/index.js'
/**
 * Returns a Function using argument `key` that returns value from [_key_hash](#_hash__key).
 * @param key{string}
 * @returns {(a:Record<string, string>[])=>Record<string, Record<string, string>>}
 */
export function key_r__(key) {
	return a=>key_r_(a, key)
}
export {
	key_r__ as key_r_2,
	key_r__ as key_h_2,
	key_r__ as _key_hash_fn,
	key_r__ as _fn__hash__key,
}
/**
 * @param key{string}
 * @param or{Record<string, Record<string, string>>|null|undefined}
 * @returns {(maybe_a:Record<string, string>[]|undefined)=>(Record<string, Record<string, string>>|null|undefined)}
 */
export function maybe_key_r__(key, or = null) {
	return (maybe_a)=>maybe_key_r_(maybe_a, key, or)
}
export {
	maybe_key_r__ as maybe_key_h_2,
	maybe_key_r__ as _maybe_key_hash_fn,
}
