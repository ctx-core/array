import type { a2_nowrap_type } from './a2_nowrap_type'
import { I } from '@ctx-core/combinators'
import { _wrap_a2 } from './_wrap_a2'
export function _intersection_by<T>(a2_nowrap:a2_nowrap_type<T>, _by:(T)=>any = I) {
	const a2 = _wrap_a2(a2_nowrap)
	const intersection_map = new Map()
	const current_map = new Map()
	for (let i = 0; i < a2.length; i++) {
		const a1 = a2[i]
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
			intersection_map.forEach(by=>{
				if (!current_map.has(by)) {
					intersection_map.delete(by)
				}
			})
		}
	}
	const intersection = []
	intersection_map.forEach((_by, item)=>{
		intersection.push(item)
	})
	return intersection
}
export const _intersection__by = _intersection_by
