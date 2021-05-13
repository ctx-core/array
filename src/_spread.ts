import type { wrap_a1_type } from '@ctx-core/function'
import { spread } from './spread'
/**
 * Returns a function taking an array calling [spread](#spread)
 */
export function _spread<Val extends unknown = unknown, Out extends unknown = unknown>(
	fn:(...args:wrap_a1_type<Val>)=>Out
):(a1_unwrap:Val)=>Out {
	return (a1_unwrap:Val)=>spread<Val, Out>(fn, a1_unwrap)
}
