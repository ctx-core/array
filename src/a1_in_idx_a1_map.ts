import { map } from './map'
/**
 * Returns Array of values from `a1` with index in `idx_a1`.
 */
export function a1_in_idx_a1_map(
	idx_a1:number[], a1:number[]
) {
	return map<number, number>(idx_a1, idx=>a1[idx])
}
export {
	a1_in_idx_a1_map as map__a1__idx__in__a1,
}
