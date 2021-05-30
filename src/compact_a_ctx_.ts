import type { compact_a_ctx_I } from './compact_a_ctx_I'
/**
 * Returns a [compact_a_ctx_I](#compact_a_ctx_I)
 */
export function compact_a_ctx_<I extends unknown = unknown>(sparse_a: I[]) {
	const idx_a = [] as number[]
	const val_a = [] as I[]
	for (let i = 0; i < sparse_a.length; i++) {
		const val = sparse_a[i]
		if (val != undefined) {
			idx_a.push(i)
			val_a.push(val)
		}
	}
	return {
		idx_a,
		val_a,
	} as compact_a_ctx_I<I>
}
export {
	compact_a_ctx_ as compact_a1_ctx_fn,
	compact_a_ctx_ as _compact_a1_ctx,
}
