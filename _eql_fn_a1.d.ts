import type { a1_item_type } from '@ctx-core/function';
/**
 * Is a_a1 `===` to b_a1 based on `fn(a, b, i)`? Checks first level equality.
 */
export declare function _eql_fn_a1<I extends unknown>(a_a1: I[], b_a1: I[], fn: (a: a1_item_type<I>, b: a1_item_type<I>, number: any) => boolean): boolean;
export declare const _eql__a1__fn: typeof _eql_fn_a1;
