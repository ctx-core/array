/**
 * Returns the _last item in the in_a
 */ export function last_(a) {
	return a[a.length - 1]
}
export function maybe_last_(maybe_a) {
	if (!maybe_a) return
	return last_(maybe_a)
}
export { last_ as _last, last_ as _last__a1, maybe_last_ as _maybe_last, }
