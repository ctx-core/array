import { map } from './map'
/**
 * Returns Array of values from `a1` with index in `idx_a1`.
 */
export function a1_in_idx_a1_map<I extends (string|number)[]>(
	idx_a1:I, a1:I
) {
	return map<I, I>(idx_a1, idx=>a1[idx as string|number])
}
export const map__a1__idx__in__a1 = a1_in_idx_a1_map
