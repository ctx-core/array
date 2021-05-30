import type { compare_T } from './compare_T'
import { compare_ } from './compare_'
import type { sort_idx_ctx_T } from './sort_idx_ctx_T'
import { sort } from './sort'
/**
 * Returns a [sort_idx_ctx_T](#sort_idx_ctx_T).
 */
export function sort_idx_ctx_<I extends unknown = unknown>(
	maybe_a:I[]|undefined,
	compare:compare_T<I> = compare_<I>()
) {
	const sort_a = [] as [I, number][]
	const sort_val_a = [] as I[]
	const sort_idx_a = [] as number[]
	if (maybe_a) {
		const a = maybe_a as I[]
		for (let i = 0; i < a.length; i++) {
			sort_a.push([a[i], i])
		}
		sort(sort_a, (l, r)=>compare(l[0], r[0]))
		for (let i = 0; i < a.length; i++) {
			sort_idx_a.push(sort_a[i][1])
			sort_val_a[i] = sort_a[i][0]
		}
	}
	return {
		sort_idx_a,
		sort_val_a,
	} as sort_idx_ctx_T<I>
}
export {
	sort_idx_ctx_ as _sort_idx_ctx,
	sort_idx_ctx_ as _ctx__idx__sort,
}
