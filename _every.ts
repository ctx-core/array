import { every } from './every'
/**
 * Returns a function that returns from [every](#every) with the given `predicate` function.
 */
export function _every<I extends unknown = unknown>(
	predicate:(item: I, number, a1: I[])=>boolean
) {
	return (a1: I[])=>every<I>(a1, predicate)
}
export const _every_fn = _every
export const _fn__every = _every
