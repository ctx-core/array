import { falsy } from '@ctx-core/function'
/**
 * Returns the first item in `a1`.
 */
export function _first(a1:falsy|any[]):undefined|any {
	return a1 ? a1[0] : void 0
}
