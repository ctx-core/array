import { eq } from '@ctx-core/function'
import { compact_a1_ctx_type } from './compact_a1_ctx_type'
/**
 * Returns a function that returns a [compact_a1_ctx_type](#compact_a1_ctx_type)
 */
export function _exit_thold_a1_compact_ctx_fn(fn__eq = eq) {
	return in_val_a1=>{
		const idx_a1 = []
		const val_a1 = []
		if (in_val_a1) {
			const length__a1__val__ = in_val_a1.length
			for (let idx = 0; idx < in_val_a1.length; idx++) {
				const val = in_val_a1[idx]
				const idx__next = idx + 1
				const val__next = in_val_a1[idx__next]
				if (
					idx__next === length__a1__val__
					|| (
						fn__eq
						? !fn__eq([val, val__next])
						: val !== val__next
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
		} as compact_a1_ctx_type
	}
}
export const _fn__ctx__compact__a1__thold__exit = _exit_thold_a1_compact_ctx_fn
