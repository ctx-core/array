import { a1_nowrap_type, concat, maybe } from '@ctx-core/function'
import { isArray } from '@ctx-core/object'
/**
 * Flattens the a1 & it's children into an a1 without chunks
 */
export function flatten<I = unknown>(in_a1:maybe<I[]>):maybe<I[], undefined> {
	if (!in_a1) return
	const a1 = in_a1 as I[]
	return a1.reduce(
		(a, b:a1_nowrap_type<I>)=>
			concat(
				a,
				isArray(b)
				? flatten<I>(b as I[])
				: b),
		[]
	)
}
export const flatten__a1 = flatten
