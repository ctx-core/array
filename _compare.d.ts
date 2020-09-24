import type { compare_type } from './compare_type';
/**
 * Returns a basic ascending or descending `compare` function to be used for sorting.
 */
export declare function _compare<I extends unknown = unknown>(asc?: boolean): compare_type<I>;
export declare const _fn__compare: typeof _compare;
/**
 * Compare function to sort by ascending order.
 */
export declare const asc_compare: compare_type<unknown>;
export declare const compare__asc: compare_type<unknown>;
export declare const fn__compare__asc: compare_type<unknown>;
/**
 * Compare function to sort by descending order.
 */
export declare const desc_compare: compare_type<unknown>;
export declare const compare__desc: compare_type<unknown>;
export declare const fn__compare__desc: compare_type<unknown>;
