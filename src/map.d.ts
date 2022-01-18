/**
 * Map return value of `fn(a[], i)` into an Array.
 */
export declare function map<Val extends unknown = unknown, Out extends unknown = unknown>(
	a:readonly Val[], fn:map_fn_T<Val, Out>
):Out[];
export declare function maybe_map<Val extends unknown, Out extends unknown>(
	maybe_a:readonly Val[]|undefined, fn:map_fn_T<Val, Out>
):Out[]|undefined;
export declare type map_fn_T<Val extends unknown, Out extends unknown> = (val:Val, idx:number)=>Out;
