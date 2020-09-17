import type { compact_a1_ctx_type } from './compact_a1_ctx_type'
/**
 * Returns a [compact_a1_ctx_type](#compact_a1_ctx_type)
 */
export function _compact_a1_ctx<I = unknown>(sparse_a1:I[]) {
	const idx_a1 = [] as number[]
	const val_a1 = [] as I[]
	for (let i = 0; i < sparse_a1.length; i++) {
		const val = sparse_a1[i]
		if (val != undefined) {
			idx_a1.push(i)
			val_a1.push(val)
		}
	}
	return {
		idx_a1,
		val_a1,
	} as compact_a1_ctx_type<I>
}
