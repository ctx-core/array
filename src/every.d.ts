/**
 * Returns true if every `predicate(value)` is truthy
 */
export declare function every<I extends unknown = unknown>(a: I[], predicate: (item: I, idx: number, a: I[]) => boolean): boolean;
export declare function maybe_every<I extends unknown = unknown>(maybe_a: I[] | undefined, predicate: (item: I, idx: number, a: I[]) => boolean): boolean | undefined;
export { every as every_a1, every as every__a1, };
