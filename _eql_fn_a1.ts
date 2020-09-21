import type { a1_item_type } from '@ctx-core/function'
/**
 * Is a_a1 `===` to b_a1 based on `fn(a, b, i)`? Checks first level equality.
 */
export function _eql_fn_a1<I extends unknown>(
	a_a1:I[],
	b_a1:I[],
	fn:(a:a1_item_type<I>, b:a1_item_type<I>, number)=>boolean
):boolean {
	if (a_a1 === b_a1) return true
	if (a_a1 == null || b_a1 == null) return false
	if (a_a1.length != b_a1.length) return false
	for (let i = 0; i < a_a1.length; ++i) {
		if (!fn(a_a1[i] as a1_item_type<I>, b_a1[i] as a1_item_type<I>, i)) return false
	}
	return true
}
export const _eql__a1__fn = _eql_fn_a1
