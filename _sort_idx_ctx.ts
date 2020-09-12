import type { falsy } from '@ctx-core/function'
import type { compare_type } from './compare_type'
import { _compare } from './_compare'
import type { sort_idx_ctx_type } from './sort_idx_ctx_type'
import { sort } from './sort'
/**
 * Returns a [sort_idx_ctx_type](#sort_idx_ctx_type).
 */
export function _sort_idx_ctx(
	a1:falsy|any[],
	compare:compare_type = _compare()
):sort_idx_ctx_type {
	const sort_a1 = []
	const sort_val_a1 = []
	const sort_idx_a1 = []
	if (a1) {
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
	}
}
export const _ctx__idx__sort = _sort_idx_ctx
