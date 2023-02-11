/**
 * Calls slice on a
 */
export declare function slice<
	I extends unknown = unknown, O extends unknown = readonly I[]
>(
	a:readonly  I[],
	begin_idx?:number,
	end_idx?:number
):O
export declare function maybe_slice<
	I extends unknown = unknown,
	O extends unknown = readonly I[],
	Or = null
>(
	maybe_a:readonly I[]|undefined,
	begin_idx?:number,
	end_idx?:number,
	or?:Or
):O|Or
