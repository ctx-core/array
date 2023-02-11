import { wrap_aa_ } from '@ctx-core/function'
export function union_by_(aa_nowrap, by_ = (v)=>v
) {
	const a2 = wrap_aa_(aa_nowrap)
	const set = new Set()
	const union = []
	for (let i = 0; i < a2.length; i++) {
		const a = a2[i]
		for (let j = 0; j < a.length; j++) {
			const item = a[j]
			const by = by_(item)
			if (!set.has(by)) {
				set.add(by)
				union.push(item)
			}
		}
	}
	return union
}
export {
	union_by_ as _union_by,
	union_by_ as _union__by,
}
