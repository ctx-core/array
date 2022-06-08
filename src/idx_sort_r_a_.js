import { idx_sort_a_ } from './idx_sort_a_.js'
export function idx_sort_r_a_(a_r, idx_a) {
	const idx_sort_r_a = {}
	for (const key in a_r) {
		idx_sort_r_a[key] = idx_sort_a_(a_r[key], idx_a)
	}
	return idx_sort_r_a
}
export { idx_sort_r_a_ as idx_sort_h_a_ }
