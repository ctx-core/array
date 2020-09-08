import { some } from './some'
/**
 * Returns a function that returns from [some](#some) with given `predicate` function.
 */
export function _some(predicate:(any, number, a1)=>unknown):(a1:any[])=>boolean {
	return a1=>some(a1, predicate)
}
export const _some_fn = _some
export const _fn__some = _some
