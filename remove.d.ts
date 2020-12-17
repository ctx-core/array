import type { maybe, maybe_undefined } from '@ctx-core/function';
/**
 * Remove each `...item_a1` from `a1`.
 */
export declare function remove<I extends unknown = unknown>(a1: I[], ...item_a1: I[]): I[];
export declare function maybe_remove<I extends unknown = unknown>(maybe_a1: maybe<I[]>, ...item_a1: I[]): maybe_undefined<I[]>;
export { remove as remove__a1, };
