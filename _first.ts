import type { maybe, maybe_undefined } from '@ctx-core/function'
/**
 * Returns the first item in `a1`.
 */
export function _first<I extends unknown>(a1:I[]):maybe_undefined<I> {
	return a1[0] as maybe_undefined<I>
}
export function _maybe_first<I extends unknown>(
	maybe_a1:maybe<I[]>
):maybe_undefined<I> {
	return maybe_a1 ? _first(maybe_a1 as I[]) : void 0
}
