/**
 * Is a_a1 `===` to b_a1 based on `fn(a, b, i)`? Checks first level equality.
 */
export function _eql_fn_a1(a_a1:any[], b_a1:any[], fn:(a:any, b:any, number)=>unknown):boolean {
	if (a_a1 === b_a1) return true
	if (a_a1 == null || b_a1 == null) return false
	if (a_a1.length != b_a1.length) return false
	for (let i = 0; i < a_a1.length; ++i) {
		if (!fn(a_a1[i], b_a1[i], i)) return false
	}
	return true
}
export const _eql__a1__fn = _eql_fn_a1
