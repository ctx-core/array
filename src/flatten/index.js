import { wrap_concat } from '@ctx-core/function'
import { isArray } from '@ctx-core/object'
/**
 * Flattens the a & it's children into an a without chunks
 */
export function flatten(a) {
	return a.reduce((previous_val, current_val)=>wrap_concat(previous_val, ...isArray(current_val) ? flatten(current_val) : [
		current_val
	]), [])
}
export function maybe_flatten(in_a, or = null) {
	if (!in_a) return or
	return flatten(in_a)
}
export { flatten as flatten__a1, }
