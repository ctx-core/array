/**
 * Returns a function that returns from [every](#every) with the given `predicate` function.
 */
export declare function every_<I extends unknown = unknown>(predicate: (item: I, idx: number, a: I[]) => boolean): (a: I[]) => boolean;
export { every_ as _every, every_ as _every_fn, every_ as _fn__every, };
