/**
 * Returns function that returns value from [map_find](#map_find) with `fn` argument.
 */
export declare function _map_find<I extends unknown = unknown, O extends unknown = I>(fn: any): _map_find_ret_T<I, O>;
export { _map_find as _find__map };
export declare type _map_find_ret_T<I extends unknown = unknown, O extends unknown = I> = (array: I[]) => O | undefined;
