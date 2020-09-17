import { eq, eq_type, maybe } from '@ctx-core/function'
import type { compact_a1_ctx_type } from './compact_a1_ctx_type'
import type { thold_a1_compact_ctx_fn_type } from './thold_a1_compact_ctx_fn_type'
/**
 * Returns a function that returns a [compact_a1_ctx_type](#compact_a1_ctx_type)
 */
export function _entry_thold_a1_compact_ctx_fn<I = unknown>(_eq = (eq as eq_type<I>)) {
	return (
		(in_val_a1:maybe<I[]>)=>{
			const idx_a1 = []
			const val_a1 = []
			if (in_val_a1) {
				const val_a1 = in_val_a1 as I[]
				for (let i = 0; i < val_a1.length; i++) {
					const val = val_a1[i]
					const prev_val = val_a1[i - 1]
					if (!i || (_eq ? !_eq([val, prev_val]) : (val !== prev_val))) {
						idx_a1.push(i)
						val_a1.push(val)
					}
				}
			}
			return {
				idx_a1,
				val_a1,
			} as compact_a1_ctx_type<I>
		}
	) as thold_a1_compact_ctx_fn_type<I>
}
export const _fn__ctx__compact__a1__thold__entry = _entry_thold_a1_compact_ctx_fn
