import { a_nowrap_T, wrap_aa_T } from '@ctx-core/function'
/**
 * Returns the _intersection of n arrays
 * @see {@link http://www.2ality.com/2015/01/es6-set-operations.html}
 */
export declare function intersection_<I extends unknown = unknown>(
	aa_nowrap:a_nowrap_T<I>
):intersection_T<I>;
export declare type intersection_T<I extends unknown = unknown> =
	wrap_aa_T<I> extends readonly (infer O)[][] ? readonly O[] : never;
export { intersection_ as _intersection, intersection_ as _intersection__a1, }
