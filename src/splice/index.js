/**
 * Calls splice on a
 * @param a{unknown[]}
 * @param start{number}
 * @param [delete_count]{number}
 * @param arg_a{unknown}
 * @returns {unknown[]}
 */
export function splice(a, start, delete_count, ...arg_a) {
	return a.splice(start, delete_count, ...arg_a)
}
/**
 * @param maybe_a{unknown[]|undefined}
 * @param start{number}
 * @param [delete_count]{number}
 * @param arg_a{unknown}
 * @returns {unknown[]|undefined}
 */
export function maybe_splice(
	maybe_a, start, delete_count, ...arg_a
) {
	return maybe_a ? splice(maybe_a, start, delete_count, ...arg_a) : undefined
}
