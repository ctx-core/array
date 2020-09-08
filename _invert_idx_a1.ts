import { falsy } from '@ctx-core/function'
/**
 * Returns an Array of indices inverted from `idx_a1`.
 * @example `_invert_idx_a1([2, 1, 3, 0]) -> [3, 1, 0, 2]`
 */
export function _invert_idx_a1(idx_a1:falsy|number[]):undefined|any[] {
	if (!idx_a1) return
	const invert_idx_a1 = []
	for (let i = 0; i < idx_a1.length; i++) {
		invert_idx_a1[idx_a1[i]] = i
	}
	return invert_idx_a1
}
export const _a1__idx__invert = _invert_idx_a1
