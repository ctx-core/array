import { wrap_aa_, wrap_aa_item_T } from '@ctx-core/function'
export function intersection_by_</*@formatter:off*/
	I extends unknown = unknown,
	O extends unknown = unknown
>/*@formatter:on*/(
	aa_nowrap: I,
	by_ = (v: wrap_aa_item_T<I>) => v as unknown as O
):O[] {
	const a2 = wrap_aa_<I>(aa_nowrap)
	const intersection_map = new Map() as Map<O, wrap_aa_item_T<I>>
	const current_map = new Map() as Map<O, wrap_aa_item_T<I>>
	for (let i = 0; i < a2.length; i++) {
		const a = a2[i] as wrap_aa_item_T<I>[]
		if (!i) {
			for (let j = 0; j < a.length; j++) {
				const item = a[j]
				const by = by_(item)
				if (!intersection_map.has(by)) {
					intersection_map.set(by, item)
				}
			}
		} else {
			current_map.clear()
			for (let j = 0; j < a.length; j++) {
				const item = a[j]
				const by = by_(item)
				current_map.set(by, item)
			}
			intersection_map.forEach((_val, by) => {
				if (!current_map.has(by)) {
					intersection_map.delete(by)
				}
			})
		}
	}
	const intersection = [] as O[]
	intersection_map.forEach((_by, item) => {
		intersection.push(item)
	})
	return intersection
}
export {
	intersection_by_ as _intersection_by,
	intersection_by_ as _intersection__by,
}
