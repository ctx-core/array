import { map } from './map'
import type { maybe } from '@ctx-core/function'
/**
 * Returns Array of values from `a1` with index in `idx_a1`.
 */
export function a1_in_idx_a1_map<I = string|number>(idx_a1:I[], a1:I[]) {
	return map<I>(idx_a1 as maybe<I[]>, idx=>a1[idx as unknown as string|number])
}
export const map__a1__idx__in__a1 = a1_in_idx_a1_map
