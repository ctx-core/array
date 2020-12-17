import { slice } from './slice'
/**
 * Returns a function that slices the spread argument array with `arg_a1`
 */
export function _spread_slice(...arg_a1:any):(...a1:any)=>undefined|unknown[] {
	return (...a1)=>slice(a1, ...arg_a1)
}
export {
	_spread_slice as _slice__spread,
	_spread_slice as _fn__slice__spread,
}
