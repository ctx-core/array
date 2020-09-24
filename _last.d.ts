import type { maybe, maybe_undefined } from '@ctx-core/function';
/**
 * Returns the _last item in the in_a1
 */
export declare function _last<I extends unknown = unknown>(a1: I[]): maybe_undefined<I>;
export declare const _last__a1: typeof _last;
export declare function _maybe_last<I extends unknown = unknown>(maybe_a1: maybe<I[]>): maybe<I, undefined>;
