export function tup<Args extends any[]>(...data:Args):Args {
	return data
}
export type tup_T<Args extends any[]> = (...data:Args)=>Args
export {
	tup as tuple,
	tup as tuple_,
	tup as _tuple,
	tup as _tup,
	tup as tup_fn,
}
