import { slice } from './slice'
/**
 * Returns a function that slices the spread argument array with `arg_a1`
 */
export function _spread_slice(...arg_a1:any):(...a1:any)=>undefined|any[] {
	return (...a1)=>slice(a1, ...arg_a1)
}
export const _slice__spread = _spread_slice
export const _fn__slice__spread = _slice__spread
