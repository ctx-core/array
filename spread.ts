import type { a1_nowrap_type } from '@ctx-core/function'
import { _wrap_a1 } from '@ctx-core/function'
/**
 * Apply the spread operator on `a1` into `fn`; `fn(...a1)`
 */
export function spread<I = unknown, O = unknown>(
	fn:(...a1:I[])=>unknown,
	a1:a1_nowrap_type<I>
):O {
	return fn(..._wrap_a1<I>(a1)) as O
}
