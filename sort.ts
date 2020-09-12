import type { falsy } from '@ctx-core/function'
import type { compare_type } from './compare_type'
/**
 * Sort items in `a1` by the `compare` function
 */
export function sort(a1:falsy|any[], compare?:compare_type):undefined|any[] {
	return a1 ? a1.sort(compare) : void 0
}
