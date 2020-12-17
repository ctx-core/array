import type { maybe } from '@ctx-core/function'
/**
 * Returns an Array of indices inverted from `idx_a1`.
 * @example `_invert_idx_a1([2, 1, 3, 0]) -> [3, 1, 0, 2]`
 */
export function _invert_idx_a1(in_idx_a1:maybe<number[]>):maybe<number[], undefined> {
	if (!in_idx_a1) return
	const idx_a1 = in_idx_a1 as number[]
	const invert_idx_a1 = [] as number[]
	for (let i = 0; i < idx_a1.length; i++) {
		invert_idx_a1[idx_a1[i]] = i
	}
	return invert_idx_a1
}
export {
	_invert_idx_a1 as _a1__idx__invert,
}
