import { falsy } from '@ctx-core/function'
/**
 * Returns the _last item in the a1
 */
export function _last(a1:falsy|any[]):undefined|any {
	return a1 ? a1[a1.length - 1] : void 0
}
export const _last__a1 = _last
