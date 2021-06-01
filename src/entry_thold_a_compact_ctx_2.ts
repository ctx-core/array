import { eq, eq_T } from '@ctx-core/function'
import type { compact_a_ctx_I } from './compact_a_ctx_I'
import type { thold_a_compact_ctx__T } from './thold_a_compact_ctx__T'
/**
 * Returns a function that returns a [compact_a_ctx_I](#compact_a_ctx_I)
 */
export function entry_thold_a_compact_ctx_2<I extends unknown = unknown>(
	eq_ = (eq as eq_T<I[]>)
):thold_a_compact_ctx__T<I> {
	return (
		(in_val_a?:I[])=>{
			const idx_a = [] as number[]
			const val_a = [] as I[]
			if (in_val_a) {
				const val_a = in_val_a as I[]
				for (let i = 0; i < val_a.length; i++) {
					const val = val_a[i]
					const prev_val = val_a[i - 1]
					if (!i || (eq_ ? !eq_([val, prev_val]) : (val !== prev_val))) {
						idx_a.push(i)
						val_a.push(val)
					}
				}
			}
			return {
				idx_a,
				val_a,
			} as compact_a_ctx_I<I>
		}
	) as thold_a_compact_ctx__T<I>
}
export {
	entry_thold_a_compact_ctx_2 as entry_thold_a1_compact_ctx_fn2,
	entry_thold_a_compact_ctx_2 as _entry_thold_a1_compact_ctx_fn,
	entry_thold_a_compact_ctx_2 as _fn__ctx__compact__a1__thold__entry,
}
