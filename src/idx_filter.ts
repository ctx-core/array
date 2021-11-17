import { I__ } from '@ctx-core/combinators'
import type { a_item_T } from '@ctx-core/function'
import type { is_match_fn_T } from './is_match_fn_T.js'
/**
 * Returns Array of `idx` indices filtered by `fn`.
 */
export function idx_filter<I extends unknown[]>(
	in_a:I,
	is_match_ = I__ as is_match_fn_T<a_item_T<I>>
):number[] {
	const a = in_a as I
	const idx_a = [] as number[]
	for (let idx = 0; idx < a.length; idx++) {
		const value = a[idx]
		if (is_match_(value as a_item_T<I>, idx)) {
			idx_a.push(idx)
		}
	}
	return idx_a
}
export function maybe_idx_filter<I extends number[]>(
	maybe_a:I|undefined,
	is_match_ = I__ as is_match_fn_T<a_item_T<I>>
):number[]|undefined {
	if (!maybe_a) return
	return idx_filter<I>(maybe_a as I, is_match_)
}
/**
 * Returns function that returns value from [idx_filter](#idx_filter) with `fn` argument.
 */
export function idx_filter_(
	is_match_ = I__ as is_match_fn_T<number>
):(a:number[])=>number[] {
	return a=>idx_filter(a, is_match_)
}
export function maybe_idx_filter_(
	is_match_ = I__ as is_match_fn_T<number>
):(a:number[]|undefined)=>number[]|undefined {
	return a=>maybe_idx_filter(a, is_match_)
}
export {
	idx_filter as filter__idx,
	idx_filter_ as _idx_filter,
	maybe_idx_filter_ as _maybe_idx_filter,
	idx_filter_ as _filter__idx,
	idx_filter_ as _fn__filter__idx,
}
