import { spread } from './spread.js'
/**
 * Returns a function taking an array calling [spread](#spread)
 */
export function spread_(fn) {
	return a_unwrap=>spread(fn, a_unwrap)
}
export { spread_ as spread_fn, spread_ as _spread, }