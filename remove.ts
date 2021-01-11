import type { maybe, maybe_undefined } from '@ctx-core/function'
import { remove_idx } from './remove_idx'
/**
 * Remove each `...item_a1` from `a1`.
 */
export function remove</*@formatter:off*/
	I extends unknown = unknown,
	O extends unknown = I[]
>/*@formatter:on*/(a1: I[], ...item_a1: I[]): O {
	for (let i = 0; i < item_a1.length; i++) {
		const key = item_a1[i]
		let index
		while ((index = a1.lastIndexOf(key)) > -1) {
			remove_idx(a1, index)
		}
	}
	return a1 as O
}
export function maybe_remove</*@formatter:off*/
	I extends unknown = unknown,
	O extends unknown = I[]
>/*@formatter:on*/(
	maybe_a1: maybe<I[]>,
	...item_a1: I[]
): maybe_undefined<O> {
	if (!maybe_a1) return
	return remove<I>(maybe_a1 as I[], ...item_a1) as O
}
export {
	remove as remove__a1,
}
