import type { a1_nowrap_type } from '@ctx-core/function';
/**
 * Apply the spread operator on `a1` into `fn`; `fn(...a1)`
 */
export declare function spread<I, O = unknown>(fn: (...a1: I[]) => unknown, a1: a1_nowrap_type<I>): O;
