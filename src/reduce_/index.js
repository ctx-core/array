/** @typedef {import('../reduce').reduce_fn_T}reduce_fn_T */
/** @typedef {import('./index.d.ts').memo_fn_T}memo_fn_T */
/**
 * Return Function that returns from `reduce` with `fn` and factory `memo_(a)`.
 * @param fn{reduce_fn_T}
 * @param memo_{memo_fn_T}
 * @returns {(a:unknown, memo:unknown)=>unknown}
 */
export function reduce_(fn, memo_) {
	return (a, memo)=>a.reduce(fn, memo == null ? memo_ && memo_(a) : memo)
}
/**
 * @param fn{reduce_fn_T}
 * @param memo_fn{memo_fn_T}
 * @param or{unknown}
 * @returns {(a:unknown[], memo:unknown)=>unknown}
 */
export function maybe_reduce_(fn, memo_fn, or = null) {
	return (a, memo)=>a ? a.reduce(fn, memo == null ? memo_fn && memo_fn(a) : memo) : or
}
export {
	reduce_ as _reduce,
	reduce_ as _fn__reduce,
	maybe_reduce_ as _maybe_reduce,
}
