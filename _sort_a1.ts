import { falsy } from '@ctx-core/function'
import { compare_type } from './compare_type'
import { sort } from './sort'
import { slice } from './slice'
/**
 * Sorts a copy of `a1` by the `compare` function.
 */
export function _sort_a1(a1:falsy|any[], compare?:compare_type):undefined|any[] {
	return sort(slice(a1, 0), compare)
}
export const _a1__sort = _sort_a1
