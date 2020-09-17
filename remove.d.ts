import type { maybe } from '@ctx-core/function';
/**
 * Remove each `...item_a1` from `a1`.
 */
export declare function remove<I = unknown>(in_a1: maybe<I[]>, ...item_a1: I[]): maybe<I[], undefined>;
export declare const remove__a1: typeof remove;
