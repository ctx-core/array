import type { a_item_T } from '@ctx-core/function'
import type { is_match_fn_T } from '../_types'
/**
 * Returns Array of `idx` indices filtered by `fn`.
 */
export declare function idx_filter<I extends readonly unknown[]>(
	in_a:I,
	is_match_?:is_match_fn_T<a_item_T<I>>
):number[]
export declare function maybe_idx_filter<
	I extends readonly number[], Or = null
>(
	maybe_a:I|undefined,
	is_match_?:is_match_fn_T<a_item_T<I>>,
	or?:Or
):number[]|Or
/**
 * Returns function that returns value from [idx_filter](#idx_filter) with `fn` argument.
 */
export declare function idx_filter_(
	is_match_?:is_match_fn_T<number>
):(a:number[])=>number[]
export declare function maybe_idx_filter_(
	is_match_?:is_match_fn_T<number>
):(a:number[]|undefined)=>number[]|undefined
export {
	idx_filter as filter__idx,
	idx_filter_ as _idx_filter,
	maybe_idx_filter_ as _maybe_idx_filter,
	idx_filter_ as _filter__idx,
	idx_filter_ as _fn__filter__idx,
}
