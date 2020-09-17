import type { a2_nowrap_type } from '@ctx-core/function';
/**
 * Returns 2d Array where each item being the return value of `fn` given the index value for each Array in `a2_nowrap_type`.
 */
export declare function zipWith<I = unknown>(a2_nowrap: a2_nowrap_type<I>, fn?: (...any: any[]) => any): undefined | I[];
