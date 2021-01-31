import { some } from './some'
/**
 * Returns a function that returns from [some](#some) with given `predicate` function.
 */
export function _some(predicate:(any, number, a1)=>unknown):(a1:unknown[])=>boolean {
	return a1=>some(a1, predicate)
}
export {
	_some as _some_fn,
	_some as _fn__some,
}
