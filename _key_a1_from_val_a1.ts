import { map } from './map'
/**
 * Returns Array of `obj[key_a1[]]`.
 */
export function _key_a1_from_val_a1(obj, key_a1) {
	if (!obj) return
	return map(key_a1, key=>obj[key])
}
export const _a1__val__from__a1__key = _key_a1_from_val_a1
