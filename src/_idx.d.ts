import type { maybe } from '@ctx-core/function';
import type { _is_match_type } from './_is_match_type';
/**
 * Returns idx of first match in `a1` with `compare`.
 */
export declare function _idx(in_a1: maybe<number[]>, compare: unknown | _is_match_type<number>): number;