import type { maybe } from '@ctx-core/function';
import type { a1_item_type } from './a1_item_type';
/**
 * Returns Function returning [map](#map) with `fn`.
 */
export declare function _map<I extends unknown[], O extends unknown[]>(fn: (val: a1_item_type<I>, idx: number) => a1_item_type<O>): (a1: I) => O;
export declare const _fn__map: typeof _map;
export declare function _maybe_map<I extends unknown[], O extends unknown[]>(fn: (val: a1_item_type<I>, idx: number) => a1_item_type<O>): (a1: maybe<I>) => maybe<O, undefined>;
