import { wrap_aa_ } from '@ctx-core/function'
export function difference_by_</*@formatter:off*/
	I extends unknown = unknown,
	O extends unknown = unknown
>/*@formatter:on*/(
	a2_nowrap:I,
	_by = (item:I)=>item as unknown as O
):I[] {
	const a2 = wrap_aa_<I>(a2_nowrap)
	const set = new Set()
	const difference = [] as I[]
	const { length } = a2
	for (let i_ = 0; i_ < length; i_++) {
		const i = length - 1 - i_
		const a = a2[i]
		for (let j = 0; j < a.length; j++) {
			const item = a[j] as I
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
export {
	difference_by_ as _difference_by,
	difference_by_ as _difference__by,
}
