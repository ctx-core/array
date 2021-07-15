import type { wrap_a_T } from '@ctx-core/function'
import { spread } from './spread.js'
/**
 * Returns a function taking an array calling [spread](#spread)
 */
export function spread_<Val extends unknown = unknown, Out extends unknown = unknown>(
	fn:(...a:wrap_a_T<Val>)=>Out
):(a_unwrap:Val)=>Out {
	return (a_unwrap:Val)=>spread<Val, Out>(fn, a_unwrap)
}
export {
	spread_ as spread_fn,
	spread_ as _spread,
}
