import type { a_item_T } from '@ctx-core/function';
/**
 * Is i0_a `===` to i1_a based on `fn(a, b, i)`? Checks first level equality.
 */
export declare function eql_fn_a_<I extends unknown = unknown>(i0_a: I[], i1_a: I[], fn: (a: a_item_T<I>, b: a_item_T<I>, idx: number) => boolean): boolean;
export { eql_fn_a_ as eql_fn_a1_fn, eql_fn_a_ as _eql_fn_a1, eql_fn_a_ as _eql__a1__fn, };
