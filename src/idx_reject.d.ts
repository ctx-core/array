import type { falsy } from '@ctx-core/function';
import type { _is_match_type } from './_is_match_type';
/**
 * Returns Array of indices `idx` not rejected by `fn`.
 */
export declare function idx_reject<Val extends unknown = unknown>(a1: Val[], fn: _is_match_type<Val>): number[];
export declare function maybe_idx_reject<Val extends unknown = unknown>(maybe_a1: Val[] | falsy, fn: _is_match_type<Val>): number[] | undefined;
export { idx_reject as reject__idx, };
