/**
 * Calls slice on a
 * @param a{unknown[]}
 * @param [begin_idx]{number}
 * @param [end_idx]{number}
 * @returns {unknown}
 */
export function slice(a, begin_idx, end_idx) {
	return a.slice(begin_idx, end_idx)
}
/**
 * @param maybe_a{unknown[]|undefined}
 * @param [begin_idx]{number}
 * @param [end_idx]{number}
 * @param [or]{unknown[]|null|undefined}
 * @returns {unknown[]|null|undefined}
 */
export function maybe_slice(
	maybe_a,
	begin_idx = undefined,
	end_idx = undefined,
	or = null
) {
	return maybe_a ? slice(maybe_a, begin_idx, end_idx) : or
}
