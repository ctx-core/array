import type { maybe } from '@ctx-core/function';
/**
 * Returns Function returning [map](#map) with `fn`.
 */
export declare function _map<I extends unknown, O extends unknown>(fn: (val: I, idx: number) => O): (a1: I[]) => O[];
export declare function _maybe_map<I extends unknown, O extends unknown>(fn: (val: I, idx: number) => O): (a1: maybe<I[]>) => maybe<O[], undefined>;
export { _map as _fn__map, };
