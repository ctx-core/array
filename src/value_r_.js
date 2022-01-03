/**
 * Returns a Hash with a key for each item in `value_a` & value set to the return of `_value`.
 */ export function value_r_(in_key_a, _value) {
	const value_r = {}
	if (in_key_a) {
		const key_a = in_key_a
		for (let i = 0; i < key_a.length; i++) {
			const key = key_a[i]
			value_r[key] = _value(key, i)
		}
	}
	return value_r
}
export { value_r_ as value_h_, value_r_ as value_hash_fn, value_r_ as _value_hash, value_r_ as _hash__value, }
