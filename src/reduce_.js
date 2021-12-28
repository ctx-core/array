import { maybe_reduce, reduce } from './reduce.js'
/**
 * Return Function that returns from `reduce` with `fn` and factory `memo_(a)`.
 */ export function reduce_(fn, memo_) {
	return (a, memo)=>reduce(a, fn, memo == null ? memo_ && memo_(a) : memo)

}
export function maybe_reduce_(fn, memo_fn) {
	return (a, memo)=>maybe_reduce(a, fn, memo == null ? memo_fn && memo_fn(a) : memo)

}
export { reduce_ as _reduce, reduce_ as _fn__reduce, maybe_reduce_ as _maybe_reduce, }
//# sourceMappingURL=reduce_.js.map