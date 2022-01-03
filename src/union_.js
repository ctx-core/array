import { wrap_aa_ } from '@ctx-core/function'
import { set_union_fn } from '@ctx-core/set'
/**
 * Returns the _union of n arrays
 * @see {@link http://www.2ality.com/2015/01/es6-set-operations.html}
 */ export function union_(aa_nowrap) {
	const a2 = wrap_aa_(aa_nowrap)
	return Array.from(set_union_fn(a2))
}
export { union_ as _union, union_ as _union__a1, union_ as _uniq, union_ as _uniq__a1, }
