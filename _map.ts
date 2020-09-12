import type { falsy } from '@ctx-core/function'
import { map } from './map'
/**
 * Returns Function returning [map](#map) with `fn`.
 */
export function _map(fn:(any, number)=>any):(a1:falsy|any[])=>undefined|any[] {
	return a1=>map(a1, fn)
}
export const _fn__map = _map
