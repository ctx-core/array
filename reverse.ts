import { falsy } from '@ctx-core/function'
/**
 * Reverses the order of items in `a1` by mutating `a1`.
 */
export function reverse(a1:falsy|any[]):undefined|any[] {
	return a1 ? a1.reverse() : void 0
}
