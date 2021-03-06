import type { a_item_T } from '@ctx-core/function'
/**
 * Is i0_a `===` to i1_a based on `fn(a, b, i)`? Checks first level equality.
 */
export function eql_fn_a_<I extends unknown = unknown>(
	i0_a:I[],
	i1_a:I[],
	fn:(a:a_item_T<I>, b:a_item_T<I>, idx:number)=>boolean
):boolean {
	if (i0_a === i1_a) return true
	if (i0_a == null || i1_a == null) return false
	if (i0_a.length != i1_a.length) return false
	for (let i = 0; i < i0_a.length; ++i) {
		if (!fn(i0_a[i] as a_item_T<I>, i1_a[i] as a_item_T<I>, i)) return false
	}
	return true
}
export {
	eql_fn_a_ as eql_fn_a1_fn,
	eql_fn_a_ as _eql_fn_a1,
	eql_fn_a_ as _eql__a1__fn,
}
