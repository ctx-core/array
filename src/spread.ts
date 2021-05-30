import { wrap_a_, wrap_a_T } from '@ctx-core/function'
/**
 * Apply the spread operator on `a_unwrap` into `fn`; `fn(...a_unwrap)`
 */
export function spread<Val extends unknown = unknown, Out extends unknown = unknown>(
	fn:(...a:wrap_a_T<Val>)=>Out,
	a_unwrap:Val
):Out {
	const wrap_a = wrap_a_<Val>(a_unwrap)
	return fn(...wrap_a) as Out
}
