import { every } from './every'
/**
 * Returns a function that returns from [every](#every) with the given `predicate` function.
 */
export function _every<I extends unknown = unknown>(
	predicate:(item:I, number, a1:I[])=>boolean
) {
	return (a1:I[])=>every<I>(a1, predicate)
}
export {
	_every as _every_fn,
	_every as _fn__every,
}
