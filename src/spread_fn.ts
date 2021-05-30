import type { wrap_a_T } from '@ctx-core/function'
import { spread } from './spread'
/**
 * Returns a function taking an array calling [spread](#spread)
 */
export function spread_fn<Val extends unknown = unknown, Out extends unknown = unknown>(
	fn:(...a:wrap_a_T<Val>)=>Out
) {
	return (a_unwrap:Val)=>spread(fn, a_unwrap)
}
export { 
	spread_fn as _spread,
}
