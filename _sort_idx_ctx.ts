import type { compare_type } from './compare_type'
import { _compare } from './_compare'
import type { sort_idx_ctx_type } from './sort_idx_ctx_type'
import { sort } from './sort'
import type { maybe } from '@ctx-core/function'
/**
 * Returns a [sort_idx_ctx_type](#sort_idx_ctx_type).
 */
export function _sort_idx_ctx<I extends unknown = unknown>(
	maybe_a1:maybe<I[]>,
	compare:compare_type<I> = _compare<I>()
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
	} as sort_idx_ctx_type<I>
}
export const _ctx__idx__sort = _sort_idx_ctx
