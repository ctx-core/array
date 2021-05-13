/**
 * Returns a function that returns from [some](#some) with given `predicate` function.
 */
export declare function _some<Val extends unknown = unknown, POut extends unknown = unknown>(predicate: (val: Val, index: number, a1: Val[]) => POut): (a1: Val[]) => boolean;
export { _some as _some_fn, _some as _fn__some, };
