import type { compare_type } from './compare_type';
import type { sort_idx_ctx_type } from './sort_idx_ctx_type';
import type { maybe } from '@ctx-core/function';
/**
 * Returns a [sort_idx_ctx_type](#sort_idx_ctx_type).
 */
export declare function _sort_idx_ctx<I = unknown>(in_a1: maybe<I[]>, compare?: compare_type): sort_idx_ctx_type<I>;
export declare const _ctx__idx__sort: typeof _sort_idx_ctx;
