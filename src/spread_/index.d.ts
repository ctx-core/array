import type { wrap_a_T } from '@ctx-core/function'
/**
 * Returns a function taking an array calling [spread](#spread)
 */
export declare function spread_<
	Val extends unknown = unknown, Out extends unknown = unknown
>(
	fn:(...a:wrap_a_T<Val>)=>Out
):(a_unwrap:Val)=>Out
export {
	spread_ as spread_fn,
	spread_ as _spread,
}
