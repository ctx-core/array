import type { maybe } from '@ctx-core/function';
/**
 * Returns Function returning [map](#map) with `fn`.
 */
export declare function _map<I extends unknown = unknown, O extends unknown = unknown>(fn: (val: I, idx: number) => O): (a1: I[]) => O[];
export declare function _maybe_map</*@formatter:off*/ I extends unknown = unknown, O extends unknown = unknown>(fn: (val: I, idx: number) => O): (a1: maybe<I[]>) => maybe<O[], undefined>;
export { _map as _fn__map, };
