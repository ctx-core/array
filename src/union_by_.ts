import { wrap_aa_, wrap_aa_item_T } from '@ctx-core/function'
export function union_by_<I extends unknown, O extends unknown>(
	a2_nowrap:I,
	by_ = (v:wrap_aa_item_T<I>)=>v as unknown as O
):wrap_aa_item_T<I>[] {
	const a2 = wrap_aa_<I>(a2_nowrap)
	const set = new Set() as Set<O>
	const union = [] as wrap_aa_item_T<I>[]
	for (let i = 0; i < a2.length; i++) {
		const a = a2[i] as wrap_aa_item_T<I>[]
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
