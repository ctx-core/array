import type { wrap_a1_type } from '@ctx-core/function'
import { _wrap_a1 } from '@ctx-core/function'
/**
 * Apply the spread operator on `a1_unwrap` into `fn`; `fn(...a1_unwrap)`
 */
export function spread<I extends unknown, O extends unknown>(
	fn:(...a1:wrap_a1_type<I>)=>O,
	a1_unwrap:I
):O {
	const wrap_a1 = _wrap_a1<I>(a1_unwrap)
	return fn(...wrap_a1) as O
}
