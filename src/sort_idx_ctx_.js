import { compare_ } from './compare_.js'
import { sort } from './sort.js'
/**
 * Returns a [sort_idx_ctx_T](#sort_idx_ctx_T).
 */ export function sort_idx_ctx_(maybe_a, compare = compare_()) {
	const sort_a = []
	const sort_val_a = []
	const sort_idx_a = []
	if (maybe_a) {
		const a = maybe_a
		for (let i = 0; i < a.length; i++) {
			sort_a.push([
				a[i],
				i
			])
		}
		sort(sort_a, (l, r)=>compare(l[0], r[0])
		)
		for (let i1 = 0; i1 < a.length; i1++) {
			sort_idx_a.push(sort_a[i1][1])
			sort_val_a[i1] = sort_a[i1][0]
		}
	}
	return {
		sort_idx_a,
		sort_val_a
	}
}
export { sort_idx_ctx_ as _sort_idx_ctx, sort_idx_ctx_ as _ctx__idx__sort, }
//# sourceMappingURL=sort_idx_ctx_.js.map