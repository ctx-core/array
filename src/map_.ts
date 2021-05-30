import { map, maybe_map } from './map'
/**
 * Returns Function returning [map](#map) with `fn`.
 */
export function map_<I extends unknown = unknown, O extends unknown = unknown>(
	fn: (val: I, idx: number) => O
): (a: I[]) => O[] {
	return a => map<I, O>(a, fn)
}
export function maybe_map_</*@formatter:off*/
	I extends unknown = unknown,
	O extends unknown = unknown
>/*@formatter:on*/(
	fn: (val: I, idx: number) => O
): (a: I[]|undefined) => O[]|undefined {
	return a => maybe_map<I, O>(a, fn)
}
export {
	map_ as _map,
	map_ as _fn__map,
	maybe_map_ as _maybe_map,
}
