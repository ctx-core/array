import { wrap_aa_item_T } from '@ctx-core/function'
export declare function union_by_<I extends unknown, O extends unknown>(
	aa_nowrap:I, by_?:(v:wrap_aa_item_T<I>)=>O
):wrap_aa_item_T<I>[];
export { union_by_ as _union_by, union_by_ as _union__by, }
