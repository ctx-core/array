import type { compare_type } from './compare_type';
/**
 * Returns a basic ascending or descending `compare` function to be used for sorting.
 */
export declare function _compare<I = unknown>(asc?: boolean): compare_type<I>;
export declare const _fn__compare: typeof _compare;
