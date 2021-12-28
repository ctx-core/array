/**
 * Returns first item in `a` where `fn(a[idx], idx)` is truthy.
 */ export function find(a, fn) {
	for (let idx = 0; idx < a.length; idx++) {
		const val = a[idx]
		const map_val = fn(val, idx)
		if (map_val) return val
	}
	return undefined
}
export function maybe_find(maybe_a, fn) {
	if (!maybe_a) return
	return find(maybe_a, fn)
}
/**
 * Returns function that returns value from [find](#find) with `fn` argument.
 */ export function find_fn(fn) {
	return (a)=>find(a, fn)

}
export function maybe_find_fn(fn) {
	return (maybe_a)=>maybe_find(maybe_a, fn)

}
export { find_fn as _find, maybe_find_fn as _maybe_find, }
//# sourceMappingURL=find.js.map