import { every } from './every'
/**
 * Returns a function that returns from [every](#every) with the given `predicate` function.
 */
export function every_<I extends unknown = unknown>(
	predicate:(item:I, idx:number, a:I[])=>boolean
) {
	return (a:I[])=>every<I>(a, predicate)
}
export {
	every_ as _every,
	every_ as _every_fn,
	every_ as _fn__every,
}
