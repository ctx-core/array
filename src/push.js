/**
 * Calls push on a
 */ export function push(a, ...arg_a) {
	return a.push.apply(a, arg_a)
}
export function maybe_push(maybe_a, ...arg_a) {
	return maybe_a ? push(maybe_a, ...arg_a) : void 0
}
//# sourceMappingURL=push.js.map