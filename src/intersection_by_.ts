import { wrap_a2_, wrap_a2_item_T } from '@ctx-core/function'
export function intersection_by_</*@formatter:off*/
	I extends unknown = unknown,
	O extends unknown = unknown
>/*@formatter:on*/(
	a2_nowrap: I,
	_by = (v: wrap_a2_item_T<I>) => v as unknown as O
) {
	const a2 = wrap_a2_<I>(a2_nowrap)
	const intersection_map = new Map() as Map<O, wrap_a2_item_T<I>>
	const current_map = new Map() as Map<O, wrap_a2_item_T<I>>
	for (let i = 0; i < a2.length; i++) {
		const a = a2[i] as wrap_a2_item_T<I>[]
		if (!i) {
			for (let j = 0; j < a.length; j++) {
				const item = a[j]
				const by = _by(item)
				if (!intersection_map.has(by)) {
					intersection_map.set(by, item)
				}
			}
		} else {
			current_map.clear()
			for (let j = 0; j < a.length; j++) {
				const item = a[j]
				const by = _by(item)
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
