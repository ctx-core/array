/**
 * Calls splice on a
 */ export function splice(a, start, delete_count, ...arg_a) {
	return a.splice(start, delete_count, ...arg_a)
}
export function maybe_splice(maybe_a, start, delete_count, ...arg_a) {
	return maybe_a ? splice(maybe_a, start, delete_count, ...arg_a) : undefined
}
//# sourceMappingURL=splice.js.map