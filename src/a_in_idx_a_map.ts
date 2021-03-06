import { map } from './map.js'
/**
 * Returns Array of values from `a` with index in `idx_a`.
 */
export function a_in_idx_a_map<Val extends unknown = unknown>(
	idx_a:number[], a:Val[]
):Val[] {
	return map<number, Val>(idx_a, idx=>a[idx])
}
export {
	a_in_idx_a_map as a1_in_idx_a1_map,
	a_in_idx_a_map as map__a1__idx__in__a1,
}
