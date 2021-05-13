import { _wrap_a1, concat } from '@ctx-core/function'
/**
 * Returns a hash of arrays grouped by each key in each `ctx` in `ctx_a1`.
 */
export function _key_h_a1<Val extends object = object>(ctx_a1_nowrap:Val) {
	const ctx_a1 = _wrap_a1<Val>(ctx_a1_nowrap)
	const a1_key_hash:Record<string, Val[]> = {}
	for (let i = 0; i < ctx_a1.length; i++) {
		const ctx = ctx_a1[i]
		for (let key in ctx) {
			const value:Val = ctx[key]
			a1_key_hash[key] = concat(a1_key_hash[key] || [], value) as Val[]
		}
	}
	return a1_key_hash
}
export {
	_key_h_a1 as _a1_key_hash,
	_key_h_a1 as _hash__key__a1,
}
