import type { maybe } from '@ctx-core/function';
import type { compare_type } from './compare_type';
import type { sort_idx_ctx_type } from './sort_idx_ctx_type';
/**
 * Returns a [sort_idx_ctx_type](#sort_idx_ctx_type).
 */
export declare function _sort_idx_ctx<I extends unknown = unknown>(maybe_a1: maybe<I[]>, compare?: compare_type<I>): sort_idx_ctx_type<I>;
export { _sort_idx_ctx as _ctx__idx__sort, };
