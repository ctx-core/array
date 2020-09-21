import { _wrap_a2 } from '@ctx-core/function'
export function _difference_by<I extends unknown, O extends unknown>(
	a2_nowrap:I,
	_by = (item:I)=>item as unknown as O
) {
	const a2 = _wrap_a2<I>(a2_nowrap)
	const set = new Set()
	const difference = [] as I[]
	const { length } = a2
	for (let i_ = 0; i_ < length; i_++) {
		const i = length - 1 - i_
		const a1 = a2[i]
		for (let j = 0; j < a1.length; j++) {
			const item = a1[j] as I
			const by = _by(item)
			if (i) {
				set.add(by)
			} else if (!set.has(by)) {
				difference.push(item)
			}
		}
	}
	return difference
}
export const _difference__by = _difference_by
