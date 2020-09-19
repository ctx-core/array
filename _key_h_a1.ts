import { _wrap_a1, concat } from '@ctx-core/function'
/**
 * Returns a hash of arrays grouped by each key in each `ctx` in `ctx_a1`.
 */
export function _key_h_a1<I>(ctx_a1_nowrap:I|I[]) {
	const ctx_a1 = _wrap_a1(ctx_a1_nowrap)
	const a1_key_hash = {} as Record<string, I[]>
	for (let i = 0; i < ctx_a1.length; i++) {
		const ctx = ctx_a1[i]
		for (let key in ctx) {
			const value = ctx[key]
			a1_key_hash[key] = concat(a1_key_hash[key] || [], value) as I[]
		}
	}
	return a1_key_hash
}
export const _a1_key_hash = _key_h_a1
export const _hash__key__a1 = _key_h_a1
