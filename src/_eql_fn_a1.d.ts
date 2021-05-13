import type { a1_item_type } from '@ctx-core/function';
/**
 * Is a_a1 `===` to b_a1 based on `fn(a, b, i)`? Checks first level equality.
 */
export declare function _eql_fn_a1<I extends unknown = unknown>(a_a1: I[], b_a1: I[], fn: (a: a1_item_type<I>, b: a1_item_type<I>, idx: number) => boolean): boolean;
export { _eql_fn_a1 as _eql__a1__fn, };
