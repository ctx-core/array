import type { a2_nowrap_type } from './a2_nowrap_type'
import { _wrap_a2 } from './_wrap_a2'
/**
 * Returns 2d Array where each item being the return value of `fn` given the index value for each Array in `a2_nowrap_type`.
 */
export function zipWith(
	a2_nowrap:a2_nowrap_type,
	fn:(...any)=>any = ((..._)=>{})
):undefined|any[] {
	if (!a2_nowrap) return
	const a2 = _wrap_a2(a2_nowrap)
	const [a1 = [], ...a2__rest] = a2
	const zipWith_a1 = []
	for (let i = 0; i < a1.length; i++) {
		const arg_a1 = [a1[i]]
		for (let j = 0; j < a2__rest.length; j++) {
			arg_a1.push(a2__rest[j][i])
		}
		zipWith_a1.push(fn.call(zipWith_a1, arg_a1, i))
	}
	return zipWith_a1
}
