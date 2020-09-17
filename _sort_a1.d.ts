import type { compare_type } from './compare_type';
import type { maybe } from '@ctx-core/function';
/**
 * Sorts a copy of `a1` by the `compare` function.
 */
export declare function _sort_a1<I = unknown>(a1: maybe<I[]>, compare?: compare_type): maybe<I[], undefined>;
export declare const _a1__sort: typeof _sort_a1;
