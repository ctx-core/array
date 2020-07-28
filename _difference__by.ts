import { a2_nowrap_type } from './a2_nowrap_type'
import { _wrap_a2 } from './lib'
import { I } from '@ctx-core/combinators'
export function _difference__by<T>(a2_nowrap:a2_nowrap_type<T>, _by:(T)=>any = I) {
	const a2 = _wrap_a2(a2_nowrap)
	const set = new Set()
	const difference = []
	const { length } = a2
	for (let i_ = 0; i_ < length; i_++) {
		const i = length - 1 - i_
		const a1 = a2[i]
		for (let j = 0; j < a1.length; j++) {
			const item = a1[j]
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
