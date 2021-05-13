import { some } from './some'
/**
 * Returns a function that returns from [some](#some) with given `predicate` function.
 */
export function _some<Val extends unknown = unknown, POut extends unknown = unknown>(
	predicate:(val:Val, index:number, a1:Val[])=>POut
):(a1:Val[])=>boolean {
	return a1=>some<Val, POut>(a1, predicate)
}
export {
	_some as _some_fn,
	_some as _fn__some,
}
