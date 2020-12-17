/**
 * Is a_a1 `===` b_a1? Checks first level equality.
 */
export function _eql_a1<I extends unknown = unknown>(a_a1:I[], b_a1:I[]):boolean {
	if (a_a1 === b_a1) return true
	if (a_a1 == null || b_a1 == null) return false
	if (a_a1.length != b_a1.length) return false
	for (let i = 0; i < a_a1.length; ++i) {
		if (a_a1[i] !== b_a1[i]) return false
	}
	return true
}
export {
	_eql_a1 as _eql__a1,
}
