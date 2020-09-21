import type { _is_match_type } from './_is_match_type';
import type { maybe, maybe_undefined } from '@ctx-core/function';
/**
 * Returns Array of indices `idx` not rejected by `fn`.
 */
export declare function idx_reject<I extends unknown>(a1: I[], fn: _is_match_type<I>): number[];
export declare const reject__idx: typeof idx_reject;
export declare function maybe_idx_reject<I extends unknown>(maybe_a1: maybe<I[]>, fn: _is_match_type<I>): maybe_undefined<number[]>;
