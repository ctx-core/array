import type { maybe, maybe_undefined } from '@ctx-core/function'
/**
 * Returns the _last item in the in_a1
 */
export function _last<I extends unknown = unknown>(a1: I[]): maybe_undefined<I> {
	return a1[a1.length - 1] as I
}
export function _maybe_last<I extends unknown = unknown>(
	maybe_a1: maybe<I[]>
): maybe<I, undefined> {
	if (!maybe_a1) return
	return _last(maybe_a1 as I[])
}
export {
	_last as _last__a1,
}