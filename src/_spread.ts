import type { wrap_a1_type } from '@ctx-core/function'
import { spread } from './spread'
/**
 * Returns a function taking an array calling [spread](#spread)
 */
export function _spread<Val extends unknown = unknown, Out extends unknown = unknown>(
	fn:(...a1:wrap_a1_type<Val>)=>Out
) {
	return (a1_unwrap:Val)=>spread(fn, a1_unwrap)
}
