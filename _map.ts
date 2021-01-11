import type { maybe } from '@ctx-core/function'
import { map, maybe_map } from './map'
/**
 * Returns Function returning [map](#map) with `fn`.
 */
export function _map<I extends unknown = unknown, O extends unknown = unknown>(
	fn: (val: I, idx: number) => O
): (a1: I[]) => O[] {
	return a1 => map<I, O>(a1, fn)
}
export function _maybe_map</*@formatter:off*/
	I extends unknown = unknown,
	O extends unknown = unknown
>/*@formatter:on*/(
	fn: (val: I, idx: number) => O
): (a1: maybe<I[]>) => maybe<O[], undefined> {
	return a1 => maybe_map<I, O>(a1, fn)
}
export {
	_map as _fn__map,
}
