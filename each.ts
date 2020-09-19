import type { maybe, maybe_undefined } from '@ctx-core/function'
import type { a1_item_type } from './a1_item_type'
/**
 * Iterate over each item in `a1` with `fn(a1[i], i)`.
 */
export function each<I extends unknown[]>(
	a1:I,
	fn:each_fn_type<I>
):I {
	for (let i = 0; i < a1.length; i++) {
		fn(a1[i] as a1_item_type<I>, i)
	}
	return a1
}
export function maybe_each<I extends unknown[]>(
	in_a1:maybe<I>,
	fn:each_fn_type<I>
):maybe_undefined<I> {
	if (!in_a1) return
	return each<I>(in_a1 as I, fn)
}
export type each_fn_type<I> = (val:a1_item_type<I>, idx:number)=>void
