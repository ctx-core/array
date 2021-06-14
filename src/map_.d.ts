/**
 * Returns Function returning [map](#map) with `fn`.
 */
export declare function map_<I extends unknown = unknown, O extends unknown = unknown>(fn: (val: I, idx: number) => O): (a: I[]) => O[];
export declare function maybe_map_</*@formatter:off*/ I extends unknown = unknown, O extends unknown = unknown>(fn: (val: I, idx: number) => O): (a: I[] | undefined) => O[] | undefined;
export { map_ as _map, map_ as _fn__map, maybe_map_ as _maybe_map, };
