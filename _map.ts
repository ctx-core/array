import { map, maybe_map } from './map'
import type { maybe } from '@ctx-core/function'
/**
 * Returns Function returning [map](#map) with `fn`.
 */
export function _map<I extends unknown, O extends unknown>(
	fn:(val:I, idx:number)=>O
):(a1:I[])=>O[] {
	return a1=>map<I, O>(a1, fn)
}
export const _fn__map = _map
export function _maybe_map<I extends unknown, O extends unknown>(
	fn:(val:I, idx:number)=>O
):(a1:maybe<I[]>)=>maybe<O[], undefined> {
	return a1=>maybe_map<I, O>(a1, fn)
}
