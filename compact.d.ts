import type { maybe, maybe_undefined } from '@ctx-core/function';
/**
 * Removes null values from the array
 */
export declare function compact<I extends unknown = unknown>(a1: I[]): I[];
export declare const compact_a1: typeof compact;
export declare const compact__a1: typeof compact;
export declare function maybe_compact<I extends unknown = unknown>(maybe_a1: maybe<I[]>): maybe_undefined<I[]>;
