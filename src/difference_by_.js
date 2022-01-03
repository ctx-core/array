import { wrap_aa_ } from '@ctx-core/function'
export function difference_by_(aa_nowrap, _by = (item)=>item
) {
	const a2 = wrap_aa_(aa_nowrap)
	const set = new Set()
	const difference = []
	const { length } = a2
	for (let i_ = 0; i_ < length; i_++) {
		const i = length - 1 - i_
		const a = a2[i]
		for (let j = 0; j < a.length; j++) {
			const item = a[j]
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
export { difference_by_ as _difference_by, difference_by_ as _difference__by, }
