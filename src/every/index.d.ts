/**
 * Returns true if every `predicate(value)` is truthy
 */
export declare function every<
	I extends unknown = unknown
>(
	a:readonly I[],
	predicate:(item:I, idx:number, a:readonly I[])=>boolean
):boolean
export declare function maybe_every<
	I extends unknown = unknown, Or = null
>(
	maybe_a:readonly I[]|undefined,
	predicate:(item:I, idx:number, a:readonly I[])=>boolean,
	or?:Or
):boolean|Or
export {
	every as every_a1,
	every as every__a1,
}
