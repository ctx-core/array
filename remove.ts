import { remove_idx } from './remove_idx'
import type { maybe } from '@ctx-core/function'
/**
 * Remove each `...item_a1` from `a1`.
 */
export function remove<I = unknown>(
	in_a1:maybe<I[]>,
	...item_a1:I[]
):maybe<I[], undefined> {
	if (!in_a1) return
	const a1 = in_a1 as I[]
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
