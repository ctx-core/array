/**
 * Returns 2d Array where each item being the return value of `fn` given the index value for each Array in `wrap_aa_T`.
 */
export function zip_with(aa, fn) {
	if (!fn) fn = default_zip_with_2()
	const a = aa[0]
	const rest_aa = aa.slice(1)
	const zip_with_aa = []
	for (let i = 0; i < a.length; i++) {
		const arg_a = [
			a[i]
		]
		for (let j = 0; j < rest_aa.length; j++) {
			arg_a.push(rest_aa[j][i])
		}
		zip_with_aa.push(fn.call(zip_with_aa, arg_a, i))
	}
	return zip_with_aa
}
export function maybe_zip_with(a2, fn, or = null) {
	if (!a2) return or
	return zip_with(a2, fn)
}
export function default_zip_with_2() {
	return (a, _i)=>a
}
export { zip_with as zipWith, maybe_zip_with as maybe_zipWith, }
