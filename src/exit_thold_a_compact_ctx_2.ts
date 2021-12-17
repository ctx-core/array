import { eq, eq_T } from '@ctx-core/function'
import type { compact_a_ctx_I } from './compact_a_ctx_I.js'
import type { thold_a_compact_ctx__T } from './thold_a_compact_ctx__T.js'
type _eq_T<I extends unknown = unknown> = eq_T<I>
/**
 * Returns a function that returns a [compact_a_ctx_I](#compact_a_ctx_I)
 */
export function exit_thold_a_compact_ctx_2<I extends unknown = unknown>(
	eq_ = (eq as _eq_T<I[]>)
):thold_a_compact_ctx__T<I> {
	return ((in_val_a?:I[])=>{
		const idx_a = [] as number[]
		const val_a = [] as I[]
		if (in_val_a) {
			const val_a = in_val_a as I[]
			const val_a_length = val_a.length
			for (let idx = 0; idx < val_a.length; idx++) {
				const val = val_a[idx]
				const next_idx = idx + 1
				const next_val = val_a[next_idx]
				if (
					next_idx === val_a_length
					|| (
						eq_
						? !eq_([val, next_val])
						: val !== next_val
					)
				) {
					idx_a.push(idx)
					val_a.push(val)
				}
			}
		}
		return {
			idx_a,
			val_a,
		} as compact_a_ctx_I<I>
	}) as thold_a_compact_ctx__T<I>
}
export {
	exit_thold_a_compact_ctx_2 as exit_thold_a1_compact_ctx_fn2,
	exit_thold_a_compact_ctx_2 as _exit_thold_a1_compact_ctx_fn,
	exit_thold_a_compact_ctx_2 as _fn__ctx__compact__a1__thold__exit,
}
