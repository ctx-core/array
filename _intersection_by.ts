import { _wrap_a2, wrap_a2_item_type } from '@ctx-core/function'
export function _intersection_by<I extends unknown, O extends unknown>(
	a2_nowrap:I,
	_by = (v:wrap_a2_item_type<I>)=>v as unknown as O
) {
	const a2 = _wrap_a2<I>(a2_nowrap)
	const intersection_map = new Map() as Map<O, wrap_a2_item_type<I>>
	const current_map = new Map() as Map<O, wrap_a2_item_type<I>>
	for (let i = 0; i < a2.length; i++) {
		const a1 = a2[i] as wrap_a2_item_type<I>[]
		if (!i) {
			for (let j = 0; j < a1.length; j++) {
				const item = a1[j]
				const by = _by(item)
				if (!intersection_map.has(by)) {
					intersection_map.set(by, item)
				}
			}
		} else {
			current_map.clear()
			for (let j = 0; j < a1.length; j++) {
				const item = a1[j]
				const by = _by(item)
				current_map.set(by, item)
			}
			intersection_map.forEach((_val, by)=>{
				if (!current_map.has(by)) {
					intersection_map.delete(by)
				}
			})
		}
	}
	const intersection = [] as O[]
	intersection_map.forEach((_by, item)=>{
		intersection.push(item)
	})
	return intersection
}
export {
	_intersection_by as _intersection__by,
}
