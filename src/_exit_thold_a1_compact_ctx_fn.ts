import { eq, eq_type } from '@ctx-core/function'
import type { compact_a1_ctx_I } from './compact_a1_ctx_I'
import type { thold_a1_compact_ctx_fn_T } from './thold_a1_compact_ctx_fn_T'
/**
 * Returns a function that returns a [compact_a1_ctx_I](#compact_a1_ctx_I)
 */
export function _exit_thold_a1_compact_ctx_fn<I extends unknown = unknown>(
	_eq = (eq as eq_type<I[]>)
) {
	return ((in_val_a1?:I[])=>{
		const idx_a1 = [] as number[]
		const val_a1 = [] as I[]
		if (in_val_a1) {
			const val_a1 = in_val_a1 as I[]
			const val_a1_length = val_a1.length
			for (let idx = 0; idx < val_a1.length; idx++) {
				const val = val_a1[idx]
				const next_idx = idx + 1
				const next_val = val_a1[next_idx]
				if (
					next_idx === val_a1_length
					|| (
						_eq
						? !_eq([val, next_val])
						: val !== next_val
					)
				) {
					idx_a1.push(idx)
					val_a1.push(val)
				}
			}
		}
		return {
			idx_a1,
			val_a1,
		} as compact_a1_ctx_I<I>
	}) as thold_a1_compact_ctx_fn_T<I>
}
export {
	_exit_thold_a1_compact_ctx_fn as _fn__ctx__compact__a1__thold__exit,
}
