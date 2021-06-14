import { a_nowrap_T, wrap_a2_T } from '@ctx-core/function';
/**
 * Returns the _intersection of n arrays
 * @see {@link http://www.2ality.com/2015/01/es6-set-operations.html}
 */
export declare function intersection_<I extends unknown = unknown>(a2_nowrap: a_nowrap_T<I>): intersection_T<I>;
export declare type intersection_T<I extends unknown = unknown> = wrap_a2_T<I> extends (infer O)[][] ? O : never;
export { intersection_ as _intersection, intersection_ as _intersection__a1, };
