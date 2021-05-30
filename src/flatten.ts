import { wrap_a_T2, wrap_concat } from '@ctx-core/function'
import { isArray } from '@ctx-core/object'
/**
 * Flattens the a & it's children into an a without chunks
 */
export function flatten<I extends unknown = unknown>(a:wrap_a_T2<I>):I[] {
	return (a as I[]).reduce<I[]>(
		(previous_val:I[], current_val:I)=>
			wrap_concat<I>(
				previous_val,
				...(
					isArray<I|I[]>(current_val)
					? flatten<I>(current_val as I[])
					: [current_val] as I[]
				) as I[]
			) as I[],
		[] as I[]
	) as I[]
}
export function maybe_flatten<I extends unknown = unknown>(
	in_a:wrap_a_T2<I>
):I[]|undefined {
	if (!in_a) return
	return flatten<I>(in_a)
}
export {
	flatten as flatten__a1,
}
