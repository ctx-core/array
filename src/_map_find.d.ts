/**
 * Returns function that returns value from [map_find](#map_find) with `fn` argument.
 */
export declare function _map_find<I extends unknown = unknown, O extends unknown = I>(fn: any): (array: any) => import("@ctx-core/function").maybe<O, undefined>;
export { _map_find as _find__map };