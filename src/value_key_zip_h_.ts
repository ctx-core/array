import { each } from './each.js'
import { zip } from './zip.js'
/**
 * Returns an Object the key & value are set from the zipped `a_i0` & `a_i1` Array of `[key, value]` pairs.
 */
export function value_key_zip_h_<K extends (string|number|symbol), V extends unknown>(
	[a_i0, a_i1]:[K[], V[]]
):Record<K, V> {
	const value_key_zip_h = {} as Record<K, V>
	const value_key_aa = zip<(K[]|V[])[], [K, V][]>([a_i0, a_i1])
	each(
		value_key_aa,
		(kv=>value_key_zip_h[kv[0]] = kv[1])
	)
	return value_key_zip_h
}
export {
	value_key_zip_h_ as _value_key_zip_hash,
	value_key_zip_h_ as _hash__zip__key__value,
}
