import type { maybe } from '@ctx-core/function';
/**
 * Returns Function returning [map](#map) with `fn`.
 */
export declare function _map<I = undefined, O = undefined>(fn: (val: I, idx: number) => O): (a1: maybe<I[]>) => maybe<O[], undefined>;
export declare const _fn__map: typeof _map;
