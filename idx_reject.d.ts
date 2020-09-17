import type { _is_match_type } from './_is_match_type';
import type { maybe } from '@ctx-core/function';
/**
 * Returns Array of indices `idx` not rejected by `fn`.
 */
export declare function idx_reject<I = unknown>(in_a1: maybe<I[]>, fn: _is_match_type<I>): maybe<number[], undefined>;
export declare const reject__idx: typeof idx_reject;
