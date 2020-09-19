import { a1_nowrap_type, concat, maybe_undefined } from '@ctx-core/function'
import { isArray } from '@ctx-core/object'
/**
 * Flattens the a1 & it's children into an a1 without chunks
 */
export function flatten<I>(a1:I[]):I[] {
	return a1.reduce<I[]>(
		(a, b:a1_nowrap_type<I>)=>
			concat(
				a,
				isArray(b)
				? flatten<I>(b as I[])
				: b) as I[],
		[]
	)
}
export const flatten__a1 = flatten
export function maybe_flatten<I>(in_a1:I[]):maybe_undefined<I[]> {
	if (!in_a1) return
	return flatten<I>(in_a1 as I[])
}
