import type { maybe, maybe_undefined } from '@ctx-core/function';
/**
 * Removes null values from the array
 */
export declare function compact<I extends unknown = unknown>(a1: I[]): I[];
export declare function maybe_compact<I extends unknown = unknown>(maybe_a1: maybe<I[]>): maybe_undefined<I[]>;
export { compact as compact_a1, compact as compact__a1, };
