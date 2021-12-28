import { wrap_aa_ } from '@ctx-core/function'
import { difference_set_ } from '@ctx-core/set'
/**
 * Returns the _difference of n arrays
 * @see {@link http://www.2ality.com/2015/01/es6-set-operations.html}
 */ export function difference_(aa_nowrap) {
	const aa = wrap_aa_(aa_nowrap)
	return Array.from(difference_set_(aa))
}
export { difference_ as _difference, difference_ as _difference__a1, }
//# sourceMappingURL=difference_.js.map