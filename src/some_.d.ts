/**
 * Returns a function that returns from [some](#some) with given `predicate` function.
 */
export declare function some_<Val extends unknown = unknown, P_out extends unknown = unknown>(predicate:(val:Val, index:number, a:Val[])=>P_out):(a:Val[])=>boolean;
export { some_ as _some, some_ as _some_fn, some_ as _fn__some, }
