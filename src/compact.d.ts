/**
 * Removes null values from the array
 */
export declare function compact<I extends unknown = unknown>(a:readonly I[]):I[];
export declare function maybe_compact<I extends unknown = unknown>(
	maybe_a:readonly I[]|undefined
):I[]|undefined;
export { compact as compact_a1, compact as compact__a1, }
