import { _wrap_a2 } from './_wrap_a2'
import type { a2_nowrap_type } from '@ctx-core/function'
/**
 * Returns 2d Array where each item being the return value of `fn` given the index value for each Array in `a2_nowrap_type`.
 */
export function zipWith<I = unknown>(
	a2_nowrap:a2_nowrap_type<I>,
	fn:(...any)=>any = ((..._)=>{})
):undefined|I[] {
	if (!a2_nowrap) return
	const a2 = _wrap_a2<I>(a2_nowrap)
	const [a1 = [] as unknown[], ...rest_a2] = a2
	const zipWith_a1 = []
	for (let i = 0; i < (a1 as I[]).length; i++) {
		const arg_a1 = [a1[i]]
		for (let j = 0; j < rest_a2.length; j++) {
			arg_a1.push(rest_a2[j][i])
		}
		zipWith_a1.push(fn.call(zipWith_a1, arg_a1, i))
	}
	return zipWith_a1
}
