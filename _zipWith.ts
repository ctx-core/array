import { zipWith } from './zipWith'
/**
 * Returns a function that returns [zipWith](#zipWith) with `fn` argument.
 */
export function _zipWith(fn:(...any)=>any):(...a2:any[])=>undefined|any[] {
	return (...a2)=>zipWith(a2, fn)
}
export const _fn__zipWith = _zipWith
