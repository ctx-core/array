import { some } from '../some/index.js'
/**
 * Returns a function that returns from [some](#some) with given `predicate` function.
 * @param predicate{(val:unknown, index:number, a:unknown[])=>unknown}
 * @returns {(a:unknown[])=>boolean}
 */
export function some_(predicate) {
	return a=>some(a, predicate)
}
export {
	some_ as _some,
	some_ as _some_fn,
	some_ as _fn__some,
}
