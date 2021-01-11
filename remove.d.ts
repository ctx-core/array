import type { maybe, maybe_undefined } from '@ctx-core/function';
/**
 * Remove each `...item_a1` from `a1`.
 */
export declare function remove</*@formatter:off*/ I extends unknown = unknown, O extends unknown = I[]>(a1: I[], ...item_a1: I[]): O;
export declare function maybe_remove</*@formatter:off*/ I extends unknown = unknown, O extends unknown = I[]>(maybe_a1: maybe<I[]>, ...item_a1: I[]): maybe_undefined<O>;
export { remove as remove__a1, };
