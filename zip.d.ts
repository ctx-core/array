import type { maybe, maybe_undefined } from '@ctx-core/function';
/**
 * Returns 2d Array of each item being the index value for each Array in `...a2`.
 */
export declare function zip<I extends unknown>(a2: I[][]): I[][];
export declare function maybe_zip<I extends unknown>(a2: maybe<I[][]>): maybe_undefined<I[][]>;
