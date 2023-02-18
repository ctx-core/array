import { every } from '../every/index.js'
/**
 * Returns a function that returns from [every](#every) with the given `predicate` function.
 * @param predicate{(item:unknown, idx:number, a:unknown[])=>boolean}
 * @returns {(a:unknown[])=>boolean}
 */
export function every_(predicate) {
	return a=>every(a, predicate)
}
export {
	every_ as _every,
	every_ as _every_fn,
	every_ as _fn__every,
}
