import { every } from './every'
/**
 * Returns a function that returns from [every](#every) with the given `predicate` function.
 */
export function _every(predicate:(any, number, a1)=>unknown):(a1:any[])=>boolean {
	return a1=>every(a1, predicate)
}
export const _every_fn = _every
export const _fn__every = _every
