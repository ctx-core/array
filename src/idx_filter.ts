import type { a_item_T } from '@ctx-core/function'
import { I__ } from '@ctx-core/combinators'
import type { is_match_fn_T } from './is_match_fn_T'
/**
 * Returns Array of `idx` indices filtered by `fn`.
 */
export function idx_filter<I extends unknown[]>(
	in_a:I,
	_is_match = I__ as is_match_fn_T<a_item_T<I>>
):I {
	const a = in_a as I
	const idx_a = [] as number[]
	for (let idx = 0; idx < a.length; idx++) {
		const value = a[idx]
		if (_is_match(value as a_item_T<I>, idx)) {
			idx_a.push(idx)
		}
	}
	return idx_a as I
}
export function maybe_idx_filter<I extends number[]>(
	maybe_a:I|undefined,
	_is_match = I__ as is_match_fn_T<a_item_T<I>>
):I|undefined {
	if (!maybe_a) return
	return idx_filter<I>(maybe_a as I, _is_match)
}
/**
 * Returns function that returns value from [idx_filter](#idx_filter) with `fn` argument.
 */
export function idx_filter_(
	_is_match = I__ as is_match_fn_T<number>
):(a:number[])=>number[] {
	return a=>idx_filter(a, _is_match)
}
export function maybe_idx_filter_(
	_is_match = I__ as is_match_fn_T<number>
):(a:number[]|undefined)=>number[]|undefined {
	return a=>maybe_idx_filter(a, _is_match)
}
export {
	idx_filter as filter__idx,
	idx_filter_ as _idx_filter,
	maybe_idx_filter_ as _maybe_idx_filter,
	idx_filter_ as _filter__idx,
	idx_filter_ as _fn__filter__idx,
}
