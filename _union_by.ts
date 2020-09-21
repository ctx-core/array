import type { wrap_a2_item_type } from '@ctx-core/function'
import { _wrap_a2 } from '@ctx-core/function'
export function _union_by<I extends unknown, O extends unknown>(
	a2_nowrap:I,
	_by = (v:wrap_a2_item_type<I>)=>v as unknown as O
) {
	const a2 = _wrap_a2<I>(a2_nowrap)
	const set = new Set() as Set<O>
	const union = [] as wrap_a2_item_type<I>[]
	for (let i = 0; i < a2.length; i++) {
		const a1 = a2[i] as wrap_a2_item_type<I>[]
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
