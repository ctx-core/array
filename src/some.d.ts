/**
 * Returns true if some `predicate(value)` is truthy
 */
export declare function some<Val extends unknown = unknown, POut extends unknown = unknown>(a: Val[], predicate: (val: Val, index: number, a: Val[]) => POut): boolean;
export { some as some_a1, some as some__a1, };
