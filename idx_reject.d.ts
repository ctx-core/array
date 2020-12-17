import type { maybe, maybe_undefined } from '@ctx-core/function';
import type { _is_match_type } from './_is_match_type';
/**
 * Returns Array of indices `idx` not rejected by `fn`.
 */
export declare function idx_reject<I extends unknown = unknown>(a1: I[], fn: _is_match_type<I>): number[];
export declare function maybe_idx_reject<I extends unknown = unknown>(maybe_a1: maybe<I[]>, fn: _is_match_type<I>): maybe_undefined<number[]>;
export { idx_reject as reject__idx, };
