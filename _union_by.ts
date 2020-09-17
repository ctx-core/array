import { _wrap_a2 } from './_wrap_a2'
import type { a2_nowrap_type } from '@ctx-core/function'
export function _union_by<I = unknown, O = unknown>(a2_nowrap:a2_nowrap_type<I>, _by = (v:I)=>v as unknown as O) {
	const a2 = _wrap_a2<I>(a2_nowrap)
	const set = new Set()
	const union = []
	for (let i = 0; i < a2.length; i++) {
		const a1 = a2[i]
		for (let j = 0; j < a1.length; j++) {
			const item = a1[j]
			const by = _by(item)
			if (!set.has(by)) {
				set.add(by)
				union.push(item)
			}
		}
	}
	return union
}
export const _union__by = _union_by
