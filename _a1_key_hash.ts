import { _wrap_a1, concat } from '@ctx-core/function'
/**
 * Returns a hash of arrays grouped by each key in each `ctx` in `ctx_a1`.
 */
export function _a1_key_hash(ctx_a1_nowrap:any|any[]):any {
	const ctx_a1 = _wrap_a1(ctx_a1_nowrap)
	const a1_key_hash = {}
	for (let i = 0; i < ctx_a1.length; i++) {
		const ctx = ctx_a1[i]
		for (let key in ctx) {
			const value = ctx[key]
			a1_key_hash[key] = concat(
				a1_key_hash[key] || [],
				value
			)
		}
	}
	return a1_key_hash
}
export const _hash__key__a1 = _a1_key_hash
