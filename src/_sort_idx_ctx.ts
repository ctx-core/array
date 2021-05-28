import type { maybe } from '@ctx-core/function'
import type { compare_T } from './compare_T'
import { _compare } from './_compare'
import type { sort_idx_ctx_T } from './sort_idx_ctx_T'
import { sort } from './sort'
/**
 * Returns a [sort_idx_ctx_T](#sort_idx_ctx_T).
 */
export function _sort_idx_ctx<I extends unknown = unknown>(
	maybe_a1:maybe<I[]>,
	compare:compare_T<I> = _compare<I>()
) {
	const sort_a1 = [] as [I, number][]
	const sort_val_a1 = [] as I[]
	const sort_idx_a1 = [] as number[]
	if (maybe_a1) {
		const a1 = maybe_a1 as I[]
		for (let i = 0; i < a1.length; i++) {
			sort_a1.push([a1[i], i])
		}
		sort(sort_a1, (l, r)=>compare(l[0], r[0]))
		for (let i = 0; i < a1.length; i++) {
			sort_idx_a1.push(sort_a1[i][1])
			sort_val_a1[i] = sort_a1[i][0]
		}
	}
	return {
		sort_idx_a1,
		sort_val_a1,
	} as sort_idx_ctx_T<I>
}
export {
	_sort_idx_ctx as _ctx__idx__sort,
}
