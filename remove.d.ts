import type { maybe, maybe_undefined } from '@ctx-core/function';
/**
 * Remove each `...item_a1` from `a1`.
 */
export declare function remove<I>(in_a1: I[], ...item_a1: I[]): I[];
export declare const remove__a1: typeof remove;
export declare function maybe_remove<I>(maybe_a1: maybe<I[]>, ...item_a1: I[]): maybe_undefined<I[]>;
