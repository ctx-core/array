/**
 * Return Function that returns from `reduce` with `fn` and factory `memo_(a)`.
 */
export function reduce_(fn, memo_) {
	return (a, memo)=>a.reduce(fn, memo == null ? memo_ && memo_(a) : memo)
}
export function maybe_reduce_(fn, memo_fn, or = null) {
	return (a, memo)=>a ? a.reduce(fn, memo == null ? memo_fn && memo_fn(a) : memo) : or
}
export {
	reduce_ as _reduce,
	reduce_ as _fn__reduce,
	maybe_reduce_ as _maybe_reduce,
}
