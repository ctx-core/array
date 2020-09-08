import { find } from './find'
/**
 * Returns function that returns value from [find](#find) with `fn` argument.
 */
export function _find(fn) {
	return a1=>find(a1, fn)
}
