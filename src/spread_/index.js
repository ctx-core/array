import { spread } from '../spread/index.js'
/** @typedef {import('@ctx-core/function').wrap_a_T}wrap_a_T */
/**
 * Returns a function taking an array calling [spread](#spread)
 * @param fn{(...a:wrap_a_T)=>unknown}
 * @returns {(a_unwrap:unknown)=>unknown}
 */
export function spread_(fn) {
	return a_unwrap=>spread(fn, a_unwrap)
}
export {
	spread_ as spread_fn,
	spread_ as _spread,
}
