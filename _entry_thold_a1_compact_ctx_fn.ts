import { eq } from '@ctx-core/function'
import { compact_a1_ctx_type } from './compact_a1_ctx_type'
/**
 * Returns a function that returns a [compact_a1_ctx_type](#compact_a1_ctx_type)
 */
export function _entry_thold_a1_compact_ctx_fn(fn__eq = eq) {
	return in_val_a1=>{
		const idx_a1 = []
		const val_a1 = []
		if (in_val_a1) {
			for (let i = 0; i < in_val_a1.length; i++) {
				const val = in_val_a1[i]
				const prev_val = in_val_a1[i - 1]
				if (!i || (fn__eq ? !fn__eq([val, prev_val]) : (val !== prev_val))) {
					idx_a1.push(i)
					val_a1.push(val)
				}
			}
		}
		return {
			idx_a1,
			val_a1,
		} as compact_a1_ctx_type
	}
}
export const _fn__ctx__compact__a1__thold__entry = _entry_thold_a1_compact_ctx_fn
