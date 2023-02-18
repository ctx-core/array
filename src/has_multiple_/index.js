import { a_length_ } from '../a_length_/index.js'
/**
 * Returns true if argument is an array with more than one item
 * @param a{unknown[]}
 * @returns {boolean}
 */
export function has_multiple_(a) {
	return a_length_(a) > 1
}
export {
	has_multiple_ as _has_multiple,
	has_multiple_ as _has__multiple,
	has_multiple_ as _has__multiple__a1,
}
