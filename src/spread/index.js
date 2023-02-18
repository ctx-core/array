import { wrap_a_ } from '@ctx-core/function'
/** @typedef {import('@ctx-core/function').wrap_a_T}wrap_a_T */
/**
 * Apply the spread operator on `a_unwrap` into `fn`; `fn(...a_unwrap)`
 * @param fn{(...a:wrap_a_T)=>unknown}
 * @param a_unwrap{unknown}
 * @returns {unknown}
 */
export function spread(fn, a_unwrap) {
	const wrap_a = wrap_a_(a_unwrap)
	return fn(...wrap_a)
}
