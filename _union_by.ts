import type { a2_nowrap_type } from './a2_nowrap_type'
import { I } from '@ctx-core/combinators'
import { _wrap_a2 } from './_wrap_a2'
export function _union_by<T>(a2_nowrap:a2_nowrap_type<T>, _by:(T)=>any = I) {
	const a2 = _wrap_a2(a2_nowrap)
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
