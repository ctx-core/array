import {
	maybe_undefined, wrap_a_type, wrap_concat
} from '@ctx-core/function'
import { isArray } from '@ctx-core/object'
/**
 * Flattens the a1 & it's children into an a1 without chunks
 */
export function flatten<I extends unknown>(a1:wrap_a_type<I>):I[] {
	return (a1 as I[]).reduce<I[]>(
		(previousValue: I[], currentValue:I)=>
			wrap_concat<I>(
				previousValue,
				...(
					isArray<I | I[]>(currentValue)
					? flatten<I>(currentValue as I[])
					: [currentValue] as I[]
				) as I[]
			) as I[],
		[] as I[]
	) as I[]
}
export const flatten__a1 = flatten
export function maybe_flatten<I extends unknown>(in_a1:wrap_a_type<I>):maybe_undefined<I[]> {
	if (!in_a1) return
	return flatten<I>(in_a1)
}
