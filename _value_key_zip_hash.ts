import { zip } from './zip'
import { each } from './each'
/**
 * Returns an Object the key & value are set from the zipped `a1_0` & `a1_1` Array of `[key, value]` pairs.
 */
export function _value_key_zip_hash<K extends (string|number|symbol), V extends unknown>(
	[a1_0, a1_1]:[K[], V[]]
) {
	const value_key_zip_hash = {} as Record<K, V>
	const value_key_a2 = zip<K|V>([a1_0, a1_1])
	each<[K, V]>(
		value_key_a2 as [K, V][],
		(kv=>value_key_zip_hash[kv[0]] = kv[1])
	)
	return value_key_zip_hash
}
export const _hash__zip__key__value = _value_key_zip_hash
