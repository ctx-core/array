import type { falsy } from '@ctx-core/function'
import { _a1_length } from './_a1_length'
/**
 * Returns true if `a1` is has a length
 */
export function _a1_present<Val extends unknown = unknown>(a1:Val[]):boolean {
	return !!_a1_length<Val>(a1)
}
export function _maybe_a1_present<Val extends unknown = unknown>(maybe_a1:Val|falsy) {
	return _a1_present<Val>(maybe_a1 as Val[])
}
export {
	_a1_present as _present__a1,
}
