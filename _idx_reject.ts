import { idx_reject } from './idx_reject'
/**
 * Returns function that returns value from [idx_reject](#idx_reject) with `fn` argument.
 */
export function _idx_reject(fn) {
	return a1=>idx_reject(a1, fn)
}
export const _reject__idx = _idx_reject
export const _fn__reject__idx = _reject__idx
