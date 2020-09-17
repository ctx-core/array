import { map } from './map'
import type { maybe } from '@ctx-core/function'
/**
 * Returns Function returning [map](#map) with `fn`.
 */
export function _map<I = undefined, O = undefined>(fn:(val:I, idx:number)=>O):(a1:maybe<I[]>)=>maybe<O[], undefined> {
	return (a1: maybe<I[]>)=>map<I, O>(a1, fn)
}
export const _fn__map = _map
