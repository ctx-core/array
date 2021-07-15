import { remove_idx } from './remove_idx.js'
/**
 * Remove each `...item_a` from `a`.
 */
export function remove</*@formatter:off*/
	I extends unknown = unknown,
	O extends unknown = I[]
>/*@formatter:on*/(a:I[], ...item_a:I[]):O {
	for (let i = 0; i < item_a.length; i++) {
		const key = item_a[i]
		let index
		while ((index = a.lastIndexOf(key)) > -1) {
			remove_idx(a, index)
		}
	}
	return a as O
}
export function maybe_remove</*@formatter:off*/
	I extends unknown = unknown,
	O extends unknown = I[]
>/*@formatter:on*/(
	maybe_a:I[]|undefined,
	...item_a:I[]
):O|undefined {
	if (!maybe_a) return
	return remove<I>(maybe_a as I[], ...item_a) as O
}
export {
	remove as remove__a1,
}
