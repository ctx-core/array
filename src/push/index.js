/**
 * Calls push on a
 * @param a{unknown[]}
 * @param arg_a{unknown}
 * @returns {number}
 */
export function push(a, ...arg_a) {
	return a.push.apply(a, arg_a)
}
/**
 * @param maybe_a{unknown[]|undefined}
 * @param arg_a{unknown}
 * @returns {number|undefined}
 */
export function maybe_push(maybe_a, ...arg_a) {
	return maybe_a ? push(maybe_a, ...arg_a) : void 0
}
