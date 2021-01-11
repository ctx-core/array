import { idx_reject } from './idx_reject'
/**
 * Returns function that returns value from [idx_reject](#idx_reject) with `fn` argument.
 */
export function _idx_reject(fn) {
	return a1 => idx_reject(a1, fn)
}
export {
	_idx_reject as _reject__idx,
	_idx_reject as _fn__reject__idx,
}
