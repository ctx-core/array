import { remove_idx } from './remove_idx'
import type { maybe, maybe_undefined } from '@ctx-core/function'
/**
 * Remove each `...item_a1` from `a1`.
 */
export function remove<I extends unknown>(
	a1:I[],
	...item_a1:I[]
):I[] {
	for (let i = 0; i < item_a1.length; i++) {
		const key = item_a1[i]
		let index
		while ((index = a1.lastIndexOf(key)) > -1) {
			remove_idx(a1, index)
		}
	}
	return a1
}
export const remove__a1 = remove
export function maybe_remove<I extends unknown>(
	maybe_a1:maybe<I[]>,
	...item_a1:I[]
):maybe_undefined<I[]> {
	if (!maybe_a1) return
	return remove<I>(maybe_a1 as I[], ...item_a1)
}