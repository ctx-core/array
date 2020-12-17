import type { compare_type } from './compare_type';
/**
 * Returns a basic ascending or descending `compare` function to be used for sorting.
 */
export declare function _compare<I extends unknown = unknown>(asc?: boolean): compare_type<I>;
/**
 * Compare function to sort by ascending order.
 */
export declare const asc_compare: compare_type<unknown>;
/**
 * Compare function to sort by descending order.
 */
export declare const desc_compare: compare_type<unknown>;
export { _compare as _fn__compare, asc_compare as compare__asc, asc_compare as fn__compare__asc, desc_compare as compare__desc, desc_compare as fn__compare__desc, };
