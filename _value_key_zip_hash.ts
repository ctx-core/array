import { zip } from './zip'
import { each } from './each'
/**
 * Returns an Object the key & value are set from the zipped `a1_0` & `a1_1` Array of `[key, value]` pairs.
 */
export function _value_key_zip_hash([a1_0, a1_1]) {
	const value_key_zip_hash = {}
	const value_key_a2 = zip([a1_0, a1_1])
	each(value_key_a2, ([key, value])=>value_key_zip_hash[key] = value)
	return value_key_zip_hash
}
export const _hash__zip__key__value = _value_key_zip_hash
