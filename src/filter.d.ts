import type { falsy } from '@ctx-core/function';
import type { _is_match_type } from './_is_match_type';
/**
 * Returns Array where items in `a1` are filtered by `fn`.
 */
export declare function filter<Val extends unknown = unknown>(a1: Val[], _is_match: _is_match_type<Val>): Val[];
export declare function maybe_filter<Val extends unknown = unknown>(maybe_a1: Val[] | falsy, _is_match: _is_match_type<Val>): Val[] | undefined;
