import type { compare_type } from './compare_type'
import type { maybe } from '@ctx-core/function'
/**
 * Sort items in `in_a1` by the `compare` function
 */
export function sort<I = unknown>(
	in_a1:maybe<I[]>,
	compare?:compare_type
):maybe<I[], undefined> {
	return in_a1 ? (in_a1 as I[]).sort(compare) : void 0
}
