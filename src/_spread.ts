import { spread } from './spread'
/**
 * Returns a function taking an array calling [spread](#spread)
 */
export function _spread(fn:(...any)=>any):(a1:any|unknown[])=>any {
	return a1=>spread(fn, a1)
}
